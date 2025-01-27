import { fetchProxy } from './fetchProxy';
import { isLocal } from 'lib/utils/environment';
import {
  AvklaringsbehovKode,
  AvklaringsbehovReferanse,
  Enhet,
  Kø,
  NesteOppgaveRequestBody,
  NesteOppgaveResponse,
  Oppgave,
  OppgaveBehandlingstype,
} from 'lib/types/types';
import {
  NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus,
} from '@navikt/aap-oppgave-typescript-types';

const oppgaveApiBaseURL = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';
const oppgaveMock: Oppgave[] = [
  {
    avklaringsbehovKode: '9003',
    behandlingOpprettet: '2025-01-06T12:36:44.716229',
    behandlingRef: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.KLAGE,
    id: 0,
    journalpostId: 123,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 0,
    opprettetTidspunkt: '09-12-2024',
    enhet: 'NNDD',
    opprettetAv: 'ola',
    reservertAv: 'egil',
  },
  {
    avklaringsbehovKode: '9003',
    behandlingOpprettet: '2025-01-06T12:36:44.716229',
    behandlingRef: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.REVURDERING,
    id: 0,
    journalpostId: 123,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 0,
    opprettetTidspunkt: '09-12-2024',
    enhet: 'NNDD',
    opprettetAv: 'ola',
    reservertAv: 'trine',
  },
  {
    avklaringsbehovKode: '9003',
    behandlingOpprettet: '2025-01-06T12:36:44.716229',
    behandlingRef: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.F_RSTEGANGSBEHANDLING,
    id: 0,
    journalpostId: 123,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 0,
    opprettetTidspunkt: '09-12-2024',
    enhet: 'NNDD',
    opprettetAv: 'ola',
    reservertAv: 'tom',
  },
  {
    avklaringsbehovKode: '5001',
    behandlingOpprettet: '2025-01-06T12:36:44.716229',
    behandlingRef: '34fdsff-5717-4562-b3fc-2c963f66afa6',
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.F_RSTEGANGSBEHANDLING,
    id: 1,
    journalpostId: 234,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 0,
    opprettetTidspunkt: '09-01-2025',
    enhet: 'HGDI',
    opprettetAv: 'kari',
    reservertAv: 'jon',
  },
];

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
    return oppgaveMock;
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

export const hentMineOppgaver = async (): Promise<Oppgave[]> => {
  if (isLocal()) {
    return oppgaveMock;
  }
  const url = `${oppgaveApiBaseURL}/mine-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'GET', undefined, 'oppgaveservice/mine-oppgaver');
};

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
    return oppgaveMock;
  }
  const url = `${oppgaveApiBaseURL}/oppgavesok`;
  return await fetchProxy<Array<Oppgave>>(url, oppgaveApiScope, 'POST', {
    avklaringsbehovKoder,
    behandlingstyper,
    enheter,
  });
}
export async function avreserverOppgave(avklaringsbehovReferanse: AvklaringsbehovReferanse): Promise<unknown> {
  const url = `${oppgaveApiBaseURL}/avreserver-oppgave`;
  return await fetchProxy<unknown>(url, oppgaveApiScope, 'POST', avklaringsbehovReferanse);
}
export async function velgNesteOppgave({ filterId, enheter }: NesteOppgaveRequestBody): Promise<NesteOppgaveResponse> {
  if (isLocal()) {
    return {
      oppgaveId: 34534534,
      oppgaveVersjon: 3,
      avklaringsbehovReferanse: {
        avklaringsbehovKode: 'dfgdfgdfg',
        journalpostId: 1245,
        referanse: 'gasdgsdg',
        saksnummer: 'sdfa',
      },
    };
  }
  const url = `${oppgaveApiBaseURL}/neste-oppgave`;
  return await fetchProxy<NesteOppgaveResponse>(url, oppgaveApiScope, 'POST', { filterId, enheter });
}
export async function plukkOppgave(oppgaveId: number, versjon: number): Promise<Oppgave> {
  const url = `${oppgaveApiBaseURL}/plukk-oppgave`;
  return await fetchProxy<Oppgave>(url, oppgaveApiScope, 'POST', { oppgaveId, versjon });
}
