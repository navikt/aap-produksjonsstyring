import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ÅpneBehandlinger } from 'components/åpnebehandlinger/ÅpneBehandlinger';
import { sekunderTilDager } from 'lib/utils/time';

describe('ÅpneBehandlinger', () => {
  test('Har en heading', () => {
    render(<ÅpneBehandlinger åpneOgGjennomsnitt={{ gjennomsnittsalder: 2400, antallÅpne: 97 }} />);
    const heading = screen.getByRole('heading', { name: 'Behandlinger', level: 2 });
    expect(heading).toBeVisible();
  });
  test('antall åpne behandlinger', () => {
    render(<ÅpneBehandlinger åpneOgGjennomsnitt={{ gjennomsnittsalder: 2400, antallÅpne: 97 }} />);
    const åpneBehandlinger = screen.getByText(`${97}`);
    expect(åpneBehandlinger).toBeVisible();
  });
  test('snittalder åpne behandlinger', () => {
    render(<ÅpneBehandlinger åpneOgGjennomsnitt={{ gjennomsnittsalder: 2400, antallÅpne: 97 }} />);
    const snittalderBehandlinger = screen.getByText(`${sekunderTilDager(2400)} dager`);
    expect(snittalderBehandlinger).toBeVisible();
  });
});
