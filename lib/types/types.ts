import { components as statistikk } from 'lib/types/schema-statistikk';
import { components as behandlingsflyt } from 'lib/types/schema-behandlingsflyt';
import { components as postmottak } from 'lib/types/schema-postmottak';
import { exhaustiveCheck } from 'lib/utils/typescript';

export type BehandlingstidPerDagDTO =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO'];
export type BehandlingPerAvklaringsbehov =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'];
export type AntallBehandlinger = statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.AntallBehandlinger'];
export type AntallÅpneOgGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt'];

export type BehandlingsFlytAvklaringsbehovKode =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type PostmottakAvklaringsbehovKode =
  postmottak['schemas']['no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type AvklaringsbehovKode = BehandlingsFlytAvklaringsbehovKode | PostmottakAvklaringsbehovKode;

export function mapBehovskodeTilBehovstype(kode: AvklaringsbehovKode): string {
  switch (kode) {
    //Behandlingsflyt
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
    case '9002':
      return 'Bestill brev';
    case '5010':
      return 'Avklar soningsvurdering';
    case '5011':
      return 'Avklar helseinstitusjon';
    case '5012':
      return 'Avklar samordning gradering';
    case '5050':
      return 'Skriv brev';
    // Postmottak
    case '1337':
      return 'Kategoriser dokument';
    case '1338':
      return 'Digitaliser dokument';
    case '1339':
      return 'Avklar tema';
    case '1340':
      return 'Avklar saksnummer';
    case '1341':
      return 'Endre tema';
  }
  exhaustiveCheck(kode);
}
