import { hentEnheter, hentKøer } from 'lib/services/oppgaveService';
import { EndreKø } from 'components/oppgave/endrekø/EndreKø';

const Page = async (props: { params: Promise<{ filterid: string }> }) => {
  const køer = await hentKøer();
  const enheter = await hentEnheter();
  const params = await props.params;
  const filterId = parseInt(params.filterid);
  console.log('PARAMS', params);

  return <EndreKø køer={køer} enheter={enheter} valgtFilterId={filterId} />;
};

export default Page;
