/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/stoppetBehandling": {
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
                     *       "behandlingReferanse": "82ac934e-28ca-45b9-8e0a-242c1e2d60e1",
                     *       "relatertBehandling": null,
                     *       "behandlingOpprettetTidspunkt": "2024-10-28T08:31:30.321142",
                     *       "mottattTid": "2024-10-27T08:31:30.32115",
                     *       "status": "OPPRETTET",
                     *       "behandlingType": "Førstegangsbehandling",
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
                     *               "tidsstempel": "2024-10-28T08:21:30.320979",
                     *               "frist": null,
                     *               "endretAv": "Kelvin"
                     *             },
                     *             {
                     *               "status": "AVSLUTTET",
                     *               "tidsstempel": "2024-10-28T08:26:30.321003",
                     *               "frist": null,
                     *               "endretAv": "Z994573"
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
                     *               "tidsstempel": "2024-10-28T08:28:30.321013",
                     *               "frist": null,
                     *               "endretAv": "Kelvin"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "hendelsesTidspunkt": "2024-10-28T08:31:30.321346",
                     *       "avsluttetBehandling": null,
                     *       "identerForSak": []
                     *     } */
                    "application/json": components["schemas"]["no.nav.aap.statistikk.api_kontrakt.StoppetBehandling"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
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
    "/behandlingstid/{typeBehandling}": {
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
                    /** @description typebehandling */
                    typeBehandling: "Førstegangsbehandling" | "Revurdering" | "Tilbakekreving" | "Klage";
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
                        "application/json": components["schemas"]["no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO"][];
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
        "no.nav.aap.statistikk.api_kontrakt.AvklaringsbehovHendelse": {
            definisjon: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Definisjon"];
            endringer: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Endring"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.statistikk.api_kontrakt.AvsluttetBehandlingDTO": {
            /** Format: uuid */
            behandlingsReferanse: string;
            beregningsGrunnlag?: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO"];
            /**
             * Format: date-time
             * @example 2024-10-28T08:31:30.298314
             */
            hendelsesTidspunkt: string;
            saksnummer: string;
            tilkjentYtelse: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.TilkjentYtelseDTO"];
            "vilk\u00E5rsResultat": components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsResultatDTO"];
        };
        "no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO": {
            grunnlag11_19dto?: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO"];
            "grunnlagUf\u00F8re"?: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.GrunnlagUf\u00F8reDTO"];
            grunnlagYrkesskade?: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.GrunnlagYrkesskadeDTO"];
        };
        "no.nav.aap.statistikk.api_kontrakt.Definisjon": {
            /** @enum {string} */
            behovType: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            /** @enum {string} */
            "l\u00F8sesISteg": "START_BEHANDLING" | "VURDER_ALDER" | "VURDER_LOVVALG" | "VURDER_MEDLEMSKAP" | "AVKLAR_STUDENT" | "VURDER_BISTANDSBEHOV" | "VURDER_SYKEPENGEERSTATNING" | "FRITAK_MELDEPLIKT" | "KVALITETSSIKRING" | "BARNETILLEGG" | "AVKLAR_SYKDOM" | "FASTSETT_ARBEIDSEVNE" | "FASTSETT_BEREGNINGSTIDSPUNKT" | "FASTSETT_GRUNNLAG" | "VIS_GRUNNLAG" | "FASTSETT_UTTAK" | "SAMORDNING_GRADERING" | "DU_ER_ET_ANNET_STED" | "BEREGN_TILKJENT_YTELSE" | "SIMULERING" | "FORESLÅ_VEDTAK" | "FATTE_VEDTAK" | "BREV" | "IVERKSETT_VEDTAK";
            type: string;
        };
        "no.nav.aap.statistikk.api_kontrakt.Endring": {
            endretAv: string;
            /**
             * Format: date
             * @example 2024-10-28
             */
            frist?: string | null;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2024-10-28T08:31:30.298314
             */
            tidsstempel: string;
        };
        "no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO": {
            er6GBegrenset: boolean;
            erGjennomsnitt: boolean;
            /** Format: double */
            grunnlaget: number;
            /** @description Key type: kotlin.String */
            inntekter: {
                [key: string]: number;
            };
        };
        "no.nav.aap.statistikk.api_kontrakt.GrunnlagUf\u00F8reDTO": {
            grunnlag: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO"];
            grunnlagYtterligereNedsatt: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO"];
            grunnlaget: number;
            /** @enum {string} */
            type: "STANDARD" | "YTTERLIGERE_NEDSATT";
            /** @description Key type: kotlin.String */
            "uf\u00F8reInntekterFraForeg\u00E5ende\u00C5r": {
                [key: string]: number;
            };
            /** Format: int32 */
            "uf\u00F8reYtterligereNedsattArbeidsevne\u00C5r": number;
            /** Format: int32 */
            "uf\u00F8regrad": number;
        };
        "no.nav.aap.statistikk.api_kontrakt.GrunnlagYrkesskadeDTO": {
            andelSomIkkeSkyldesYrkesskade: number;
            andelSomSkyldesYrkesskade: number;
            /** Format: int32 */
            andelYrkesskade: number;
            "antatt\u00C5rligInntektYrkesskadeTidspunktet": number;
            /** Format: int32 */
            benyttetAndelForYrkesskade: number;
            beregningsgrunnlag: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO"];
            grunnlagEtterYrkesskadeFordel: number;
            grunnlagForBeregningAvYrkesskadeandel: number;
            grunnlaget: number;
            "inkludererUf\u00F8re": boolean;
            /** Format: int32 */
            terskelverdiForYrkesskade: number;
            /** Format: int32 */
            yrkesskadeTidspunkt: number;
            yrkesskadeinntektIG: number;
        };
        "no.nav.aap.statistikk.api_kontrakt.StoppetBehandling": {
            avklaringsbehov: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.AvklaringsbehovHendelse"][];
            avsluttetBehandling?: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.AvsluttetBehandlingDTO"];
            /**
             * Format: date-time
             * @example 2024-10-28T08:31:30.298314
             */
            behandlingOpprettetTidspunkt: string;
            /** Format: uuid */
            behandlingReferanse: string;
            /** @enum {string} */
            behandlingType: "Førstegangsbehandling" | "Revurdering" | "Tilbakekreving" | "Klage";
            /**
             * Format: date-time
             * @example 2024-10-28T08:31:30.298314
             */
            hendelsesTidspunkt: string;
            ident: string;
            identerForSak: string[];
            /**
             * Format: date-time
             * @example 2024-10-28T08:31:30.298314
             */
            mottattTid: string;
            /** Format: uuid */
            relatertBehandling?: string | null;
            /** @enum {string} */
            sakStatus: "OPPRETTET" | "UTREDES" | "LØPENDE" | "AVSLUTTET";
            saksnummer: string;
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "IVERKSETTES" | "AVSLUTTET";
            versjon: string;
        };
        "no.nav.aap.statistikk.api_kontrakt.TilkjentYtelseDTO": {
            perioder: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.TilkjentYtelsePeriodeDTO"][];
        };
        "no.nav.aap.statistikk.api_kontrakt.TilkjentYtelsePeriodeDTO": {
            /** Format: double */
            dagsats: number;
            /**
             * Format: date
             * @example 2024-10-28
             */
            fraDato: string;
            /** Format: double */
            gradering: number;
            /**
             * Format: date
             * @example 2024-10-28
             */
            tilDato: string;
        };
        "no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rDTO": {
            perioder: components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsPeriodeDTO"][];
            /** @enum {string} */
            "vilk\u00E5rType": "ALDERSVILKÅRET" | "SYKDOMSVILKÅRET" | "BISTANDSVILKÅRET" | "MEDLEMSKAP" | "GRUNNLAGET" | "SYKEPENGEERSTATNING";
        };
        "no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsPeriodeDTO": {
            "avslags\u00E5rsak"?: string | null;
            /**
             * Format: date
             * @example 2024-10-28
             */
            fraDato: string;
            "innvilgelses\u00E5rsak"?: string | null;
            manuellVurdering: boolean;
            /**
             * Format: date
             * @example 2024-10-28
             */
            tilDato: string;
            /** @enum {string} */
            utfall: "IKKE_VURDERT" | "IKKE_RELEVANT" | "OPPFYLT" | "IKKE_OPPFYLT";
        };
        "no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsResultatDTO": {
            typeBehandling: string;
            "vilk\u00E5r": components["schemas"]["no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rDTO"][];
        };
        "no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO": {
            /**
             * Format: date
             * @example 2024-10-28
             */
            dag: string;
            /** Format: double */
            snitt: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
