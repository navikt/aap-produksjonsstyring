'use client';

import { Tabs } from '@navikt/ds-react';
import { ReactNode } from 'react';
import styles from './Produksjonsstyringsmeny.module.css';

interface Props {
  produktivitet: ReactNode;
  oppgaver: ReactNode;
}
export const Produksjonsstyringsmeny = ({ produktivitet, oppgaver }: Props) => {
  return (
    <Tabs defaultValue="produktivitet" fill className={styles.produksjonsstyringsmeny}>
      <Tabs.List>
        <Tabs.Tab value="nå" label="Nåsituasjon" />
        <Tabs.Tab value="produktivitet" label="Produktivitet" />
      </Tabs.List>
      <Tabs.Panel value="nå">{oppgaver}</Tabs.Panel>
      <Tabs.Panel value="produktivitet">{produktivitet}</Tabs.Panel>
    </Tabs>
  );
};
