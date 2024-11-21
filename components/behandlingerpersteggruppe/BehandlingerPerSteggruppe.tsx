'use client';

import { BehandlingPerSteggruppe } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';

interface Props {
  data: Array<BehandlingPerSteggruppe>;
}
export const BehandlingerPerSteggruppe = ({ data }: Props) => {
  const y = data.map((e) => e.steggruppe);
  const x = data.map((e) => e.antall);
  return (
    <PlotWrapper>
      <VStack align={'center'}>
        <Heading level={'3'} size={'small'}>
          Stegfordeling
        </Heading>
        <BodyShort size={'large'}>Hvor ligger behandling i flyten?</BodyShort>
      </VStack>

      <ResponsivePlot
        data={[
          {
            x,
            y,
            type: 'bar',
            orientation: 'h',
          },
        ]}
        layout={{
          title: 'Endring i åpne behandlinger i perioden',
          yaxis: { title: 'Antall' },
        }}
      />
    </PlotWrapper>
  );
};
