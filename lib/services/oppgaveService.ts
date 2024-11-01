import { fetchProxy } from './fetchProxy';
import { isLocal } from 'lib/utils/environment';

const oppgaveApiBaseURL = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';

export async function hentAntallOppgaver(behandlingstype: string) {
  if (isLocal())
    return {
      '5001': 6,
      '5003': 51,
      '5006': 10,
      '5007': 2,
      '5008': 1,
      '5009': 3,
      '5010': 2,
      '5011': 4,
      '5097': 1,
      '5098': 29,
      '5099': 5,
    };
  const url = `${oppgaveApiBaseURL}/produksjonsstyring/antall-oppgaver`;
  return await fetchProxy<Record<string, number>>(url, oppgaveApiScope, 'POST', { behandlingstype });
}
