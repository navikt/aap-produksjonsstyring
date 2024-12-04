import {
  components as statistikk,
  NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe,
} from 'lib/types/schema-statistikk';
import { components as behandlingsflyt } from '@navikt/aap-behandlingsflyt-typescript-types';
import { components as postmottak } from 'lib/types/schema-postmottak';
import { components as oppgave } from 'lib/types/schema-oppgave';

// statistikk
export type BehandlingstidPerDagDTO =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO'];
export type BehandlingPerAvklaringsbehov =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'];
export type BehandlingEndringerPerDag =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlinEndringerPerDag'];
export type AntallÅpneOgGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgTypeOgGjennomsnittsalder'];
export type FordelingÅpneBehandlinger =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Fordeling\u00C5pneBehandlinger'];
export type FordelingLukkedeBehandlinger =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.FordelingLukkedeBehandlinger'];
export type VenteÅrsakOgGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.Vente\u00E5rsakOgGjennomsnitt'];
export type BehandlingPerSteggruppe =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerSteggruppe'];
export type BehandlingÅrsakAntallGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingAarsakAntallGjennomsnitt'];

// behandlingsflyt
export type BehandlingsFlytAvklaringsbehovKode =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type PostmottakAvklaringsbehovKode =
  postmottak['schemas']['no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type AvklaringsbehovKode = BehandlingsFlytAvklaringsbehovKode | PostmottakAvklaringsbehovKode;
export type FilterTidsEnhet = 'DAG' | 'UKE' | 'MÅNED' | 'ÅR';
export type VenteÅrsak =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.flyt.flate.SettP\u00E5VentRequest']['grunn'];

// oppgave
export type Kø = oppgave['schemas']['no.nav.aap.oppgave.filter.FilterDto'];
export type Oppgave = oppgave['schemas']['no.nav.aap.oppgave.OppgaveDto'];

// typer fra enums
export type Steggruppe = `${NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe}`;
