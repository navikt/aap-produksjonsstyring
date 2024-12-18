import styles from './page.module.css';
import { hentEnheter, hentKøer } from 'lib/services/oppgaveService';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { TotaloversiktBehandlinger } from 'components/totaloversiktbehandlinger/TotaloversiktBehandlinger';
import { KøOversikt } from 'components/køoversikt/KøOversikt';

export default async function Home() {
  const køer = await hentKøer();
  const enheter = await hentEnheter();
  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={<TotaloversiktBehandlinger />}
        minenhet={<></>}
        produktivitet={<></>}
        oppgaveOversikt={<KøOversikt køer={køer} />}
        enheter={enheter}
      />
    </div>
  );
}
