"use client";

import { useEffect } from 'react';

export default function GoogleTagManager() {
  useEffect(() => {
    // GTM script ya está cargado en el <head> vía layout.tsx
    // Este componente solo sirve para inicializar el dataLayer si es necesario
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  return (
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-T8L4R654"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}