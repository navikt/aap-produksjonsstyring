import { fetchProxy } from './fetchProxy';

const statistikkApiBaseURL = process.env.STATISTIKK_API_BASE_URL;
const statistikkApiScope = process.env.STATISTIKK_API_SCOPE ?? '';

interface BehandlingtidPerDag {
  dag: string;
  snitt: number;
}

interface BehandlingPerAvklaringsbehov {
  antall: number;
  behov: string;
}

export const hentBehandlingsTidPerDag = async (behandlingType: string | null) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/${behandlingType || '{typeBehandling}'}`;
  return await fetchProxy<BehandlingtidPerDag[]>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅoneBehandlinger = async () => {
  const url = `${statistikkApiBaseURL}/åpne-behandlinger`;
  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};

export const hentAntallÅpneBehandlingerPerAvklaringsbehov = async () => {
  const url = `${statistikkApiBaseURL}/behandling-per-avklaringsbehov`;
  return await fetchProxy<BehandlingPerAvklaringsbehov[]>(url, statistikkApiScope, 'GET');
};
