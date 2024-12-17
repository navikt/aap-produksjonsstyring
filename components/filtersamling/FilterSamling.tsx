'use client';

import { HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { BehandlingsTyperOption, behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { Dispatch, SetStateAction, useState } from 'react';

export interface AlleFiltere {
  behandlingstyper: BehandlingsTyperOption[];
}
interface Props {
  listenerSetState: Dispatch<SetStateAction<AlleFiltere | undefined>>;
}

export const FilterSamling = ({ listenerSetState }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<BehandlingsTyperOption[]>([]);
  return (
    <VStack padding={'5'} gap={'5'}>
      <Label>Filtere</Label>
      <HStack>
        <UNSAFE_Combobox
          label={'Type behandling'}
          options={behandlingsTyperOptions}
          onToggleSelected={async (val) => {
            const option = behandlingsTyperOptions.find((e) => e === val);
            if (option) {
              setSelectedOptions([option]);
              listenerSetState({
                behandlingstyper: [option],
              });
            }
          }}
          selectedOptions={selectedOptions}
        />
      </HStack>
    </VStack>
  );
};
