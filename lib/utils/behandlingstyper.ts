import { PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper } from 'lib/types/schema-statistikk';
import { exhaustiveCheck } from 'lib/utils/typescript';
import { BehandlingstyperRequestQuery, OppgaveBehandlingstype } from 'lib/types/types';
import { NoNavAapOppgaveOppgaveDtoBehandlingstype } from '@navikt/aap-oppgave-typescript-types';

const oppgaveBehandlingsTypeAlternativerFraEnum = Object.keys(
  NoNavAapOppgaveOppgaveDtoBehandlingstype as unknown as keyof (typeof NoNavAapOppgaveOppgaveDtoBehandlingstype)[]
)
  .map((key) => key as keyof typeof NoNavAapOppgaveOppgaveDtoBehandlingstype)
  .map((key) => {
    switch (key) {
      case 'F_RSTEGANGSBEHANDLING':
        return 'Førstegangsbehandling';
      case 'TILBAKEKREVING':
        return 'Tilbakekreving';
      case 'REVURDERING':
        return 'Revurdering';
      case 'KLAGE':
        return 'Klage';
      case 'DOKUMENT_H_NDTERING':
        return 'Dokumenthåndtering';
      case 'JOURNALF_RING':
        return 'Journalføring';
    }
    exhaustiveCheck(key);
  });
export type OppgaveBehandlingstypeOptionLabel = (typeof oppgaveBehandlingsTypeAlternativerFraEnum)[number];
export const oppgaveBehandlingstyper: OppgaveBehandlingstype[] = [
  'FØRSTEGANGSBEHANDLING',
  'TILBAKEKREVING',
  'REVURDERING',
  'KLAGE',
  'DOKUMENT_HÅNDTERING',
  'JOURNALFØRING',
];
export const oppgaveBehandlingstypeOgLabel = [
  { value: 'F_RSTEGANGSBEHANDLING', label: 'Førstegangsbehandling' },
  { value: 'TILBAKEKREVING', label: 'Tilbakekreving' },
  { value: 'REVURDERING', label: 'Revurdering' },
  { value: 'KLAGE', label: 'Klage' },
  { value: 'DOKUMENT_H_NDTERING', label: 'Dokumenthåndtering' },
  { value: 'JOURNALF_RING', label: 'Journalføring' },
];

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
