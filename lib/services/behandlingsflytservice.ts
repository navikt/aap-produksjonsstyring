import { fetchProxy } from 'lib/services/fetchProxy';
import { SaksInfo } from 'lib/types/types';

const saksbehandlingApiBaseUrl = process.env.BEHANDLING_API_BASE_URL;
const saksbehandlingApiScope = process.env.BEHANDLING_API_SCOPE ?? '';

export const finnSakerForIdent = async (ident: string): Promise<SaksInfo[]> => {
  const url = `${saksbehandlingApiBaseUrl}/api/sak/finn`;
  return await fetchProxy<SaksInfo[]>(url, saksbehandlingApiScope, 'POST', { ident });
};
