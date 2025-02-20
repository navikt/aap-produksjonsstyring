import '@navikt/ds-css';
import styles from './layout.module.css';
import '@navikt/aap-felles-css';

import { BrukerInformasjon, hentBrukerInformasjon, logError } from '@navikt/aap-felles-utils';
import { KelvinAppHeader } from '@navikt/aap-felles-react/cjs/KelvinAppHeader/KelvinAppHeader';

export const metadata = {
  title: 'Kelvin - Oppgave',
  description: 'Saksbehandlingssystem for AAP',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let brukerInformasjon: BrukerInformasjon;
  try {
    brukerInformasjon = await hentBrukerInformasjon();
  } catch (err) {
    logError('rootlayout', err);
    throw err;
  }

  return (
    <html lang="nb">
      <body className={styles.body}>
        <KelvinAppHeader brukerInformasjon={brukerInformasjon} />
        {children}
      </body>
    </html>
  );
}
