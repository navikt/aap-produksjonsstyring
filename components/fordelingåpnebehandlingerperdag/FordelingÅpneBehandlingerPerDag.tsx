'use client';

import Plot from 'react-plotly.js';
import { FordelingÅpneBehandlinger } from 'lib/types/types';
import { Heading, VStack } from '@navikt/ds-react';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';
interface Props {
  fordelingÅpneBehandlingerPerDag: Array<FordelingÅpneBehandlinger>;
}
export function FordelingÅpneBehandlingerPerDag({ fordelingÅpneBehandlingerPerDag }: Props) {
  const sortertFordeling = fordelingÅpneBehandlingerPerDag.sort((a, b) => a.bøtte - b.bøtte);
  return (
    <PlotWrapper>
      <VStack align={'center'}>
        <Heading level={'3'} size={'small'}>
          Levetid åpne behandlinger
        </Heading>
        <Plot
          data={[
            {
              x: sortertFordeling.map((e) => `${e.bøtte}`),
              y: sortertFordeling.map((v) => v.antall),
              type: 'bar',
            },
          ]}
          layout={{
            yaxis: { title: 'Antall' },
            xaxis: { title: 'Alder(dager)' },
            ...smallPlotSize,
            margin: {
              t: 20,
              b: 40,
            },
          }}
        />
      </VStack>
    </PlotWrapper>
  );
}
