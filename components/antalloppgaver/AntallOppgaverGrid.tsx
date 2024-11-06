import { BodyShort, HGrid, VStack } from '@navikt/ds-react';
import { mapBehovskodeTilBehovstype } from 'lib/types/types';
import styles from './AntallOppgaverGrid.module.css';
interface Props {
  oppgaver: Record<string, number>;
}
export const AntallOppgaverGrid = ({ oppgaver }: Props) => {
  return (
    <HGrid columns={'1fr 1fr 1fr 1fr 1fr'} gap={'5'} className={styles.antallOppgaverGrid}>
      {Object.entries(oppgaver).map(([behovKode, antall], index) => (
        <VStack key={`avklaringsbehovtype-${index}`} gap={'5'} justify={'space-around'}>
          <BodyShort size={'small'}>{mapBehovskodeTilBehovstype(behovKode)}</BodyShort>
          <BodyShort weight={'semibold'} size={'large'}>{`${antall}`}</BodyShort>
        </VStack>
      ))}
    </HGrid>
  );
};
