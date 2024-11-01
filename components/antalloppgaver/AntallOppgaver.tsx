'use client';

import { BodyShort, HGrid, Label } from '@navikt/ds-react';
import { mapBehovskodeTilBehovstype } from 'lib/types/types';
import styles from './AntallOppgaver.module.css';

interface Props {
  oppgaver: Record<string, number>;
}
export const AntallOppgaver = ({ oppgaver }: Props) => {
  return (
    <div>
      <HGrid columns={'1fr 1fr 1fr 1fr 1fr'} className={styles.antallOppgaverGrid}>
        {Object.entries(oppgaver).map(([behovKode, antall], index) => (
          <div key={`avklaringsbehovtype-${index}`}>
            <BodyShort size={'large'}>{`${antall}`}</BodyShort>
            <Label size={'small'}>{mapBehovskodeTilBehovstype(behovKode)}</Label>
          </div>
        ))}
      </HGrid>
    </div>
  );
};