'use client';

import { HGrid, Tabs } from '@navikt/ds-react';
import { ReactNode } from 'react';
import styles from './Produksjonsstyringsmeny.module.css';
import { FilterSamling } from 'components/filtersamling/FilterSamling';
import { AlleFiltereProvider } from 'components/allefiltereprovider/AlleFiltereProvider';

interface Props {
  totaloversikt: ReactNode;
  minenhet: ReactNode;
  produktivitet: ReactNode;
  oppgaveOversikt: ReactNode;
}
export const Produksjonsstyringsmeny = ({ totaloversikt, minenhet, oppgaveOversikt }: Props) => {
  return (
    <AlleFiltereProvider>
      <HGrid columns={'1fr 6fr'}>
        <FilterSamling />
        <Tabs defaultValue="total" fill className={styles.produksjonsstyringsmeny}>
          <Tabs.List>
            <Tabs.Tab value="total" label="Totaloversikt" />
            <Tabs.Tab value="min-enhet" label="Min enhet" />
            <Tabs.Tab value="køer" label="Køer" />
            {/*<Tabs.Tab value="produktivitet" label="Produktivitet" />*/}
            {/*<Tabs.Tab value="oppgaver" label="Oppgaver" />*/}
          </Tabs.List>
          <Tabs.Panel value="total">{totaloversikt}</Tabs.Panel>
          <Tabs.Panel value="min-enhet">{minenhet}</Tabs.Panel>
          <Tabs.Panel value="køer">{oppgaveOversikt}</Tabs.Panel>
          {/*<Tabs.Panel value="produktivitet">{produktivitet}</Tabs.Panel>*/}
          {/*<Tabs.Panel value="oppgaver">{oppgaver}</Tabs.Panel>*/}
        </Tabs>
      </HGrid>
    </AlleFiltereProvider>
  );
};
