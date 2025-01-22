import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { NesteOppgaveRequestBody } from 'lib/types/types';
import { velgNesteOppgave } from 'lib/services/oppgaveService';

export async function POST(req: NextRequest) {
  const data: NesteOppgaveRequestBody = await req
    .json()
    .then((data) => ({ filterId: data.filterId, enheter: data.enheter }));
  if (data.filterId === undefined || data.enheter === undefined) {
    return new Response(JSON.stringify({ message: 'Missing filterid or enheter', status: 400 }), { status: 400 });
  }

  try {
    const result = await velgNesteOppgave(data);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/neste`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
