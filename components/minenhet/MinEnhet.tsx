'use client';

import { HStack, VStack } from '@navikt/ds-react';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';
import { FordelingLukkedeBehandlingerPerDag } from 'components/fordelinglukkedebehandlingerperdag/FordelingLukkedeBehandlingerPerDag';
import { VenteÅrsaker } from 'components/venteårsaker/VenteÅrsaker';
import { BehandlingerPerSteggruppe } from 'components/behandlingerpersteggruppe/BehandlingerPerSteggruppe';
import { useContext, useMemo } from 'react';
import { statistikkQueryparams } from 'lib/utils/request';
import useSWR from 'swr';
import {
  antallÅpneBehandlingerPerBehandlingstypeClient,
  behandlingerPerSteggruppeClient,
  behandlingerUtviklingClient,
  fordelingLukkedeBehandlingerClient,
  fordelingÅpneBehandlingerClient,
  venteÅrsakerClient,
  årsakTilBehandlingClient,
} from 'lib/services/client';
import { TypeBehandlinger } from 'components/typebehandlinger/TypeBehandlinger';
import { ÅrsakTilBehandling } from 'components/årsaktilbehandling/ÅrsakTilBehandling';
import { AlleFiltereContext } from 'components/allefiltereprovider/AlleFiltereProvider';
import { ValgteEnheterContext } from 'components/valgteenheterprovider/ValgteEnheterProvider';

export const MinEnhet = () => {
  const valgteEnheter = useContext(ValgteEnheterContext);
  const alleFiltere = useContext(AlleFiltereContext);
  const behandlingstyperQuery = useMemo(
    () =>
      statistikkQueryparams({
        behandlingstyper: alleFiltere.behandlingstyper,
        enheter: valgteEnheter,
      }),
    [alleFiltere, valgteEnheter]
  );

  const antallÅpneBehandlinger = useSWR(
    `/api/statistikk/apne-behandlinger?${behandlingstyperQuery}`,
    antallÅpneBehandlingerPerBehandlingstypeClient
  );
  const behandlingerUtvikling = useSWR(
    `/api/statistikk/behandlinger/utvikling?antallDager=${0}&${behandlingstyperQuery}`,
    behandlingerUtviklingClient
  );
  const fordelingÅpneBehandlinger = useSWR(
    `/api/statistikk/behandlinger/fordeling-apne-behandlinger?${behandlingstyperQuery}`,
    fordelingÅpneBehandlingerClient
  );
  const fordelingLukkedeBehandlinger = useSWR(
    `/api/statistikk/behandlinger/fordeling-lukkede-behandlinger?${behandlingstyperQuery}`,
    fordelingLukkedeBehandlingerClient
  );
  const venteÅrsaker = useSWR(`/api/statistikk/behandlinger/pa-vent?${behandlingstyperQuery}`, venteÅrsakerClient);
  const antallPåVent = venteÅrsaker.data?.map((årsak) => årsak.antall).reduce((acc, curr) => acc + curr, 0);
  const behandlingerPerSteggruppe = useSWR(
    `/api/statistikk/behandling-per-steggruppe?${behandlingstyperQuery}`,
    behandlingerPerSteggruppeClient
  );
  const årsakerTilBehandling = useSWR(
    `/api/statistikk/behandlinger/arsak-til-behandling?${behandlingstyperQuery}`,
    årsakTilBehandlingClient
  );
  return (
    <VStack padding={'5'} gap={'5'}>
      <HStack gap={'4'}>
        {!behandlingerUtvikling.error && <BehandlingerInnUt behandlingerEndringer={behandlingerUtvikling.data || []} />}
        {!antallÅpneBehandlinger.error && (
          <ApneBehandlinger antallPåVent={antallPåVent} åpneOgGjennomsnitt={antallÅpneBehandlinger.data || []} />
        )}
        {!antallÅpneBehandlinger.error && <TypeBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger.data || []} />}
        {!fordelingÅpneBehandlinger.error && (
          <FordelingÅpneBehandlingerPerDag fordelingÅpneBehandlingerPerDag={fordelingÅpneBehandlinger.data || []} />
        )}
        {!fordelingLukkedeBehandlinger.error && (
          <FordelingLukkedeBehandlingerPerDag fordelingLukkedeBehandlinger={fordelingLukkedeBehandlinger.data || []} />
        )}
        {!venteÅrsaker.error && <VenteÅrsaker venteÅrsaker={venteÅrsaker.data || []} />}
        {!behandlingerPerSteggruppe.error && <BehandlingerPerSteggruppe data={behandlingerPerSteggruppe.data || []} />}
        {!årsakerTilBehandling.error && <ÅrsakTilBehandling årsakTilBehandling={årsakerTilBehandling.data || []} />}
      </HStack>
    </VStack>
  );
};
