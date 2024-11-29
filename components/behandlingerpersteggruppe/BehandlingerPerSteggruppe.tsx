'use client';

import { BehandlingPerSteggruppe } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';
import { mapTilSteggruppeTekst } from 'lib/utils/oversettelser';
import { steggruppeRekkefølge } from 'lib/utils/steggruppe';

interface Props {
  data: Array<BehandlingPerSteggruppe>;
}

export const BehandlingerPerSteggruppe = ({ data }: Props) => {
  const sorterteSteg: Array<BehandlingPerSteggruppe> = steggruppeRekkefølge.reduce(
    (acc: Array<BehandlingPerSteggruppe>, steggruppe) => {
      const steggruppeIData = data.find((e) => `${e.steggruppe}` === steggruppe);
      if (steggruppeIData) {
        return [...acc, steggruppeIData];
      } else {
        return acc;
      }
    },
    []
  );
  const oversattData = sorterteSteg.map((gruppe) => ({
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
          margin: { l: 110 },
        }}
      />
    </PlotWrapper>
  );
};
