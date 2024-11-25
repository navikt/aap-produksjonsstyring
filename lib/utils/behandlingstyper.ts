import { NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype } from 'lib/types/schema-oppgave';
import { exhaustiveCheck } from 'lib/utils/typescript';

const behandlingsTypeAlternativerFraEnum = Object.keys(
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype as unknown as keyof (typeof NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype)[]
)
  .map((key) => key as keyof typeof NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype)
  .map((key) => {
    switch (key) {
      case 'F_RSTEGANGSBEHANDLING':
        return {
          label: 'Førstegangsbehandling',
          value: 'FØRSTEGANGSBEHANDLING',
        };
      case 'TILBAKEKREVING':
        return {
          label: 'Tilbakekreving',
          value: 'TILBAKEKREVING',
        };
      case 'REVURDERING':
        return {
          label: 'Revurdering',
          value: 'REVURDERING',
        };
      case 'KLAGE':
        return {
          label: 'Klage',
          value: 'KLAGE',
        };
      case 'DOKUMENT_H_NDTERING':
        return {
          label: 'Dokumenthåndtering',
          value: 'DOKUMENT_HÅNDTERING',
        };
    }
    exhaustiveCheck(key);
  });
export const behandlingsTyperOptions = [{ label: 'Alle', value: '' }, ...behandlingsTypeAlternativerFraEnum];
