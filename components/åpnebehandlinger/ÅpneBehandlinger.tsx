'use client';

import { AntallÅpneOgGjennomsnitt } from 'lib/types/types';
import { PlotWrapper } from 'components/plotwrapper/PlotWrapper';
import { ResponsivePlot } from 'components/responsiveplot/ResponsivePlot';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';

interface Props {
  åpneOgGjennomsnitt: Array<AntallÅpneOgGjennomsnitt>;
  antallPåVent?: number;
}
export const ApneBehandlinger = ({ åpneOgGjennomsnitt, antallPåVent }: Props) => {
  const antallPåVentEllerNull = antallPåVent === undefined ? 0 : antallPåVent;
  const totaltAntallÅpneBehandlinger = åpneOgGjennomsnitt.reduce((acc, curr) => acc + curr.antallÅpne, 0);
  return (
    <PlotWrapper>
      <VStack align={'center'} gap={'5'}>
        <Heading level={'3'} size={'small'}>
          {'Status åpne behandlinger'}
        </Heading>
        <VStack align={'center'}>
          <BodyShort size={'large'}>{totaltAntallÅpneBehandlinger}</BodyShort>
          <BodyShort size={'large'}>{'Totalt antall åpne behandlinger'}</BodyShort>
        </VStack>
      </VStack>
      <ResponsivePlot
        data={[
          {
            y: [totaltAntallÅpneBehandlinger],
            x: ['Åpne behandlinger'],
            type: 'bar',
          },
          {
            y: [antallPåVentEllerNull],
            x: ['På vent'],
            type: 'bar',
          },
        ]}
        layout={{
          yaxis: { title: 'Antall' },
          showlegend: false,
        }}
      />
    </PlotWrapper>
  );
};
