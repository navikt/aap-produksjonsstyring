import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeadingAndLargeText } from './HeadingAndLargeText';
const data = { heading: 'Min heading', text: 'datatekst' };
describe('HeadingAndLargeText', () => {
  test('heading', () => {
    render(<HeadingAndLargeText heading={data.heading} text={data.text} />);
    const heading = screen.getByRole('heading', { name: data.heading, level: 3 });
    expect(heading).toBeVisible();
  });
  test('text', () => {
    render(<HeadingAndLargeText heading={data.heading} text={data.text} />);
    const heading = screen.getByText(data.text);
    expect(heading).toBeVisible();
  });
});
