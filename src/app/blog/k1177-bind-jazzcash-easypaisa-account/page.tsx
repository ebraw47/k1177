import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { EASYPAISA_URL, JAZZCASH_URL, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bind JazzCash & EasyPaisa to K1177 Wallet',
  description:
    'How to bind JazzCash or EasyPaisa on K1177 for deposits and withdrawals in Pakistan — name match tips, PIN setup, and common bind errors.',
  keywords: [
    'K1177 bind JazzCash',
    'K1177 EasyPaisa account',
    'K1177 wallet bind',
    'K1177 withdraw account Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-bind-jazzcash-easypaisa-account` },
  openGraph: {
    title: 'Bind JazzCash & EasyPaisa to K1177 Wallet',
    description:
      'How to bind JazzCash or EasyPaisa on K1177 for deposits and withdrawals in Pakistan — name match tips, PIN setup, and common bind errors.',
    url: `${SITE_URL}/blog/k1177-bind-jazzcash-easypaisa-account`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-withdrawl-form.webp`,
        width: 1200,
        height: 630,
        alt: 'Bind JazzCash EasyPaisa K1177',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="Bind JazzCash & EasyPaisa to K1177 Wallet"
        description="How to bind JazzCash or EasyPaisa on K1177 for deposits and withdrawals in Pakistan."
        slug="k1177-bind-jazzcash-easypaisa-account"
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
        <span className="text-muted">Bind JazzCash &amp; EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        Bind JazzCash &amp; EasyPaisa to K1177 Wallet
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-withdrawl-form.webp"
          alt="K1177 withdraw form for binding JazzCash or EasyPaisa"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Binding your own JazzCash or EasyPaisa account is required before most K1177 cash-outs.
          Use wallets registered in your name — mismatched CNIC/name is a top reason for failed
          payouts.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Bind steps (typical flow)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Wallet → Withdraw (or Account / Payment methods).</li>
          <li>
            Choose JazzCash or EasyPaisa. Official sites:{' '}
            <a href={JAZZCASH_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              JazzCash
            </a>{' '}
            ·{' '}
            <a href={EASYPAISA_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              EasyPaisa
            </a>
            .
          </li>
          <li>Enter the mobile number exactly as on your wallet app.</li>
          <li>
            Set or confirm your{' '}
            <Link href="/blog/k1177-withdrawal-pin-setup" className="text-accent hover:underline">
              withdrawal PIN
            </Link>
            .
          </li>
          <li>Save and try a small withdraw only after turnover rules are met.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Common bind errors</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wrong digit in the 03XX number or using someone else’s wallet.</li>
          <li>Trying to bind before the account finished registration / KYC prompts in-app.</li>
          <li>Following a chat agent’s “alternate” account instead of the in-app form.</li>
        </ul>
        <p>
          Next:{' '}
          <Link href="/blog/k1177-withdraw-money-guide" className="text-accent hover:underline">
            withdraw guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            deposit guide
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
