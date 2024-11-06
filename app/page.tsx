import {
  hentAntallÅpneBehandlinger,
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { AntallOppgaver } from 'components/antalloppgaver/AntallOppgaver';
import { ÅpneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { VStack } from '@navikt/ds-react';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(null);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);
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
          <VStack gap={'10'}>
            <ÅpneBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger} />
            <AntallOppgaver />
          </VStack>
        }
      />
    </div>
  );
}
