import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentOppgaverForFilter } from 'lib/services/oppgaveService';

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data.filterId) {
    return new Response(JSON.stringify({ message: 'filterId mangler', status: 400 }), { status: 400 });
  } else if (!data.enheter) {
    return new Response(JSON.stringify({ message: 'enheter mangler', status: 400 }), { status: 400 });
  }

  try {
    const result = await hentOppgaverForFilter(data.filterId, data.enheter);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/oppgaveliste`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
