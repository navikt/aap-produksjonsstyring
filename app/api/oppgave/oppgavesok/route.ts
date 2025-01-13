import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { oppgaveSøk } from 'lib/services/oppgaveService';
import { AvklaringsbehovKode, OppgaveBehandlingstype } from 'lib/types/types';
interface OppgavesokRequestBody {
  avklaringsbehovKoder: AvklaringsbehovKode[];
  behandlingstyper: OppgaveBehandlingstype[];
  enheter: string[];
}
export async function POST(req: NextRequest) {
  const { avklaringsbehovKoder, enheter, behandlingstyper }: OppgavesokRequestBody = await req.json();

  try {
    const result = await oppgaveSøk(avklaringsbehovKoder, behandlingstyper, enheter);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/oppgavesok`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
