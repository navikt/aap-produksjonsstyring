import styles from './page.module.css';
import { hentEnheter, hentKøer } from 'lib/services/oppgaveService';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { TotaloversiktBehandlinger } from 'components/totaloversiktbehandlinger/TotaloversiktBehandlinger';
import { KøOversikt } from 'components/køoversikt/KøOversikt';
import { MinEnhet } from 'components/minenhet/MinEnhet';

export default async function Home() {
  const køer = await hentKøer();
  const enheter = await hentEnheter();
  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={<TotaloversiktBehandlinger />}
        minenhet={<MinEnhet enheter={enheter}></MinEnhet>}
        produktivitet={<></>}
        oppgaveOversikt={<KøOversikt køer={køer} />}
      />
    </div>
  );
}
