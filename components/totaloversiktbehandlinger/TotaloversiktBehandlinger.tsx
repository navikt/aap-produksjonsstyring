'use client';

import { Heading, HGrid, HStack, VStack } from '@navikt/ds-react';
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
import { FilterSamling } from 'components/filtersamling/FilterSamling';

export const TotaloversiktBehandlinger = () => {
  const alleFiltere = useContext(AlleFiltereContext);
  const behandlingstyperQuery = useMemo(
    () => statistikkQueryparams({ behandlingstyper: alleFiltere.behandlingstyper }),
    [alleFiltere]
  );

  const antallÅpneBehandlinger = useSWR(
    `/oppgave/api/statistikk/apne-behandlinger?${behandlingstyperQuery}`,
    antallÅpneBehandlingerPerBehandlingstypeClient
  ).data;
  const behandlingerUtvikling = useSWR(
    `/oppgave/api/statistikk/behandlinger/utvikling?antallDager=${0}&${behandlingstyperQuery}`,
    behandlingerUtviklingClient
  ).data;
  const fordelingÅpneBehandlinger = useSWR(
    `/oppgave/api/statistikk/behandlinger/fordeling-apne-behandlinger?${behandlingstyperQuery}`,
    fordelingÅpneBehandlingerClient
  ).data;
  const fordelingLukkedeBehandlinger = useSWR(
    `/oppgave/api/statistikk/behandlinger/fordeling-lukkede-behandlinger?${behandlingstyperQuery}`,
    fordelingLukkedeBehandlingerClient
  ).data;
  const venteÅrsaker = useSWR(
    `/oppgave/api/statistikk/behandlinger/pa-vent?${behandlingstyperQuery}`,
    venteÅrsakerClient
  ).data;
  const antallPåVent =
    venteÅrsaker && venteÅrsaker.type === 'success'
      ? venteÅrsaker.data?.map((årsak) => årsak.antall).reduce((acc, curr) => acc + curr, 0)
      : undefined;
  const behandlingerPerSteggruppe = useSWR(
    `/oppgave/api/statistikk/behandling-per-steggruppe?${behandlingstyperQuery}`,
    behandlingerPerSteggruppeClient
  ).data;
  const årsakerTilBehandling = useSWR(
    `/oppgave/api/statistikk/behandlinger/arsak-til-behandling?${behandlingstyperQuery}`,
    årsakTilBehandlingClient
  ).data;
  return (
    <HGrid columns={'1fr 6fr'}>
      <FilterSamling />
      <VStack padding={'5'} gap={'5'}>
        <Heading level={'2'} size={'large'}>
          Behandlinger
        </Heading>
        <HStack gap={'4'}>
          {behandlingerUtvikling?.type === 'success' && (
            <BehandlingerInnUt behandlingerEndringer={behandlingerUtvikling.data || []} />
          )}
          {antallÅpneBehandlinger?.type === 'success' && (
            <ApneBehandlinger antallPåVent={antallPåVent} åpneOgGjennomsnitt={antallÅpneBehandlinger.data || []} />
          )}
          {antallÅpneBehandlinger?.type === 'success' && (
            <TypeBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger.data || []} />
          )}
          {fordelingÅpneBehandlinger?.type === 'success' && (
            <FordelingÅpneBehandlingerPerDag fordelingÅpneBehandlingerPerDag={fordelingÅpneBehandlinger.data || []} />
          )}
          {fordelingLukkedeBehandlinger?.type === 'success' && (
            <FordelingLukkedeBehandlingerPerDag
              fordelingLukkedeBehandlinger={fordelingLukkedeBehandlinger.data || []}
            />
          )}
          {venteÅrsaker?.type === 'success' && <VenteÅrsaker venteÅrsaker={venteÅrsaker.data || []} />}
          {behandlingerPerSteggruppe?.type === 'success' && (
            <BehandlingerPerSteggruppe data={behandlingerPerSteggruppe.data || []} />
          )}
          {årsakerTilBehandling?.type === 'success' && (
            <ÅrsakTilBehandling årsakTilBehandling={årsakerTilBehandling.data || []} />
          )}
        </HStack>
      </VStack>
    </HGrid>
  );
};
