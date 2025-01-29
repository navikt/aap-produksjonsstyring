'use client';

import { AvklaringsbehovKode, Kø, OppgaveBehandlingstype } from 'lib/types/types';
import { useContext, useMemo, useState } from 'react';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { oppgavesokClient } from 'lib/services/client';
import useSWR from 'swr';
import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';
import { KøSelect } from 'components/oppgave/køselect/KøSelect';
import { ValgteEnheterContext } from 'components/valgteenheterprovider/ValgteEnheterProvider';
import { ComboboxControlled } from 'components/comboboxcontrolled/ComboboxControlled';
import { oppgaveBehandlingstyper } from 'lib/utils/behandlingstyper';
import { oppgaveAvklaringsbehov } from 'lib/utils/avklaringsbehov';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';

interface Props {
  køer: Array<Kø>;
}
export const KøOversikt = ({ køer }: Props) => {
  const [aktivKøId, setAktivKøId] = useState<number>(køer[0]?.id ?? 0);
  const valgtKø = useMemo(() => køer.find((kø) => kø.id === aktivKøId), [køer, aktivKøId]);
  const behandlingstyperFraValgtKø = (valgtKø?.behandlingstyper || [])
    .map((val: string) => oppgaveBehandlingstyper.find((e) => e.value === val))
    .filter((e) => e !== undefined);
  const avklaringsbehovFraValgtKø = (valgtKø?.avklaringsbehovKoder || [])
    .map((val: string) => oppgaveAvklaringsbehov.find((e) => e.value === val))
    .filter((e) => e !== undefined);
  const [selectedBehandlingstyper, setSelectedBehandlingstyper] =
    useState<ComboboxOption[]>(behandlingstyperFraValgtKø);
  const [selectedAvklaringsbehov, setSelectedAvklaringsbehov] = useState<ComboboxOption[]>(avklaringsbehovFraValgtKø);
  const valgteEnheter = useContext(ValgteEnheterContext);
  function oppgavesokFetcher({
    args,
  }: {
    url: string;
    args: { behandlingstyper: ComboboxOption[]; avklaringsbehov: ComboboxOption[] };
  }) {
    return oppgavesokClient(
      args.avklaringsbehov.map((behov) => behov.value as AvklaringsbehovKode),
      args.behandlingstyper.map((type) => type.value as OppgaveBehandlingstype),
      valgteEnheter
    );
  }
  const oppgavesok = useSWR(
    {
      url: `api/oppgave/oppgavesok`,
      args: { behandlingstyper: selectedBehandlingstyper, avklaringsbehov: selectedAvklaringsbehov },
    },
    oppgavesokFetcher
  );
  return (
    <VStack gap={'5'}>
      <Heading size={'large'} level={'1'}>
        Oppgavesøk
      </Heading>
      <HStack gap={'3'} wrap>
        <KøSelect label={'Velg kø'} køer={køer} valgtKøListener={setAktivKøId} />
        <ComboboxControlled
          label={'Behandlingstype'}
          options={oppgaveBehandlingstyper}
          selectedOptions={selectedBehandlingstyper}
          setSelectedOptions={setSelectedBehandlingstyper}
        />
        <ComboboxControlled
          label={'Avklaringsbehov'}
          options={oppgaveAvklaringsbehov}
          selectedOptions={selectedAvklaringsbehov}
          setSelectedOptions={setSelectedAvklaringsbehov}
        />
      </HStack>
      <OppgaveTabell oppgaver={oppgavesok.data || []} heading={'Oppgaver'} showDropdownActions />
    </VStack>
  );
};
