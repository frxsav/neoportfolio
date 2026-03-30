'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function CookiesProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originalGetContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, attributes) {
        if (type === '2d') {
          return originalGetContext.call(this, type, {
            ...attributes,
            willReadFrequently: true,
          });
        }
        return originalGetContext.call(this, type, attributes);
      };
    }
  }, []);
  return (
    <Script
      type={`text/javascript`}
      strategy="lazyOnload"
      src={`https://embeds.iubenda.com/widgets/677e0366-d767-4153-93a3-96941831cbf6.js`}
    />
  );
}
