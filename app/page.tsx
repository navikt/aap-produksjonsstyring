import {
  hentAntallÅoneBehandlinger,
  hentAntallÅpneBehandlingerPerAvklaringsbehov,
  hentBehandlingsTidPerDag,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { MyPlot } from './Plot';

export default async function Home() {
  const res = await hentBehandlingsTidPerDag(null);
  const åpneBehandlinger = await hentAntallÅoneBehandlinger();
  const perAvklaringsbehov = await hentAntallÅpneBehandlingerPerAvklaringsbehov();

  console.log(res);
  return (
    <div className={styles.page}>
      <h1>Produksjonsstyring</h1>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: '5px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>Åpne behandlinger nå</h2>
          </div>
          <div style={{ textAlign: 'center' }}>{åpneBehandlinger}</div>
        </div>
        <div>
          <h2> Åpne behandlinger per avklaringsbehov</h2>
          <ul>
            {perAvklaringsbehov.map((behov) => (
              <li key={behov.behov}>{behov.antall}</li>
            ))}
          </ul>
        </div>
        <div>
          <MyPlot x={res.map((t) => new Date(t.dag))} y={res.map((t) => t.snitt / 3600)} />
        </div>
      </div>
    </div>
  );
}
