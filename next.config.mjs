/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.googletagmanager.com https://www.google-analytics.com;
      script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com;
      img-src 'self' blob: data:;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
      frame-src 'self' https://www.google.com https://maps.googleapis.com;
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, ' ')
      .trim(),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
