import { ValgteEnheterProvider } from 'components/valgteenheterprovider/ValgteEnheterProvider';
import { ProduksjonsstyringsHeader } from 'components/produksjonsstyringsheader/ProduksjonsstyringsHeader';
import { hentEnheter } from 'lib/services/oppgaveService';
import styles from './layout.module.css';

export const metadata = {
  title: 'Kelvin - Produksjonsstyring',
  description: 'Saksbehandlingssystem for AAP',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const enheter = await hentEnheter();

  return (
    <div className={styles.body}>
      <ValgteEnheterProvider>
        <ProduksjonsstyringsHeader enheter={enheter} />
        {children}
      </ValgteEnheterProvider>
    </div>
  );
}
