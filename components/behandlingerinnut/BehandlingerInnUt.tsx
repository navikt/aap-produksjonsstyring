'use client';

import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { BehandlingEndringerPerDag } from 'lib/types/types';
import { HeadingAndLargeText } from 'components/headingandlargetext/HeadingAndLargeText';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';

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
      <HeadingAndLargeText heading={'Inngang / Utgang'} text={`${sumInnUt >= 0 ? '+ ' : '- '}${sumInnUt}`} />
      <ResponsivePlot
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
        }}
      />
    </PlotWrapper>
  );
};
