import {
  hentAntallBehandlingerPerSteggruppe,
  hentAntallÅpneBehandlinger,
  hentBehandlingerUtvikling,
  hentBehandlingsTidPerDag,
  hentFordelingLukkedeBehandlinger,
  hentFordelingÅpneBehandlinger,
  hentGjennomsnittligAlderLukkedeBehandlingerSisteDager,
  hentVenteÅrsakerForBehandlingerPåVent,
} from 'lib/services/statistikkService';
import styles from './page.module.css';
import { Behandlingsoversikt } from 'components/behandlingsoversikt/Behandlingsoversikt';
import { Produksjonsstyringsmeny } from 'components/produksjonsstyringsmeny/Produksjonsstyringsmeny';
import { ApneOppgaver } from 'components/åpneoppgaver/ÅpneOppgaver';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';
import { FordelingLukkedeBehandlingerPerDag } from 'components/fordelinglukkedebehandlingerperdag/FordelingLukkedeBehandlingerPerDag';
import { VenteÅrsaker } from 'components/venteårsaker/VenteÅrsaker';
import { BehandlingerPerSteggruppe } from 'components/behandlingerpersteggruppe/BehandlingerPerSteggruppe';

export default async function Home() {
  const behandlingerUtvikling = await hentBehandlingerUtvikling();
  const behandlingstidPerDag = await hentBehandlingsTidPerDag(null);
  const gjennomSnittligAlderLukkede = await hentGjennomsnittligAlderLukkedeBehandlingerSisteDager(7);
  const antallÅpneBehandlinger = await hentAntallÅpneBehandlinger();
  const fordelingÅpneBehandlinger = await hentFordelingÅpneBehandlinger('DAG', 7, 1);
  const fordelingLukkedeBehandlinger = await hentFordelingLukkedeBehandlinger('DAG', 7, 1);
  const venteÅrsaker = await hentVenteÅrsakerForBehandlingerPåVent();
  const antallBehandlingerPerSteggruppe = await hentAntallBehandlingerPerSteggruppe();

  return (
    <div className={styles.page}>
      <Produksjonsstyringsmeny
        totaloversikt={
          <VStack padding={'5'}>
            <Heading spacing level={'2'} size={'large'}>
              Førstegangsbehandling
            </Heading>
            <HStack gap={'4'}>
              <ApneBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger} />
              <BehandlingerInnUt data={behandlingerUtvikling[0]} />
              <FordelingÅpneBehandlingerPerDag fordelingÅpneBehandlingerPerDag={fordelingÅpneBehandlinger} />
              <FordelingLukkedeBehandlingerPerDag fordelingLukkedeBehandlinger={fordelingLukkedeBehandlinger} />
              <VenteÅrsaker venteÅrsaker={venteÅrsaker} />
              <BehandlingerPerSteggruppe data={antallBehandlingerPerSteggruppe} />
            </HStack>
          </VStack>
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
