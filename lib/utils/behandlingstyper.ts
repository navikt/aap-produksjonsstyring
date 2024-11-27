import { PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper } from 'lib/types/schema-statistikk';
import { exhaustiveCheck } from 'lib/utils/typescript';

const behandlingsTypeAlternativerFraEnum = Object.keys(
  PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper as unknown as keyof (typeof PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper)[]
)
  .map((key) => key as keyof typeof PathsBehandlingstidLukkedeSisteDagerAntallDagerGetParametersQueryBehandlingstyper)
  .map((key) => {
    switch (key) {
      case 'F_rstegangsbehandling':
        return {
          label: 'Førstegangsbehandling',
          value: 'Førstegangsbehandling',
        };
      case 'Tilbakekreving':
        return {
          label: 'Tilbakekreving',
          value: 'Tilbakekreving',
        };
      case 'Revurdering':
        return {
          label: 'Revurdering',
          value: 'Revurdering',
        };
      case 'Klage':
        return {
          label: 'Klage',
          value: 'Klage',
        };
    }
    exhaustiveCheck(key);
  });
export const behandlingsTyperOptions = [{ label: 'Alle', value: '' }, ...behandlingsTypeAlternativerFraEnum];
