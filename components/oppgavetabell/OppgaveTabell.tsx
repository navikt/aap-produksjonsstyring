'use client';

import { AvklaringsbehovKode, Oppgave } from 'lib/types/types';
import { Table } from '@navikt/ds-react';
import { mapBehovskodeTilBehovstype } from 'lib/utils/oversettelser';
import { formaterDato } from 'lib/utils/date';

interface Props {
  oppgaver: Array<Oppgave>;
}
export const OppgaveTabell = ({ oppgaver }: Props) => {
  return (
    <Table size={'small'} zebraStripes>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>SaksID</Table.HeaderCell>
          <Table.HeaderCell>Type behandling</Table.HeaderCell>
          <Table.HeaderCell>Avklaringsbehov</Table.HeaderCell>
          <Table.HeaderCell>Dato opprettet</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {oppgaver.map((oppgave, i) => (
          <Table.Row key={`oppgave-${i}`}>
            <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
            <Table.DataCell>{oppgave.behandlingstype}</Table.DataCell>
            <Table.DataCell>
              {mapBehovskodeTilBehovstype(oppgave.avklaringsbehovKode as AvklaringsbehovKode)}
            </Table.DataCell>
            <Table.DataCell>{formaterDato(oppgave.opprettetTidspunkt)}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
