import { fetchProxy } from './fetchProxy';
import {
  BehandlingPerAvklaringsbehov,
  BehandlingstidPerDagDTO,
  AntallÅpneOgGjennomsnitt,
  BehandlingEndringerPerDag,
  FordelingÅpneBehandlinger,
} from 'lib/types/types';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';

export const hentBehandlingsTidPerDag = async (behandlingType: string | null) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/${behandlingType || '{typeBehandling}'}`;
  return await fetchProxy<BehandlingstidPerDagDTO[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlinger = async () => {
  const url = `${statistikkApiBaseURL}/åpne-behandlinger`;
  return await fetchProxy<AntallÅpneOgGjennomsnitt>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async () => {
  const url = `${statistikkApiBaseURL}/behandling-per-avklaringsbehov`;
  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};

export const hentBehandlingerUtvikling = async (antallDager: number = 0) => {
  const url = `${statistikkApiBaseURL}/behandlinger/utvikling?antallDager=${antallDager}`;

  return await fetchProxy<Array<BehandlingEndringerPerDag>>(url, statistikkApiScope, 'GET');
};

export const hentGjennomsnittligAlderLukkedeBehandlingerSisteDager = async (antallDager: number) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/lukkede-siste-dager/${antallDager}`;
  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};

export async function hentFordelingÅpneBehandlinger() {
  const url = `${statistikkApiBaseURL}/behandlinger/fordeling-åpne-behandlinger`;
  return await fetchProxy<Array<FordelingÅpneBehandlinger>>(url, statistikkApiScope, 'GET');
}
