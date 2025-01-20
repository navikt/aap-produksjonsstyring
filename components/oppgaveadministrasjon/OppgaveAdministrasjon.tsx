'use client';

import { OppgaveTabell } from 'components/oppgavetabell/OppgaveTabell';
import { oppgaveBehandlingstyper } from 'lib/utils/behandlingstyper';
import { HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { useContext, useState } from 'react';
import { avklaringsbehovKoder } from 'lib/utils/avklaringsbehov';
import useSWR from 'swr';
import { oppgavesokClient } from 'lib/services/client';
import { ValgteEnheterContext } from 'components/valgteenheterprovider/ValgteEnheterProvider';
import { AvklaringsbehovKode, OppgaveBehandlingstype } from 'lib/types/types';
import { useSearchParams } from 'next/navigation';

export const OppgaveAdministrasjon = () => {
  const searchParams = useSearchParams();
  const behandlingstyperFraUrl = searchParams.getAll('behandlingstype').map((e) => e as OppgaveBehandlingstype);
  const avklaringsbehovFraUrl = searchParams.getAll('avklaringsbehov').map((e) => e as AvklaringsbehovKode);
  const [selectedBehandlingstype, setSelectedBehandlingstype] =
    useState<OppgaveBehandlingstype[]>(behandlingstyperFraUrl);
  const [selectedAvklaringsbehov, setSelectedAvklaringsbehov] = useState<AvklaringsbehovKode[]>(avklaringsbehovFraUrl);
  const valgteEnheter = useContext(ValgteEnheterContext);

  const oppgavesok = useSWR(`api/oppgave/oppgavesok`, () =>
    oppgavesokClient(selectedAvklaringsbehov, selectedBehandlingstype, valgteEnheter)
  );

  async function onToggleSelectedBehandlingstype(option: string, isSelected: boolean) {
    if (isSelected) {
      const newSelected = [...selectedBehandlingstype, option as OppgaveBehandlingstype];
      setSelectedBehandlingstype(newSelected);
    } else {
      const newSelected = selectedBehandlingstype.filter((o) => o !== option);
      setSelectedBehandlingstype(newSelected);
    }
  }
  async function onToggleSelectedAvklaringsbehov(option: string, isSelected: boolean) {
    if (isSelected) {
      const newSelected = [...selectedAvklaringsbehov, option as AvklaringsbehovKode];
      setSelectedAvklaringsbehov(newSelected);
    } else {
      const newSelected = selectedAvklaringsbehov.filter((o) => o !== option);
      setSelectedAvklaringsbehov(newSelected);
    }
  }
  return (
    <VStack gap={'5'}>
      <Label>Filtere</Label>
      <HStack gap={'3'} wrap>
        <UNSAFE_Combobox
          label={'Type behandling'}
          options={oppgaveBehandlingstyper}
          size={'small'}
          isMultiSelect
          onToggleSelected={onToggleSelectedBehandlingstype}
          selectedOptions={selectedBehandlingstype}
        />
        <UNSAFE_Combobox
          label={'Avklaringsbehov'}
          options={avklaringsbehovKoder}
          size={'small'}
          isMultiSelect
          onToggleSelected={onToggleSelectedAvklaringsbehov}
          selectedOptions={selectedAvklaringsbehov}
        />
      </HStack>
      <OppgaveTabell oppgaver={oppgavesok.data || []} heading={'Oppgaver'} />
    </VStack>
  );
};
