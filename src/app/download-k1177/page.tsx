import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import DownloadButton from '@/components/DownloadButton';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  DOWNLOAD_APP_URL,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'K1177 Game Free Download Pakistan — Official APK 2026' },
  description: `Download ${BRAND_NAME} APK free for Android in Pakistan (${APP_VERSION}, ${APP_SIZE}). Sideload install, unknown sources guide, JazzCash & EasyPaisa. Not on Google Play. 18+.`,
  keywords: [
    'K1177 Game Free Download Pakistan',
    'K1177 APK download',
    'K1177 Android',
    'K1177 latest version',
    'K1177 official APK',
    'download K1177 Pakistan',
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
    canonical: `${SITE_URL}/download-k1177`,
  },
  openGraph: {
    title: 'K1177 Game Free Download Pakistan — Official APK 2026',
    description: `Free ${BRAND_NAME} APK for Android ${APP_OS}. ${APP_VERSION}, ${APP_SIZE}. Safe sideload from k1177apk.com.pk.`,
    url: `${SITE_URL}/download-k1177`,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/k1177-game-logo-site.webp`,
        width: 1200,
        height: 630,
        alt: 'Download K1177 APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K1177 Game Free Download Pakistan — Official APK 2026',
    description: `Download ${BRAND_NAME} APK (${APP_VERSION}, ${APP_SIZE}) for Android in Pakistan.`,
    images: [`${SITE_URL}/k1177-game-logo-site.webp`],
  },
};

export default function DownloadPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: BRAND_NAME,
    operatingSystem: APP_OS,
    applicationCategory: 'GameApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
    },
    downloadUrl: `${SITE_URL}/download-k1177`,
    softwareVersion: APP_VERSION,
    fileSize: APP_SIZE,
    dateModified: '2026-11-05',
    description: `${BRAND_NAME} Android APK for Pakistan — slots, cards, fishing, and wallet deposits via JazzCash & EasyPaisa. Sideload only; not distributed on Google Play.`,
    screenshot: [
      `${SITE_URL}/k1177-game-recharge.webp`,
      `${SITE_URL}/k1177game-login.webp`,
      `${SITE_URL}/k1177-game-register.webp`,
    ],
    image: `${SITE_URL}/k1177-game-logo-site.webp`,
    author: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    inLanguage: ['en', 'ur'],
    countriesSupported: 'PK',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-ink">K1177 Game Free Download </span>
            <span className="text-[#f5c518]">Pakistan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted mb-6">
            Official Android APK ({APP_VERSION}) — sideload install
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">
              {BRAND_NAME}
            </Link>{' '}
            is a real-money gaming app popular in Pakistan for slots, card tables, fishing mini-games,
            and local wallet payments. It is{' '}
            <strong className="text-ink">not listed on Google Play</strong>, so you install the
            official APK from {SITE_URL.replace('https://', '')} or the button below — never from
            random Telegram or WhatsApp links. Players must be <strong className="text-ink">18+</strong>{' '}
            and play responsibly.
          </p>
        </div>

        <div className="flex justify-center my-12">
          <DownloadButton size="lg" />
        </div>

        <div className="flex justify-center mb-8">
          <span className="bg-secondary text-[#2db87a] px-6 py-2 rounded-full text-sm font-semibold">
            {APP_VERSION} · {APP_SIZE} · {APP_OS}
          </span>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
            <Image
              src="/k1177-game-logo-site.webp"
              alt="K1177 Game logo — free APK download Pakistan"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
              priority
              fetchPriority="high"
              quality={90}
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#f5c518] text-center">
          Download information
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-accent/15 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-secondary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">App name</td>
                  <td className="py-4 px-6 text-left text-ink">{BRAND_NAME}</td>
                </tr>
                <tr className="bg-primary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">Version</td>
                  <td className="py-4 px-6 text-left text-ink">{APP_VERSION}</td>
                </tr>
                <tr className="bg-secondary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">APK size</td>
                  <td className="py-4 px-6 text-left text-ink">{APP_SIZE}</td>
                </tr>
                <tr className="bg-primary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">Required OS</td>
                  <td className="py-4 px-6 text-left text-ink">{APP_OS}</td>
                </tr>
                <tr className="bg-secondary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">Distribution</td>
                  <td className="py-4 px-6 text-left text-ink">APK sideload (not Google Play)</td>
                </tr>
                <tr className="bg-primary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">Last updated</td>
                  <td className="py-4 px-6 text-left text-ink">November 2026</td>
                </tr>
                <tr className="bg-secondary/50">
                  <td className="py-4 px-6 text-left font-medium text-ink">Price</td>
                  <td className="py-4 px-6 text-left text-ink">Free download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <DownloadButton />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#f5c518] text-center">
            How to download &amp; install {BRAND_NAME} on Android
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-lg p-6 border-l-4 border-[#f5c518]">
              <h3 className="text-xl font-bold text-[#f5c518] mb-3">Step 1: Get the official APK</h3>
              <p className="text-muted leading-relaxed">
                On your Android phone, open this site or tap the download button above. The file routes
                through our official link ({DOWNLOAD_APP_URL}) — do not install APKs from Facebook
                groups, fake &quot;VIP agent&quot; chats, or look-alike domains.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6 border-l-4 border-[#2db87a]">
              <h3 className="text-xl font-bold text-[#2db87a] mb-3">Step 2: Allow unknown sources</h3>
              <p className="text-muted leading-relaxed mb-3">
                Android blocks apps outside Google Play until you allow your browser or file manager to
                install APKs:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1">
                <li>
                  <strong>Samsung / most brands:</strong> Settings → Security → Install unknown apps →
                  enable for Chrome (or your browser).
                </li>
                <li>
                  <strong>Android 13+:</strong> Settings → Apps → Special app access → Install unknown
                  apps → select your browser and allow.
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 3: Install the APK</h3>
              <p className="text-muted leading-relaxed">
                Open Downloads (or the notification), tap the {BRAND_NAME} APK, confirm Install, and wait
                until finished. If you see &quot;App not installed&quot;, free at least 200 MB storage and
                re-download — corrupted partial files cause parse errors.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Step 4: Register &amp; verify payments</h3>
              <p className="text-muted leading-relaxed">
                Launch the app,{' '}
                <Link href="/blog/create-k1177-account-and-login" className="text-accent hover:underline">
                  create an account
                </Link>
                , then use JazzCash or EasyPaisa for your first small deposit if you choose to play
                for real money. See our{' '}
                <Link href="/deposit-money-in-k1177" className="text-accent hover:underline">
                  deposit guide
                </Link>{' '}
                and{' '}
                <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-accent hover:underline">
                  safety notes
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#f5c518] text-center">
          Official APK vs fake {BRAND_NAME} downloads
        </h2>
        <div className="bg-secondary rounded-xl p-8 space-y-4 text-muted leading-relaxed">
          <p>
            Search results for &quot;K1177 Game Free Download Pakistan&quot; often show copycat sites.
            Fake APKs may steal wallet PINs, show wrong balances, or never pay withdrawals. Stick to
            k1177apk.com.pk and the in-app update prompts after your first install.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Red flags:</strong> APK under 20 MB, requests for your JazzCash OTP in chat, or
              &quot;Pay PKR to unlock download.&quot;
            </li>
            <li>
              <strong>Good signs:</strong> File size near {APP_SIZE}, version label {APP_VERSION} in
              About/Settings, and deposit screens that open your real JazzCash/EasyPaisa app.
            </li>
            <li>
              <strong>Updates:</strong> Re-download from this page when the app notifies you — do not
              trust third-party &quot;mod&quot; stores.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#f5c518] text-center">
          Why download {BRAND_NAME}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">Local wallets</h3>
            <p className="text-muted">JazzCash &amp; EasyPaisa deposits and withdrawals when listed in-app</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">Game variety</h3>
            <p className="text-muted">Slots, cards, fishing, live-style sports picks, and jackpots</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">Rewards</h3>
            <p className="text-muted">Daily rescue, weekly rescue, treasure chest &amp; member-day promos</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">{APP_SIZE} package</h3>
            <p className="text-muted">Runs on {APP_OS} devices common in Pakistan</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">PC option</h3>
            <p className="text-muted">
              <Link href="/k1177-for-pc" className="text-accent hover:underline">
                Play on PC
              </Link>{' '}
              via BlueStacks using the same APK
            </p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#f5c518]">Withdrawal PIN</h3>
            <p className="text-muted">Extra step before cash-out — see withdrawal PIN guide on the blog</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-ink mb-6 text-center">Download FAQs</h2>
        <div className="space-y-4">
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-2">Is K1177 on Google Play?</h3>
            <p className="text-muted">
              No. Install only the APK from k1177apk.com.pk. We do not claim a Play Store listing.
            </p>
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-2">What Android version do I need?</h3>
            <p className="text-muted">{APP_OS} or newer is recommended for stable gameplay and payments.</p>
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-2">Install blocked or parse error?</h3>
            <p className="text-muted">
              Re-enable unknown sources for your browser, delete the old APK, and download again. See{' '}
              <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">
                app not working fixes
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#2db87a] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
