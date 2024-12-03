import { fetchProxy } from './fetchProxy';
import { isLocal } from 'lib/utils/environment';
import { Kø, Oppgave } from 'lib/types/types';
import { NoNavAapOppgaveOppgaveDtoBehandlingstype, NoNavAapOppgaveOppgaveDtoStatus } from 'lib/types/schema-oppgave';

const oppgaveApiBaseURL = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';

export const hentKøer = async (): Promise<Kø[]> => {
  if (isLocal()) {
    return [
      // @ts-ignore
      { navn: 'Kø en', id: 0, beskrivelse: 'Beskrivelse for kø en' },
      // @ts-ignore
      { navn: 'Kø to', id: 1, beskrivelse: 'Beskrivelse for kø to' },
    ];
  }
  const url = `${oppgaveApiBaseURL}/filter`;
  return await fetchProxy<Kø[]>(url, oppgaveApiScope, 'GET');
};
export const hentOppgaverForFilter = async (filterId: number): Promise<Oppgave[]> => {
  if (isLocal()) {
    return [
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: `behandlingref-12`,
        behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.F_RSTEGANGSBEHANDLING,
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-1`,
        status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
        versjon: 2,
      },
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.KLAGE,
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-2`,
        status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
        versjon: 2,
      },
    ];
  }
  const url = `${oppgaveApiBaseURL}/hent-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'POST', { filterId });
};
export async function hentAntallOppgaver(behandlingstype?: string) {
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
  return await fetchProxy<Record<string, number>>(url, oppgaveApiScope, 'POST', {
    behandlingstype: behandlingstype || null,
  });
}
