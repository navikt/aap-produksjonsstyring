'use client';

import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { HeadingAndLargeText } from 'components/headingandlargetext/HeadingAndLargeText';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';

interface Props {
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const ApneBehandlinger = ({ åpneOgGjennomsnitt }: Props) => {
  const totaltAntallBehandlinger = åpneOgGjennomsnitt.antallÅpne;
  return (
    <PlotWrapper>
      <HeadingAndLargeText heading={'Status åpne behandlinger'} text={`${totaltAntallBehandlinger}`} />
      <ResponsivePlot
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
        }}
      />
    </PlotWrapper>
  );
};
