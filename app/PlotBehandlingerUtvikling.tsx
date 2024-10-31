'use client';

import Plot from 'react-plotly.js';
import { AntallBehandlinger } from 'lib/types/types';
interface Props {
  behandlingerUtvikling: Record<string, AntallBehandlinger>;
}
export function PlotBehandlingerUtvikling({ behandlingerUtvikling }: Props) {
  return (
    <Plot
      data={[
        {
          x: Object.keys(behandlingerUtvikling),
          y: Object.values(behandlingerUtvikling).map((v) => v.nye),
          type: 'bar',
          marker: { color: 'green' },
          name: 'Nye',
        },
        {
          x: Object.keys(behandlingerUtvikling),
          y: Object.values(behandlingerUtvikling).map((v) => v.totalt),
          type: 'bar',
          marker: { color: 'blue' },
          name: 'Åpne',
        },
        {
          x: Object.keys(behandlingerUtvikling),
          y: Object.values(behandlingerUtvikling).map((v) => v.avsluttede),
          type: 'bar',
          marker: { color: 'red' },
          name: 'Avsluttede',
        },
      ]}
      layout={{
        title: 'Nye og avsluttede behandlinger',
        yaxis: { title: 'Antall' },
        xaxis: { title: 'Dag' },
        barmode: 'group',
      }}
    />
  );
}
