import '@navikt/ds-css';
import 'styles/globals.css';

import { hentBrukerInformasjon, logError, verifyUserLoggedIn } from '@navikt/aap-felles-utils';
import { AppHeader } from 'components/appheader/AppHeader';

export const metadata = {
  title: 'Kelvin',
  description: 'Saksbehandlingssystem for AAP',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  try {
    await verifyUserLoggedIn();
  } catch (err) {
    logError('verifyUserLoggedIn', err);
  }
  const brukerInformasjon = await hentBrukerInformasjon();

  return (
    <html lang="nb">
      <body>
        <AppHeader brukerInformasjon={brukerInformasjon} />
        {children}
      </body>
    </html>
  );
}
