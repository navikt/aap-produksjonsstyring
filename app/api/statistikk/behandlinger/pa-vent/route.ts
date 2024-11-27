import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentVenteÅrsakerForBehandlingerPåVent } from 'lib/services/statistikkService';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const behandlingstyper = params.getAll('behandlingstyper').map((e) => e);

  try {
    const result = await hentVenteÅrsakerForBehandlingerPåVent(behandlingstyper);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/behandlinger/på-vent`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
