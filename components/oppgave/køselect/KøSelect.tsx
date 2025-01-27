'use client';

import { Select } from '@navikt/ds-react';
import { Kø } from 'lib/types/types';
import { useState } from 'react';

interface Props {
  køer: Kø[];
  valgtKøListener?: (kø: number) => void;
  defaultAktivKøId?: number;
}
export const KøSelect = ({ køer, valgtKøListener, defaultAktivKøId }: Props) => {
  const defaultId = defaultAktivKøId ? defaultAktivKøId : (køer[0]?.id ?? 0);
  const [aktivKø, setAktivKø] = useState<number>(defaultId);
  return (
    <Select
      label="Velg køen du skal jobbe på"
      size="small"
      value={aktivKø}
      onChange={(event) => {
        const køId = parseInt(event.target.value);
        setAktivKø(køId);
        valgtKøListener && valgtKøListener(køId);
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
  );
};
