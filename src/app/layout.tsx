import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "./GoogleTagManager";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innova Traducciones | Traducciones Oficiales Profesionales",
  description: "Servicios profesionales de traducción oficial con validez legal internacional. Precisión, confidencialidad y entrega garantizada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T8L4R654');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* jQuery (requerido para BlueCaribu) */}
        <Script 
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        {/* BlueCaribu Integration Script */}
        <Script id="bluecaribu-integration" strategy="afterInteractive">
          {`
            (function(){
              var script = document.createElement('script');
              script.src = 'https://app.bluecaribu.com/conversion/integration';
              script.type = 'text/javascript';
              script.async = true;
              document.head.appendChild(script);
            })();
          `}
        </Script>

        {/* BlueCaribu Configuration */}
        <Script id="bluecaribu-config" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              if (typeof bctag !== 'undefined') {
                bctag({
                  config: {
                    token: '93693707B998517A02FDEF9D5376E4F3',
                    redirect: '/gracias'
                  },
                  forms: {
                    ".blueform": {
                      contact_name: "nombre",
                      contact_email: "email",
                      contact_phone: "telefono",
                      lead_msg: "mensaje",
                      custom: {
                        ciudad: "ciudad"
                      }
                    }
                  }
                });
              }
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}