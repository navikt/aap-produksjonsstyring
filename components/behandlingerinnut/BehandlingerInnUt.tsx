'use client';

import Plot from 'react-plotly.js';
import { Heading, VStack } from '@navikt/ds-react';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';
import { BehandlingEndringerPerDag } from 'lib/types/types';

interface Props {
  data: BehandlingEndringerPerDag;
}
export const BehandlingerInnUt = ({ data }: Props) => {
  const dataUtenTotal = { nye: data.nye, avsluttede: data.avsluttede };
  const x = Object.keys(dataUtenTotal);
  const y = Object.values(dataUtenTotal);
  const sumInnUt = dataUtenTotal.nye - dataUtenTotal.avsluttede;
  return (
    <PlotWrapper>
      <VStack align={'center'}>
        <Heading level={'3'} size={'small'}>
          Inngang/Utgang
        </Heading>
        <Heading size={'medium'} as={'p'}>
          {sumInnUt >= 0 ? '+ ' : '- '}
          {`${sumInnUt}`}
        </Heading>
      </VStack>
      <Plot
        data={[
          {
            x,
            y,
            type: 'bar',
          },
        ]}
        layout={{
          title: 'Endring i åpne behandlinger i perioden',
          yaxis: { title: 'Antall' },
          ...smallPlotSize,
        }}
      />
    </PlotWrapper>
  );
};
