'use client';

import { BrukerInformasjon } from '@navikt/aap-felles-utils';
import { InternalHeader, Link } from '@navikt/ds-react';

import styles from 'components/appheader/AppHeader.module.css';
import { Brukermeny } from 'components/brukermeny/Brukermeny';

const AppHeader = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <InternalHeader className={styles.header}>
    <div className={styles.leftSide}>
      <InternalHeader.Title href="/">Kelvin</InternalHeader.Title>
      <Link href={'/saksoversikt'}>Saksoversikt</Link>
    </div>

    <Brukermeny brukerInformasjon={brukerInformasjon} />
  </InternalHeader>
);

export { AppHeader };
