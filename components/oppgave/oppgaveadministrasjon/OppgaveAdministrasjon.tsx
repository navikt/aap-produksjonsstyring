'use client';

import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';
import { oppgaveBehandlingstyper } from 'lib/utils/behandlingstyper';
import { Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { useContext, useState } from 'react';
import { oppgaveAvklaringsbehov } from 'lib/utils/avklaringsbehov';
import useSWR from 'swr';
import { oppgavesokClient } from 'lib/services/client';
import { ValgteEnheterContext } from 'components/valgteenheterprovider/ValgteEnheterProvider';
import { useSearchParams } from 'next/navigation';
import { ComboboxControlled } from 'components/comboboxcontrolled/ComboboxControlled';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import { AvklaringsbehovKode, OppgaveBehandlingstype } from 'lib/types/types';

export const OppgaveAdministrasjon = () => {
  const searchParams = useSearchParams();
  const behandlingstyperFraUrl = searchParams
    .getAll('behandlingstype')
    .map((val: string) => oppgaveBehandlingstyper.find((e) => e.value === val))
    .filter((e) => e !== undefined);
  const avklaringsbehovFraUrl = searchParams
    .getAll('avklaringsbehov')
    .map((val: string) => oppgaveAvklaringsbehov.find((e) => e.value === val))
    .filter((e) => e !== undefined);
  const [selectedBehandlingstyper, setSelectedBehandlingstyper] = useState<ComboboxOption[]>(behandlingstyperFraUrl);
  const [selectedAvklaringsbehov, setSelectedAvklaringsbehov] = useState<ComboboxOption[]>(avklaringsbehovFraUrl);
  const valgteEnheter = useContext(ValgteEnheterContext);

  const oppgavesok = useSWR(`api/oppgave/oppgavesok`, () =>
    oppgavesokClient(
      selectedAvklaringsbehov.map((behov) => behov.value as AvklaringsbehovKode),
      selectedBehandlingstyper.map((type) => type.value as OppgaveBehandlingstype),
      valgteEnheter
    )
  );

  return (
    <VStack gap={'5'}>
      <Heading size={'large'} level={'1'}>
        Oppgavesøk
      </Heading>
      <HStack gap={'3'} wrap>
        <ComboboxControlled
          label={'Behandlingstype'}
          options={oppgaveBehandlingstyper}
          initialSelectedOptions={selectedBehandlingstyper}
          onToggleListener={(selectedOptions) => setSelectedBehandlingstyper(selectedOptions)}
        />
        <ComboboxControlled
          label={'Behandlingstype'}
          options={oppgaveBehandlingstyper}
          initialSelectedOptions={selectedAvklaringsbehov}
          onToggleListener={(selectedOptions) => setSelectedAvklaringsbehov(selectedOptions)}
        />
      </HStack>
      <HStack>
        <Button size={'small'}>Lagre som ny kø</Button>
      </HStack>
      <OppgaveTabell oppgaver={oppgavesok.data || []} heading={'Oppgaver'} showDropdownActions />
    </VStack>
  );
};
