import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Minimum Deposit Pakistan 2026',
  description:
    'K1177 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely.',
  keywords: [
    'K1177 minimum deposit',
    'K1177 min deposit PKR',
    'K1177 deposit amount Pakistan',
    'K1177 PKR 100',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-minimum-deposit-pakistan` },
  openGraph: {
    title: 'K1177 Minimum Deposit Pakistan 2026',
    description:
      'K1177 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely.',
    url: `${SITE_URL}/blog/k1177-minimum-deposit-pakistan`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-recharge.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Minimum Deposit Pakistan',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Minimum Deposit Pakistan 2026"
        description="K1177 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely."
        slug="k1177-minimum-deposit-pakistan"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-recharge.webp`}
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
        <span className="text-muted">K1177 Minimum Deposit Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 Minimum Deposit Pakistan 2026
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-recharge.webp"
          alt="K1177 deposit screen showing minimum amount"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Many Pakistani players search for the K1177 minimum deposit before their first top-up. The
          live figure is always on the in-app Deposit screen — often near PKR 100, but methods and
          limits can change.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">How to check the live minimum</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install K1177 from k1177apk.com.pk and log in.</li>
          <li>Open Wallet → Deposit.</li>
          <li>Select JazzCash or EasyPaisa.</li>
          <li>Read the minimum / maximum amount shown before you send PKR.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Practical starting tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Start with the smallest amount the app allows — learn the lobby first.</li>
          <li>Send only the exact amount and to the exact account shown in-app.</li>
          <li>Keep the transaction ID until the balance updates.</li>
          <li>Do not deposit again immediately if credit is delayed; contact in-app support.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Bonus deposits</h2>
        <p>
          Welcome offers may require a higher qualifying deposit than the wallet minimum. Read Offers
          terms before you top up for a promo — see the{' '}
          <Link href="/blog/k1177-bonus-daily-rewards-guide" className="text-accent hover:underline">
            bonus guide
          </Link>
          .
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Avoid these mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Trusting a WhatsApp “agent” who quotes a different min deposit number.</li>
          <li>Sending money to a personal JazzCash that is not generated inside K1177.</li>
          <li>Treating any deposit as guaranteed profit — play only what you can afford to lose.</li>
        </ul>
        <p>
          Full steps:{' '}
          <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            JazzCash &amp; EasyPaisa deposit guide
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
