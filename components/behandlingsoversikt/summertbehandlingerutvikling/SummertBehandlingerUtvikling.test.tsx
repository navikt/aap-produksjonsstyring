import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SummertBehandlingerUtvikling } from 'components/behandlingsoversikt/summertbehandlingerutvikling/SummertBehandlingerUtvikling';
import { sekunderTilDager } from 'lib/utils/time';
const behandlingerUtvikling = [
  { dato: '10-02-1990', nye: 3, avsluttede: 9, totalt: 64 },
  { dato: '10-02-1990', nye: 5, avsluttede: 10, totalt: 67 },
  { dato: '10-02-1990', nye: 12, avsluttede: 4, totalt: 71 },
  { dato: '10-02-1990', nye: 4, avsluttede: 6, totalt: 72 },
];
const sumNyeBehandlinger = Object.values(behandlingerUtvikling).reduce((acc, curr) => acc + curr.nye, 0);
const sumAvsluttedeBehandlinger = Object.values(behandlingerUtvikling).reduce((acc, curr) => acc + curr.avsluttede, 0);
describe('Behandlingsoversikt', () => {
  test('antall nye behandlinger stemmer', () => {
    render(
      <SummertBehandlingerUtvikling behandlingerUtvikling={behandlingerUtvikling} alderLukkedeSisteSyvDager={10003} />
    );
    const sumNye = screen.getByText(`${sumNyeBehandlinger}`);
    expect(sumNye).toBeVisible();
  });
  test('antall avsluttede behandlinger stemmer', () => {
    render(
      <SummertBehandlingerUtvikling behandlingerUtvikling={behandlingerUtvikling} alderLukkedeSisteSyvDager={10003} />
    );
    const sumAvsluttede = screen.getByText(`${sumAvsluttedeBehandlinger}`);
    expect(sumAvsluttede).toBeVisible();
  });
  test('snittalder ferdistilte behandlinger stemmer', () => {
    const snittalderFerdigstilteBehandlinger = sekunderTilDager(10003);
    render(
      <SummertBehandlingerUtvikling behandlingerUtvikling={behandlingerUtvikling} alderLukkedeSisteSyvDager={10003} />
    );
    const snittalder = screen.getByText(`${snittalderFerdigstilteBehandlinger} dager`);
    expect(snittalder).toBeVisible();
  });
});
