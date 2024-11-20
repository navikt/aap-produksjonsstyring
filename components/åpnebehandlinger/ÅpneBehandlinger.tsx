'use client';

import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import Plot from 'react-plotly.js';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';
import { HeadingAndLargeText } from 'components/headingandlargetext/HeadingAndLargeText';

interface Props {
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const ApneBehandlinger = ({ åpneOgGjennomsnitt }: Props) => {
  const totaltAntallBehandlinger = åpneOgGjennomsnitt.antallÅpne;
  return (
    <PlotWrapper>
      <HeadingAndLargeText heading={'Status åpne behandlinger'} text={`${totaltAntallBehandlinger}`} />
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
