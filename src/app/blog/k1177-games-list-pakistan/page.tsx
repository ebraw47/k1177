import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { APP_OS, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Games List Pakistan 2026 — What You Can Play',
  description:
    'What games are on K1177 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update.',
  keywords: [
    'K1177 games',
    'K1177 game list',
    'K1177 slots Pakistan',
    'K1177 earning games',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-games-list-pakistan` },
  openGraph: {
    title: 'K1177 Games List Pakistan 2026 — What You Can Play',
    description:
      'What games are on K1177 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update.',
    url: `${SITE_URL}/blog/k1177-games-list-pakistan`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177game-member-day.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Games List Pakistan',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Games List Pakistan 2026 — What You Can Play"
        description="What games are on K1177 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update."
        slug="k1177-games-list-pakistan"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177game-member-day.webp`}
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
        <span className="text-muted">K1177 Games List Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 Games List Pakistan 2026 — What You Can Play
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177game-member-day.webp"
          alt="K1177 lobby showing available games"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          K1177 is built around short mobile rounds popular with Pakistani Android users. Exact titles
          and tabs change over time — always trust the live lobby inside the official app, not a
          screenshot from a random chat.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Main categories (November 2026)</h2>
        <h3 className="text-xl font-semibold text-accent mt-4">Slots</h3>
        <p>
          Spin-style games with adjustable bet sizes. Good for short sessions on {APP_OS} phones. Check
          min bet before auto-spin.
        </p>
        <h3 className="text-xl font-semibold text-accent mt-4">Card games</h3>
        <p>
          Teen Patti–style and other card tables when listed under Cards / Hot. Learn rules in-game before
          raising stakes.
        </p>
        <h3 className="text-xl font-semibold text-accent mt-4">Fishing games</h3>
        <p>
          Arcade fishing mini-games with cannon bets. They drain balance quickly — set a PKR cap first.
        </p>
        <h3 className="text-xl font-semibold text-accent mt-4">Live sports &amp; prediction picks</h3>
        <p>
          Live or pre-match style picks appear seasonally. Markets and odds change — only bet what you
          can afford to lose.
        </p>
        <h3 className="text-xl font-semibold text-accent mt-4">Jackpots</h3>
        <p>
          Includes mystery jackpot events and progressive-style banners. Read eligibility on the promo
          tile — see{' '}
          <Link href="/blog/k1177-bonus-daily-rewards-guide" className="text-accent hover:underline">bonus guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">How to browse the lobby</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install K1177 from k1177apk.com.pk and log in.</li>
          <li>Open Home / Lobby and scroll Hot or category tabs.</li>
          <li>Tap a game, check the min bet, then start with a small stake.</li>
          <li>Return to Wallet anytime to review balance before the next round.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Play tips for Pakistan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use JazzCash or EasyPaisa deposits only after you understand the lobby.</li>
          <li>Close background apps on low-RAM phones for smoother rounds.</li>
          <li>Set a session limit in PKR before you open any game.</li>
          <li>Bonus funds may restrict which games count toward wagering — read Offers terms.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">What K1177 is not</h2>
        <p>
          K1177 is not a Google Play sportsbook or a single fixed “one game” APK. Categories rotate.
          If someone promises a secret high-RTP list outside the app, treat it as marketing noise.
        </p>
        <p>
          Start here:{' '}
          <Link href="/blog/how-to-use-k1177-app-pakistan-guide" className="text-accent hover:underline">
            beginner guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/k1177-app-review-2026" className="text-accent hover:underline">
            2026 review
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
