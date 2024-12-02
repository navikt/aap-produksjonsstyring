'use client';

import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';
import { FordelingLukkedeBehandlingerPerDag } from 'components/fordelinglukkedebehandlingerperdag/FordelingLukkedeBehandlingerPerDag';
import { VenteÅrsaker } from 'components/venteårsaker/VenteÅrsaker';
import { BehandlingerPerSteggruppe } from 'components/behandlingerpersteggruppe/BehandlingerPerSteggruppe';
import { behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { useEffect, useMemo, useState } from 'react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import { queryParamsArray } from 'lib/utils/request';
import useSWR from 'swr';
import {
  antallÅpneBehandlingerPerBehandlingstypeClient,
  behandlingerPerSteggruppeClient,
  behandlingerUtviklingClient,
  fordelingLukkedeBehandlingerClient,
  fordelingÅpneBehandlingerClient,
  venteÅrsakerClient,
} from 'lib/services/client';
import { TypeBehandlinger } from 'components/typebehandlinger/TypeBehandlinger';
export const TotaloversiktBehandlinger = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([]);
  const behandlingstyperQuery = useMemo(
    () =>
      queryParamsArray(
        'behandlingstyper',
        selectedOptions.map((e) => e.value)
      ),
    [selectedOptions]
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
  useEffect(() => {
    setSelectedOptions([behandlingsTyperOptions[0]]);
  }, []);
  return (
    <VStack padding={'5'} gap={'5'}>
      <Heading level={'2'} size={'large'}>
        Behandlinger
      </Heading>
      <HStack>
        <UNSAFE_Combobox
          label={'Type behandling'}
          options={behandlingsTyperOptions}
          onToggleSelected={async (val) => {
            const option = behandlingsTyperOptions.find((e) => e.value === val);
            if (option) {
              setSelectedOptions([option]);
            }
          }}
          selectedOptions={selectedOptions}
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
      </HStack>
    </VStack>
  );
};
