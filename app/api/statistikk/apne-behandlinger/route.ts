import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentAntallÅpneBehandlingerPerBehandlingstype } from 'lib/services/statistikkService';
import { hentStatistikkQueryParams } from 'lib/utils/request';

export async function GET(req: NextRequest) {
  const { behandlingstyper, enheter } = hentStatistikkQueryParams(req);

  try {
    const result = await hentAntallÅpneBehandlingerPerBehandlingstype(behandlingstyper, enheter);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/åpne-behandlinger`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
