import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentAntallÅpneBehandlingerPerBehandlingstype } from 'lib/services/statistikkService';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const behandlingstyper = params.getAll('behandlingstyper').map((e) => e);

  try {
    const result = await hentAntallÅpneBehandlingerPerBehandlingstype(behandlingstyper);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/åpne-behandlinger`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
