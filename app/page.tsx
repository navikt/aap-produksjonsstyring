import {
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { ApneOppgaver } from 'components/åpneoppgaver/ÅpneOppgaver';
import { HStack } from '@navikt/ds-react';
import { TotaloversiktBehandlinger } from 'components/totaloversiktbehandlinger/TotaloversiktBehandlinger';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(['Førstegangsbehandling']);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);

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
        oppgaver={
          <HStack gap={'10'}>
            <ApneOppgaver />
          </HStack>
        }
      />
    </div>
  );
}
