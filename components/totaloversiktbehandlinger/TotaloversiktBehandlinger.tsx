'use client';

import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { ApneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { BehandlingerInnUt } from 'components/behandlingerinnut/BehandlingerInnUt';
import { FordelingÅpneBehandlingerPerDag } from 'components/fordelingåpnebehandlingerperdag/FordelingÅpneBehandlingerPerDag';
import { FordelingLukkedeBehandlingerPerDag } from 'components/fordelinglukkedebehandlingerperdag/FordelingLukkedeBehandlingerPerDag';
import { VenteÅrsaker } from 'components/venteårsaker/VenteÅrsaker';
import { BehandlingerPerSteggruppe } from 'components/behandlingerpersteggruppe/BehandlingerPerSteggruppe';
import { behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { useEffect, useState } from 'react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import {
  AntallÅpneOgGjennomsnitt,
  BehandlingEndringerPerDag,
  BehandlingPerSteggruppe,
  FordelingLukkedeBehandlinger,
  FordelingÅpneBehandlinger,
  VenteÅrsakOgGjennomsnitt,
} from 'lib/types/types';
import { useClientFetch } from 'lib/hooks/useClientFetch';
import { queryParamsArray } from 'lib/utils/request';
export const TotaloversiktBehandlinger = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([]);
  const antallÅpneBehandlinger = useClientFetch<AntallÅpneOgGjennomsnitt>(
    `/api/statistikk/apne-behandlinger?${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  const behandlingerUtvikling = useClientFetch<Array<BehandlingEndringerPerDag>>(
    `/api/statistikk/behandlinger/utvikling?antallDager=${0}&${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  const fordelingÅpneBehandlinger = useClientFetch<Array<FordelingÅpneBehandlinger>>(
    `/api/statistikk/behandlinger/fordeling-apne-behandlinger?${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  const fordelingLukkedeBehandlinger = useClientFetch<Array<FordelingLukkedeBehandlinger>>(
    `/api/statistikk/behandlinger/fordeling-lukkede-behandlinger?${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  const venteÅrsaker = useClientFetch<Array<VenteÅrsakOgGjennomsnitt>>(
    `/api/statistikk/behandlinger/pa-vent?${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  const behandlingerPerSteggruppe = useClientFetch<Array<BehandlingPerSteggruppe>>(
    `/api/statistikk/behandling-per-steggruppe?${queryParamsArray(
      'behandlingstyper',
      selectedOptions.map((e) => e.value)
    )}`
  );
  useEffect(() => {
    setSelectedOptions([behandlingsTyperOptions[0]]);
  }, []);
  return (
    <VStack padding={'5'}>
      <Heading spacing level={'2'} size={'large'}>
        Førstegangsbehandling
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
        {!antallÅpneBehandlinger.error && <ApneBehandlinger åpneOgGjennomsnitt={antallÅpneBehandlinger.data} />}
        {!behandlingerUtvikling.error && <BehandlingerInnUt behandlingerEndringer={behandlingerUtvikling.data || []} />}
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
