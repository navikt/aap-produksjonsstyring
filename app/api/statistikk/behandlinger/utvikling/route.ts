import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentBehandlingerUtvikling } from 'lib/services/statistikkService';
import { hentStatistikkQueryParams } from 'lib/utils/request';

export async function GET(req: NextRequest) {
  const { antallDager, behandlingstyper } = hentStatistikkQueryParams(req);

  try {
    const result = await hentBehandlingerUtvikling(antallDager, behandlingstyper);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/behandlinger/utvikling`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
