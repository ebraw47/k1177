import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { APP_OS, APP_SIZE, APP_VERSION, SITE_DOMAIN, SITE_URL } from '@/lib/constants';

const faqs = [
  {
    q: 'What is the K1177 app?',
    a: `K1177 Game is a mobile online gaming platform for Android that combines casual and skill-style games in one APK. Pakistani users typically use JazzCash or EasyPaisa for deposits and withdrawals. Current build details on ${SITE_DOMAIN}: ${APP_VERSION}, ${APP_SIZE}, ${APP_OS}.`,
  },
  {
    q: 'Is the K1177 app easy to use?',
    a: 'Yes for most beginners. Registration uses a mobile number and OTP, the lobby uses clear game tiles, and wallet screens are labeled for recharge and withdraw. Read rules for each game and any bonus wagering before depositing large amounts.',
  },
  {
    q: 'Can I play K1177 on mobile?',
    a: 'Yes. K1177 is optimized for smartphones. Install the official APK, allow unknown sources for your browser once, then open the app on Android 5.0 or newer.',
  },
  {
    q: 'Is K1177 on Google Play?',
    a: 'This site does not claim a Google Play listing. K1177 is distributed as a sideloaded APK. Only download from k1177apk.com.pk or the official button — ignore random Play Store lookalikes and Telegram files.',
  },
  {
    q: 'Does K1177 offer bonuses?',
    a: 'Yes. Welcome offers, daily/weekly rescue, Member Day, treasure chest, and referral rewards may appear in Offers. Always check wagering or turnover before you expect to withdraw bonus-related balance.',
  },
  {
    q: 'How do I download K1177 Game?',
    a: 'Open k1177apk.com.pk, tap Download, wait for the full APK, enable Install unknown apps for your browser, then install. Full walkthrough: How to Download & Install K1177 APK in Pakistan on this blog.',
  },
  {
    q: 'How do registration and login work?',
    a: 'Register with your Pakistani number, set a password, verify OTP, then log in with the same credentials. If OTP fails, check signal, wait for cooldown, and never share codes with agents.',
  },
  {
    q: 'How do deposits and withdrawals work?',
    a: 'Deposits usually go through JazzCash or EasyPaisa payment requests inside Shop/Recharge. Withdrawals need a bound wallet and withdrawal PIN. Processing times vary; keep screenshots of every request.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'The live minimum PKR amount is shown inside the app recharge screen and can change. Start small. See the Minimum Deposit Pakistan guide on this blog for tips.',
  },
  {
    q: 'Is K1177 safe?',
    a: 'Safety depends on using the official APK, your own wallets, in-app support only, and responsible 18+ play. Fake APKs and WhatsApp agents are the biggest real-world risks — not the lobby UI itself.',
  },
  {
    q: 'Can I play K1177 on PC?',
    a: 'Yes via Android emulators such as BlueStacks using the same official APK. Follow the How to Play K1177 on PC guide for setup and common errors.',
  },
  {
    q: 'What if the app is not working?',
    a: 'Update to the latest official APK, clear cache, check internet, and review News for maintenance. See App Not Working and OTP/Login Fix articles for step-by-step fixes.',
  },
];

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export const metadata: Metadata = {
  title: 'K1177 FAQ Pakistan — Download, Login, Payments',
  description:
    'K1177 Game FAQs for Pakistan: what the app is, Google Play myths, download, login, JazzCash/EasyPaisa deposits, withdrawals, bonuses, safety, and PC play.',
  keywords: [
    'K1177 FAQ',
    'K1177 questions',
    'K1177 help Pakistan',
    'K1177 download FAQ',
    'Is K1177 on Google Play',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-faq-pakistan` },
  openGraph: {
    title: 'K1177 FAQ Pakistan — Download, Login, Payments',
    description:
      'Answers to the most searched K1177 questions for Pakistani players — download, wallets, bonuses, and safety.',
    url: `${SITE_URL}/blog/k1177-faq-pakistan`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-support.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 FAQ Pakistan',
      },
    ],
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 FAQ Pakistan — Download, Login, Payments"
        description="K1177 Game FAQs for Pakistan: what the app is, Google Play myths, download, login, JazzCash/EasyPaisa deposits, withdrawals, bonuses, safety, and PC play."
        slug="k1177-faq-pakistan"
        datePublished="2026-11-10"
        image={`${SITE_URL}/k1177-game-support.webp`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">K1177 FAQ</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 FAQ Pakistan — Download, Login, Payments
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-support.webp"
          alt="K1177 FAQ Pakistan"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg mb-10">
        <p>
          This <strong className="text-ink">K1177 FAQ</strong> collects the questions Pakistani players ask
          most after searching for download, login, JazzCash, EasyPaisa, and &quot;is it on Google Play?&quot;
          Answers stay practical and match what we publish on {SITE_DOMAIN} — official APK only, 18+, no
          guaranteed earnings.
        </p>
        <p>
          Prefer a long read? See{' '}
          <Link href="/blog/what-is-k1177-game-pakistan" className="text-accent hover:underline">
            what is K1177
          </Link>
          ,{' '}
          <Link href="/blog/k1177-features-guide-pakistan" className="text-accent hover:underline">
            features
          </Link>
          , and{' '}
          <Link href="/blog/k1177-pros-and-cons-pakistan" className="text-accent hover:underline">
            pros &amp; cons
          </Link>
          .
        </p>
      </div>

      <h2 className="text-2xl font-bold text-ink mb-6">Frequently asked questions</h2>
      <FaqList faqs={faqs} />

      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg mt-12">
        <h2 className="text-2xl font-bold text-ink mt-8">Still stuck?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">
              Download &amp; install guide
            </Link>
          </li>
          <li>
            <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
              Deposit with JazzCash / EasyPaisa
            </Link>
          </li>
          <li>
            <Link href="/blog/k1177-withdraw-money-guide" className="text-accent hover:underline">
              Withdraw money guide
            </Link>
          </li>
          <li>
            <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">
              Customer service &amp; account help
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD K1177 APK" />
        <p className="text-sm text-muted/70 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">
            K1177 blog
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
