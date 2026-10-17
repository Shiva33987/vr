import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactPage } from '../pages/ContactPage';

describe('ContactPage & Quotation Engine', () => {
  it('renders quote form inputs, direct phone numbers, and WhatsApp button', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByPlaceholderText(/e\.g\. Ramesh Chandra/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/\+91 98765 43210/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name@company\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Start WhatsApp Conversation/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 92462 60400/i)).toBeInTheDocument();
  });

  it('triggers validation errors when submitting an empty form', async () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      </HelmetProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /Submit Campaign Proposal Request/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid 10-digit mobile number/i)).toBeInTheDocument();
      expect(screen.getByText(/Please select a service/i)).toBeInTheDocument();
    });
  });
});
