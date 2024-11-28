'use client';

import { BehandlingPerSteggruppe } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';
import { mapTilSteggruppeTekst } from 'lib/utils/oversettelser';

interface Props {
  data: Array<BehandlingPerSteggruppe>;
}
export const BehandlingerPerSteggruppe = ({ data }: Props) => {
  const oversattData = data.map((gruppe) => ({
    y: [mapTilSteggruppeTekst(gruppe.steggruppe)],
    x: [gruppe.antall],
  }));
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          Stegfordeling
        </Heading>
        <BodyShort size={'large'}>Hvor ligger behandling i flyten?</BodyShort>
      </VStack>

      <ResponsivePlot
        data={oversattData.map((xy) => ({
          ...xy,
          type: 'bar',
          orientation: 'h',
        }))}
        layout={{
          xaxis: { title: 'Antall' },
          showlegend: false,
        }}
      />
    </PlotWrapper>
  );
};
