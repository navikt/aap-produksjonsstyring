import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentAntallOppgaver } from 'lib/services/oppgaveService';

export async function POST(req: NextRequest) {
  const behandlingsType = await req.json().then((data) => data.behandlingType);

  try {
    const result = await hentAntallOppgaver(behandlingsType);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/antall-oppgaver`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
