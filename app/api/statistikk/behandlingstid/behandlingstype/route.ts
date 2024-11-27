import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentBehandlingerUtvikling } from 'lib/services/statistikkService';

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ antallDager: string; behandlingstyper: string[] }> }
) {
  const params = await props.params;

  try {
    const result = await hentBehandlingerUtvikling(params.antallDager, params.behandlingstyper);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/behandlinger/utvikling`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
