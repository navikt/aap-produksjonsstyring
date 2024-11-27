import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentFordelingLukkedeBehandlinger } from 'lib/services/statistikkService';
import { FilterTidsEnhet } from 'lib/types/types';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const enhet = params.get('enhet');
  const antallBøtter = params.get('antallBøtter');
  const bøtteStørrelse = params.get('bøtteStørrelse');
  const behandlingstyper = params.getAll('behandlingstyper').map((e) => e);

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
