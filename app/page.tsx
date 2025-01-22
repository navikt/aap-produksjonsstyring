import styles from './page.module.css';
import { hentKøer } from 'lib/services/oppgaveService';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { TotaloversiktBehandlinger } from 'components/totaloversiktbehandlinger/TotaloversiktBehandlinger';
import { KøOversikt } from 'components/oppgave/køoversikt/KøOversikt';
import { MinEnhet } from 'components/minenhet/MinEnhet';

export default async function Home() {
  const køer = await hentKøer();
  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={<TotaloversiktBehandlinger />}
        minenhet={<MinEnhet />}
        produktivitet={<></>}
        oppgaveOversikt={<KøOversikt køer={køer} />}
      />
    </div>
  );
}
