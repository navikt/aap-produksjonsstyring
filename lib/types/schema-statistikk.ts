/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stoppetBehandling': {
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
          /** @example {
           *       "saksnummer": "4LFL5CW",
           *       "sakStatus": "LØPENDE",
           *       "behandlingReferanse": "3df90f5f-dd9f-4aae-ab2c-5ca798c15c3b",
           *       "relatertBehandling": null,
           *       "behandlingOpprettetTidspunkt": "2024-11-26T09:09:59.991982",
           *       "mottattTid": "2024-11-25T09:09:59.991988",
           *       "behandlingStatus": "OPPRETTET",
           *       "behandlingType": "Førstegangsbehandling",
           *       "soknadsFormat": "DIGITAL",
           *       "ident": "1403199012345",
           *       "versjon": "b21e88bca4533d3e0ee3a15f51a87cbaa11a7e9c",
           *       "avklaringsbehov": [
           *         {
           *           "definisjon": {
           *             "type": "5001",
           *             "behovType": "MANUELT_PÅKREVD",
           *             "løsesISteg": "AVKLAR_STUDENT"
           *           },
           *           "status": "AVSLUTTET",
           *           "endringer": [
           *             {
           *               "status": "OPPRETTET",
           *               "tidsstempel": "2024-11-26T08:59:59.991737",
           *               "frist": null,
           *               "endretAv": "Kelvin",
           *               "årsakTilSattPåVent": null
           *             },
           *             {
           *               "status": "AVSLUTTET",
           *               "tidsstempel": "2024-11-26T09:04:59.991757",
           *               "frist": null,
           *               "endretAv": "Z994573",
           *               "årsakTilSattPåVent": null
           *             }
           *           ]
           *         },
           *         {
           *           "definisjon": {
           *             "type": "5003",
           *             "behovType": "MANUELT_PÅKREVD",
           *             "løsesISteg": "AVKLAR_SYKDOM"
           *           },
           *           "status": "OPPRETTET",
           *           "endringer": [
           *             {
           *               "status": "OPPRETTET",
           *               "tidsstempel": "2024-11-26T09:06:59.991773",
           *               "frist": null,
           *               "endretAv": "Kelvin",
           *               "årsakTilSattPåVent": null
           *             }
           *           ]
           *         }
           *       ],
           *       "hendelsesTidspunkt": "2024-11-26T09:09:59.992061",
           *       "avsluttetBehandling": null,
           *       "identerForSak": []
           *     } */
          'application/json': components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.StoppetBehandling'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': string;
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
  '/behandlingstid/{typeBehandling}': {
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
        path: {
          /**
           * @deprecated
           * @description typebehandling. Deprecated, vil bytte om til queryparam.
           */
          typeBehandling: PathsBehandlingstidTypeBehandlingGetParametersPathTypeBehandling;
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO'][];
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
  '/behandlingstid/lukkede-siste-dager/{antallDager}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Henter alle behandlinger som er lukket i de siste n dager, og regner ut snittalderen på disse. */
    get: {
      parameters: {
        query?: {
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper[];
        };
        header?: never;
        path: {
          /** @description Antall dager å regne på */
          antallDager: number;
        };
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
            'application/json': number;
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
  '/\u00E5pne-behandlinger': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: {
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsPneBehandlingerGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt'];
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
  '/behandling-per-avklaringsbehov': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: {
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingPerAvklaringsbehovGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'][];
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
  '/behandling-per-steggruppe': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: {
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingPerSteggruppeGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerSteggruppe'][];
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
  '/behandlinger/fordeling-\u00E5pne-behandlinger': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returnerer en liste over fordelingen på åpne behandlinger. Bøtte nr 1 teller antall
     *     behandlinger som er enhet * bøtteStørrelse gammel . Bøtte nr antallBøtter + 1 teller
     *     antall behandlinger eldre enn bøttestørrelsen. */
    get: {
      parameters: {
        query: {
          /** @description Hvor mange bøtter skal åpne behandlinger plasseres i? */
          'antallB\u00F8tter'?: number;
          /** @description Week, month, day, etc. */
          enhet: PathsBehandlingerFordelingPneBehandlingerGetParametersQueryEnhet;
          /** @description Hver bøtte er enhet * bøtteStørrelse stor. */
          'b\u00F8tteSt\u00F8rrelse'?: number;
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingerFordelingPneBehandlingerGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Fordeling\u00C5pneBehandlinger'][];
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
  '/behandlinger/fordeling-lukkede-behandlinger': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returnerer en liste over behandlingstiden på lukkede behandlinger. Bøtte nr 1 teller antall
     *     behandlinger som er enhet * bøtteStørrelse gammel . Bøtte nr antallBøtter + 1 teller
     *     antall behandlinger eldre enn bøttestørrelsen. */
    get: {
      parameters: {
        query: {
          /** @description Hvor mange bøtter skal åpne behandlinger plasseres i? */
          'antallB\u00F8tter'?: number;
          /** @description Week, month, day, etc. */
          enhet: PathsBehandlingerFordelingLukkedeBehandlingerGetParametersQueryEnhet;
          /** @description Hver bøtte er enhet * bøtteStørrelse stor. */
          'b\u00F8tteSt\u00F8rrelse'?: number;
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingerFordelingLukkedeBehandlingerGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.FordelingLukkedeBehandlinger'][];
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
  '/behandlinger/utvikling': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description Hvor mange dager å lage fordeling på. */
          antallDager: number;
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingerUtviklingGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlinEndringerPerDag'][];
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
  '/behandlinger/p\u00E5-vent': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: {
          /** @description For hvilke behandlingstyper. Tom liste betyr alle. */
          behandlingstyper?: PathsBehandlingerPVentGetParametersQueryBehandlingstyper[];
        };
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.Vente\u00E5rsakOgGjennomsnitt'][];
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
  '/drift/api/jobb/feilende': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
  '/drift/api/jobb/planlagte-jobber': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
  '/drift/api/jobb/rekjor/{jobbId}': {
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
        path: {
          /** @description ID */
          jobbId: number;
        };
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
            'application/json': string;
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
  '/drift/api/jobb/avbryt/{jobbId}': {
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
        path: {
          /** @description ID */
          jobbId: number;
        };
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
            'application/json': string;
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
  '/drift/api/jobb/rekjorAlleFeilede': {
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
            'application/json': string;
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
  '/drift/api/jobb/sisteKj\u00F8rte': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto': {
      definisjon: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO'];
      endringer: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO'][];
      /** @enum {string} */
      status: NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO': {
      /** @enum {string} */
      behovType: NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType;
      /** @enum {string} */
      'l\u00F8sesISteg': NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg;
      /** @enum {string} */
      type: NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO': {
      endretAv: string;
      /**
       * Format: date
       * @example 2024-11-26
       */
      frist?: string | null;
      /** @enum {string} */
      status: NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus;
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      tidsstempel: string;
      /** @enum {string|null} */
      '\u00E5rsakTilSattP\u00E5Vent'?: NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.AvsluttetBehandlingDTO': {
      /** Format: uuid */
      behandlingsReferanse: string;
      beregningsGrunnlag?: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.BeregningsgrunnlagDTO'];
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      hendelsesTidspunkt: string;
      saksnummer: string;
      tilkjentYtelse: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.TilkjentYtelseDTO'];
      'vilk\u00E5rsResultat': components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rsResultatDTO'];
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.BeregningsgrunnlagDTO': {
      grunnlag11_19dto?: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Grunnlag11_19DTO'];
      'grunnlagUf\u00F8re'?: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.GrunnlagUf\u00F8reDTO'];
      grunnlagYrkesskade?: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.GrunnlagYrkesskadeDTO'];
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.Grunnlag11_19DTO': {
      er6GBegrenset: boolean;
      erGjennomsnitt: boolean;
      /** Format: double */
      grunnlaget: number;
      /** @description Key type: kotlin.String */
      inntekter: {
        [key: string]: number;
      };
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.GrunnlagUf\u00F8reDTO': {
      grunnlag: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Grunnlag11_19DTO'];
      grunnlagYtterligereNedsatt: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Grunnlag11_19DTO'];
      grunnlaget: number;
      /** @enum {string} */
      type: NoNavAapBehandlingsflytKontraktStatistikkGrunnlagUfReDTOType;
      /** @description Key type: kotlin.String */
      'uf\u00F8reInntekterFraForeg\u00E5ende\u00C5r': {
        [key: string]: number;
      };
      /** Format: int32 */
      'uf\u00F8reYtterligereNedsattArbeidsevne\u00C5r': number;
      /** Format: int32 */
      'uf\u00F8regrad': number;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.GrunnlagYrkesskadeDTO': {
      andelSomIkkeSkyldesYrkesskade: number;
      andelSomSkyldesYrkesskade: number;
      /** Format: int32 */
      andelYrkesskade: number;
      'antatt\u00C5rligInntektYrkesskadeTidspunktet': number;
      /** Format: int32 */
      benyttetAndelForYrkesskade: number;
      beregningsgrunnlag: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.BeregningsgrunnlagDTO'];
      grunnlagEtterYrkesskadeFordel: number;
      grunnlagForBeregningAvYrkesskadeandel: number;
      grunnlaget: number;
      'inkludererUf\u00F8re': boolean;
      /** Format: int32 */
      terskelverdiForYrkesskade: number;
      /** Format: int32 */
      yrkesskadeTidspunkt: number;
      yrkesskadeinntektIG: number;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.StoppetBehandling': {
      avklaringsbehov: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto'][];
      avsluttetBehandling?: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.AvsluttetBehandlingDTO'];
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      behandlingOpprettetTidspunkt: string;
      /** Format: uuid */
      behandlingReferanse: string;
      /** @enum {string} */
      behandlingStatus: NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingBehandlingStatus;
      /** @enum {string} */
      behandlingType: NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingBehandlingType;
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      hendelsesTidspunkt: string;
      ident: string;
      identerForSak: string[];
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      mottattTid: string;
      /** Format: uuid */
      relatertBehandling?: string | null;
      /** @enum {string} */
      sakStatus: NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingSakStatus;
      saksnummer: string;
      /** @enum {string} */
      soknadsFormat: NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingSoknadsFormat;
      versjon: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.TilkjentYtelseDTO': {
      perioder: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.TilkjentYtelsePeriodeDTO'][];
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.TilkjentYtelsePeriodeDTO': {
      /** Format: double */
      dagsats: number;
      /**
       * Format: date
       * @example 2024-11-26
       */
      fraDato: string;
      /** Format: double */
      gradering: number;
      /**
       * Format: date
       * @example 2024-11-26
       */
      tilDato: string;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rDTO': {
      perioder: components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rsPeriodeDTO'][];
      /** @enum {string} */
      'vilk\u00E5rType': NoNavAapBehandlingsflytKontraktStatistikkVilkRDTOVilkRType;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rsPeriodeDTO': {
      'avslags\u00E5rsak'?: string | null;
      /**
       * Format: date
       * @example 2024-11-26
       */
      fraDato: string;
      'innvilgelses\u00E5rsak'?: string | null;
      manuellVurdering: boolean;
      /**
       * Format: date
       * @example 2024-11-26
       */
      tilDato: string;
      /** @enum {string} */
      utfall: NoNavAapBehandlingsflytKontraktStatistikkVilkRsPeriodeDTOUtfall;
    };
    'no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rsResultatDTO': {
      typeBehandling: string;
      'vilk\u00E5r': components['schemas']['no.nav.aap.behandlingsflyt.kontrakt.statistikk.Vilk\u00E5rDTO'][];
    };
    'no.nav.aap.motor.api.JobbInfoDto': {
      /** Format: int32 */
      'antallFeilendeFors\u00F8k': number;
      beskrivelse: string;
      feilmelding?: string | null;
      /** Format: int64 */
      id: number;
      /** @description Key type: kotlin.String */
      metadata: {
        [key: string]: string;
      };
      navn: string;
      /**
       * Format: date-time
       * @example 2024-11-26T09:09:59.961078
       */
      'planlagtKj\u00F8retidspunkt': string;
      /** @enum {string} */
      status: NoNavAapMotorApiJobbInfoDtoStatus;
      type: string;
    };
    'no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov': {
      /** Format: int32 */
      antall: number;
      behov: string;
    };
    'no.nav.aap.statistikk.produksjonsstyring.BehandlingPerSteggruppe': {
      /** Format: int32 */
      antall: number;
      /** @enum {string} */
      steggruppe: NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe;
    };
    'no.nav.aap.statistikk.produksjonsstyring.Vente\u00E5rsakOgGjennomsnitt': {
      /** Format: int32 */
      antall: number;
      /** Format: double */
      gjennomsnittligAlder: number;
      '\u00E5rsak': string;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt': {
      /** Format: int32 */
      'antall\u00C5pne': number;
      /** Format: double */
      gjennomsnittsalder: number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.BehandlinEndringerPerDag': {
      /** Format: int32 */
      avsluttede: number;
      /**
       * Format: date
       * @example 2024-11-26
       */
      dato: string;
      /** Format: int32 */
      nye: number;
      /** Format: int32 */
      totalt: number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO': {
      /**
       * Format: date
       * @example 2024-11-26
       */
      dag: string;
      /** Format: double */
      snitt: number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.FordelingLukkedeBehandlinger': {
      /** Format: int32 */
      antall: number;
      /** Format: int32 */
      'b\u00F8tte': number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.Fordeling\u00C5pneBehandlinger': {
      /** Format: int32 */
      antall: number;
      /** Format: int32 */
      'b\u00F8tte': number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export enum PathsBehandlingstidTypeBehandlingGetParametersPathTypeBehandling {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsPneBehandlingerGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingPerAvklaringsbehovGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingPerSteggruppeGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingerFordelingPneBehandlingerGetParametersQueryEnhet {
  DAG = 'DAG',
  UKE = 'UKE',
  M_NED = 'M\u00C5NED',
  _R = '\u00C5R',
}
export enum PathsBehandlingerFordelingPneBehandlingerGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingerFordelingLukkedeBehandlingerGetParametersQueryEnhet {
  DAG = 'DAG',
  UKE = 'UKE',
  M_NED = 'M\u00C5NED',
  _R = '\u00C5R',
}
export enum PathsBehandlingerFordelingLukkedeBehandlingerGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingerUtviklingGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum PathsBehandlingerPVentGetParametersQueryBehandlingstyper {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  TOTRINNS_VURDERT = 'TOTRINNS_VURDERT',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  KVALITETSSIKRET = 'KVALITETSSIKRET',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
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
  FASTSETT_SYKDOMSVILK_RET = 'FASTSETT_SYKDOMSVILK\u00C5RET',
  VURDER_YRKESSKADE = 'VURDER_YRKESSKADE',
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
export enum NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType {
  Value9001 = '9001',
  Value9002 = '9002',
  Value9003 = '9003',
  Value5001 = '5001',
  Value5003 = '5003',
  Value5004 = '5004',
  Value5005 = '5005',
  Value5006 = '5006',
  Value5007 = '5007',
  Value5008 = '5008',
  Value5009 = '5009',
  Value5010 = '5010',
  Value5011 = '5011',
  Value5012 = '5012',
  Value5013 = '5013',
  Value5014 = '5014',
  Value5097 = '5097',
  Value5098 = '5098',
  Value5099 = '5099',
  Value5050 = '5050',
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
export enum NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent {
  VENTER_P__OPPLYSNINGER = 'VENTER_P\u00C5_OPPLYSNINGER',
  VENTER_P__OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER = 'VENTER_P\u00C5_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER',
  VENTER_P__MEDISINSKE_OPPLYSNINGER = 'VENTER_P\u00C5_MEDISINSKE_OPPLYSNINGER',
  VENTER_P__VURDERING_AV_ROL = 'VENTER_P\u00C5_VURDERING_AV_ROL',
  VENTER_P__SVAR_FRA_BRUKER = 'VENTER_P\u00C5_SVAR_FRA_BRUKER',
  VENTER_P__MASKINELL_AVKLARING = 'VENTER_P\u00C5_MASKINELL_AVKLARING',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkGrunnlagUfReDTOType {
  STANDARD = 'STANDARD',
  YTTERLIGERE_NEDSATT = 'YTTERLIGERE_NEDSATT',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingBehandlingStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  IVERKSETTES = 'IVERKSETTES',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingBehandlingType {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingSakStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  L_PENDE = 'L\u00D8PENDE',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkStoppetBehandlingSoknadsFormat {
  DIGITAL = 'DIGITAL',
  PAPIR = 'PAPIR',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkVilkRDTOVilkRType {
  ALDERSVILK_RET = 'ALDERSVILK\u00C5RET',
  SYKDOMSVILK_RET = 'SYKDOMSVILK\u00C5RET',
  BISTANDSVILK_RET = 'BISTANDSVILK\u00C5RET',
  MEDLEMSKAP = 'MEDLEMSKAP',
  GRUNNLAGET = 'GRUNNLAGET',
  SYKEPENGEERSTATNING = 'SYKEPENGEERSTATNING',
}
export enum NoNavAapBehandlingsflytKontraktStatistikkVilkRsPeriodeDTOUtfall {
  IKKE_VURDERT = 'IKKE_VURDERT',
  IKKE_RELEVANT = 'IKKE_RELEVANT',
  OPPFYLT = 'OPPFYLT',
  IKKE_OPPFYLT = 'IKKE_OPPFYLT',
}
export enum NoNavAapMotorApiJobbInfoDtoStatus {
  KLAR = 'KLAR',
  PLUKKET = 'PLUKKET',
  FERDIG = 'FERDIG',
  FEILET = 'FEILET',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapStatistikkProduksjonsstyringBehandlingPerSteggruppeSteggruppe {
  START_BEHANDLING = 'START_BEHANDLING',
  ALDER = 'ALDER',
  LOVVALG = 'LOVVALG',
  MEDLEMSKAP = 'MEDLEMSKAP',
  BARNETILLEGG = 'BARNETILLEGG',
  STUDENT = 'STUDENT',
  SYKDOM = 'SYKDOM',
  GRUNNLAG = 'GRUNNLAG',
  ET_ANNET_STED = 'ET_ANNET_STED',
  UNDERVEIS = 'UNDERVEIS',
  TILKJENT_YTELSE = 'TILKJENT_YTELSE',
  SIMULERING = 'SIMULERING',
  VEDTAK = 'VEDTAK',
  FATTE_VEDTAK = 'FATTE_VEDTAK',
  KVALITETSSIKRING = 'KVALITETSSIKRING',
  IVERKSETT_VEDTAK = 'IVERKSETT_VEDTAK',
  BREV = 'BREV',
  UDEFINERT = 'UDEFINERT',
}
export type operations = Record<string, never>;
