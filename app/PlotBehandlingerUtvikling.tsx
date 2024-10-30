'use client';

import Plot from 'react-plotly.js';
import { AntallBehandlinger } from '../lib/types/types';

export function PlotBehandlingerUtvikling({ antallBehandlinger }: { antallBehandlinger:Record<string, AntallBehandlinger> }) {
  return (
    <Plot
      data={[
        {
          x: Object.keys(antallBehandlinger),
          y: Object.values(antallBehandlinger).map(v => v.nye),
          type: 'bar',
          marker: { color: 'green' },
          name: 'Nye'
        },
        {
          x: Object.keys(antallBehandlinger),
          y: Object.values(antallBehandlinger).map(v => v.avsluttede),
          type: 'bar',
          marker: { color: 'red' },
          name: 'Avsluttede'
        }
      ]}
      layout={{ title: 'Nye og avsluttede behandlinger', yaxis: { title: 'Antall' }, xaxis: { title: 'Dag' }, barmode: 'group' }}
    />
  );
}
