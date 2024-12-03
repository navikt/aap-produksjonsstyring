import { format } from 'date-fns';

export function formaterDato(dateString: string) {
  return format(dateString, 'dd.MM.yyyy');
}
