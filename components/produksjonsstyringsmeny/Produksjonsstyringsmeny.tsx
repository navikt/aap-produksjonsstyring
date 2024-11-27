'use client';

import { Tabs } from '@navikt/ds-react';
import { ReactNode } from 'react';
import styles from './Produksjonsstyringsmeny.module.css';

interface Props {
  totaloversikt: ReactNode;
  minenhet: ReactNode;
  produktivitet: ReactNode;
  oppgaver: ReactNode;
}
export const Produksjonsstyringsmeny = ({ totaloversikt, minenhet }: Props) => {
  return (
    <Tabs defaultValue="total" fill className={styles.produksjonsstyringsmeny}>
      <Tabs.List>
        <Tabs.Tab value="total" label="Totaloversikt" />
        <Tabs.Tab value="min-enhet" label="Min enhet" />
        {/*<Tabs.Tab value="produktivitet" label="Produktivitet" />*/}
        {/*<Tabs.Tab value="oppgaver" label="Oppgaver" />*/}
      </Tabs.List>
      <Tabs.Panel value="total">{totaloversikt}</Tabs.Panel>
      <Tabs.Panel value="min-enhet">{minenhet}</Tabs.Panel>
      {/*<Tabs.Panel value="produktivitet">{produktivitet}</Tabs.Panel>*/}
      {/*<Tabs.Panel value="oppgaver">{oppgaver}</Tabs.Panel>*/}
    </Tabs>
  );
};
