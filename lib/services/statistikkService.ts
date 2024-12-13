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
import { statistikkQueryparams } from 'lib/utils/request';
import { BehandlingsTyperOption } from 'lib/utils/behandlingstyper';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';

export const hentBehandlingsTidPerDag = async (behandlingstyper: Array<BehandlingsTyperOption> = []) => {
  const url = `${statistikkApiBaseURL}/behandlingstid?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<BehandlingstidPerDagDTO[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerBehandlingstype = async (
  behandlingstyper: Array<BehandlingsTyperOption> = []
) => {
  const url = `${statistikkApiBaseURL}/åpne-behandlinger-per-behandlingstype?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<Array<AntallÅpneOgGjennomsnitt>>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async (
  behandlingstyper: Array<BehandlingsTyperOption> = []
) => {
  const url = `${statistikkApiBaseURL}/behandling-per-avklaringsbehov?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};

export const hentBehandlingerUtvikling = async (
  antallDager?: number,
  behandlingstyper: Array<BehandlingsTyperOption> = []
) => {
  const antallDagerEllerNull = antallDager || 0;
  const url = `${statistikkApiBaseURL}/behandlinger/utvikling?${statistikkQueryparams({ behandlingstyper, antallDager: antallDagerEllerNull })}`;
  return await fetchProxy<Array<BehandlingEndringerPerDag>>(url, statistikkApiScope, 'GET');
};

export const hentGjennomsnittligAlderLukkedeBehandlingerSisteDager = async (
  antallDager: number,
  behandlingstyper: Array<BehandlingsTyperOption> = []
) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/lukkede-siste-dager/${antallDager}?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};

export async function hentFordelingÅpneBehandlinger(
  enhet?: FilterTidsEnhet,
  antallBøtter?: number,
  bøtteStørrelse?: number,
  behandlingstyper: Array<BehandlingsTyperOption> = []
) {
  const antallBøtterEllerDefault = antallBøtter || 20;
  const bøtteStørreleEllerDefault = bøtteStørrelse || 1;
  const enhetEllerDefault = enhet || 'UKE';
  const url = `${statistikkApiBaseURL}/behandlinger/fordeling-åpne-behandlinger?${statistikkQueryparams({ behandlingstyper, antallBøtter: antallBøtterEllerDefault, bøtteStørrelse: bøtteStørreleEllerDefault, enhet: enhetEllerDefault })}`;
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentFordelingLukkedeBehandlinger(
  enhet?: FilterTidsEnhet,
  antallBøtter?: number,
  bøtteStørrelse?: number,
  behandlingstyper: Array<BehandlingsTyperOption> = []
) {
  const antallBøtterEllerDefault = antallBøtter || 20;
  const bøtteStørreleEllerDefault = bøtteStørrelse || 1;
  const enhetEllerDefault = enhet || 'UKE';
  const url = `${statistikkApiBaseURL}/behandlinger/fordeling-lukkede-behandlinger?${statistikkQueryparams({ behandlingstyper, antallBøtter: antallBøtterEllerDefault, bøtteStørrelse: bøtteStørreleEllerDefault, enhet: enhetEllerDefault })}`;
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}

export async function hentVenteÅrsakerForBehandlingerPåVent(behandlingstyper: Array<BehandlingsTyperOption> = []) {
  const url = `${statistikkApiBaseURL}/behandlinger/${encodeURIComponent('på-vent')}?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<Array<VenteÅrsakOgGjennomsnitt>>(url, statistikkApiScope, 'GET');
}

export async function hentAntallBehandlingerPerSteggruppe(behandlingstyper: Array<BehandlingsTyperOption> = []) {
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
  const url = `${statistikkApiBaseURL}/behandling-per-steggruppe?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<Array<BehandlingPerSteggruppe>>(url, statistikkApiScope, 'GET');
}

export const hentÅrsakTilBehandling = async (behandlingstyper: Array<BehandlingsTyperOption> = []) => {
  const url = `${statistikkApiBaseURL}/behandlinger/årsak-til-behandling?${statistikkQueryparams({ behandlingstyper })}`;
  return await fetchProxy<BehandlingÅrsakAntallGjennomsnitt[]>(url, statistikkApiScope, 'GET');
};
