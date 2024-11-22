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
      layout={{ ...layout, autosize: true, margin: { t: 40, pad: 10 } }}
      useResizeHandler={true}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
