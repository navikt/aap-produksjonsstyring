import { hentEnheter, hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService';
import { OppgaveKøMedOppgaver } from 'components/oppgave/oppgavekømedoppgaver/OppgaveKøMedOppgaver';
import { Kort } from 'components/kort/Kort';
import { OppgaveTabell } from 'components/oppgave/oppgavetabell/OppgaveTabell';

const Page = async () => {
  const køer = await hentKøer();
  const enheter = await hentEnheter();
  const mineOppgaver = await hentMineOppgaver();
  return (
    <div>
      <OppgaveKøMedOppgaver køer={køer} enheter={enheter} />
      <Kort>
        <OppgaveTabell
          heading={'Mine oppgaver'}
          oppgaver={mineOppgaver || []}
          showBehandleKnapp
          showDropdownActions
          showSortAndFilters
        />
      </Kort>
    </div>
  );
};

export default Page;
