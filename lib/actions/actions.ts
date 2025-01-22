'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateMineOppgaver() {
  revalidateTag(`oppgaveservice/mine-oppgaver`);
}
