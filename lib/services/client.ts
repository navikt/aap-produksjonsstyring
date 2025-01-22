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
  VenteÅrsakOgGjennomsnitt,
} from 'lib/types/types';

export async function clientFetcher<ResponseBody>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: object
): Promise<ResponseBody | undefined> {
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      console.error(data.message);
      return data || undefined;
    }
  } catch (e) {
    throw new Error('Noe gikk galt.');
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
export async function hentOppgaverClient(filterId: number, enheter: string[]) {
  return clientFetcher<Oppgave[]>('/api/oppgave/oppgaveliste', 'POST', { filterId, enheter });
}
export async function avreserverOppgaveClient(oppgave: Oppgave) {
  const body: AvklaringsbehovReferanse = {
    avklaringsbehovKode: oppgave.avklaringsbehovKode,
    journalpostId: oppgave.journalpostId,
    saksnummer: oppgave.saksnummer,
    referanse: oppgave.behandlingRef,
  };
  return clientFetcher('/api/oppgave/avreserver', 'POST', body);
}

export async function oppgavesokClient(
  avklaringsbehovKoder: AvklaringsbehovKode[],
  behandlingstyper: OppgaveBehandlingstype[],
  enheter: string[]
) {
  return clientFetcher<Oppgave[]>('/api/oppgave/oppgavesok', 'POST', {
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
  return await clientFetcher<NesteOppgaveResponse>('/api/oppgave/neste', 'POST', payload);
}
