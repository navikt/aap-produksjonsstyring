'use client';

import Plot from 'react-plotly.js';

export function MyPlot({ x, y }: { x: Date[]; y: number[] }) {
  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ]}
      layout={{ title: 'Behandlingstid', yaxis: { title: 'Minutter' } }}
    />
  );
}
