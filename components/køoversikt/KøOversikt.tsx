'use client';

import { Kø } from 'lib/types/types';
import { useMemo, useState } from 'react';
import { BodyShort, Heading, HStack, Label, Select, VStack } from '@navikt/ds-react';
import { hentKøerClient } from 'lib/services/client';
import useSWR from 'swr';
import { OppgaveTabell } from 'components/oppgavetabell/OppgaveTabell';

interface Props {
  køer: Array<Kø>;
}
export const KøOversikt = ({ køer }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const aktivKøBeskrivelse = useMemo(() => køer.find((e) => e.id === aktivKø)?.beskrivelse, [aktivKø, køer]);
  const oppgaverValgtKø = useSWR(`api/oppgave/hent-oppgaver/${aktivKø}`, () => hentKøerClient(aktivKø));
  return (
    <VStack gap={'6'}>
      <Heading level="2" size="medium">
        Oppgavekø
      </Heading>
      <HStack gap={'5'}>
        <Select
          label="Velg oppgavekø"
          size="small"
          value={aktivKø}
          onChange={(event) => {
            const køId = parseInt(event.target.value);
            setAktivKø(køId);
          }}
        >
          {køer.map((kø) => {
            if (kø) {
              return (
                <option key={kø.id} value={`${kø.id}`}>
                  {kø.navn}
                </option>
              );
            }
          })}
        </Select>
        <VStack justify={'space-between'}>
          <Label size={'small'} spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort>{aktivKøBeskrivelse}</BodyShort>
        </VStack>
      </HStack>
      <OppgaveTabell oppgaver={oppgaverValgtKø.data || []} />
    </VStack>
  );
};
