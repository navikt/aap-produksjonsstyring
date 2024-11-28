import { exhaustiveCheck } from 'lib/utils/typescript';
import { AvklaringsbehovKode, Steggruppe, VenteÅrsak } from 'lib/types/types';

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
    case '9003':
      return 'Bestill legeerklæring';
    case '5010':
      return 'Avklar soningsvurdering';
    case '5011':
      return 'Avklar helseinstitusjon';
    case '5012':
      return 'Avklar samordning gradering';
    case '5013':
      return 'Avklar yrkesskade';
    case '5014':
      return 'Fastsett yrkesskadebeløp';
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

export function mapTilVenteÅrsakTekst(årsak: VenteÅrsak): string {
  switch (årsak) {
    case 'VENTER_PÅ_OPPLYSNINGER':
      return 'Venter på opplysninger';
    case 'VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER':
      return 'Venter på opplysninger fra utenlandske myndigheter';
    case 'VENTER_PÅ_MEDISINSKE_OPPLYSNINGER':
      return 'Venter på medisinske opplysninger';
    case 'VENTER_PÅ_VURDERING_AV_ROL':
      return 'Venter på vurdering av rol';
    case 'VENTER_PÅ_SVAR_FRA_BRUKER':
      return 'Venter på svar fra bruker';
    case 'VENTER_PÅ_MASKINELL_AVKLARING':
      return 'Venter på maskinell avklaring';
  }
  exhaustiveCheck(årsak);
}

export function mapTilSteggruppeTekst(steggruppe: Steggruppe) {
  switch (steggruppe) {
    case 'ALDER':
      return 'Alder';
    case 'LOVVALG':
      return 'Lovvalg';
    case 'START_BEHANDLING':
      return 'Start behandling';
    case 'MEDLEMSKAP':
      return 'Medlemskap';
    case 'BARNETILLEGG':
      return 'Barnetillegg';
    case 'STUDENT':
      return 'Student';
    case 'SYKDOM':
      return 'Sykdom';
    case 'GRUNNLAG':
      return 'Grunnlag';
    case 'ET_ANNET_STED':
      return 'Et annet sted';
    case 'UNDERVEIS':
      return 'Underveis';
    case 'TILKJENT_YTELSE':
      return 'Tilkjent ytelse';
    case 'SIMULERING':
      return 'Simulering';
    case 'VEDTAK':
      return 'Vedtak';
    case 'FATTE_VEDTAK':
      return 'Fatte vedtak';
    case 'KVALITETSSIKRING':
      return 'Kvalitetssikring';
    case 'IVERKSETT_VEDTAK':
      return 'Iverksett vedtak';
    case 'BREV':
      return 'Brev';
    case 'UDEFINERT':
      return 'Udefinert';
  }
  exhaustiveCheck(steggruppe);
}
