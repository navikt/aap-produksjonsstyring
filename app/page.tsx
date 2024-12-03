import {
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { TotaloversiktBehandlinger } from 'components/totaloversiktbehandlinger/TotaloversiktBehandlinger';
import { hentKøer } from 'lib/services/oppgaveService';
import { KøOversikt } from 'components/køoversikt/KøOversikt';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling('0');
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(['Førstegangsbehandling']);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);
  const køer = await hentKøer();

  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={<TotaloversiktBehandlinger />}
        minenhet={<></>}
        produktivitet={
          <Behandlingsoversikt
            behandlingerUtvikling={behandlingerUtvikling}
            alderLukkedeSisteSyvDager={gjennomSnittligAlderLukkede}
            behandlingstidPerDag={behandlingstidPerDag}
          />
        }
        oppgaveOversikt={<KøOversikt køer={køer} />}
      />
    </div>
  );
}
