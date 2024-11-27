'use client';

import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { BehandlingEndringerPerDag } from 'lib/types/types';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';

interface Props {
  behandlingerEndringer: Array<BehandlingEndringerPerDag>;
}
export const BehandlingerInnUt = ({ behandlingerEndringer }: Props) => {
  const data = behandlingerEndringer[0];
  if (!data) {
    return null;
  }
  const dataUtenTotal = { nye: data.nye, avsluttede: data.avsluttede };
  const x = Object.keys(dataUtenTotal);
  const y = Object.values(dataUtenTotal);
  const sumInnUt = dataUtenTotal.nye - dataUtenTotal.avsluttede;
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          {'Inngang / Utgang'}
        </Heading>
        <VStack align={'center'}>
          <BodyShort size={'large'}>
            {sumInnUt >= 0 ? '+ ' : '- '}
            {sumInnUt}
          </BodyShort>
          <BodyShort size={'large'}>{'Endring i åpne behandlinger i perioden'}</BodyShort>
        </VStack>
      </VStack>
      <ResponsivePlot
        data={[
          {
            x,
            y,
            type: 'bar',
          },
        ]}
        layout={{
          yaxis: { title: 'Antall' },
        }}
      />
    </PlotWrapper>
  );
};
