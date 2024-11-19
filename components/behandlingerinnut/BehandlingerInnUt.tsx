'use client';

import Plot from 'react-plotly.js';
import { AntallBehandlinger } from 'lib/types/types';
import { Heading, VStack } from '@navikt/ds-react';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';

interface Props {
  data: Record<string, AntallBehandlinger>;
}
export const BehandlingerInnUt = ({ data }: Props) => {
  const key = Object.keys(data)[0];
  const dataUtenTotal = { nye: data[key].nye, avsluttede: data[key].avsluttede };
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
