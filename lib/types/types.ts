import { components as statistikk } from 'lib/types/schema-statistikk';

export type BehandlingstidPerDagDTO =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO'];
export type BehandlingPerAvklaringsbehov =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'];
export type AntallBehandlinger = statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.AntallBehandlinger'];
export type AntallÅpneOgGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt'];

export function mapBehovskodeTilBehovstype(kode: string): string {
  switch (kode) {
    case '5001':
      return 'Avklar student (§ 11-14)';
    case '5003':
      return 'Avklar sykdom (§ 11-5)';
    case '5004':
      return 'Vurdering av etablert og uutnyttet arbeidsevne (§ 11-23)';
    case '5005':
      return 'Fritak meldeplikt (§ 11-10)';
    case '5006':
      return 'Avklar bistandsbehov (§ 11-6)';
    case '5007':
      return 'Vurder sykepengeerstatning (§ 11 -13)';
    case '5008':
      return 'Fastsett beregningstidspunkt';
    case '5009':
      return 'Avklar barnetillegg';
    case '5098':
      return 'Foreslå vedtak';
    case '5099':
      return 'Fatte vedtak';
    case '5097':
      return 'Kvalitetssikring';
    case '9001':
      return 'Manuelt satt på vent';
    case '5010':
      return 'Avklar soningsvurdering';
    case '5011':
      return 'Avklar helseinstitusjon';
    default:
      return `Ikke funnet: ${kode}`;
  }
}
