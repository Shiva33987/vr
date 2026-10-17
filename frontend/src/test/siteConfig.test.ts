import { describe, it, expect } from 'vitest';
import { SITE_CONFIG } from '../config/site';

describe('SITE_CONFIG integrity tests', () => {
  it('contains the correct brand and founder information from the business card', () => {
    expect(SITE_CONFIG.brand.name).toBe('VR MEDIA & ADVERTISING');
    expect(SITE_CONFIG.brand.tagline).toBe('CONNECTING BRANDS WITH PEOPLE');
    expect(SITE_CONFIG.brand.founder.name).toBe('MELAM NAVEEN KUMAR');
    expect(SITE_CONFIG.contact.phone1).toBe('+91 92462 60400');
    expect(SITE_CONFIG.contact.phone2).toBe('+91 97037 71117');
    expect(SITE_CONFIG.contact.email).toBe('vrmedia.naveen@gmail.com');
    expect(SITE_CONFIG.contact.whatsappUrl).toContain('919246260400');
  });

  it('contains exactly 10 specialized services including the primary 5', () => {
    expect(SITE_CONFIG.services).toHaveLength(10);

    const primaryServices = SITE_CONFIG.services.filter((s) => s.isPrimary);
    expect(primaryServices).toHaveLength(5);

    const slugs = SITE_CONFIG.services.map((s) => s.slug);
    expect(slugs).toContain('led-screen-advertising');
    expect(slugs).toContain('railway-advertising');
    expect(slugs).toContain('outdoor-advertising');
    expect(slugs).toContain('digital-marketing');
    expect(slugs).toContain('events-promotions');
    expect(slugs).toContain('wedding-events');
    expect(slugs).toContain('birthday-celebrations');
    expect(slugs).toContain('corporate-events');
    expect(slugs).toContain('festivals-celebrations');
    expect(slugs).toContain('brand-activations');
  });

  it('has valid non-empty copy, features, and deliverables for each service', () => {
    SITE_CONFIG.services.forEach((service) => {
      expect(service.title.length).toBeGreaterThan(3);
      expect(service.shortDesc.length).toBeGreaterThan(20);
      expect(service.longDesc.length).toBeGreaterThan(80);
      expect(service.features.length).toBeGreaterThanOrEqual(3);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(2);
      expect(service.metricsSample.length).toBeGreaterThan(5);
    });
  });

  it('clearly flags sample testimonials as sample until replaced per prompt rules', () => {
    SITE_CONFIG.testimonials.forEach((testimonial) => {
      expect(testimonial.isSample).toBe(true);
    });
  });
});
