import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Minimum Deposit Pakistan 2026',
  description:
    'SK777 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely.',
  keywords: [
    'SK777 minimum deposit',
    'SK777 min deposit PKR',
    'SK777 deposit amount Pakistan',
    'SK777 PKR 100',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-minimum-deposit-pakistan` },
  openGraph: {
    title: 'SK777 Minimum Deposit Pakistan 2026',
    description:
      'SK777 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely.',
    url: `${SITE_URL}/blog/sk777-minimum-deposit-pakistan`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-deposit.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 Minimum Deposit Pakistan',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Minimum Deposit Pakistan 2026"
        description="SK777 minimum deposit in Pakistan: typical PKR amounts, JazzCash & EasyPaisa tips, and how to start small safely."
        slug="sk777-minimum-deposit-pakistan"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-deposit.webp`}
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
        <span className="text-gray-300">SK777 Minimum Deposit Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 Minimum Deposit Pakistan 2026
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-deposit.webp"
          alt="SK777 deposit screen showing minimum amount"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Many Pakistani players search for the SK777 minimum deposit before their first top-up. The
          live figure is always on the in-app Deposit screen — often near PKR 100, but methods and
          limits can change.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">How to check the live minimum</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install SK777 from sk777app.com.pk and log in.</li>
          <li>Open Wallet → Deposit.</li>
          <li>Select JazzCash or EasyPaisa.</li>
          <li>Read the minimum / maximum amount shown before you send PKR.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Practical starting tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Start with the smallest amount the app allows — learn the lobby first.</li>
          <li>Send only the exact amount and to the exact account shown in-app.</li>
          <li>Keep the transaction ID until the balance updates.</li>
          <li>Do not deposit again immediately if credit is delayed; contact in-app support.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Bonus deposits</h2>
        <p>
          Welcome offers may require a higher qualifying deposit than the wallet minimum. Read Offers
          terms before you top up for a promo — see the{' '}
          <Link href="/blog/sk777-bonus-daily-rewards-guide" className="text-accent hover:underline">
            bonus guide
          </Link>
          .
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Avoid these mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Trusting a WhatsApp “agent” who quotes a different min deposit number.</li>
          <li>Sending money to a personal JazzCash that is not generated inside SK777.</li>
          <li>Treating any deposit as guaranteed profit — play only what you can afford to lose.</li>
        </ul>
        <p>
          Full steps:{' '}
          <Link href="/blog/sk777-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            JazzCash &amp; EasyPaisa deposit guide
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
