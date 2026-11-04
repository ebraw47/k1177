import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Customer Service & Account Help',
  description:
    'How to reach SK777 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings.',
  keywords: [
    'SK777 customer service',
    'SK777 support',
    'SK777 forgot password',
    'SK777 account help',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-customer-service-account-help` },
  openGraph: {
    title: 'SK777 Customer Service & Account Help',
    description:
      'How to reach SK777 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings.',
    url: `${SITE_URL}/blog/sk777-customer-service-account-help`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-login.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 Customer Service & Account Help',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Customer Service & Account Help"
        description="How to reach SK777 support in Pakistan: in-app chat, login issues, forgot password, deposit proofs, and scam warnings."
        slug="sk777-customer-service-account-help"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-login.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">SK777 Customer Service & Account Help</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 Customer Service &amp; Account Help
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-login.webp"
          alt="SK777 login screen for account help"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Real SK777 help lives inside the official app (Customer Service / Support) and on this site.
          Agents who message you on WhatsApp asking for OTP, remote access, or “VIP deposit numbers”
          are not official.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">How to contact support</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official SK777 APK installed from sk777app.com.pk.</li>
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
        <h2 className="text-2xl font-bold text-white mt-8">Login &amp; password issues</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm you are using the same phone number / ID you registered with.</li>
          <li>Use any in-app Forgot Password / reset flow if shown.</li>
          <li>Never share OTP, withdrawal PIN, or password with chat “helpers.”</li>
          <li>If the account is locked after many failed tries, wait and contact in-app support.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">What to send for payment tickets</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transaction ID / JazzCash or EasyPaisa receipt</li>
          <li>Exact amount, time, and the account name shown in Deposit / Withdraw</li>
          <li>Screenshot of your SK777 wallet history if balance did not update</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Scam checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Official support will not ask you to install TeamViewer or share SMS codes.</li>
          <li>Deposit only to details generated inside the app for your session.</li>
          <li>Download APK updates only from sk777app.com.pk.</li>
        </ul>
        <p>
          Related:{' '}
          <Link href="/blog/create-sk777-account-and-login" className="text-accent hover:underline">
            account &amp; login
          </Link>{' '}
          ·{' '}
          <Link href="/blog/is-sk777-safe-legal-pakistan" className="text-accent hover:underline">
            safety guide
          </Link>
          . 18+ only.
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD SK777 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">
            SK777 blog
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
