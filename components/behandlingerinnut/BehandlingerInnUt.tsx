'use client';

import Plot from 'react-plotly.js';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { smallPlotSize } from 'lib/utils/plotly';
import { BehandlingEndringerPerDag } from 'lib/types/types';
import { HeadingAndLargeText } from 'components/headingandlargetext/HeadingAndLargeText';

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
