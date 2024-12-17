'use client';

import { HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { BehandlingsTyperOption, behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { useContext, useEffect, useState } from 'react';
import { AlleFiltereDispatchContext } from 'components/allefiltereprovider/AlleFiltereProvider';

export interface AlleFiltere {
  behandlingstyper: BehandlingsTyperOption[];
}

export const FilterSamling = () => {
  const [selectedOptions, setSelectedOptions] = useState<BehandlingsTyperOption[]>([]);
  const filterDispatch = useContext(AlleFiltereDispatchContext);
  useEffect(() => {
    setSelectedOptions([behandlingsTyperOptions[0]]);
  }, []);
  return (
    <VStack padding={'5'} gap={'5'}>
      <Label>Filtere</Label>
      <HStack>
        <UNSAFE_Combobox
          label={'Type behandling'}
          options={behandlingsTyperOptions}
          size={'small'}
          onToggleSelected={async (val) => {
            const option = behandlingsTyperOptions.find((e) => e === val);
            if (option) {
              setSelectedOptions([option]);
              filterDispatch && filterDispatch({ type: 'SET_FILTERE', payload: { behandlingstyper: [option] } });
            }
          }}
          selectedOptions={selectedOptions}
        />
      </HStack>
    </VStack>
  );
};
