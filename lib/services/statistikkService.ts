import { fetchProxy } from './fetchProxy';
import {
  BehandlingPerAvklaringsbehov,
  BehandlingstidPerDagDTO,
  AntallÅpneOgGjennomsnitt,
  BehandlingEndringerPerDag,
  FordelingÅpneBehandlinger,
  VenteÅrsakOgGjennomsnitt,
  BehandlingPerSteggruppe,
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

export const hentBehandlingsTidPerDag = async (behandlingType: string | null) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/${behandlingType || '{typeBehandling}'}`;

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

export const hentBehandlingerUtvikling = async (antallDager: number = 0, behandlingstyper: Array<string> = []) => {
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
  enhet: 'DAG' | 'UKE' | 'MÅNED' | 'ÅR',
  antallBøtter: number,
  bøtteStørrelse: number,
  behandlingstyper: Array<string> = []
) {
  const antallBøtterString = encodeURIComponent(`antallBøtter=${antallBøtter}`);
  const bøtteStørreleString = encodeURIComponent(`bøtteStørrelse=${bøtteStørrelse}`);
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/fordeling-åpne-behandlinger?${antallBøtterString}&${bøtteStørreleString}&enhet=${enhet}`,
    behandlingstyper,
    false
  );

  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentFordelingLukkedeBehandlinger(
  enhet: 'DAG' | 'UKE' | 'MÅNED' | 'ÅR',
  antallBøtter: number,
  bøtteStørrelse: number,
  behandlingstyper: Array<string> = []
) {
  const antallBøtterString = encodeURIComponent(`antallBøtter=${antallBøtter}`);
  const bøtteStørreleString = encodeURIComponent(`bøtteStørrelse=${bøtteStørrelse}`);
  const url = appendBehandlingsTyper(
    `${statistikkApiBaseURL}/behandlinger/fordeling-lukkede-behandlinger?${antallBøtterString}&${bøtteStørreleString}&enhet=${enhet}`,
    behandlingstyper,
    false
  );

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
