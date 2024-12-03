'use client';

import { NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype } from 'lib/types/schema-oppgave';
import { exhaustiveCheck } from 'lib/utils/typescript';

import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { useEffect, useState } from 'react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import { ÅpneOppgaverGrid } from 'components/åpneoppgaver/ÅpneOppgaverGrid';
import { useClientFetch } from 'lib/hooks/useClientFetch';
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
          value: 'DOKUMENT_HÅNDTERING',
        };
      case 'JOURNALF_RING':
        return {
          label: 'Journalføring',
          value: 'JOURNALFØRING',
        };
    }
    exhaustiveCheck(key);
  });
const behandlingsTyperOptions = [{ label: 'Alle', value: '' }, ...behandlingsTypeAlternativerFraEnum];

export const ApneOppgaver = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([]);
  const { data, refreshData } = useClientFetch<Record<string, number>>('/api/oppgave/antall-oppgaver', {
    method: 'POST',
    body: JSON.stringify({ behandlingstype: 'Førstegangsbehandling' }),
  });

  useEffect(() => {
    setSelectedOptions([behandlingsTyperOptions[0]]);
  }, []);
  if (!data) {
    return null;
  }
  return (
    <VStack gap={'7'}>
      <Heading size={'medium'} level={'2'}>
        Oppgaver
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
            await refreshData({ method: 'POST', body: JSON.stringify({ behandlingstype: val }) });
          }}
          selectedOptions={selectedOptions}
        />
      </HStack>
      <ÅpneOppgaverGrid oppgaver={data} />
    </VStack>
  );
};
