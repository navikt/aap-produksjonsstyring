import Plot from 'react-plotly.js';
import { Data, Layout } from 'plotly.js';
interface ResponsivePlotProps {
  data: Data[];
  layout: Partial<Layout>;
}
export const ResponsivePlot = ({ data, layout }: ResponsivePlotProps) => {
  return (
    <Plot
      data={data}
      layout={{
        ...layout,
        autosize: true,
        margin: { t: 40, pad: 10 },
        colorway: ['#CCE1FF', '#99C4DD', '#FFC166', '#66CBEC', '#99DEAD', '#C0B2D2'],
      }}
      useResizeHandler={true}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
