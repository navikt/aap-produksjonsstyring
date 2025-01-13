import { fetchProxy } from './fetchProxy';
import { isLocal } from 'lib/utils/environment';
import { AvklaringsbehovKode, Enhet, Kø, Oppgave, OppgaveBehandlingstype } from 'lib/types/types';
import {
  NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus,
} from '@navikt/aap-oppgave-typescript-types';

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
        enhet: 'HKLP',
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
        enhet: 'HFII',
      },
    ];
  }
  const url = `${oppgaveApiBaseURL}/oppgaveliste`;
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

export async function hentEnheter() {
  if (isLocal()) {
    return [
      { enhetNr: 'FKSH', navn: 'Enhet en' },
      { enhetNr: 'AHFG', navn: 'Enhet to' },
      { enhetNr: 'HDMM', navn: 'Enhet tre' },
    ];
  }
  const url = `${oppgaveApiBaseURL}/enheter`;
  return await fetchProxy<Array<Enhet>>(url, oppgaveApiScope, 'GET');
}
export async function oppgaveSøk(
  avklaringsbehovKoder: AvklaringsbehovKode[],
  behandlingstyper: OppgaveBehandlingstype[],
  enheter: string[]
) {
  if (isLocal()) {
    return [
      {
        avklaringsbehovKode: '9003',
        behandlingOpprettet: '2025-01-06T12:36:44.716229',
        behandlingRef: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        behandlingstype: 'FØRSTEGANGSBEHANDLING',
        id: 0,
        journalpostId: 123,
        status: 'OPPRETTET',
        versjon: 0,
        opprettetTidspunkt: '09-12-2024',
      },
      {
        avklaringsbehovKode: '5001',
        behandlingOpprettet: '2025-01-06T12:36:44.716229',
        behandlingRef: '34fdsff-5717-4562-b3fc-2c963f66afa6',
        behandlingstype: 'FØRSTEGANGSBEHANDLING',
        id: 1,
        journalpostId: 234,
        status: 'OPPRETTET',
        versjon: 0,
        opprettetTidspunkt: '09-01-2025',
      },
    ];
  }
  const url = `${oppgaveApiBaseURL}/oppgavesok`;
  return await fetchProxy<Array<Oppgave>>(url, oppgaveApiScope, 'POST', {
    avklaringsbehovKoder,
    behandlingstyper,
    enheter,
  });
}
