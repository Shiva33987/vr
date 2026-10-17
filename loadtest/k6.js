import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metric: Error rate across all requests
export const errorRate = new Rate('errors');

// 100,000 Virtual Users (VU) Simulation Options
// Simulates progressive ramp-up against Edge CDN infrastructure
export const options = {
  stages: [
    { duration: '2m', target: 5000 },    // Ramp up to 5,000 VUs
    { duration: '3m', target: 25000 },   // Scale to 25,000 VUs
    { duration: '5m', target: 100000 },  // Peak traffic: 100,000 concurrent visitors
    { duration: '5m', target: 100000 },  // Sustain 100,000 concurrent visitors
    { duration: '3m', target: 20000 },   // Gradual ramp down
    { duration: '2m', target: 0 },       // Cool down
  ],
  thresholds: {
    // 95% of static page requests served from edge under 800ms
    'http_req_duration{type:static}': ['p(95)<800'],
    // 95% of API quote requests served under 1200ms
    'http_req_duration{type:api}': ['p(95)<1200'],
    // Overall error rate must stay below 1%
    'errors': ['rate<0.01'],
  },
};

const BASE_URL = __ENV.TARGET_URL || 'http://localhost:5173';

const SERVICE_SLUGS = [
  'led-screen-advertising',
  'railway-advertising',
  'outdoor-advertising',
  'digital-marketing',
  'events-promotions',
  'wedding-events',
  'birthday-celebrations',
  'corporate-events',
  'festivals-celebrations',
  'brand-activations',
];

export default function () {
  // 1. Visit Homepage
  group('01_Homepage_View', function () {
    const res = http.get(`${BASE_URL}/`, {
      tags: { type: 'static', name: 'Homepage' },
    });
    const success = check(res, {
      'homepage status is 200': (r) => r.status === 200,
      'has VR title': (r) => r.body.includes('VR Media') || r.body.includes('root'),
    });
    errorRate.add(!success);
  });

  sleep(Math.random() * 2 + 1);

  // 2. Browse Services Catalog
  group('02_Services_Overview', function () {
    const res = http.get(`${BASE_URL}/services`, {
      tags: { type: 'static', name: 'ServicesOverview' },
    });
    const success = check(res, {
      'services status is 200': (r) => r.status === 200,
    });
    errorRate.add(!success);
  });

  sleep(Math.random() * 2 + 1);

  // 3. Deep-dive into a randomized service detail page
  const randomSlug = SERVICE_SLUGS[Math.floor(Math.random() * SERVICE_SLUGS.length)];
  group('03_Service_Detail_View', function () {
    const res = http.get(`${BASE_URL}/services/${randomSlug}`, {
      tags: { type: 'static', name: 'ServiceDetail' },
    });
    const success = check(res, {
      'service detail status is 200': (r) => r.status === 200,
    });
    errorRate.add(!success);
  });

  sleep(Math.random() * 2 + 1);

  // 4. Visit Portfolio or About
  group('04_Portfolio_Or_About', function () {
    const targetPath = Math.random() > 0.5 ? '/portfolio' : '/about';
    const res = http.get(`${BASE_URL}${targetPath}`, {
      tags: { type: 'static', name: 'PortfolioOrAbout' },
    });
    const success = check(res, {
      'page status is 200': (r) => r.status === 200,
    });
    errorRate.add(!success);
  });

  // 5. Submit Quote Form (Simulated 2% conversion share to respect rate limits)
  if (Math.random() < 0.02) {
    group('05_Quotation_Submission', function () {
      const payload = JSON.stringify({
        fullName: 'Load Test Prospect',
        phone: '+91 99999 88888',
        email: `loadtest_${__VU}_${Date.now()}@example.com`,
        service: 'LED Screen Advertising',
        budget: '₹5,00,000 - ₹15,00,000',
        message: 'High-volume load test simulation inquiry.',
        honeypot: '',
      });

      const params = {
        headers: { 'Content-Type': 'application/json' },
        tags: { type: 'api', name: 'SubmitQuote' },
      };

      const res = http.post(`${BASE_URL}/api/quote`, payload, params);

      // Either 200 (accepted) or 429 (rate-limited at edge) is considered expected behavior under load
      const isAcceptable = res.status === 200 || res.status === 429;
      check(res, {
        'quote api returned 200 or 429': () => isAcceptable,
      });
      errorRate.add(!isAcceptable);
    });
  }

  sleep(Math.random() * 3 + 2);
}
