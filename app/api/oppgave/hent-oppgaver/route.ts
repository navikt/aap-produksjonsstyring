import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentOppgaverForFilter } from 'lib/services/oppgaveService';

export async function POST(req: NextRequest) {
  const filterId = await req.json().then((data) => data.filterId);

  try {
    const result = await hentOppgaverForFilter(filterId);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/hent-oppgaver`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
