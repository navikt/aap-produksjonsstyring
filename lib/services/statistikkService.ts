import { fetchProxy } from './fetchProxy';

const statistikkApiBaseURL = process.env.BEHANDLING_API_BASE_URL;
const statistikkApiScope = process.env.BEHANDLING_API_SCOPE ?? '';

interface BehandlingtidPerDag {
  dag: string;
  snitt: number;
}

export const hentBehandlingsTidPerDag = async (behandlingType: string | null) => {
  const url = `${statistikkApiBaseURL}behandlingstid/${behandlingType || '{typeBehandling}'}`;
  return await fetchProxy<BehandlingtidPerDag[]>(url, statistikkApiScope, 'GET');
};
