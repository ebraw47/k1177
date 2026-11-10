import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#03150c",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://k1177apk.com.pk'),
  title: {
    default: "K1177 Game Free Download Online Money App In Pakistan V1.6",
    template: "%s | K1177"
  },
  description: "Download K1177 Game APK V1.6 for Pakistan. Casino earning app with JazzCash & EasyPaisa, slots, cards, bonuses. Official site k1177apk.com.pk.",
  keywords: [
    "K1177",
    "K1177 Game",
    "K1177 APK",
    "K1177 download",
    "K1177 Pakistan",
    "K1177 Game Free Download",
    "K1177 online money app",
    "K1177 JazzCash",
    "K1177 V1.6",
    "k1177apk.com.pk"
  ],
  authors: [{ name: "K1177 Team" }],
  creator: "K1177",
  publisher: "K1177",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://k1177apk.com.pk",
  },
  openGraph: {
    title: "K1177 Game Free Download Online Money App In Pakistan V1.6",
    description: "Download K1177 APK V1.6. Play & earn with JazzCash & EasyPaisa withdrawals.",
    url: "https://k1177apk.com.pk",
    siteName: "K1177",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://k1177apk.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "K1177 Game - Online Money App Pakistan",
      },
      {
        url: "https://k1177apk.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "K1177 Game - Online Money App Pakistan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K1177 Game Free Download Online Money App In Pakistan V1.6",
    description: "Download K1177 APK V1.6. Play & earn with JazzCash & EasyPaisa.",
    creator: "@k1177apk",
    images: [
      {
        url: "https://k1177apk.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "K1177 Game - Online Money App Pakistan",
      }
    ],
  },
  applicationName: "K1177",
  category: "Gaming",
  classification: "Real-Money Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased text-ink min-h-screen flex flex-col`}
        style={{
          backgroundColor: "#041c10",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0" aria-hidden="true" />
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://k1177apk.com.pk/#organization",
              "name": "K1177",
              "url": "https://k1177apk.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://k1177apk.com.pk/k1177-game-logo-site.webp",
                "width": 512,
                "height": 512
              },
              "description": "K1177 is Pakistan's real-money gaming platform. Download APK, JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@k1177apk.com.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
