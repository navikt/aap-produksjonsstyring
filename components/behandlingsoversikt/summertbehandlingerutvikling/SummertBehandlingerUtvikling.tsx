import { BodyShort, HStack, Label } from '@navikt/ds-react';
import styles from 'components/behandlingsoversikt/Behandlingsoversikt.module.css';
import { useMemo } from 'react';
import { BehandlingEndringerPerDag } from 'lib/types/types';
import { sekunderTilDager } from 'lib/utils/time';
interface Props {
  behandlingerUtvikling: Array<BehandlingEndringerPerDag>;
  alderLukkedeSisteSyvDager: number;
}
export const SummertBehandlingerUtvikling = ({ behandlingerUtvikling, alderLukkedeSisteSyvDager }: Props) => {
  const sumNyeBehandlinger = useMemo(
    () => behandlingerUtvikling.reduce((acc: number, curr: BehandlingEndringerPerDag) => acc + curr.nye, 0),
    [behandlingerUtvikling]
  );
  const sumAvsluttedeBehandlinger = useMemo(
    () => behandlingerUtvikling.reduce((acc: number, curr: BehandlingEndringerPerDag) => acc + curr.avsluttede, 0),
    [behandlingerUtvikling]
  );
  return (
    <HStack className={styles.behandlingerOppsummert} gap={'9'}>
      <div>
        <BodyShort size={'large'}>{sekunderTilDager(alderLukkedeSisteSyvDager)} dager</BodyShort>
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
  );
};
