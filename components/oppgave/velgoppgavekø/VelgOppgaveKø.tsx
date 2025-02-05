'use client';
import { BodyShort, Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Enhet, Kø } from 'lib/types/types';
import { plukkNesteOppgaveClient } from 'lib/services/client';
import { EnhetSelect } from 'components/oppgave/enhetselect/EnhetSelect';
import { KøSelect } from 'components/oppgave/køselect/KøSelect';
import { byggKelvinURL } from 'lib/utils/request';

interface Props {
  køer: Kø[];
  valgtKøListener?: Dispatch<SetStateAction<number>>;
  enheter: Enhet[];
  valgtEnhetListener?: Dispatch<SetStateAction<string>>;
}

export const VelgOppgaveKø = ({ køer, valgtKøListener, enheter, valgtEnhetListener }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const [aktivEnhet, setAktivEnhet] = useState<string | undefined>(enheter[0]?.enhetNr);
  async function plukkOgGåTilOppgave() {
    if (aktivEnhet) {
      const nesteOppgave = await plukkNesteOppgaveClient(aktivKø, aktivEnhet);
      if (nesteOppgave) {
        console.log('plukket oppgave:', nesteOppgave);
        window.location.assign(byggKelvinURL(nesteOppgave.avklaringsbehovReferanse));
      }
    }
  }
  const aktivKøBeskrivelse = useMemo(() => køer.find((e) => e.id === aktivKø)?.beskrivelse, [aktivKø, køer]);
  return (
    <VStack gap={'4'}>
      <Heading level="2" size="medium">
        Oppgavekø
      </Heading>
      <HStack gap={'6'}>
        <VStack>
          <EnhetSelect
            enheter={enheter}
            valgtEnhetListener={(enhet) => {
              setAktivEnhet(enhet);
              if (valgtEnhetListener) {
                valgtEnhetListener(enhet);
              }
            }}
          />
        </VStack>
        <VStack>
          <KøSelect
            label={'Velg kø du skal jobbe på'}
            køer={køer}
            valgtKøListener={(kø) => {
              setAktivKø(kø);
              if (valgtKøListener) {
                valgtKøListener(kø);
              }
            }}
          />
        </VStack>
        <VStack>
          <Label as="p" size={'small'} spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort spacing>{aktivKøBeskrivelse}</BodyShort>
        </VStack>
      </HStack>
      <HStack>
        <Button size="small" onClick={() => plukkOgGåTilOppgave()}>
          Behandle neste oppgave
        </Button>
      </HStack>
    </VStack>
  );
};
