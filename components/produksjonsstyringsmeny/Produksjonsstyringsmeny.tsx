'use client';

import { Tabs } from '@navikt/ds-react';
import { ReactNode } from 'react';
import styles from './Produksjonsstyringsmeny.module.css';

interface Props {
  totaloversikt: ReactNode;
  produktivitet: ReactNode;
  oppgaver: ReactNode;
}
export const Produksjonsstyringsmeny = ({ totaloversikt, produktivitet, oppgaver }: Props) => {
  return (
    <Tabs defaultValue="total" fill className={styles.produksjonsstyringsmeny}>
      <Tabs.List>
        <Tabs.Tab value="total" label="Totaloversikt" />
        <Tabs.Tab value="produktivitet" label="Produktivitet" />
        <Tabs.Tab value="oppgaver" label="Oppgaver" />
      </Tabs.List>
      <Tabs.Panel value="total">{totaloversikt}</Tabs.Panel>
      <Tabs.Panel value="produktivitet">{produktivitet}</Tabs.Panel>
      <Tabs.Panel value="oppgaver">{oppgaver}</Tabs.Panel>
    </Tabs>
  );
};
