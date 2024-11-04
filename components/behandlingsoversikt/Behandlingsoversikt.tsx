import { Heading, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { AntallBehandlinger, BehandlingstidPerDagDTO } from 'lib/types/types';
import { PlotBehandlingerUtvikling } from 'app/PlotBehandlingerUtvikling';
import styles from './Behandlingsoversikt.module.css';
import { MyPlot } from 'app/Plot';
import { SummertBehandlingerUtvikling } from 'components/behandlingsoversikt/summertbehandlingerutvikling/SummertBehandlingerUtvikling';

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
        <SummertBehandlingerUtvikling
          behandlingerUtvikling={behandlingerUtvikling}
          alderLukkedeSisteSyvDager={alderLukkedeSisteSyvDager}
        />
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
    </VStack>
  );
};
