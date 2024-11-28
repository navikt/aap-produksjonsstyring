import { fetchProxy } from './fetchProxy';
import {
  BehandlingPerAvklaringsbehov,
  AntallÅpneOgGjennomsnitt,
  BehandlingEndringerPerDag,
  FordelingÅpneBehandlinger,
  VenteÅrsakOgGjennomsnitt,
  BehandlingPerSteggruppe,
  FilterTidsEnhet,
  BehandlingstidPerDagDTO,
} from 'lib/types/types';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';
function appendBehandlingsTyper(url: string, behandlingstyper: string[] = [], isFirstQueryParam: boolean = true) {
  if (!behandlingstyper.length) {
    return url;
  }
  const behandlingstyperString = behandlingstyper
    .map((type) => `behandlingstyper=${encodeURIComponent(type)}`)
    .join('&');

  return isFirstQueryParam ? `${url}?${behandlingstyperString}` : `${url}&${behandlingstyperString}`;
}

export const hentBehandlingsTidPerDag = async (behandlingTyper: Array<string> = []) => {
  const url = appendBehandlingsTyper(`${statistikkApiBaseURL}/behandlingstid`, behandlingTyper);
  return await fetchProxy<BehandlingstidPerDagDTO[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlinger = async (behandlingstyper: Array<string> = []) => {
  const url = appendBehandlingsTyper(`${statistikkApiBaseURL}/åpne-behandlinger`, behandlingstyper);
  return await fetchProxy<AntallÅpneOgGjennomsnitt>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async (behandlingstyper: Array<string> = []) => {
  const url = appendBehandlingsTyper(`${statistikkApiBaseURL}/behandling-per-avklaringsbehov`, behandlingstyper);

  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};

export const hentBehandlingerUtvikling = async (
  antallDager: string | null = '0',
  behandlingstyper: Array<string> = []
) => {
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/utvikling?antallDager=${antallDager}`,
    behandlingstyper,
    false
  );

  return await fetchProxy<Array<BehandlingEndringerPerDag>>(url, statistikkApiScope, 'GET');
};

export const hentGjennomsnittligAlderLukkedeBehandlingerSisteDager = async (
  antallDager: number,
  behandlingstyper: Array<string> = []
) => {
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlingstid/lukkede-siste-dager/${antallDager}`,
    behandlingstyper
  );

  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};

export async function hentFordelingÅpneBehandlinger(
  enhet: FilterTidsEnhet,
  antallBøtter: string | null,
  bøtteStørrelse: string | null,
  behandlingstyper: Array<string> = []
) {
  const antallBøtterString = `antallBøtter=${antallBøtter || 20}`;
  const bøtteStørreleString = `bøtteStørrelse=${bøtteStørrelse || 1}`;
  const enhetString = `enhet=${enhet || 'UKE'}`;
  const queryString = encodeURI(`${antallBøtterString}&${bøtteStørreleString}&${enhetString}`);
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/fordeling-åpne-behandlinger?${queryString}`,
    behandlingstyper,
    false
  );
  console.log('åpne', url);
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentFordelingLukkedeBehandlinger(
  enhet: FilterTidsEnhet,
  antallBøtter: string | null,
  bøtteStørrelse: string | null,
  behandlingstyper: Array<string> = []
) {
  const antallBøtterString = `antallBøtter=${antallBøtter || 20}`;
  const bøtteStørreleString = `bøtteStørrelse=${bøtteStørrelse || 1}`;
  const enhetString = `enhet=${enhet || 'UKE'}`;
  const queryString = encodeURI(`${antallBøtterString}&${bøtteStørreleString}&${enhetString}`);
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/fordeling-lukkede-behandlinger?${queryString}`,
    behandlingstyper,
    false
  );

  console.log('lukkede', url);
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentVenteÅrsakerForBehandlingerPåVent(behandlingstyper: Array<string> = []) {
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/${encodeURIComponent('på-vent')}`,
    behandlingstyper
  );
  return await fetchProxy<Array<VenteÅrsakOgGjennomsnitt>>(url, statistikkApiScope, 'GET');
}

export async function hentAntallBehandlingerPerSteggruppe(behandlingstyper: Array<string> = []) {
  const url = appendBehandlingsTyper(`${statistikkApiBaseURL}/behandling-per-steggruppe`, behandlingstyper);
  return await fetchProxy<Array<BehandlingPerSteggruppe>>(url, statistikkApiScope, 'GET');
}
