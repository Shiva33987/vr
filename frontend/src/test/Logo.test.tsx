import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from '../components/Logo';

describe('Logo Component', () => {
  it('renders the SVG with VR monogram and accessibility aria-label', () => {
    render(<Logo />);
    const svgElement = screen.getByLabelText(/VR Media & Advertising Logo/i);
    expect(svgElement).toBeInTheDocument();
  });

  it('renders the company wordmark and tagline when not in compact mode', () => {
    render(<Logo variant="dark" />);
    expect(screen.getByText(/VR MEDIA/i)).toBeInTheDocument();
    expect(screen.getByText(/& ADVERTISING/i)).toBeInTheDocument();
    expect(screen.getByText(/Connecting Brands with People/i)).toBeInTheDocument();
  });

  it('hides text when compact=true', () => {
    render(<Logo compact={true} />);
    expect(screen.queryByText(/Connecting Brands with People/i)).not.toBeInTheDocument();
  });
});
