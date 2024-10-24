'use client';

import { BrukerInformasjon } from '@navikt/aap-felles-utils';
import styles from 'components/appheader/AppHeader.module.css';
import { Dropdown, InternalHeader } from '@navikt/ds-react';
import Link from 'next/link';

export const Brukermeny = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <Dropdown>
    <InternalHeader.UserButton name={brukerInformasjon.navn} as={Dropdown.Toggle} />
    <Dropdown.Menu>
      <Dropdown.Menu.List>
        <Dropdown.Menu.List.Item>
          <Link href={'/oauth2/logout'} className={styles.link}>
            Logg ut
          </Link>
        </Dropdown.Menu.List.Item>
      </Dropdown.Menu.List>
    </Dropdown.Menu>
  </Dropdown>
);
