'use client';

import { AvklaringsbehovKode, Oppgave } from 'lib/types/types';
import { Button, Dropdown, Heading, HStack, Loader, SortState, Table } from '@navikt/ds-react';
import { formaterDato } from 'lib/utils/date';
import { mapBehovskodeTilBehovstype } from 'lib/utils/oversettelser';
import { buildSaksbehandlingsURL } from 'lib/utils/request';
import { useMemo, useState } from 'react';
import { ComboboxControlled } from 'components/comboboxcontrolled/ComboboxControlled';
import { oppgaveBehandlingstyper } from 'lib/utils/behandlingstyper';
import { oppgaveAvklaringsbehov } from 'lib/utils/avklaringsbehov';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { revalidateMineOppgaver } from 'lib/actions/actions';
import { avreserverOppgaveClient, plukkOppgaveClient } from 'lib/services/client';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';

interface Props {
  heading?: string;
  oppgaver: Oppgave[];
  showBehandleKnapp?: boolean;
  showDropdownActions?: boolean;
  showSortAndFilters?: boolean;
}
interface ScopedSortState extends SortState {
  orderBy: keyof Oppgave;
}
export const OppgaveTabell = ({
  oppgaver,
  heading,
  showDropdownActions = false,
  showSortAndFilters = false,
  showBehandleKnapp = false,
}: Props) => {
  const [sort, setSort] = useState<ScopedSortState | undefined>();
  const [loadingID, setLoadingID] = useState<number | null>(null);
  const [selectedBehandlingstyper, setSelectedBehandlingstyper] = useState<ComboboxOption[]>([]);
  const [selectedAvklaringsbehov, setSelectedAvklaringsbehov] = useState<ComboboxOption[]>([]);
  const sortedOppgaver = oppgaver.slice().sort((a, b) => {
    if (sort) {
      return sort.direction === 'ascending' ? comparator(b, a, sort.orderBy) : comparator(a, b, sort.orderBy);
    }
    return 1;
  });
  const behandlingstypeFilter = (oppgave: Oppgave) => {
    return selectedBehandlingstyper.length > 0
      ? selectedBehandlingstyper.find((option) => option.value === oppgave.behandlingstype)
      : true;
  };
  const avklaringsbehovFilter = (oppgave: Oppgave) =>
    selectedAvklaringsbehov.length > 0
      ? selectedAvklaringsbehov.find((option) => option.value === oppgave.avklaringsbehovKode)
      : true;
  const filtrerteOppgaver = useMemo(
    () => sortedOppgaver.filter((oppgave) => behandlingstypeFilter(oppgave) && avklaringsbehovFilter(oppgave)),
    [selectedBehandlingstyper, selectedAvklaringsbehov, sortedOppgaver]
  );
  async function frigiOppgave(oppgave: Oppgave) {
    if (oppgave.id) setLoadingID(oppgave.id);
    try {
      await avreserverOppgaveClient(oppgave);
    } catch (err) {
      setLoadingID(null);
    }
    setLoadingID(null);
  }

  const handleSort = (sortKey: ScopedSortState['orderBy']) => {
    setSort(
      sort && sortKey === sort.orderBy && sort.direction === 'descending'
        ? undefined
        : {
            orderBy: sortKey,
            direction: sort && sortKey === sort.orderBy && sort.direction === 'ascending' ? 'descending' : 'ascending',
          }
    );
  };

  function comparator<T>(a: T, b: T, orderBy: keyof T): number {
    if (b[orderBy] == null || b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  async function plukkOgGåTilOppgave(oppgave: Oppgave) {
    console.log(oppgave);
    if (oppgave.id !== undefined && oppgave.id !== null && oppgave.versjon >= 0) {
      const nesteOppgave = await plukkOppgaveClient(oppgave.id, oppgave.versjon);
      if (nesteOppgave) {
        console.log('plukket oppgave:', nesteOppgave);
        window.location.assign(buildSaksbehandlingsURL(nesteOppgave.avklaringsbehovReferanse));
      }
    }
  }

  return (
    <div>
      {heading && (
        <Heading size={'medium'} level={'2'} spacing>
          {heading}
        </Heading>
      )}
      <Table
        size={'small'}
        zebraStripes
        sort={sort}
        onSortChange={(sortKey) => handleSort(sortKey as ScopedSortState['orderBy'])}
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader sortKey={'saksnummer'} sortable={showSortAndFilters}>
              SaksID
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey={'journalpostId'} sortable={showSortAndFilters}>
              JournalpostID
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey={'personNavn'} sortable={showSortAndFilters}>
              Navn
            </Table.ColumnHeader>
            <Table.HeaderCell>
              {showSortAndFilters ? (
                <ComboboxControlled
                  label={'Behandlingstype'}
                  options={oppgaveBehandlingstyper}
                  onToggleListener={(selectedOptions) => setSelectedBehandlingstyper(selectedOptions)}
                />
              ) : (
                'Behandlingstype'
              )}
            </Table.HeaderCell>
            <Table.HeaderCell>
              {showSortAndFilters ? (
                <ComboboxControlled
                  label={'Avklaringsbehov'}
                  options={oppgaveAvklaringsbehov}
                  onToggleListener={(selectedOptions) => setSelectedAvklaringsbehov(selectedOptions)}
                />
              ) : (
                'Avklaringsbehov'
              )}
            </Table.HeaderCell>
            <Table.ColumnHeader sortKey={'opprettetTidspunkt'} sortable={showSortAndFilters}>
              Dato opprettet
            </Table.ColumnHeader>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filtrerteOppgaver.map((oppgave, i) => (
            <Table.Row key={`oppgave-${i}`}>
              <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
              <Table.DataCell>{`${oppgave.journalpostId}`}</Table.DataCell>
              <Table.DataCell>{`${oppgave.personNavn}`}</Table.DataCell>
              <Table.DataCell>{oppgave.behandlingstype}</Table.DataCell>
              <Table.DataCell>
                {mapBehovskodeTilBehovstype(oppgave.avklaringsbehovKode as AvklaringsbehovKode)}
              </Table.DataCell>
              <Table.DataCell>{formaterDato(oppgave.opprettetTidspunkt)}</Table.DataCell>
              <Table.DataCell>
                <HStack gap={'1'}>
                  {showBehandleKnapp && (
                    <Button type={'button'} size={'small'} onClick={() => plukkOgGåTilOppgave(oppgave)}>
                      Behandle
                    </Button>
                  )}
                  {showDropdownActions && (
                    <Dropdown>
                      <Button as={Dropdown.Toggle} size="small" variant="primary">
                        <ChevronDownIcon title="Meny" />
                      </Button>
                      <Dropdown.Menu>
                        <Dropdown.Menu.GroupedList>
                          <Dropdown.Menu.GroupedList.Item
                            onClick={async () => {
                              await frigiOppgave(oppgave);
                              revalidateMineOppgaver();
                            }}
                          >
                            Frigi oppgave
                            {loadingID === oppgave.id && <Loader />}
                          </Dropdown.Menu.GroupedList.Item>
                        </Dropdown.Menu.GroupedList>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </HStack>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
