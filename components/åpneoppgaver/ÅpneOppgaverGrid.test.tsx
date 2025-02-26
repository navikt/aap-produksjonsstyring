import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { AvklaringsbehovKode } from 'lib/types/types';
import { ÅpneOppgaverGrid } from 'components/åpneoppgaver/ÅpneOppgaverGrid';
import { mapBehovskodeTilBehovstype } from 'lib/utils/oversettelser';
const antallOppgaver = {
  '5001': 32,
  '5003': 25,
  '5004': 12,
  '5005': 122,
  '5006': 2,
  '5007': 7,
  '5008': 8,
  '5009': 9,
  '5010': 10,
  '5011': 11,
  '5097': 97,
  '5098': 98,
  '5099': 99,
  '9001': 9001,
};
describe('AntallOppgaver', () => {
  test('viser riktig tekst og antall oppgaver for alle avklaringsbehovtyper', () => {
    render(<ÅpneOppgaverGrid oppgaver={antallOppgaver} />);
    const oppgaveBehovKoder = Object.keys(antallOppgaver);
    oppgaveBehovKoder.forEach((kode) => {
      const label = screen.getByText(mapBehovskodeTilBehovstype(kode as AvklaringsbehovKode));
      expect(label).toBeVisible();
      if (label.parentElement) {
        // @ts-ignore
        within(label.parentElement).getByText(`${antallOppgaver[kode]}`);
      }
    });
  });
});
