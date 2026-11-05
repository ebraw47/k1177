import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import WalletLinks from '@/components/WalletLinks';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  LOGO_PATH,
  SITE_DOMAIN,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Game Free Download Online Money App In Pakistan V1.6',
  description:
    'Download K1177 Game APK V1.6 for Pakistan. Secure casino earning app with JazzCash & EasyPaisa, slots, cards, live sports, daily rescue bonus & fast withdrawals. Official site k1177apk.com.pk.',
  keywords: [
    'K1177',
    'K1177 Game',
    'K1177 APK',
    'K1177 download',
    'K1177 Pakistan',
    'K1177 Game Free Download',
    'K1177 online money app',
    'K1177 JazzCash',
    'K1177 EasyPaisa',
    'K1177 V1.6',
    'k1177apk.com.pk',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'K1177 Game Free Download Online Money App In Pakistan V1.6',
    description:
      'Official K1177 APK for Pakistan — play, earn, JazzCash & EasyPaisa wallets, V1.6 update.',
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Game - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K1177 Game Free Download Online Money App In Pakistan V1.6',
    description: 'Download K1177 APK V1.6 — earn real cash with JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: 'K1177 Game' },
  { label: 'Category', value: 'Casino, Slots, Cards, Live Sports' },
  { label: 'Size', value: APP_SIZE },
  { label: 'Latest Version', value: APP_VERSION },
  { label: 'Required OS', value: APP_OS },
  { label: 'Update', value: 'Latest 2026' },
  { label: 'Downloads', value: '1K+' },
  { label: 'Language', value: 'English, Urdu' },
  { label: 'Payments', value: 'JazzCash, EasyPaisa' },
  { label: 'Price', value: 'Free' },
  { label: 'Rating', value: '5.0' },
];

const screenshots = [
  { src: '/k1177-game-register.webp', alt: 'K1177 register screen', title: 'Register' },
  { src: '/k1177game-login.webp', alt: 'K1177 login screen', title: 'Login' },
  { src: '/k1177-game-recharge.webp', alt: 'K1177 recharge and deposit screen', title: 'Recharge' },
  { src: '/k1177-game-withdrawl-form.webp', alt: 'K1177 withdrawal form', title: 'Withdraw' },
  { src: '/k1177-game-daily-rescue-bonus.webp', alt: 'K1177 daily rescue bonus', title: 'Daily Rescue' },
  { src: '/k1177-game-weekly-rescue-bonus.webp', alt: 'K1177 weekly rescue bonus', title: 'Weekly Rescue' },
  { src: '/k1177-game-treasure-chest.webp', alt: 'K1177 treasure chest rewards', title: 'Treasure Chest' },
  { src: '/k1177game-member-day.webp', alt: 'K1177 member day offers', title: 'Member Day' },
  { src: '/mystery-jackpot.webp', alt: 'K1177 mystery jackpot', title: 'Mystery Jackpot' },
  { src: '/k1177-game-support.webp', alt: 'K1177 customer support', title: 'Support' },
];

const features: { title: string; text: ReactNode }[] = [
  {
    title: 'Huge Game Collection',
    text: 'Play trending slots, strategic card games, fishing titles, jackpots, and live sports-style rounds in one lobby — built for Pakistani players who want variety without installing multiple apps.',
  },
  {
    title: 'APK or Browser Access',
    text: 'Install the lightweight K1177 APK for the full mobile experience, or open the official link in your browser to register and explore VIP casino games when you prefer not to sideload immediately.',
  },
  {
    title: 'Smooth Play, Minimal Distraction',
    text: 'The lobby is organised and labelled so new users can move without confusion. Sessions stay smooth on mid-range Android phones with Android 5.0+ support.',
  },
  {
    title: 'Data Security First',
    text: 'Registration and wallet flows use modern encryption practices so your login and payment details stay protected. Always download only from k1177apk.com.pk to avoid fake APKs.',
  },
  {
    title: 'English & Urdu Support',
    text: 'Switch between English and Urdu while exploring games and features — a major reason K1177 is preferred across Pakistan.',
  },
  {
    title: 'JazzCash & EasyPaisa Wallets',
    text: 'Deposit and withdraw with the local wallets you already use. Confirm the on-screen account name and amount before you send any PKR. Prefer official JazzCash and EasyPaisa apps for payments.',
  },
  {
    title: 'Daily & Weekly Rescue Bonuses',
    text: 'Claim daily rescue, weekly rescue, treasure chest, member-day, and mystery jackpot style promotions when they appear in Offers — always read wagering rules first.',
  },
  {
    title: 'Invite Friends & Earn',
    text: 'Share your referral link, track invites in-app, and earn when friends join and stay active. Never trust Telegram “agents” asking for your password or OTP.',
  },
];

const faqs = [
  {
    q: 'What is K1177 Game?',
    a: 'K1177 Game is a mobile casino-style earning app for Pakistan with slots, cards, fishing, jackpots, and live sports-style games, plus JazzCash and EasyPaisa wallet options when listed in-app.',
  },
  {
    q: 'Who cannot play K1177 games?',
    a: 'Anyone under 18, and anyone without an active internet connection and a compatible smartphone, cannot play. Real-money play is for responsible adults only.',
  },
  {
    q: 'Is it safe to play K1177 Games?',
    a: 'K1177 is trusted when you install the official APK from k1177apk.com.pk and use JazzCash or EasyPaisa in your own name. Avoid Telegram, WhatsApp, or random APK mirrors — those are the main scam sources.',
  },
  {
    q: 'Is K1177 free to download?',
    a: 'Yes. The APK is free. Gameplay with real money requires a deposit when you choose to fund your wallet. Always use the official Download button on this site.',
  },
  {
    q: 'Can I use K1177 Game on any Android phone?',
    a: 'K1177 supports many Android 5.0+ phones (~51 MB). Budget, mid-range, and premium devices can run it; performance depends on RAM, storage, and a stable connection.',
  },
  {
    q: 'Which games can I play on K1177?',
    a: 'Slots, card games, fishing/prediction-style rounds, jackpots, and live sports-style titles listed in the lobby. Categories update over time — open the lobby after login for the live list.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Recharge / Deposit, pick JazzCash or EasyPaisa, enter the amount, follow on-screen steps, then confirm in your wallet app. See our deposit guide for screenshots and troubleshooting.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw, set your withdrawal PIN if required, bind JazzCash or EasyPaisa in your name, meet any turnover rules, then submit. Processing times vary by network load.',
  },
  {
    q: 'How do I keep my K1177 account secure?',
    a: 'Use a strong unique password, never share OTP or withdrawal PIN, download only from k1177apk.com.pk, keep the app updated, and change your password if you see unusual activity.',
  },
  {
    q: 'Why is K1177 Game popular in Pakistan?',
    a: 'Players like the Urdu/English lobby, JazzCash and EasyPaisa support, lightweight APK, daily rewards, and clear guides for deposit and withdraw on the official site.',
  },
  {
    q: 'I have good luck — what should I play?',
    a: 'Luck-based spins and simple rounds suit pure chance play. If you prefer skill or prediction, try fishing or strategic card tables. Never chase losses.',
  },
  {
    q: 'Is K1177 available on iPhone or PC?',
    a: 'The primary path is Android APK. Many players open the web lobby in a browser; for PC, use BlueStacks or another Android emulator — see our PC guide.',
  },
];

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_PATH}`,
        description:
          'K1177 official Pakistan site — casino earning games, JazzCash & EasyPaisa.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SUPPORT_EMAIL,
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['en', 'ur'],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'K1177 Game',
        operatingSystem: APP_OS,
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          ratingCount: '7',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/download-k1177`,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: `${SITE_URL}${LOGO_PATH}`,
        author: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'HowTo',
        name: 'How to Download and Install K1177 Game APK on Android',
        description: 'Install the official K1177 APK V1.6 safely on Android in Pakistan.',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Open official site',
            text: `Visit ${SITE_DOMAIN} on Chrome and tap Download K1177.`,
          },
          {
            '@type': 'HowToStep',
            name: 'Allow unknown sources',
            text: 'Enable Install unknown apps for your browser if Android blocks the APK.',
          },
          {
            '@type': 'HowToStep',
            name: 'Install APK',
            text: 'Open the downloaded file (~51 MB) and tap Install.',
          },
          {
            '@type': 'HowToStep',
            name: 'Register',
            text: 'Launch K1177, register with your Pakistani mobile number and OTP.',
          },
          {
            '@type': 'HowToStep',
            name: 'Play responsibly',
            text: 'Explore offers, deposit only what you can afford, and play 18+ only.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero — modern shiny glass */}
      <section className="k1177-hero relative py-10 md:py-16 px-4 overflow-hidden">
        <div className="k1177-hero-bg" aria-hidden="true">
          <span className="k1177-hero-orb k1177-hero-orb-a" />
          <span className="k1177-hero-orb k1177-hero-orb-b" />
          <span className="k1177-hero-orb k1177-hero-orb-c" />
          <span className="k1177-hero-grid" />
          <span className="k1177-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="k1177-hero-glass">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 relative z-[1]">
              <div className="flex-1 text-center lg:text-left min-w-0">
                <h1 className="mb-3 flex justify-center lg:justify-start">
                  <span className="sr-only">
                    K1177 Game Free Download Online Money App In Pakistan V1.6
                  </span>
                  <span
                    className="k1177-wordmark k1177-wordmark--hero"
                    aria-hidden="true"
                  >
                    K1177
                  </span>
                </h1>
                <div className="mb-4 sm:mb-5 flex justify-center lg:justify-start">
                  <div
                    className="k1177-rating-btn"
                    role="img"
                    aria-label="Rated 5.0 out of 5"
                  >
                    <span className="flex items-center gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          className="h-4 w-4 sm:h-[1.35rem] sm:w-[1.35rem] fill-[#f5c518]"
                        >
                          <path d="M12 2.5l2.9 6.1 6.7.7-5 4.6 1.4 6.6L12 17.8 5.9 20.5l1.4-6.6-5-4.6 6.7-.7L12 2.5z" />
                        </svg>
                      ))}
                    </span>
                    <span className="k1177-rating-score">5.0</span>
                  </div>
                </div>
                <p className="k1177-hero-tagline mb-4 sm:mb-5">
                  Free Download Online Money App In Pakistan · V1.6
                </p>
                <p className="k1177-hero-copy text-ink/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  The K1177 Game is a casino gaming platform popular in Pakistan for secure play and
                  real earning opportunities — slots, cards, live sports-style games,{' '}
                  <WalletLinks />, and an interactive Urdu/English lobby. Get the official APK only
                  from the button below.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-6 sm:mb-8">
                  <DownloadButton size="lg" label="DOWNLOAD K1177" blink />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                  {[
                    { n: '5.0★', l: 'Player Rating' },
                    { n: APP_SIZE, l: 'App Size' },
                    { n: '18+', l: 'Players Only' },
                  ].map((s) => (
                    <div key={s.l} className="k1177-hero-stat text-center lg:text-left">
                      <div className="k1177-hero-stat-n font-bold text-accent">{s.n}</div>
                      <div className="k1177-hero-stat-l text-muted">{s.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted/80 mt-3 sm:mt-4">
                  *Android {APP_OS.replace('Android ', '')} · {APP_VERSION} · {SITE_DOMAIN}
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="k1177-logo-glass">
                  <div className="k1177-main-logo relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px]">
                    <Image
                      src={LOGO_PATH}
                      alt="K1177 Game Official Logo"
                      width={340}
                      height={340}
                      className="relative z-[1] object-contain w-full h-full rounded-[22%]"
                      priority
                      fetchPriority="high"
                    />
                    <span className="k1177-star k1177-star-1" aria-hidden="true" />
                    <span className="k1177-star k1177-star-2" aria-hidden="true" />
                    <span className="k1177-star k1177-star-3" aria-hidden="true" />
                    <span className="k1177-star k1177-star-4" aria-hidden="true" />
                    <span className="k1177-star k1177-star-5" aria-hidden="true" />
                    <span className="k1177-star k1177-star-6" aria-hidden="true" />
                  </div>
                </div>
                <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-muted max-w-[220px] sm:max-w-[260px] md:max-w-[320px]">
                  <span className="font-semibold text-accent">18+</span> only. Play responsibly.
                  Real-money gaming involves risk of loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info tablet + companion panel */}
      <section className="py-12 md:py-16 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-8 md:mb-10">
            K1177 Download Info
          </h2>

          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-6 sm:gap-8 lg:gap-10 items-center">
            <div className="k1177-tablet mx-auto w-full max-w-md sm:max-w-xl lg:max-w-none">
              <div className="k1177-tablet-bezel">
                <div className="k1177-tablet-camera" aria-hidden="true" />
                <div className="k1177-tablet-screen">
                  <div className="k1177-tablet-status">
                    <span>K1177</span>
                    <span>Info</span>
                  </div>
                  <div className="k1177-tablet-body">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#f5c518]/25">
                      <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-primary border border-accent/40 flex-shrink-0">
                        <Image
                          src={LOGO_PATH}
                          alt="K1177"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-ink font-bold text-lg leading-tight">K1177 App Details</p>
                        <p className="text-accent text-sm">Official Pakistan APK · {APP_VERSION}</p>
                      </div>
                    </div>
                    <table className="k1177-info-table text-left">
                      <tbody>
                        {appInfo.map((row) => (
                          <tr key={row.label}>
                            <th className="py-2 px-2.5 sm:py-2.5 sm:px-3 md:px-4 text-accent font-semibold text-xs sm:text-sm md:text-base w-[40%] sm:w-[42%]">
                              {row.label}
                            </th>
                            <td className="py-2 px-2.5 sm:py-2.5 sm:px-3 md:px-4 text-ink text-xs sm:text-sm md:text-base">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="k1177-tablet-home" aria-hidden="true" />
                </div>
              </div>
            </div>

            <aside className="k1177-info-side">
              <div className="k1177-blog-shot k1177-info-side-shot !max-w-none mx-auto mb-4 sm:mb-6">
                <Image
                  src="/k1177-game-recharge.webp"
                  alt="K1177 recharge screen preview"
                  width={720}
                  height={1280}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 140px, 200px"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ink mb-2 sm:mb-3 text-center lg:text-left">
                Get the Official APK
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 text-center lg:text-left">
                Download {APP_VERSION} (~{APP_SIZE.replace('~', '')}) from {SITE_DOMAIN} only — free
                install, JazzCash &amp; EasyPaisa when listed in-app, 18+ only.
              </p>
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 text-sm sm:text-base text-muted">
                {[
                  'Verified build from the official Pakistan site',
                  'Android 5.0+ · English & Urdu lobby',
                  'Local wallets for deposit & withdraw',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-start">
                <DownloadButton label="DOWNLOAD K1177 APK" />
              </div>
              <p className="mt-3 sm:mt-4 text-xs text-muted/75 text-center lg:text-left">
                Avoid Telegram APK links and fake mirrors.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">What is the K1177 Game?</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Nowadays it is hard to trust every third-party “earning” app — scams are common. You are
              on the right site to download a gaming platform that offers real money opportunities with
              clear local payments.{' '}
              <Link href="/" className="text-accent hover:underline font-semibold">
                K1177 Game
              </Link>{' '}
              is creating a buzz in 2026 with a large game collection, an interactive interface, and
              continuous updates for a smoother experience.
            </p>
            <p>
              K1177 is a casino-style gaming platform popular in Pakistan. It claims a secure
              environment with real earning potential: slots, strategic cards, fishing games, and live
              sports-style rounds where you can feel the thrill of winning real cash. Advanced
              encryption helps protect registration and wallet data, while an active customer service
              team answers in-app questions.
            </p>
            <p>
              Multilingual support (Urdu &amp; English) and JazzCash &amp; EasyPaisa payment options
              gather players on one platform. Fair chances, good bankroll discipline, and strategy
              matter — luck alone is never a plan. Use your free time productively, but only risk what
              you can afford to lose (18+).
            </p>
          </div>
        </div>
      </section>

      {/* Why Pakistan */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Why K1177 Game is Preferred in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-muted">
            {(
              [
                'Local wallets: deposit and withdraw with JazzCash & EasyPaisa when shown in-app.',
                'Urdu + English interface so first-time players can explore without confusion.',
                'Low entry deposits — many players start small (check the live Recharge screen for current minimums).',
                'Huge variety: slots, cards, jackpots, fishing, and live sports-style games in one APK (~51 MB).',
                'Daily rescue, weekly rescue, treasure chest, member day, and jackpot-style promotions.',
                'Guides for download, login, deposit, and withdraw on k1177apk.com.pk — no content guesswork.',
              ] as ReactNode[]
            ).map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Download process */}
      <section id="download" className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Download Process of K1177 Game APK Latest Version
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Downloading K1177 is simple if you know how to install an Android APK. We provide a secure
            download path at the top of this page — use only {SITE_DOMAIN}.
          </p>
          <ol className="space-y-4">
            {[
              'Tap Download K1177 on this page and wait for the ~51 MB APK to finish.',
              'If Android blocks the file, allow Install from unknown sources for your browser.',
              'Open the notification or Downloads folder, tap the APK, then Install.',
              'Launch K1177, register with your Pakistani mobile number (03XX…) and OTP.',
              'Optional: deposit via JazzCash or EasyPaisa, claim offers, then pick a game.',
              'Play wisely (18+). Set a withdrawal PIN before your first cash-out.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4 bg-secondary rounded-xl p-4 border border-accent/15">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-muted leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <DownloadButton size="lg" label="DOWNLOAD K1177 NOW" />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16 bg-secondary/40 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-3">
            K1177 App Screenshots
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto">
            Register, login, recharge, withdraw, daily/weekly rescue bonuses, treasure chest, member
            day, mystery jackpot, and support — swipe to browse real screens from the K1177 app.
          </p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-4">
            Key Features of K1177 Game
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-10">
            Everything players search for before they install — covered in one place.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="bg-secondary rounded-xl p-6 border border-accent/15">
                <h3 className="text-xl font-bold text-accent mb-2">
                  {i + 1}. {f.title}
                </h3>
                <p className="text-muted leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses visual strip */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-4">
            Bonuses &amp; Rewards Inside K1177
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-10">
            Stay active daily for more chances — and always read bonus terms before you rely on any
            offer.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                img: '/k1177-game-daily-rescue-bonus.webp',
                title: 'Daily Rescue Bonus',
                text: 'Come back each day for rescue-style rewards shown in Offers.',
              },
              {
                img: '/k1177-game-weekly-rescue-bonus.webp',
                title: 'Weekly Rescue Bonus',
                text: 'Weekly campaigns help active players recover part of tough sessions.',
              },
              {
                img: '/k1177-game-treasure-chest.webp',
                title: 'Treasure Chest',
                text: 'Open in-app chests and event rewards when your account qualifies.',
              },
              {
                img: '/mystery-jackpot.webp',
                title: 'Mystery Jackpot',
                text: 'Jackpot-style rounds add high-volatility thrills — bankroll carefully.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-primary rounded-xl overflow-hidden border border-accent/15"
              >
                <Image
                  src={b.img}
                  alt={b.title}
                  width={720}
                  height={1280}
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="w-full h-44 object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-accent mb-1">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href="/blog/k1177-bonus-daily-rewards-guide"
              className="text-accent hover:underline font-semibold"
            >
              Full bonus &amp; daily rewards guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Top Tips to Play the K1177 Game
          </h2>
          <ul className="space-y-3 text-lg text-muted">
            {(
              [
                'Read terms and conditions before your first deposit — especially bonus wagering.',
                'Stay active daily so you do not miss rescue bonuses and login rewards.',
                'Keep a stable Wi‑Fi or mobile-data connection; switch networks if the lobby lags.',
                'Update to the latest APK whenever a new build appears on this site.',
                'Explore more than one category — slots, cards, and fishing feel different.',
                'Avoid pure luck tables if you are on a losing streak; switch games or take a break.',
                'Try fishing / prediction games if you are better at reading patterns than spinning.',
                'Use only JazzCash or EasyPaisa accounts in your own name for deposits and withdrawals.',
                'Never share OTP, PIN, or password with anyone claiming to be “K1177 support” on chat apps.',
                'Take short breaks in long sessions so fatigue does not push risky bets.',
              ] as ReactNode[]
            ).map((tip, i) => (
              <li key={i} className="flex gap-3 bg-secondary rounded-xl p-4 border border-accent/15">
                <span className="text-cyan font-bold">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Account security */}
      <section className="py-12 md:py-16 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            K1177 Account Security Tips
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Protecting your account matters on any online platform. K1177 includes in-app security
            features — you should still follow strong personal habits.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: 'Create a strong password',
                d: 'Combine uppercase, lowercase, numbers, and symbols. Do not reuse passwords from other apps.',
              },
              {
                t: 'Never share login details',
                d: 'Keep username, password, OTP, and withdrawal PIN private — real support will not ask for them on Telegram.',
              },
              {
                t: 'Update the app regularly',
                d: `Install the latest ${APP_VERSION} build from ${SITE_DOMAIN} to improve security and stability.`,
              },
              {
                t: 'Download only from trusted sources',
                d: 'Avoid modified or unofficial APKs that may contain malware. Use the Download button on this site only.',
              },
              {
                t: 'Monitor your account',
                d: 'Check wallet history for unusual activity and change your password if anything looks wrong.',
              },
              {
                t: 'Bind your own wallets',
                d: 'Link JazzCash or EasyPaisa in your name before withdrawing — never send PKR to a stranger’s number.',
              },
            ].map((item) => (
              <div
                key={item.t}
                className="bg-primary rounded-xl p-5 border border-accent/15"
              >
                <h3 className="text-lg font-bold text-accent mb-2">{item.t}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            More help:{' '}
            <Link href="/blog/k1177-fake-apk-scam-warnings" className="text-accent hover:underline">
              fake APK warnings
            </Link>{' '}
            ·{' '}
            <Link href="/blog/k1177-responsible-gaming-pakistan" className="text-accent hover:underline">
              responsible gaming
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Common problems */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Common K1177 Problems and Solutions
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Most sessions run smoothly, but occasional issues have simple fixes. Start with the
            checklist below before contacting support.
          </p>
          <div className="space-y-4">
            {[
              {
                t: 'App not installing',
                d: 'Causes: low storage, incompatible Android version, or a corrupted APK. Free space, confirm Android 5.0+, re-download the latest file from this site, then install again.',
              },
              {
                t: 'App crashing',
                d: 'Outdated builds or low memory often crash the lobby. Restart the phone, clear K1177 cache, close background apps, and update to the newest APK.',
              },
              {
                t: 'Login problems',
                d: 'Wrong password, OTP delay, or an old APK can block login. Double-check credentials, request a new OTP on mobile data, use in-app recovery, or contact customer service — never a chat “agent.”',
              },
              {
                t: 'Slow performance',
                d: 'Background apps reduce gaming performance. Close unused apps, free RAM, switch to a stable network, then reopen K1177.',
              },
            ].map((item) => (
              <div
                key={item.t}
                className="bg-secondary rounded-xl p-5 border border-accent/15"
              >
                <h3 className="text-xl font-bold text-ink mb-2">{item.t}</h3>
                <p className="text-muted leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            Full troubleshooting:{' '}
            <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">
              K1177 app not working fixes
            </Link>{' '}
            ·{' '}
            <Link href="/blog/k1177-otp-not-received-login-fix" className="text-accent hover:underline">
              OTP &amp; login fix
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Advantages of K1177 Game
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-lg text-muted">
            {[
              'Easy to use — beginners can learn the lobby quickly.',
              `Lightweight design — about ${APP_SIZE} so it fits most phones.`,
              'Fast loading menus and game tables on a stable connection.',
              'Regular improvements with new features and fixes.',
              'Smooth navigation between Wallet, Offers, and games.',
              'Wide Android device support (5.0+), including many budget phones.',
              'Local JazzCash & EasyPaisa flows when shown in-app.',
              'Urdu and English labels for Pakistani players.',
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 bg-primary rounded-xl p-4 border border-accent/15"
              >
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas for improvement */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Areas for Improvement
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Like every app, K1177 still has room to grow. Players often ask for:
          </p>
          <ul className="space-y-2 text-lg text-muted list-disc pl-6">
            <li>Additional gaming categories and events</li>
            <li>More customization options in the lobby</li>
            <li>Expanded language support beyond Urdu and English</li>
            <li>Stronger accessibility features</li>
            <li>Clearer, faster update notifications</li>
          </ul>
          <p className="text-muted mt-6 leading-relaxed">
            As the platform evolves, these improvements can make the experience even better for
            Pakistani players who already rely on local wallets and daily offers.
          </p>
        </div>
      </section>

      {/* Responsible gaming */}
      <section className="py-12 md:py-16 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Best Practices for Responsible Gaming
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Gaming should stay fun and balanced — especially with real-money play (18+ only).
          </p>
          <ul className="space-y-3 text-lg text-muted">
            {[
              'Set a weekly PKR and time limit before you open Recharge.',
              'Take regular breaks; never chase losses after a bad session.',
              'Avoid playing when distracted, tired, or stressed.',
              'Prioritize school, work, and family before optional gaming time.',
              'Treat K1177 as entertainment — not a salary or guaranteed income.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-cyan font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Worth trying */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Is K1177 Game Worth Trying?
          </h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              K1177 has earned attention among Pakistan’s mobile gaming apps by offering a smooth,
              Urdu/English lobby, regular updates, and a mix of slots, cards, fishing, and jackpot-style
              games. Word of mouth grows when players find clear JazzCash &amp; EasyPaisa options and
              guides that match what they see in the APK.
            </p>
            <p>
              Another strength is compatibility with a wide range of Android devices. The lightweight{' '}
              {APP_VERSION} build (~{APP_SIZE.replace('~', '')}) helps budget phones stay usable when
              storage and RAM are managed well. Daily rewards, referrals, and Member Day-style offers
              keep returning players engaged — always read wagering rules first.
            </p>
            <p>
              If you want a modern casino-style app with local wallets, download only from{' '}
              {SITE_DOMAIN}, keep the app updated, protect your password and PIN, and follow
              responsible gaming habits for the best experience.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30 overflow-visible">
        <div className="container mx-auto max-w-5xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-10">
            K1177 Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/download-k1177',
                title: 'Download APK',
                text: 'Install the latest K1177 V1.6 build safely on Android.',
                img: '/k1177game-login.webp',
              },
              {
                href: '/deposit-money-in-k1177',
                title: 'Deposit Guide',
                text: 'Add funds with JazzCash & EasyPaisa step by step.',
                img: '/k1177-game-recharge.webp',
              },
              {
                href: '/withdraw-money-from-k1177',
                title: 'Withdraw Guide',
                text: 'Cash out winnings to your local wallet with PIN security.',
                img: '/k1177-game-withdrawl-form.webp',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="k1177-guide-card bg-primary rounded-xl overflow-hidden border border-accent/15 hover:border-accent group block"
              >
                <Image
                  src={g.img}
                  alt={g.title}
                  width={720}
                  height={1280}
                  sizes="33vw"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-accent mb-2 group-hover:underline">
                    {g.title}
                  </h3>
                  <p className="text-muted text-sm">{g.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Conclusion</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              K1177 Game continues to grow in Pakistan because it pairs a simple interface with fast
              loading, local wallet support, and frequent updates. From registration to deposit and
              withdraw, the flow stays understandable for first-time players who stick to the official
              APK on {SITE_DOMAIN}.
            </p>
            <p>
              Lightweight performance, wide Android compatibility, daily rewards, referrals, and
              in-app support make it appealing across skill levels. Treat gameplay as entertainment
              with financial risk — never as guaranteed salary — and cash out only when rules allow.
            </p>
            <p>
              If you want a reliable, regularly updated gaming app, download the latest K1177 build,
              use a strong password, and enjoy play responsibly. 18+ only.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 overflow-visible">
        <div className="container mx-auto max-w-3xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FaqList faqs={faqs} />
          <p className="text-center text-muted/70 text-sm mt-8">
            Need help? Visit{' '}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>{' '}
            or email {SUPPORT_EMAIL}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Ready to Play K1177?
          </h2>
          <p className="text-muted mb-8">
            Get the official APK V1.6 from {SITE_DOMAIN} — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD K1177 APK" />
          </div>
        </div>
      </section>
    </>
  );
}
