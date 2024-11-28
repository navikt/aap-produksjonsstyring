import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentBehandlingerUtvikling } from 'lib/services/statistikkService';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const behandlingstyper = params.getAll('behandlingstyper').map((e) => e);

  try {
    const result = await hentBehandlingerUtvikling(params.get('antallDager'), behandlingstyper);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/behandlinger/utvikling`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}