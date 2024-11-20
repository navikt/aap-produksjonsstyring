import {
  hentAntallÅpneBehandlinger,
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentFordelingÅpneBehandlinger,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { ApneOppgaver } from 'components/åpneoppgaver/ÅpneOppgaver';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { HStack } from '@navikt/ds-react';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(null);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);
  const antallÅpneBehandlinger = await hentAntallÅpneBehandlinger();
  const fordelingÅpneBehandlinger = await hentFordelingÅpneBehandlinger();

  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={
          <HStack gap={'10'}>
            <ApneBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger} />
            <BehandlingerInnUt data={behandlingerUtvikling[0]} />
            <FordelingÅpneBehandlingerPerDag fordelingÅpneBehandlingerPerDag={fordelingÅpneBehandlinger} />
          </HStack>
        }
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
