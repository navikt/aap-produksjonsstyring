import {
  AntallÅpneOgGjennomsnitt,
  AvklaringsbehovKode,
  AvklaringsbehovReferanse,
  BehandlingEndringerPerDag,
  BehandlingPerSteggruppe,
  BehandlingÅrsakAntallGjennomsnitt,
  FordelingLukkedeBehandlinger,
  FordelingÅpneBehandlinger,
  NesteOppgaveRequestBody,
  NesteOppgaveResponse,
  Oppgave,
  OppgaveBehandlingstype,
  OppgavelisteResponse,
  PlukkOppgaveDto,
  VenteÅrsakOgGjennomsnitt,
} from 'lib/types/types';
type ClientFetch<T> =
  | { type: 'loading' }
  | { type: 'success'; data: T }
  | { type: 'error'; status: number; message: string };
export async function clientFetcher<ResponseBody>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: object
): Promise<ClientFetch<ResponseBody>> {
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
    });

    if (res.ok) {
      const data: ResponseBody = await res.json();
      return { type: 'success', data };
    } else {
      return {
        type: 'error',
        status: res.status,
        message: res.statusText,
      };
    }
  } catch (e: any) {
    return {
      type: 'error',
      status: 5000,
      message: e?.message,
    };
  }
}

// statistikk
export async function antallÅpneBehandlingerPerBehandlingstypeClient(url: string) {
  return clientFetcher<Array<AntallÅpneOgGjennomsnitt>>(url, 'GET');
}

export async function behandlingerUtviklingClient(url: string) {
  return clientFetcher<Array<BehandlingEndringerPerDag>>(url, 'GET');
}

export async function fordelingÅpneBehandlingerClient(url: string) {
  return clientFetcher<Array<FordelingÅpneBehandlinger>>(url, 'GET');
}

export async function fordelingLukkedeBehandlingerClient(url: string) {
  return clientFetcher<Array<FordelingLukkedeBehandlinger>>(url, 'GET');
}

export async function venteÅrsakerClient(url: string) {
  return clientFetcher<Array<VenteÅrsakOgGjennomsnitt>>(url, 'GET');
}

export async function behandlingerPerSteggruppeClient(url: string) {
  return clientFetcher<Array<BehandlingPerSteggruppe>>(url, 'GET');
}

export async function årsakTilBehandlingClient(url: string) {
  return clientFetcher<Array<BehandlingÅrsakAntallGjennomsnitt>>(url, 'GET');
}

// oppgave
export async function hentOppgaverClient(filterId: number, enheter: string[], veileder: boolean) {
  return clientFetcher<OppgavelisteResponse>('/oppgave/api/oppgave/oppgaveliste', 'POST', {
    filterId,
    enheter,
    veileder,
  });
}
export async function avreserverOppgaveClient(oppgave: Oppgave) {
  const body: AvklaringsbehovReferanse = {
    avklaringsbehovKode: oppgave.avklaringsbehovKode,
    journalpostId: oppgave.journalpostId,
    saksnummer: oppgave.saksnummer,
    referanse: oppgave.behandlingRef,
  };
  return clientFetcher('/oppgave/api/oppgave/avreserver', 'POST', body);
}

export async function oppgavesokClient(
  avklaringsbehovKoder: AvklaringsbehovKode[],
  behandlingstyper: OppgaveBehandlingstype[],
  enheter: string[]
) {
  return clientFetcher<Oppgave[]>('/oppgave/api/oppgave/oppgavesok', 'POST', {
    avklaringsbehovKoder,
    behandlingstyper,
    enheter,
  });
}

// export async function lagOppgaveFilterClient(
//   avklaringsbehovKoder: AvklaringsbehovKode[],
//   behandlingstyper: OppgaveBehandlingstype[],
//   enheter: string[],
//   navn: string,
//   beskrivelse: string
// ) {
//   const payload: Kø = {
//     avklaringsbehovKoder,
//     behandlingstyper,
//     enheter,
//     navn,
//     beskrivelse,
//   };
//   return clientFetcher('/api/oppgave/filter', 'POST', { avklaringsbehovKoder });
// }

export async function plukkNesteOppgaveClient(filterId: number, aktivEnhet: string) {
  const payload: NesteOppgaveRequestBody = { filterId, enheter: [aktivEnhet || ''] };
  return await clientFetcher<NesteOppgaveResponse>('/oppgave/api/oppgave/neste', 'POST', payload);
}
export async function plukkOppgaveClient(oppgaveId: number, versjon: number) {
  const payload: PlukkOppgaveDto = { oppgaveId, versjon };
  return await clientFetcher<Oppgave>('/oppgave/api/oppgave/plukk-oppgave', 'POST', payload);
}
