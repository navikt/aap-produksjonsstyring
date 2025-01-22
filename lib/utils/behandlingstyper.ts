import { PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper } from 'lib/types/schema-statistikk';
import { exhaustiveCheck } from 'lib/utils/typescript';
import { BehandlingstyperRequestQuery } from 'lib/types/types';
import { NoNavAapOppgaveOppgaveDtoBehandlingstype } from '@navikt/aap-oppgave-typescript-types';

export const oppgaveBehandlingstyper = Object.keys(
  NoNavAapOppgaveOppgaveDtoBehandlingstype as unknown as keyof (typeof NoNavAapOppgaveOppgaveDtoBehandlingstype)[]
)
  .map((key) => key as keyof typeof NoNavAapOppgaveOppgaveDtoBehandlingstype)
  .map((key) => {
    switch (key) {
      case 'F_RSTEGANGSBEHANDLING':
        return { label: 'Førstegangsbehandling', value: 'FØRSTEGANGSBEHANDLING' };
      case 'TILBAKEKREVING':
        return { label: 'Tilbakekreving', value: 'TILBAKEKREVING' };
      case 'REVURDERING':
        return { label: 'Revurdering', value: 'REVURDERING' };
      case 'KLAGE':
        return { label: 'Klage', value: 'KLAGE' };
      case 'DOKUMENT_H_NDTERING':
        return { label: 'Dokumenthåndtering', value: 'DOKUMENTHÅNDTERING' };
      case 'JOURNALF_RING':
        return { label: 'Journalføring', value: 'JOURNALFØRING' };
    }
    exhaustiveCheck(key);
  });

const behandlingsTypeAlternativerFraEnum = Object.keys(
  PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper as unknown as keyof (typeof PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper)[]
)
  .map((key) => key as keyof typeof PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper)
  .map((key) => {
    switch (key) {
      case 'F_rstegangsbehandling':
        return 'Førstegangsbehandling';
      case 'Tilbakekreving':
        return 'Tilbakekreving';
      case 'Revurdering':
        return 'Revurdering';
      case 'Klage':
        return 'Klage';
    }
    exhaustiveCheck(key);
  });
export type BehandlingsTyperOption = BehandlingstyperRequestQuery;
export const behandlingsTyperOptions: BehandlingsTyperOption[] = behandlingsTypeAlternativerFraEnum;
