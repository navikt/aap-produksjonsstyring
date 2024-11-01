/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/oppdater-oppgaver': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.BehandlingFlytStoppetHendelse'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/oppdater-postmottak-oppgaver': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.postmottak.kontrakt.hendelse.DokumentflytStoppetHendelse'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/neste-oppgave': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.plukk.NesteOppgaveDto'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/avreserver-oppgave': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.OppgaveId'][];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/flytt-oppgave': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.FlyttOppgaveDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.OppgaveId'][];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/hent-oppgave': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.OppgaveDto'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/mine-oppgaver': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.OppgaveDto'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/alle-oppgaver': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.OppgaveDto'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/filter': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.filter.FilterDto'][];
          };
        };
      };
    };
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.filter.FilterDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['no.nav.aap.oppgave.filter.FilterDto'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/filter/{filterId}/slett': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.filter.FilterId'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/produksjonsstyring/antall-oppgaver': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['no.nav.aap.oppgave.produksjonsstyring.AntallOppgaverDto'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              [key: string]: number;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    'no.nav.aap.behandlingsflyt.kontrakt.behandling.BehandlingReferanse': {
      /** Format: uuid */
      referanse: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto': {
      definisjon: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO'];
      endringer: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO'][];
      /** @enum {string} */
      status: NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.BehandlingFlytStoppetHendelse': {
      avklaringsbehov: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto'][];
      /** @enum {string} */
      behandlingType: NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      hendelsesTidspunkt: string;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      opprettetTidspunkt: string;
      personIdent: string;
      referanse: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.behandling.BehandlingReferanse'];
      saksnummer: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.sak.Saksnummer'];
      /** @enum {string} */
      status: NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus;
      versjon: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO': {
      /** @enum {string} */
      behovType: NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType;
      /** @enum {string} */
      'l\u00F8sesISteg': NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg;
      type: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO': {
      endretAv: string;
      /**
       * Format: date
       * @example 2024-11-01
       */
      frist?: string | null;
      /** @enum {string} */
      status: NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      tidsstempel: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.sak.Saksnummer': Record<string, never>;
    'no.nav.aap.oppgave.AvklaringsbehovReferanseDto': {
      avklaringsbehovKode: string;
      /** Format: int64 */
      journalpostId?: number | null;
      /** Format: uuid */
      referanse?: string | null;
      saksnummer?: string | null;
    };
    'no.nav.aap.oppgave.FlyttOppgaveDto': {
      avklaringsbehovReferanse: components['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
      flyttTilIdent: string;
    };
    'no.nav.aap.oppgave.OppgaveDto': {
      avklaringsbehovKode: string;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      behandlingOpprettet: string;
      /** Format: uuid */
      behandlingRef?: string | null;
      /** @enum {string} */
      behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype;
      endretAv?: string | null;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      endretTidspunkt?: string | null;
      /** Format: int64 */
      id?: number | null;
      /** Format: int64 */
      journalpostId?: number | null;
      opprettetAv: string;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      opprettetTidspunkt: string;
      personIdent?: string | null;
      reservertAv?: string | null;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      reservertTidspunkt?: string | null;
      saksnummer?: string | null;
      /** @enum {string} */
      status: NoNavAapOppgaveOppgaveDtoStatus;
      /** Format: int64 */
      versjon: number;
    };
    'no.nav.aap.oppgave.OppgaveId': {
      /** Format: int64 */
      id: number;
      /** Format: int64 */
      versjon: number;
    };
    'no.nav.aap.oppgave.filter.FilterDto': {
      avklaringsbehovKoder: string[];
      behandlingstyper: NoNavAapOppgaveFilterFilterDtoBehandlingstyper[];
      endretAv?: string | null;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      endretTidspunkt?: string | null;
      /** Format: int64 */
      id?: number | null;
      navn: string;
      opprettetAv: string;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      opprettetTidspunkt: string;
    };
    'no.nav.aap.oppgave.filter.FilterId': {
      /** Format: int64 */
      filterId: number;
    };
    'no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto': {
      /** Format: int64 */
      filterId: number;
    };
    'no.nav.aap.oppgave.plukk.NesteOppgaveDto': {
      avklaringsbehovReferanse: components['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
      /** Format: int64 */
      oppgaveId: number;
      /** Format: int64 */
      oppgaveVersjon: number;
    };
    'no.nav.aap.oppgave.produksjonsstyring.AntallOppgaverDto': {
      /** @enum {string|null} */
      behandlingstype?: NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype;
    };
    'no.nav.aap.postmottak.kontrakt.hendelse.AvklaringsbehovHendelseDto': {
      definisjon: components['schemas']['no.nav.aap.postmottak.kontrakt.hendelse.DefinisjonDTO'];
      endringer: components['schemas']['no.nav.aap.postmottak.kontrakt.hendelse.EndringDTO'][];
      /** @enum {string} */
      status: NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus;
    };
    'no.nav.aap.postmottak.kontrakt.hendelse.DefinisjonDTO': {
      /** @enum {string} */
      behovType: NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType;
      /** @enum {string} */
      'l\u00F8sesISteg': NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg;
      type: string;
    };
    'no.nav.aap.postmottak.kontrakt.hendelse.DokumentflytStoppetHendelse': {
      avklaringsbehov: components['schemas']['no.nav.aap.postmottak.kontrakt.hendelse.AvklaringsbehovHendelseDto'][];
      /** @enum {string} */
      behandlingType: NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      hendelsesTidspunkt: string;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      opprettetTidspunkt: string;
      referanse: components['schemas']['no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId'];
      /** @enum {string} */
      status: NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus;
    };
    'no.nav.aap.postmottak.kontrakt.hendelse.EndringDTO': {
      endretAv: string;
      /**
       * Format: date
       * @example 2024-11-01
       */
      frist?: string | null;
      /** @enum {string} */
      status: NoNavAapPostmottakKontraktHendelseEndringDTOStatus;
      /**
       * Format: date-time
       * @example 2024-11-01T09:56:16.258085
       */
      tidsstempel: string;
    };
    'no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId': {
      /** Format: int64 */
      referanse: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export enum NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  TOTRINNS_VURDERT = 'TOTRINNS_VURDERT',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  KVALITETSSIKRET = 'KVALITETSSIKRET',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  IVERKSETTES = 'IVERKSETTES',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType {
  MANUELT_P_KREVD = 'MANUELT_P\u00C5KREVD',
  MANUELT_FRIVILLIG = 'MANUELT_FRIVILLIG',
  VENTEPUNKT = 'VENTEPUNKT',
}
export enum NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg {
  START_BEHANDLING = 'START_BEHANDLING',
  VURDER_ALDER = 'VURDER_ALDER',
  VURDER_LOVVALG = 'VURDER_LOVVALG',
  VURDER_MEDLEMSKAP = 'VURDER_MEDLEMSKAP',
  AVKLAR_STUDENT = 'AVKLAR_STUDENT',
  VURDER_BISTANDSBEHOV = 'VURDER_BISTANDSBEHOV',
  VURDER_SYKEPENGEERSTATNING = 'VURDER_SYKEPENGEERSTATNING',
  FRITAK_MELDEPLIKT = 'FRITAK_MELDEPLIKT',
  KVALITETSSIKRING = 'KVALITETSSIKRING',
  BARNETILLEGG = 'BARNETILLEGG',
  AVKLAR_SYKDOM = 'AVKLAR_SYKDOM',
  FASTSETT_ARBEIDSEVNE = 'FASTSETT_ARBEIDSEVNE',
  FASTSETT_BEREGNINGSTIDSPUNKT = 'FASTSETT_BEREGNINGSTIDSPUNKT',
  FASTSETT_GRUNNLAG = 'FASTSETT_GRUNNLAG',
  VIS_GRUNNLAG = 'VIS_GRUNNLAG',
  FASTSETT_UTTAK = 'FASTSETT_UTTAK',
  SAMORDNING_GRADERING = 'SAMORDNING_GRADERING',
  DU_ER_ET_ANNET_STED = 'DU_ER_ET_ANNET_STED',
  BEREGN_TILKJENT_YTELSE = 'BEREGN_TILKJENT_YTELSE',
  SIMULERING = 'SIMULERING',
  FORESL__VEDTAK = 'FORESL\u00C5_VEDTAK',
  FATTE_VEDTAK = 'FATTE_VEDTAK',
  BREV = 'BREV',
  IVERKSETT_VEDTAK = 'IVERKSETT_VEDTAK',
  UDEFINERT = 'UDEFINERT',
}
export enum NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  TOTRINNS_VURDERT = 'TOTRINNS_VURDERT',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  KVALITETSSIKRET = 'KVALITETSSIKRET',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapOppgaveOppgaveDtoBehandlingstype {
  F_RSTEGANGSBEHANDLING = 'F\u00D8RSTEGANGSBEHANDLING',
  REVURDERING = 'REVURDERING',
  TILBAKEKREVING = 'TILBAKEKREVING',
  KLAGE = 'KLAGE',
  DOKUMENT_H_NDTERING = 'DOKUMENT_H\u00C5NDTERING',
}
export enum NoNavAapOppgaveOppgaveDtoStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapOppgaveFilterFilterDtoBehandlingstyper {
  F_RSTEGANGSBEHANDLING = 'F\u00D8RSTEGANGSBEHANDLING',
  REVURDERING = 'REVURDERING',
  TILBAKEKREVING = 'TILBAKEKREVING',
  KLAGE = 'KLAGE',
  DOKUMENT_H_NDTERING = 'DOKUMENT_H\u00C5NDTERING',
}
export enum NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype {
  F_RSTEGANGSBEHANDLING = 'F\u00D8RSTEGANGSBEHANDLING',
  REVURDERING = 'REVURDERING',
  TILBAKEKREVING = 'TILBAKEKREVING',
  KLAGE = 'KLAGE',
  DOKUMENT_H_NDTERING = 'DOKUMENT_H\u00C5NDTERING',
}
export enum NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType {
  MANUELT_P_KREVD = 'MANUELT_P\u00C5KREVD',
  MANUELT_FRIVILLIG = 'MANUELT_FRIVILLIG',
  VENTEPUNKT = 'VENTEPUNKT',
}
export enum NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg {
  ROUTING = 'ROUTING',
  KATEGORISER_DOKUMENT = 'KATEGORISER_DOKUMENT',
  DIGITALISER_DOKUMENT = 'DIGITALISER_DOKUMENT',
  START_BEHANDLING = 'START_BEHANDLING',
  AVKLAR_TEMA = 'AVKLAR_TEMA',
  SETT_FAGSAK = 'SETT_FAGSAK',
  ENDELIG_JOURNALF_RING = 'ENDELIG_JOURNALF\u00D8RING',
  OVERLEVER_TIL_FAGSYSTEM = 'OVERLEVER_TIL_FAGSYSTEM',
  UDEFINERT = 'UDEFINERT',
  AVKLAR_SAK = 'AVKLAR_SAK',
  ENDRE_TEMA = 'ENDRE_TEMA',
}
export enum NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType {
  DokumentH_ndtering = 'DokumentH\u00E5ndtering',
}
export enum NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  IVERKSETTES = 'IVERKSETTES',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapPostmottakKontraktHendelseEndringDTOStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export type operations = Record<string, never>;
