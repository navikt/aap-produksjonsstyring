import { BodyShort, Heading, HGrid, VStack } from '@navikt/ds-react';
import { AvklaringsbehovKode, mapBehovskodeTilBehovstype } from 'lib/types/types';
import { VenstreBorderBoks } from 'components/venstreborderboks/VenstreBorderBoks';
interface Props {
  oppgaver: Record<string, number>;
}
export const ÅpneOppgaverGrid = ({ oppgaver }: Props) => {
  const sumOppgaver = Object.entries(oppgaver).reduce((acc, keyAndValue) => acc + keyAndValue[1], 0);
  return (
    <VStack gap={'9'}>
      <VenstreBorderBoks>
        <Heading size={'xlarge'} as={'p'}>
          {`${sumOppgaver}`}
        </Heading>
        <BodyShort>Åpne oppgaver</BodyShort>
      </VenstreBorderBoks>
      <HGrid columns={'1fr 1fr 1fr 1fr 1fr'} gap={'5'}>
        {Object.entries(oppgaver).map(([behovKode, antall], index) => (
          <VenstreBorderBoks key={`avklaringsbehovtype-${index}`}>
            <BodyShort size={'small'}>{mapBehovskodeTilBehovstype(behovKode as AvklaringsbehovKode)}</BodyShort>
            <Heading size={'medium'} as={'p'}>
              {`${antall}`}
            </Heading>
          </VenstreBorderBoks>
        ))}
      </HGrid>
    </VStack>
  );
};
