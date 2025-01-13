import {
  AntallÅpneOgGjennomsnitt,
  AvklaringsbehovKode,
  BehandlingEndringerPerDag,
  BehandlingPerSteggruppe,
  BehandlingÅrsakAntallGjennomsnitt,
  FordelingLukkedeBehandlinger,
  FordelingÅpneBehandlinger,
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
export async function hentOppgaverClient(filterId: number) {
  return clientFetcher<Oppgave[]>('/api/oppgave/oppgaveliste', 'POST', { filterId });
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
