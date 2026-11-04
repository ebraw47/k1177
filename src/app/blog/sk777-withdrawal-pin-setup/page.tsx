import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Set SK777 Withdrawal PIN',
  description:
    'Set and use your SK777 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it.',
  keywords: [
    'SK777 withdrawal PIN',
    'SK777 withdraw PIN',
    'SK777 cash out PIN',
    'SK777 security PIN Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-withdrawal-pin-setup` },
  openGraph: {
    title: 'How to Set SK777 Withdrawal PIN',
    description:
      'Set and use your SK777 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it.',
    url: `${SITE_URL}/blog/sk777-withdrawal-pin-setup`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-withdraw.webp`,
        width: 1200,
        height: 630,
        alt: 'How to Set SK777 Withdrawal PIN',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Set SK777 Withdrawal PIN"
        description="Set and use your SK777 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it."
        slug="sk777-withdrawal-pin-setup"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-withdraw.webp`}
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
        <span className="text-gray-300">How to Set SK777 Withdrawal PIN</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How to Set SK777 Withdrawal PIN
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-withdraw.webp"
          alt="SK777 withdraw screen for PIN setup"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          SK777 usually asks for a withdrawal PIN before cashing out to JazzCash or EasyPaisa. Set it
          once in a private place, and never share it with chat “helpers” or agents.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Set the PIN</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official SK777 app and log in.</li>
          <li>Go to Wallet → Withdraw (or Security / PIN if listed separately).</li>
          <li>Choose Set Withdrawal PIN when prompted.</li>
          <li>Enter a PIN you will remember; confirm it.</li>
          <li>Bind your JazzCash or EasyPaisa wallet in your own name if the screen asks.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Use the PIN to withdraw</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Withdraw and enter the amount (check live min/max).</li>
          <li>Confirm the destination wallet matches your account name.</li>
          <li>Enter your withdrawal PIN and submit.</li>
          <li>Wait for processing — keep a screenshot of the request.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">If you forget the PIN</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use any in-app Forgot / Reset PIN flow if shown.</li>
          <li>Contact Customer Service inside the app with account proof — not WhatsApp strangers.</li>
          <li>Do not create a second account just to “bypass” a forgotten PIN.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Security tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not reuse your JazzCash or EasyPaisa MPIN as the SK777 withdraw PIN.</li>
          <li>Turn off screen recording apps before entering the PIN on a shared phone.</li>
          <li>Meet turnover / bonus rules before you expect a payout — see the withdraw guide.</li>
        </ul>
        <p>
          Full cash-out walkthrough:{' '}
          <Link href="/blog/sk777-withdraw-money-guide" className="text-accent hover:underline">
            SK777 withdraw money guide
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
