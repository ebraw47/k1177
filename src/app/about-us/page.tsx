import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  DOWNLOAD_APP_URL,
  SITE_DOMAIN,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About k1177apk.com.pk — K1177 Guides & APK Info Pakistan',
  description: `About ${SITE_DOMAIN}: independent guides for ${BRAND_NAME} APK download (${APP_VERSION}, ${APP_SIZE}), JazzCash/EasyPaisa help, and responsible 18+ gaming in Pakistan.`,
  keywords: [
    'about K1177',
    'k1177apk.com.pk',
    'K1177 Pakistan',
    'K1177 download guide',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: 'About k1177apk.com.pk — K1177 Pakistan',
    description: `Trusted information about ${BRAND_NAME} download, payments, and safe play for Pakistani users.`,
    url: `${SITE_URL}/about-us`,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/k1177-game-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'About K1177 — k1177apk.com.pk',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ink">About k1177apk.com.pk</h1>
            <p className="text-lg text-muted/80 max-w-2xl mx-auto">
              Clear, updated guides for {BRAND_NAME} players in Pakistan — not the app developer, but a
              dedicated information site.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-secondary">
                    <Image
                      src="/k1177-game-logo.webp"
                      alt="K1177 logo"
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-2/3 md:pl-4 space-y-5 text-lg text-muted leading-relaxed">
                <p>
                  Welcome to{' '}
                  <a href={SITE_URL} className="text-accent hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                    {SITE_DOMAIN}
                  </a>
                  . We publish step-by-step help for{' '}
                  <Link href="/" className="text-accent hover:underline font-semibold">
                    {BRAND_NAME}
                  </Link>{' '}
                  — including{' '}
                  <Link href="/download-k1177" className="text-accent hover:underline">
                    free APK download
                  </Link>{' '}
                  ({APP_VERSION}, {APP_SIZE}, {APP_OS}), JazzCash &amp; EasyPaisa deposits, withdrawal PIN
                  setup, PC emulator play, and bonus explainers.
                </p>
                <p>
                  {BRAND_NAME} is distributed as an Android APK (not on Google Play). Our role is to
                  explain install steps, highlight fake-APK risks, and link responsible gaming reminders.
                  For the app file itself, use the official{' '}
                  <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    download link
                  </a>{' '}
                  from this site.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">What we publish</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted text-lg">
              <li>Download &amp; unknown-sources install guides for Pakistan</li>
              <li>Deposit and withdraw tutorials aligned with in-app JazzCash / EasyPaisa flows</li>
              <li>Safety, legal context, and scam warnings for searchers of &quot;K1177 Game Free Download Pakistan&quot;</li>
              <li>Blog articles updated through November 2026 with internal links between related topics</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink text-center">Our aim</h2>
            <p className="text-lg md:text-xl text-ink leading-relaxed text-center">
              Help Pakistani users find accurate {BRAND_NAME} information quickly — with 18+ responsible
              gaming front and center. Questions about this website? Email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-orange-100 font-semibold">
                {SUPPORT_EMAIL}
              </a>{' '}
              or visit our{' '}
              <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-ink">Explore guides</h2>
            <p className="text-muted mb-6 text-lg">
              Start with the{' '}
              <Link href="/blog/k1177-app-review-2026" className="text-accent hover:underline">
                2026 app review
              </Link>{' '}
              or the{' '}
              <Link href="/blog" className="text-accent hover:underline">
                full blog
              </Link>
              .
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: SITE_DOMAIN,
              url: SITE_URL,
              logo: `${SITE_URL}/k1177-game-logo.webp`,
              description: `Information site about ${BRAND_NAME} APK and payments in Pakistan.`,
              contactPoint: {
                '@type': 'ContactPoint',
                email: SUPPORT_EMAIL,
                contactType: 'customer support',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/about-us`,
            },
          }),
        }}
      />
    </div>
  );
}
