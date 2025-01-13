'use client';

import { AvklaringsbehovKode, Oppgave } from 'lib/types/types';
import { Button, Heading, HStack, Table } from '@navikt/ds-react';
import { formaterDato } from 'lib/utils/date';
import { mapBehovskodeTilBehovstype } from 'lib/utils/oversettelser';
import { buildSaksbehandlingsURL } from 'lib/utils/request';

interface Props {
  heading?: string;
  oppgaver: Oppgave[];
}
export const OppgaveTabell = ({ oppgaver, heading }: Props) => {
  if (!oppgaver?.length) {
    return null;
  }
  function redirectTilOppgave(oppgave: Oppgave) {
    if (oppgave) {
      window.location.assign(buildSaksbehandlingsURL(oppgave));
    }
  }
  return (
    <div>
      {heading && (
        <Heading size={'medium'} level={'2'} spacing>
          {heading}
        </Heading>
      )}
      <Table size={'small'} zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SaksID</Table.HeaderCell>
            <Table.HeaderCell>Navn</Table.HeaderCell>
            <Table.HeaderCell>Type behandling</Table.HeaderCell>
            <Table.HeaderCell>Avklaringsbehov</Table.HeaderCell>
            <Table.HeaderCell>Dato opprettet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map((oppgave, i) => (
            <Table.Row key={`oppgave-${i}`}>
              <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
              <Table.DataCell>{`${oppgave.personNavn}`}</Table.DataCell>
              <Table.DataCell>{oppgave.behandlingstype}</Table.DataCell>
              <Table.DataCell>
                {mapBehovskodeTilBehovstype(oppgave.avklaringsbehovKode as AvklaringsbehovKode)}
              </Table.DataCell>
              <Table.DataCell>{formaterDato(oppgave.opprettetTidspunkt)}</Table.DataCell>
              {process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' && (
                <Table.DataCell>
                  <HStack gap={'1'}>
                    <Button type={'button'} size={'small'} onClick={() => redirectTilOppgave(oppgave)}>
                      Behandle
                    </Button>
                  </HStack>
                </Table.DataCell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
