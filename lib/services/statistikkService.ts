import { fetchProxy } from './fetchProxy';
import { BehandlingPerAvklaringsbehov, BehandlingstidPerDagDTO, AntallBehandlinger } from 'lib/types/types';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';


export const hentBehandlingsTidPerDag = async (behandlingType: string | null) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/${behandlingType || '{typeBehandling}'}`;
  return await fetchProxy<BehandlingstidPerDagDTO[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅoneBehandlinger = async () => {
  const url = `${statistikkApiBaseURL}/åpne-behandlinger`;
  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async () => {
  const url = `${statistikkApiBaseURL}/behandling-per-avklaringsbehov`;
  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};

export const hentBehandlingerUtvikling = async () => {
  const url = `${statistikkApiBaseURL}/behandlinger/utvikling`;
  return await fetchProxy<Record<string, AntallBehandlinger>>(url, statistikkApiScope, 'GET')
}
