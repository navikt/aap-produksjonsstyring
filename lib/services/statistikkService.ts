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
  BehandlingÅrsakAntallGjennomsnitt,
} from 'lib/types/types';
import { isLocal } from 'lib/utils/environment';
import { queryParamsArray } from 'lib/utils/request';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';

export const hentBehandlingsTidPerDag = async (behandlingTyper: Array<string> = []) => {
  const url = `${statistikkApiBaseURL}/behandlingstid?${queryParamsArray('behandlingstyper', behandlingTyper)}`;
  return await fetchProxy<BehandlingstidPerDagDTO[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerBehandlingstype = async (behandlingstyper: Array<string> = []) => {
  const url = `${statistikkApiBaseURL}/åpne-behandlinger-per-behandlingstype?${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<Array<AntallÅpneOgGjennomsnitt>>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async (behandlingstyper: Array<string> = []) => {
  const url = `${statistikkApiBaseURL}/behandling-per-avklaringsbehov?${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};

export const hentBehandlingerUtvikling = async (antallDager: string | null, behandlingstyper: Array<string> = []) => {
  const antallDagerString = `antallDager=${antallDager || 0}`;
  const url = `${statistikkApiBaseURL}/behandlinger/utvikling?${antallDagerString}&${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<Array<BehandlingEndringerPerDag>>(url, statistikkApiScope, 'GET');
};

export const hentGjennomsnittligAlderLukkedeBehandlingerSisteDager = async (
  antallDager: number,
  behandlingstyper: Array<string> = []
) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/lukkede-siste-dager/${antallDager}&${queryParamsArray('behandlingstyper', behandlingstyper)}`;
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
  const url = `${statistikkApiBaseURL}/behandlinger/fordeling-åpne-behandlinger?${queryString}&${queryParamsArray('behandlingstyper', behandlingstyper)}`;
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
  const url = `${statistikkApiBaseURL}/behandlinger/fordeling-lukkede-behandlinger?${queryString}&${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentVenteÅrsakerForBehandlingerPåVent(behandlingstyper: Array<string> = []) {
  const url = `${statistikkApiBaseURL}/behandlinger/${encodeURIComponent('på-vent')}?${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<Array<VenteÅrsakOgGjennomsnitt>>(url, statistikkApiScope, 'GET');
}

export async function hentAntallBehandlingerPerSteggruppe(behandlingstyper: Array<string> = []) {
  if (isLocal()) {
    return [
      { steggruppe: 'ALDER', antall: 5 },
      { steggruppe: 'SYKDOM', antall: 5 },
      { steggruppe: 'MEDLEMSKAP', antall: 5 },
      { steggruppe: 'VEDTAK', antall: 5 },
      { steggruppe: 'BREV', antall: 5 },
      { steggruppe: 'STUDENT', antall: 5 },
    ];
  }
  const url = `${statistikkApiBaseURL}/behandling-per-steggruppe?${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<Array<BehandlingPerSteggruppe>>(url, statistikkApiScope, 'GET');
}

export const hentÅrsakTilBehandling = async (behandlingstyper: Array<string> = []) => {
  const url = `${statistikkApiBaseURL}/behandlinger/årsak-til-behandling?${queryParamsArray('behandlingstyper', behandlingstyper)}`;
  return await fetchProxy<BehandlingÅrsakAntallGjennomsnitt[]>(url, statistikkApiScope, 'GET');
};
