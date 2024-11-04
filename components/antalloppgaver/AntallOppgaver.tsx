'use client';

import { BodyShort, Heading, HGrid, HStack, Label, VStack } from '@navikt/ds-react';
import { AntallÅpneOgGjennomsnitt, mapBehovskodeTilBehovstype } from 'lib/types/types';
import styles from './AntallOppgaver.module.css';

interface Props {
  oppgaver: Record<string, number>;
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const AntallOppgaver = ({ oppgaver, åpneOgGjennomsnitt }: Props) => {
  return (
    <div>
      <HStack gap={'5'}>
        <VStack>
          <Heading level={'3'} size="small">
            Antall åpne behandlinger
          </Heading>
          <div>{åpneOgGjennomsnitt.antallÅpne}</div>
        </VStack>
        <VStack>
          <Heading level={'3'} size="small">
            Snittalder åpne behandlinger
          </Heading>
          <div>{(åpneOgGjennomsnitt.gjennomsnittsalder / (60 * 60 * 24)).toFixed(2)} dager</div>
        </VStack>
      </HStack>
      <Heading size={'small'} level={'2'}>
        Oppgaver
      </Heading>
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
