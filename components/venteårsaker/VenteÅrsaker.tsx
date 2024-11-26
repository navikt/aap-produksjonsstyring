'use client';

import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { BodyShort, Heading, Table, VStack } from '@navikt/ds-react';
import { VenteÅrsakOgGjennomsnitt } from 'lib/types/types';
interface Props {
  venteÅrsaker: Array<VenteÅrsakOgGjennomsnitt>;
}
export const VenteÅrsaker = ({ venteÅrsaker }: Props) => {
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          {'Venteårsaker'}
        </Heading>
        <BodyShort size={'large'}>{'Totalt antall åpne behandlinger'}</BodyShort>
      </VStack>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Årsak</Table.HeaderCell>
            <Table.HeaderCell>Antall</Table.HeaderCell>
            <Table.HeaderCell>Gj.snitt ventetid</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {venteÅrsaker.map((it, i) => (
            <Table.Row key={`rad-${i}`}>
              <Table.DataCell>{it.årsak}</Table.DataCell>
              <Table.DataCell>{it.antall}</Table.DataCell>
              <Table.DataCell>{(it.gjennomsnittligAlder / (60 * 60 * 24)).toFixed(1)} dager</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </PlotWrapper>
  );
};
