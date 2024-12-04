'use client';

import { BehandlingÅrsakAntallGjennomsnitt } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { Heading, Table, VStack } from '@navikt/ds-react';

interface Props {
  årsakTilBehandling: Array<BehandlingÅrsakAntallGjennomsnitt>;
}
export const ÅrsakTilBehandling = ({ årsakTilBehandling }: Props) => {
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          {'Årsak til behandling'}
        </Heading>
      </VStack>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Årsak</Table.HeaderCell>
            <Table.HeaderCell>Antall</Table.HeaderCell>
            <Table.HeaderCell>Gjennomsnittsalder</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {årsakTilBehandling.toReversed().map((it, i) => (
            <Table.Row key={`rad-${i}`}>
              <Table.DataCell>{it.årsak}</Table.DataCell>
              <Table.DataCell>{it.antall}</Table.DataCell>
              <Table.DataCell>{it.gjennomsnittligAlder}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </PlotWrapper>
  );
};
