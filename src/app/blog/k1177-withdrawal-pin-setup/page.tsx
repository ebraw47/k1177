import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Set K1177 Withdrawal PIN',
  description:
    'Set and use your K1177 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it.',
  keywords: [
    'K1177 withdrawal PIN',
    'K1177 withdraw PIN',
    'K1177 cash out PIN',
    'K1177 security PIN Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-withdrawal-pin-setup` },
  openGraph: {
    title: 'How to Set K1177 Withdrawal PIN',
    description:
      'Set and use your K1177 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it.',
    url: `${SITE_URL}/blog/k1177-withdrawal-pin-setup`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-withdrawl-form.webp`,
        width: 1200,
        height: 630,
        alt: 'How to Set K1177 Withdrawal PIN',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Set K1177 Withdrawal PIN"
        description="Set and use your K1177 withdrawal PIN in Pakistan: steps, JazzCash/EasyPaisa binding tips, and what to do if you forget it."
        slug="k1177-withdrawal-pin-setup"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-withdrawl-form.webp`}
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
        <span className="text-muted">How to Set K1177 Withdrawal PIN</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        How to Set K1177 Withdrawal PIN
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-withdrawl-form.webp"
          alt="K1177 withdraw screen for PIN setup"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          K1177 usually asks for a withdrawal PIN before cashing out to JazzCash or EasyPaisa. Set it
          once in a private place, and never share it with chat “helpers” or agents.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Set the PIN</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official K1177 app and log in.</li>
          <li>Go to Wallet → Withdraw (or Security / PIN if listed separately).</li>
          <li>Choose Set Withdrawal PIN when prompted.</li>
          <li>Enter a PIN you will remember; confirm it.</li>
          <li>Bind your JazzCash or EasyPaisa wallet in your own name if the screen asks.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Use the PIN to withdraw</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Withdraw and enter the amount (check live min/max).</li>
          <li>Confirm the destination wallet matches your account name.</li>
          <li>Enter your withdrawal PIN and submit.</li>
          <li>Wait for processing — keep a screenshot of the request.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">If you forget the PIN</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use any in-app Forgot / Reset PIN flow if shown.</li>
          <li>Contact Customer Service inside the app with account proof — not WhatsApp strangers.</li>
          <li>Do not create a second account just to “bypass” a forgotten PIN.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Security tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not reuse your JazzCash or EasyPaisa MPIN as the K1177 withdraw PIN.</li>
          <li>Turn off screen recording apps before entering the PIN on a shared phone.</li>
          <li>Meet turnover / bonus rules before you expect a payout — see the withdraw guide.</li>
        </ul>
        <p>
          Full cash-out walkthrough:{' '}
          <Link href="/blog/k1177-withdraw-money-guide" className="text-accent hover:underline">
            K1177 withdraw money guide
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
