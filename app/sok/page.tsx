import { OppgaveAdministrasjon } from 'components/oppgave/oppgaveadministrasjon/OppgaveAdministrasjon';
import { hentKøer } from 'lib/services/oppgaveService';

const Page = async () => {
  const køer = await hentKøer();
  return <OppgaveAdministrasjon køer={køer} />;
};

export default Page;
