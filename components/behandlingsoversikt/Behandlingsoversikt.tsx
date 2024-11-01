import { BodyShort, Heading, HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { AntallBehandlinger, BehandlingstidPerDagDTO } from 'lib/types/types';
import { PlotBehandlingerUtvikling } from 'app/PlotBehandlingerUtvikling';
import styles from './Behandlingsoversikt.module.css';
import { useMemo } from 'react';
import { MyPlot } from 'app/Plot';

interface Props {
  behandlingerUtvikling: Record<string, AntallBehandlinger>;
  alderLukkedeSisteSyvDager: number;
  behandlingstidPerDag: BehandlingstidPerDagDTO[];
}
const initialOptions = [
  'car',
  'bus',
  'train',
  'skateboard',
  'bicycle',
  'motorcycle',
  'boat',
  'airplane',
  'helicopter',
  'truck',
  'van',
  'scooter',
];
export const Behandlingsoversikt = ({
  behandlingerUtvikling,
  alderLukkedeSisteSyvDager,
  behandlingstidPerDag,
}: Props) => {
  const sumNyeBehandlinger = useMemo(
    () => Object.values(behandlingerUtvikling).reduce((acc: number, curr: AntallBehandlinger) => acc + curr.nye, 0),
    [behandlingerUtvikling]
  );
  const sumAvsluttedeBehandlinger = useMemo(
    () =>
      Object.values(behandlingerUtvikling).reduce((acc: number, curr: AntallBehandlinger) => acc + curr.avsluttede, 0),
    [behandlingerUtvikling]
  );
  return (
    <VStack gap={'6'} className={styles.behandlingsoversikt}>
      <Heading level={'2'} size={'medium'}>
        Behandlinger
      </Heading>

      <HStack>
        <UNSAFE_Combobox label={'Type behandling'} options={initialOptions} isMultiSelect />
      </HStack>

      <VStack gap={'1'}>
        <Heading level={'3'} size={'small'}>
          Siste 7 dager
        </Heading>
        <HStack className={styles.behandlingerNåSituasjon} gap={'9'}>
          <div>
            <BodyShort size={'large'}>{(alderLukkedeSisteSyvDager / (60 * 60 * 24)).toFixed(2)} dager</BodyShort>
            <Label size={'small'}>Snittalder ferdigstilte behandlinger</Label>
          </div>
          <div>
            <BodyShort size={'large'}>{sumNyeBehandlinger}</BodyShort>
            <Label size={'small'}>Nye behandlinger</Label>
          </div>
          <div>
            <BodyShort size={'large'}>{sumAvsluttedeBehandlinger}</BodyShort>
            <Label size={'small'}>Ferdig behandlet</Label>
          </div>
        </HStack>
      </VStack>
      <div>
        <PlotBehandlingerUtvikling behandlingerUtvikling={behandlingerUtvikling} />
      </div>
      <div>
        <MyPlot
          x={behandlingstidPerDag.map((t) => new Date(t.dag))}
          y={behandlingstidPerDag.map((t) => t.snitt / 3600)}
        />
      </div>
    </VStack>
  );
};
