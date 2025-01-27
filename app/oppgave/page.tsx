import { hentEnheter, hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService';
import { OppgaveKøMedOppgaver } from 'components/oppgave/oppgavekømedoppgaver/OppgaveKøMedOppgaver';
import { Kort } from 'components/kort/Kort';
import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';
import { VStack } from '@navikt/ds-react';

const Page = async () => {
  const køer = await hentKøer();
  const enheter = await hentEnheter();
  const mineOppgaver = await hentMineOppgaver();
  return (
    <VStack gap={'4'} padding={'4'}>
      <Kort>
        <OppgaveTabell
          heading={'Mine reserverte oppgaver'}
          oppgaver={mineOppgaver || []}
          showBehandleKnapp
          showDropdownActions
          showSortAndFilters
        />
      </Kort>
      <OppgaveKøMedOppgaver køer={køer} enheter={enheter} />
    </VStack>
  );
};

export default Page;
