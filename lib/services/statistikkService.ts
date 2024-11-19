import { fetchProxy } from './fetchProxy';
import {
  BehandlingPerAvklaringsbehov,
  BehandlingstidPerDagDTO,
  AntallBehandlinger,
  AntallÅpneOgGjennomsnitt,
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

export const hentBehandlingerUtvikling = async () => {
  const url = `${statistikkApiBaseURL}/behandlinger/utvikling?antallDager=7`;
  return await fetchProxy<Record<string, AntallBehandlinger>>(url, statistikkApiScope, 'GET');
};

export const hentGjennomsnittligAlderLukkedeBehandlingerSisteDager = async (antallDager: number) => {
  const url = `${statistikkApiBaseURL}/behandlingstid/lukkede-siste-dager/${antallDager}`;
  return await fetchProxy<number>(url, statistikkApiScope, 'GET');
};
