import { hentBehandlingsTidPerDag } from 'lib/services/statistikkService';
import styles from './page.module.css';
import { MyPlot } from './Plot';

export default async function Home() {
  const res = await hentBehandlingsTidPerDag(null);
  console.log(res);
  return (
    <div className={styles.page}>
      <h1>Produksjonsstyring</h1>
      <pre> {JSON.stringify(res, null, ' ')}</pre>
      <MyPlot x={res.map((t) => new Date(t.dag))} y={res.map((t) => t.snitt)} />
    </div>
  );
}
