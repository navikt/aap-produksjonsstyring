import { BehandlingstyperRequestQuery, FilterTidsEnhet } from 'lib/types/types';
import { NextRequest } from 'next/server';
import { BehandlingsTyperOption } from 'lib/utils/behandlingstyper';

function queryParamsArray(key: string, values: (string | number)[]) {
  const filtered = values.filter((value) => value !== undefined && value !== null && value !== '');
  if (!filtered.length) {
    return '';
  }
  return values.map((e) => `${key}=${e}`).join('&');
}
type StatistikkQueryParams = {
  behandlingstyper: Array<BehandlingsTyperOption>;
  antallDager?: number;
  antallBøtter?: number;
  bøtteStørrelse?: number;
  enhet?: FilterTidsEnhet;
};
export function statistikkQueryparams({
  behandlingstyper,
  antallDager,
  antallBøtter,
  bøtteStørrelse,
  enhet,
}: StatistikkQueryParams) {
  const behandlingstyperString = queryParamsArray('behandlingstyper', behandlingstyper);
  const antallDagerString = !antallDager && antallDager !== 0 ? '' : `antallDager=${antallDager}`;
  const antallBøtterString = !antallBøtter && antallBøtter !== 0 ? '' : `antallBøtter=${antallBøtter}`;
  const bøtteStørrelseString = !bøtteStørrelse && bøtteStørrelse !== 0 ? '' : `bøtteStørrelse=${bøtteStørrelse}`;
  const enhetString = enhet ? `enhet=${enhet}` : '';
  const string = [behandlingstyperString, antallDagerString, antallBøtterString, bøtteStørrelseString, enhetString]
    .filter((value) => value)
    .join('&');
  return encodeURI(string);
}

export function hentStatistikkQueryParams(req: NextRequest): StatistikkQueryParams {
  const params = req.nextUrl.searchParams;
  const enhet = params.get('enhet') as FilterTidsEnhet;
  const antallBøtter = params.get('antallBøtter');
  const bøtteStørrelse = params.get('bøtteStørrelse');
  const behandlingstyper = params.getAll('behandlingstyper').map((e) => e as BehandlingstyperRequestQuery);
  return {
    ...(enhet ? { enhet } : {}),
    ...(antallBøtter ? { antallBøtter: parseInt(antallBøtter) } : {}),
    ...(bøtteStørrelse ? { bøtteStørrelse: parseInt(bøtteStørrelse) } : {}),
    behandlingstyper,
  };
}
