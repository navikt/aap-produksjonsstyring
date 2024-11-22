'use client';

import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';

interface Props {
  åpneOgGjennomsnitt: AntallÅpneOgGjennomsnitt;
}
export const ApneBehandlinger = ({ åpneOgGjennomsnitt }: Props) => {
  const totaltAntallBehandlinger = åpneOgGjennomsnitt.antallÅpne;
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          {'Status åpne behandlinger'}
        </Heading>
        <VStack align={'center'}>
          <BodyShort size={'large'}>{totaltAntallBehandlinger}</BodyShort>
          <BodyShort size={'large'}>{'Totalt antall åpne behandlinger'}</BodyShort>
        </VStack>
      </VStack>
      <ResponsivePlot
        data={[
          {
            y: [åpneOgGjennomsnitt.antallÅpne, 0],
            x: ['Åpne behandlinger', 'På vent (finnes ikke enda)'],
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
