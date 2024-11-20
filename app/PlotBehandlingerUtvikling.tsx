'use client';

import Plot from 'react-plotly.js';
import { BehandlingEndringerPerDag } from 'lib/types/types';
interface Props {
  behandlingerUtvikling: Array<BehandlingEndringerPerDag>;
}
export function PlotBehandlingerUtvikling({ behandlingerUtvikling }: Props) {
  return (
    <Plot
      data={[
        {
          x: behandlingerUtvikling.map((e) => e.dato),
          y: behandlingerUtvikling.map((v) => v.nye),
          type: 'bar',
          marker: { color: 'green' },
          name: 'Nye',
        },
        {
          x: behandlingerUtvikling.map((e) => e.dato),
          y: behandlingerUtvikling.map((v) => v.totalt),
          type: 'bar',
          marker: { color: 'blue' },
          name: 'Åpne',
        },
        {
          x: behandlingerUtvikling.map((e) => e.dato),
          y: behandlingerUtvikling.map((v) => v.avsluttede),
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
