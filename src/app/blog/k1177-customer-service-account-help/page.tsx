import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Customer Service & Account Help',
  description:
    'How to reach K1177 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings.',
  keywords: [
    'K1177 customer service',
    'K1177 support',
    'K1177 forgot password',
    'K1177 account help',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-customer-service-account-help` },
  openGraph: {
    title: 'K1177 Customer Service & Account Help',
    description:
      'How to reach K1177 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings.',
    url: `${SITE_URL}/blog/k1177-customer-service-account-help`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177game-login.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Customer Service & Account Help',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Customer Service & Account Help"
        description="How to reach K1177 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings."
        slug="k1177-customer-service-account-help"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177game-login.webp`}
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
        <span className="text-muted">K1177 Customer Service & Account Help</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 Customer Service &amp; Account Help
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-support.webp"
          alt="K1177 customer service screen"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Real K1177 help lives inside the official app (Customer Service / Support) and on this site.
          Agents who message you on WhatsApp asking for OTP, remote access, or “VIP deposit numbers”
          are not official.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">How to contact support</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official K1177 APK installed from k1177apk.com.pk.</li>
          <li>Open Customer Service / Support from the menu or profile area.</li>
          <li>Describe the issue in one short message and attach screenshots if asked.</li>
          <li>
            For site-side questions, use{' '}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>{' '}
            or email {SUPPORT_EMAIL}.
          </li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Login &amp; password issues</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm you are using the same phone number / ID you registered with.</li>
          <li>Use any in-app Forgot Password / reset flow if shown.</li>
          <li>Never share OTP, withdrawal PIN, or password with chat “helpers.”</li>
          <li>If the account is locked after many failed tries, wait and contact in-app support.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">What to send for payment tickets</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transaction ID / JazzCash or EasyPaisa receipt</li>
          <li>Exact amount, time, and the account name shown in Deposit / Withdraw</li>
          <li>Screenshot of your K1177 wallet history if balance did not update</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Scam checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Official support will not ask you to install TeamViewer or share SMS codes.</li>
          <li>Deposit only to details generated inside the app for your session.</li>
          <li>Download APK updates only from k1177apk.com.pk.</li>
        </ul>
        <p>
          Related:{' '}
          <Link href="/blog/create-k1177-account-and-login" className="text-accent hover:underline">
            account &amp; login
          </Link>{' '}
          ·{' '}
          <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-accent hover:underline">
            safety guide
          </Link>
          . 18+ only.
        </p>
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
