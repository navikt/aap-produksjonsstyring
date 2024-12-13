import { PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper } from 'lib/types/schema-statistikk';
import { exhaustiveCheck } from 'lib/utils/typescript';
import { BehandlingstyperRequestQuery } from 'lib/types/types';

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
export type BehandlingsTyperOption = BehandlingstyperRequestQuery | 'Alle';
export const behandlingsTyperOptions: BehandlingsTyperOption[] = ['Alle', ...behandlingsTypeAlternativerFraEnum];
