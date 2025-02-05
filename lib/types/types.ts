import {
  components as statistikk,
  NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe,
  PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper,
} from 'lib/types/schema-statistikk';
import { components as behandlingsflyt } from '@navikt/aap-behandlingsflyt-typescript-types';
import { components as postmottak } from '@navikt/aap-postmottak-backend-typescript-types';
import {
  components as oppgave,
  NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus,
} from '@navikt/aap-oppgave-typescript-types';

// statistikk
export type BehandlingstidPerDagDTO =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.`ProduksjonsstyringApiKt$hentBehandlingstidPerDag$BehandlingstidPerDagDTO`'];
export type BehandlingPerAvklaringsbehov =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'];
export type BehandlingEndringerPerDag =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.`ProduksjonsstyringApiKt$hentBehandlingstidPerDag$BehandlinEndringerPerDag`'];
export type AntallÅpneOgGjennomsnitt =
  statistikk['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.`ProduksjonsstyringApiKt$hentBehandlingstidPerDag$Antall\u00C5pneOgTypeOgGjennomsnittsalder`'];
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
// typer fra enums
export type Steggruppe = `${NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe}`;
export type BehandlingstyperRequestQuery =
  `${PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper}`;

// behandlingsflyt
export type BehandlingsFlytAvklaringsbehovKode =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type VenteÅrsak = behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.flyt.SettP\u00E5VentRequest']['grunn'];

// postmottak
export type PostmottakAvklaringsbehovKode =
  postmottak['schemas']['no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon']['kode'];

// oppgave
export type Kø = oppgave['schemas']['no.nav.aap.oppgave.filter.FilterDto'];
export type Oppgave = oppgave['schemas']['no.nav.aap.oppgave.OppgaveDto'];
export type Enhet = oppgave['schemas']['no.nav.aap.oppgave.enhet.EnhetDto'];
export type AvklaringsbehovReferanse = oppgave['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
export type OppgavelisteResponse = oppgave['schemas']['no.nav.aap.oppgave.liste.OppgavelisteRespons'];
export type NesteOppgaveResponse = oppgave['schemas']['no.nav.aap.oppgave.plukk.NesteOppgaveDto'];
export type NesteOppgaveRequestBody = oppgave['schemas']['no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto'];
export type PlukkOppgaveDto = oppgave['schemas']['no.nav.aap.oppgave.plukk.PlukkOppgaveDto'];

// typer fra enums
export type OppgaveBehandlingstype = `${NoNavAapOppgaveOppgaveDtoBehandlingstype}`;
export type OppgaveStatus = `${NoNavAapOppgaveOppgaveDtoStatus}`;

export type AvklaringsbehovKode = BehandlingsFlytAvklaringsbehovKode | PostmottakAvklaringsbehovKode;
export type FilterTidsEnhet = 'DAG' | 'UKE' | 'MÅNED' | 'ÅR';
