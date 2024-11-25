'use client';

import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { useEffect, useState } from 'react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';
import { ÅpneOppgaverGrid } from 'components/åpneoppgaver/ÅpneOppgaverGrid';
import { behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { useClientFetch } from 'lib/hooks/useClientFetch';

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
