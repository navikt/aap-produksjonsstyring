'use client';

import { Heading, VStack } from '@navikt/ds-react';
import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import Plot from 'react-plotly.js';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';

interface Props {
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const ApneBehandlinger = ({ åpneOgGjennomsnitt }: Props) => {
  const totaltAntallBehandlinger = åpneOgGjennomsnitt.antallÅpne;
  return (
    <PlotWrapper>
      <VStack align={'center'}>
        <Heading level={'3'} size={'small'}>
          Status åpne behandlinger
        </Heading>
        <Heading size={'medium'} as={'p'}>
          {`${totaltAntallBehandlinger}`}
        </Heading>
      </VStack>
      <Plot
        data={[
          {
            y: [åpneOgGjennomsnitt.antallÅpne, 0],
            x: ['Åpne behandlinger', 'På vent(finnes ikke enda)'],
            type: 'bar',
          },
        ]}
        layout={{
          title: 'Totalt antall åpne behandlinger',
          yaxis: { title: 'Antall' },
          ...smallPlotSize,
        }}
      />
    </PlotWrapper>
  );
};
