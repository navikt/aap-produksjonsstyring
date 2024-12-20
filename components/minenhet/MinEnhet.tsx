'use client';

import { HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';
import { FordelingLukkedeBehandlingerPerDag } from 'components/fordelinglukkedebehandlingerperdag/FordelingLukkedeBehandlingerPerDag';
import { VenteÅrsaker } from 'components/venteårsaker/VenteÅrsaker';
import { BehandlingerPerSteggruppe } from 'components/behandlingerpersteggruppe/BehandlingerPerSteggruppe';
import { useContext, useMemo, useState } from 'react';
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
import { Enhet } from 'lib/types/types';

interface Props {
  enheter: Array<Enhet>;
}
export const MinEnhet = ({ enheter }: Props) => {
  const [valgteEnheter, setValgteEnheter] = useState<{ label: string; value: string }[]>([]);
  const alleFiltere = useContext(AlleFiltereContext);
  const behandlingstyperQuery = useMemo(
    () => statistikkQueryparams({ behandlingstyper: alleFiltere.behandlingstyper }),
    [alleFiltere]
  );
  function onToggleSelected(option: string, isSelected: boolean) {
    const label = enheter.find((e) => e.enhetNr === option)?.navn;
    if (!label) {
      return;
    }
    const optionWithLabel = { value: option, label };

    if (isSelected) {
      setValgteEnheter([...valgteEnheter, optionWithLabel]);
    } else {
      setValgteEnheter(valgteEnheter.filter((o) => o.value !== option));
    }
  }

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
      <HStack>
        <UNSAFE_Combobox
          label={'Enheter'}
          options={enheter.map((e) => ({ value: e.enhetNr, label: e.navn }))}
          size={'small'}
          isMultiSelect
          onToggleSelected={onToggleSelected}
          selectedOptions={valgteEnheter}
        />
      </HStack>
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
