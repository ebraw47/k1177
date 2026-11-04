import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Bonus & Daily Rewards Guide 2026',
  description:
    'How SK777 welcome offers, daily rewards, and promotions work in Pakistan — claim steps, wagering tips, and common mistakes.',
  keywords: [
    'SK777 bonus',
    'SK777 daily rewards',
    'SK777 welcome offer',
    'SK777 promotions Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-bonus-daily-rewards-guide` },
  openGraph: {
    title: 'SK777 Bonus & Daily Rewards Guide 2026',
    description:
      'How SK777 welcome offers, daily rewards, and promotions work in Pakistan — claim steps, wagering tips, and common mistakes.',
    url: `${SITE_URL}/blog/sk777-bonus-daily-rewards-guide`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-offers.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 Bonus & Daily Rewards Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Bonus & Daily Rewards Guide 2026"
        description="How SK777 welcome offers, daily rewards, and promotions work in Pakistan — claim steps, wagering tips, and common mistakes."
        slug="sk777-bonus-daily-rewards-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-offers.webp`}
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
        <span className="text-gray-300">SK777 Bonus & Daily Rewards Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 Bonus & Daily Rewards Guide 2026
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-offers.webp"
          alt="SK777 Offers and daily rewards screen"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          SK777 often lists welcome offers, daily login rewards, and short-term promotions inside the
          Offers area. Treat every bonus as optional entertainment — not guaranteed income — and read
          the wagering rules before you deposit to unlock one.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Where to find offers</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official SK777 app from sk777app.com.pk.</li>
          <li>Log in, then open Offers / Events / Promotions (label may vary).</li>
          <li>Tap an offer to read eligibility, min deposit, and turnover rules.</li>
          <li>Claim only if the terms fit how you already plan to play.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Typical reward types</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Welcome / first deposit:</strong> extra balance or free rounds after a qualifying
            deposit when shown.
          </li>
          <li>
            <strong>Daily rewards:</strong> small credits for consecutive logins or check-ins.
          </li>
          <li>
            <strong>Event promos:</strong> time-limited missions or rebate-style returns listed in-app.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Wagering &amp; cash-out tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bonus funds often need turnover before withdraw — check the live terms.</li>
          <li>Do not chase a bonus with money you cannot afford to lose.</li>
          <li>
            Finish or decline an offer cleanly before starting another if the app warns of conflicts.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Common mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Trusting WhatsApp “VIP bonus agents” — real offers appear in-app only.</li>
          <li>Depositing twice to “force” a claim when the first payment is still pending.</li>
          <li>Ignoring game or wallet restrictions attached to the promo.</li>
        </ul>
        <p>
          Next:{' '}
          <Link href="/blog/sk777-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            deposit guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/sk777-withdraw-money-guide" className="text-accent hover:underline">
            withdraw guide
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
