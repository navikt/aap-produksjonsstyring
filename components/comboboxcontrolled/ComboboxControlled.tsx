'use client';

import { useState } from 'react';
import { UNSAFE_Combobox } from '@navikt/ds-react';
import { ComboboxOption } from '@navikt/ds-react/cjs/form/combobox/types';

interface Props {
  label: string;
  options: ComboboxOption[];
  onToggleListener: (selectedOptions: ComboboxOption[]) => void;
  initialSelectedOptions?: ComboboxOption[];
}
export const ComboboxControlled = ({ options, label, onToggleListener, initialSelectedOptions }: Props) => {
  const [value, setValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>(initialSelectedOptions || []);

  const onToggleSelected = (option: string, isSelected: boolean) => {
    const fullOption = options.find((e) => e.value === option);
    if (isSelected) {
      if (fullOption) {
        setSelectedOptions([...selectedOptions, fullOption]);
        onToggleListener([...selectedOptions, fullOption]);
      }
    } else {
      const newList = selectedOptions.filter((o) => o.value !== option);
      setSelectedOptions(newList);
      onToggleListener(newList);
    }
  };

  return (
    <UNSAFE_Combobox
      label={label}
      isMultiSelect
      onChange={setValue}
      onToggleSelected={onToggleSelected}
      selectedOptions={selectedOptions}
      options={options}
      value={value}
      size={'small'}
    />
  );
};
