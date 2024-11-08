'use client';

import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype } from 'lib/types/schema-oppgave';
import { exhaustiveCheck } from 'lib/utils/typescript';
import { useEffect, useState } from 'react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import { ÅpneOppgaverGrid } from 'components/åpneoppgaver/ÅpneOppgaverGrid';

const behandlingsTypeAlternativerFraEnum = Object.keys(
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype as unknown as keyof (typeof NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype)[]
)
  .map((key) => key as keyof typeof NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype)
  .map((key) => {
    switch (key) {
      case 'F_RSTEGANGSBEHANDLING':
        return {
          label: 'Førstegangsbehandling',
          value: 'FØRSTEGANGSBEHANDLING',
        };
      case 'TILBAKEKREVING':
        return {
          label: 'Tilbakekreving',
          value: 'TILBAKEKREVING',
        };
      case 'REVURDERING':
        return {
          label: 'Revurdering',
          value: 'REVURDERING',
        };
      case 'KLAGE':
        return {
          label: 'Klage',
          value: 'KLAGE',
        };
      case 'DOKUMENT_H_NDTERING':
        return {
          label: 'Dokumenthåndtering',
          value: 'DOKUMENTHÅNDTERING',
        };
    }
    exhaustiveCheck(key);
  });
const behandlingsTypeAlternativer = [{ label: 'Alle', value: '' }, ...behandlingsTypeAlternativerFraEnum];

async function fetchAntallOppgaver(behandlingstype?: string) {
  return fetch('/api/oppgave/antall-oppgaver', {
    method: 'POST',
    body: JSON.stringify({ behandlingstype }),
  }).then((res) => res.json());
}

export const PneOppgaver = () => {
  const [antallOppgaver, setAntallOppgaver] = useState<Record<string, number>>({});
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([]);

  useEffect(() => {
    fetchAntallOppgaver().then((data) => setAntallOppgaver(data));
    setSelectedOptions([behandlingsTypeAlternativer[0]]);
  }, []);
  return (
    <VStack gap={'7'}>
      <Heading size={'medium'} level={'2'}>
        Oppgaver
      </Heading>
      <HStack>
        <UNSAFE_Combobox
          label={'Type behandling'}
          options={behandlingsTypeAlternativer}
          onToggleSelected={async (val) => {
            const option = behandlingsTypeAlternativer.find((e) => e.value === val);
            if (option) {
              setSelectedOptions([option]);
            }
            setAntallOppgaver(await fetchAntallOppgaver(val));
          }}
          selectedOptions={selectedOptions}
        />
      </HStack>
      <ÅpneOppgaverGrid oppgaver={antallOppgaver} />
    </VStack>
  );
};
