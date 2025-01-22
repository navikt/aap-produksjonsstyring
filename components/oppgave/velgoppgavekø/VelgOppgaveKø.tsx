'use client';
import { BodyShort, Button, Heading, HStack, Label, Select, VStack } from '@navikt/ds-react';

import styles from './VelgOppgaveKø.module.css';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Enhet, Kø } from 'lib/types/types';
import { plukkNesteOppgaveClient } from 'lib/services/client';
import { buildSaksbehandlingsURL } from 'lib/utils/request';

interface Props {
  køer: Kø[];
  valgtKøListener?: Dispatch<SetStateAction<number>>;
  enheter: Enhet[];
  valgtEnhetListener?: Dispatch<SetStateAction<string>>;
}

export const VelgOppgaveKø = ({ køer, valgtKøListener, enheter, valgtEnhetListener }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const [aktivEnhet, setAktivEnhet] = useState<string | undefined>(enheter[0]?.enhetNr);
  async function plukkOgGåTilOppgave() {
    if (aktivEnhet) {
      const nesteOppgave = await plukkNesteOppgaveClient(aktivKø, aktivEnhet);
      if (nesteOppgave) {
        console.log('plukket oppgave:', nesteOppgave);
        window.location.assign(buildSaksbehandlingsURL(nesteOppgave.avklaringsbehovReferanse));
      }
    }
  }
  const aktivKøBeskrivelse = useMemo(() => køer.find((e) => e.id === aktivKø)?.beskrivelse, [aktivKø, køer]);
  return (
    <VStack gap={'4'}>
      <Heading level="2" size="medium">
        Oppgavekø
      </Heading>
      <HStack>
        <Select
          label="Velg enhet"
          size="small"
          value={aktivEnhet}
          onChange={(event) => {
            const enhet = event.target.value;
            if (enhet) {
              setAktivEnhet(enhet);
              valgtEnhetListener && valgtEnhetListener(enhet);
            }
          }}
        >
          {enheter.map((enhet) => {
            if (enhet) {
              return (
                <option key={enhet.enhetNr} value={enhet.enhetNr}>
                  {enhet.navn}
                </option>
              );
            }
          })}
        </Select>
      </HStack>
      <div className={styles.container}>
        <div className={styles.column}>
          <Select
            label="Velg oppgavekø"
            size="small"
            description="Du jobber på følgende kø"
            value={aktivKø}
            onChange={(event) => {
              const køId = parseInt(event.target.value);
              setAktivKø(køId);
              valgtKøListener && valgtKøListener(køId);
            }}
          >
            {køer.map((kø) => {
              if (kø) {
                return (
                  <option key={kø.id} value={`${kø.id}`}>
                    {kø.navn}
                  </option>
                );
              }
            })}
          </Select>

          <div>
            <Button size="small" onClick={() => plukkOgGåTilOppgave()}>
              Behandle neste oppgave
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <Label as="p" spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort spacing>{aktivKøBeskrivelse}</BodyShort>
        </div>
      </div>
    </VStack>
  );
};
