import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Treasure Chest & Mystery Jackpot Guide',
  description:
    'How K1177 Treasure Chest and mystery jackpot-style events work in Pakistan — claim tips, risk notes, and where to find Offers.',
  keywords: [
    'K1177 Treasure Chest',
    'K1177 Mystery Jackpot',
    'K1177 jackpot Pakistan',
    'K1177 chest rewards',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-treasure-chest-jackpot-guide` },
  openGraph: {
    title: 'K1177 Treasure Chest & Mystery Jackpot Guide',
    description:
      'How K1177 Treasure Chest and mystery jackpot-style events work in Pakistan — claim tips, risk notes, and where to find Offers.',
    url: `${SITE_URL}/blog/k1177-treasure-chest-jackpot-guide`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-treasure-chest.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Treasure Chest Jackpot Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Treasure Chest & Mystery Jackpot Guide"
        description="How K1177 Treasure Chest and mystery jackpot-style events work in Pakistan — claim tips and risk notes."
        slug="k1177-treasure-chest-jackpot-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-treasure-chest.webp`}
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
        <span className="text-muted">Treasure Chest &amp; Jackpot</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 Treasure Chest &amp; Mystery Jackpot Guide
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-treasure-chest.webp"
          alt="K1177 Treasure Chest rewards screen"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Treasure Chest and jackpot-style events are high-visibility promotions inside K1177. They
          can boost balance — and they can also encourage overspending. Treat them as optional
          entertainment, not income.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Treasure Chest basics</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Offers / Activity and find Treasure Chest when it is live.</li>
          <li>Read unlock conditions (login streak, deposit, or task list).</li>
          <li>Claim rewards into your wallet balance and note any wagering.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Mystery jackpot mindset</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Jackpots are high volatility — small stakes only with spare funds.</li>
          <li>Never increase bet size after a near-miss; that is classic chase behaviour.</li>
          <li>
            Pair with{' '}
            <Link href="/blog/k1177-responsible-gaming-pakistan" className="text-accent hover:underline">
              responsible gaming
            </Link>{' '}
            limits before you tap Play.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">More reward types</h2>
        <p>
          Daily / weekly rescue and Member Day are covered in the{' '}
          <Link href="/blog/k1177-bonus-daily-rewards-guide" className="text-accent hover:underline">
            bonus guide
          </Link>{' '}
          and{' '}
          <Link href="/blog/k1177-vip-member-day-guide" className="text-accent hover:underline">
            VIP / Member Day guide
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
