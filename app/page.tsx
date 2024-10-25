import { hentBehandlingsTidPerDag } from 'lib/services/statistikkService';
import styles from './page.module.css';

export default async function Home() {
  const res = await hentBehandlingsTidPerDag(null);
  console.log(res);
  return (
    <div className={styles.page}>
      <h1>Produksjonsstyring</h1>
      <pre> {JSON.stringify(res, null, ' ')}</pre>
    </div>
  );
}
