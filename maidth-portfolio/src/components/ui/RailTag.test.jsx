import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { RailTag } from './RailTag';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cssPath = resolve(__dirname, '../../index.css');

describe('RailTag', () => {
  it('renders rail tag text with the requested tone', () => {
    render(<RailTag tone="gold">Ga mơ</RailTag>);

    expect(screen.getByText('Ga mơ')).toHaveClass('rail-tag', 'gold');
  });

  it('uses Fraunces for Vietnamese-safe display text', () => {
    const css = readFileSync(cssPath, 'utf8');

    expect(css).toContain('family=Fraunces:opsz,wght');
    expect(css).toMatch(/\.rail-tag\s*\{[^}]*font-family:\s*'Fraunces'/s);
    expect(css).not.toContain('TAN-MERINGUE.otf');
  });

  it('uses Fraunces for title and heading styles', () => {
    const css = readFileSync(cssPath, 'utf8');

    expect(css).toMatch(
      /\.station-heading h1,\s*\.profile-ticket h1\s*\{[^}]*font-family:\s*'Fraunces'/s
    );
    expect(css).toMatch(
      /\.project-car h2,\s*\.arrival-section h2,\s*\.arrival-card h2\s*\{[^}]*font-family:\s*'Fraunces'/s
    );
    expect(css).toMatch(/\.modal-heading h2\s*\{[^}]*font-family:\s*'Fraunces'/s);
    expect(css).toMatch(/\.about-info-card__label\s*\{[^}]*font-family:\s*'Fraunces'/s);
    expect(css).toMatch(/\.process-step-list span\s*\{[^}]*font-family:\s*'Fraunces'/s);
    expect(css).toMatch(/\.arrival-note-card > span\s*\{[^}]*font-family:\s*'Fraunces'/s);
  });
});
