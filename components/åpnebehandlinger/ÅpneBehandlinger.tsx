import { Heading, HStack, VStack } from '@navikt/ds-react';
import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import { sekunderTilDager } from 'lib/utils/time';
interface Props {
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const ÅpneBehandlinger = ({ åpneOgGjennomsnitt }: Props) => {
  return (
    <div>
      <Heading size={'medium'} level={'2'}>
        Behandlinger
      </Heading>
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
          <div>{`${sekunderTilDager(åpneOgGjennomsnitt.gjennomsnittsalder)} dager`}</div>
        </VStack>
      </HStack>
    </div>
  );
};
