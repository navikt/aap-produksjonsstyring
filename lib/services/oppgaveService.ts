import { fetchProxy } from './fetchProxy';

const oppgaveApiBaseURL = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';

export async function hentAntallOppgaver() {
  const url = `${oppgaveApiBaseURL}/produksjonsstyring/antall-oppgaver`;
  return await fetchProxy<Record<string, number>>(url, oppgaveApiScope, 'GET');
}
