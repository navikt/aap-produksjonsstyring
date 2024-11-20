'use client';

import Plot from 'react-plotly.js';
import { FordelingÅpneBehandlinger } from 'lib/types/types';
interface Props {
  fordelingÅpneBehandlingerPerDag: Array<FordelingÅpneBehandlinger>;
}
export function FordelingÅpneBehandlingerPerDag({ fordelingÅpneBehandlingerPerDag }: Props) {
  const sortertFordeling = fordelingÅpneBehandlingerPerDag.sort((a, b) => a.bøtte - b.bøtte);
  return (
    <Plot
      data={[
        {
          x: sortertFordeling.map((e) => `${e.bøtte}`),
          y: sortertFordeling.map((v) => v.antall),
          type: 'bar',
        },
      ]}
      layout={{
        title: 'Levetid åpne behandlinger',
        yaxis: { title: 'Antall' },
        xaxis: { title: 'Alder(dager)' },
      }}
    />
  );
}
