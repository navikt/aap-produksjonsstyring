import '@navikt/ds-css';
import styles from './layout.module.css';
import { BrukerInformasjon, hentBrukerInformasjon, logError, verifyUserLoggedIn } from '@navikt/aap-felles-utils';
import { AppHeader } from 'components/appheader/AppHeader';
import { ValgteEnheterProvider } from 'components/valgteenheterprovider/ValgteEnheterProvider';
import { ProduksjonsstyringsHeader } from 'components/produksjonsstyringsheader/ProduksjonsstyringsHeader';
import { hentEnheter } from 'lib/services/oppgaveService';

export const metadata = {
  title: 'Kelvin - Produksjonsstyring',
  description: 'Saksbehandlingssystem for AAP',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const enheter = await hentEnheter();
  let brukerInformasjon: BrukerInformasjon;
  try {
    await verifyUserLoggedIn();
    brukerInformasjon = await hentBrukerInformasjon();
  } catch (err) {
    logError('rootlayout', err);
    throw err;
  }

  return (
    <html lang="nb">
      <body className={styles.body}>
        <AppHeader brukerInformasjon={brukerInformasjon} />
        <ValgteEnheterProvider>
          <ProduksjonsstyringsHeader enheter={enheter} />
          {children}
        </ValgteEnheterProvider>
      </body>
    </html>
  );
}
