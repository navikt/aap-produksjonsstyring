import {
  AntallÅpneOgGjennomsnitt,
  BehandlingEndringerPerDag,
  BehandlingPerSteggruppe,
  FordelingLukkedeBehandlinger,
  FordelingÅpneBehandlinger,
  VenteÅrsakOgGjennomsnitt,
} from 'lib/types/types';

async function clientFetcher<ResponseBody>(
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
