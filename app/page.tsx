import { hentBehandlingerUtvikling } from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();

  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny produktivitet={<Behandlingsoversikt behandlingerUtvikling={behandlingerUtvikling} />} />
    </div>
  );
}
