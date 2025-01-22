'use client';

import { useState } from 'react';
import { Enhet, Kø } from 'lib/types/types';
import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';
import useSWR from 'swr';
import { BodyShort, VStack } from '@navikt/ds-react';
import { Kort } from 'components/kort/Kort';
import { hentOppgaverClient } from 'lib/services/client';
import { VelgOppgaveKø } from 'components/oppgave/velgoppgavekø/VelgOppgaveKø';

interface Props {
  køer: Kø[];
  enheter: Enhet[];
}

export const OppgaveKøMedOppgaver = ({ køer, enheter }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const [aktivEnhet, setAktivEnhet] = useState<string>(enheter[0]?.enhetNr ?? '');

  const oppgaverValgtKø = useSWR(`api/oppgave/oppgaveliste/${aktivKø}/${aktivEnhet}`, () =>
    hentOppgaverClient(aktivKø, [aktivEnhet])
  );
  return (
    <Kort>
      <VStack gap={'5'}>
        <VelgOppgaveKø køer={køer} valgtKøListener={setAktivKø} enheter={enheter} valgtEnhetListener={setAktivEnhet} />
        {!oppgaverValgtKø.data?.length && <BodyShort>Ingen oppgaver i valgt kø for valgt enhet</BodyShort>}
        <OppgaveTabell oppgaver={oppgaverValgtKø.data || []} showBehandleKnapp showDropdownActions showSortAndFilters />
      </VStack>
    </Kort>
  );
};
