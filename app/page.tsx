import {
  hentAntallÅpneBehandlinger,
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { hentAntallOppgaver } from 'lib/services/oppgaveService';
import { AntallOppgaver } from 'components/antalloppgaver/AntallOppgaver';
import { ÅpneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(null);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);
  const antallOppgaver = await hentAntallOppgaver('FØRSTEGANGSBEHANDLING');
  const antallÅpneBehandlinger = await hentAntallÅpneBehandlinger();

  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        produktivitet={
          <Behandlingsoversikt
            behandlingerUtvikling={behandlingerUtvikling}
            alderLukkedeSisteSyvDager={gjennomSnittligAlderLukkede}
            behandlingstidPerDag={behandlingstidPerDag}
          />
        }
        oppgaver={
          <div>
            <ÅpneBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger} />
            <AntallOppgaver oppgaver={antallOppgaver} />
          </div>
        }
      />
    </div>
  );
}
