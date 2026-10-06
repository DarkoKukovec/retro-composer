import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the author link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: '@DarkoKukovec' });
    expect(link).toHaveAttribute('href', 'https://twitter.com/DarkoKukovec');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
