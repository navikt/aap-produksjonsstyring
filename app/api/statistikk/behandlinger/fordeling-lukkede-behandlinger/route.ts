import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentFordelingLukkedeBehandlinger } from 'lib/services/statistikkService';
import { FilterTidsEnhet } from 'lib/types/types';
import { hentStatistikkQueryParams } from 'lib/utils/request';

export async function GET(req: NextRequest) {
  const { enhet, bøtteStørrelse, antallBøtter, behandlingstyper } = hentStatistikkQueryParams(req);

  try {
    const result = await hentFordelingLukkedeBehandlinger(
      enhet as FilterTidsEnhet,
      antallBøtter,
      bøtteStørrelse,
      behandlingstyper
    );
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/behandlinger/fordeling-lukkede-behandlinger`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
