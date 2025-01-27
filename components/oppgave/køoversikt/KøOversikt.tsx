'use client';

import { Kø } from 'lib/types/types';
import { useContext, useMemo, useState } from 'react';
import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { hentOppgaverClient } from 'lib/services/client';
import useSWR from 'swr';
import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';
import { KøSelect } from 'components/oppgave/køselect/KøSelect';
import { ValgteEnheterContext } from 'components/valgteenheterprovider/ValgteEnheterProvider';

interface Props {
  køer: Array<Kø>;
}
export const KøOversikt = ({ køer }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const valgteEnheter = useContext(ValgteEnheterContext);
  const aktivKøBeskrivelse = useMemo(() => køer.find((e) => e.id === aktivKø)?.beskrivelse, [aktivKø, køer]);
  const oppgaverValgtKø = useSWR(`api/oppgave/oppgaveliste/${aktivKø}?${valgteEnheter.join('&')}`, () =>
    hentOppgaverClient(aktivKø, valgteEnheter)
  );
  return (
    <VStack gap={'6'}>
      <Heading level="2" size="medium">
        Oppgavekø
      </Heading>
      <HStack gap={'5'}>
        <HStack>
          <KøSelect køer={køer} valgtKøListener={setAktivKø} />
        </HStack>
        <VStack>
          <Label as="p" size={'small'} spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort spacing>{aktivKøBeskrivelse}</BodyShort>
        </VStack>
      </HStack>
      <OppgaveTabell oppgaver={oppgaverValgtKø.data || []} showSortAndFilters />
    </VStack>
  );
};
