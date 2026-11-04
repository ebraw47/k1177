import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Games List Pakistan 2026 — What You Can Play',
  description:
    'What games are on SK777 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update.',
  keywords: [
    'SK777 games',
    'SK777 game list',
    'SK777 slots Pakistan',
    'SK777 earning games',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-games-list-pakistan` },
  openGraph: {
    title: 'SK777 Games List Pakistan 2026 — What You Can Play',
    description:
      'What games are on SK777 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update.',
    url: `${SITE_URL}/blog/sk777-games-list-pakistan`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-lobby.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 Games List Pakistan',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Games List Pakistan 2026 — What You Can Play"
        description="What games are on SK777 in Pakistan: earning rounds, slots, prediction-style play, and how the lobby works — categories may update."
        slug="sk777-games-list-pakistan"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-lobby.webp`}
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
        <span className="text-gray-300">SK777 Games List Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 Games List Pakistan 2026 — What You Can Play
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-lobby.webp"
          alt="SK777 lobby showing available games"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          SK777 is built around short mobile rounds popular with Pakistani Android users. Exact titles
          and tabs change over time — always trust the live lobby inside the official app, not a
          screenshot from a random chat.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Game styles you will usually see</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Earning / casual rounds:</strong> quick sessions suited to mid-range phones.
          </li>
          <li>
            <strong>Slots-style games:</strong> spin rounds with simple controls and clear bet sizes.
          </li>
          <li>
            <strong>Prediction-style play:</strong> short outcome rounds when listed in the lobby.
          </li>
          <li>
            <strong>Other mini games:</strong> extra tabs or hot lists when the operator adds them.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">How to browse the lobby</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install SK777 from sk777app.com.pk and log in.</li>
          <li>Open Home / Lobby and scroll Hot or category tabs.</li>
          <li>Tap a game, check the min bet, then start with a small stake.</li>
          <li>Return to Wallet anytime to review balance before the next round.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Play tips for Pakistan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use JazzCash or EasyPaisa deposits only after you understand the lobby.</li>
          <li>Close background apps on low-RAM phones for smoother rounds.</li>
          <li>Set a session limit in PKR before you open any game.</li>
          <li>Bonus funds may restrict which games count toward wagering — read Offers terms.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">What SK777 is not</h2>
        <p>
          SK777 is not a Google Play sportsbook or a single fixed “one game” APK. Categories rotate.
          If someone promises a secret high-RTP list outside the app, treat it as marketing noise.
        </p>
        <p>
          Start here:{' '}
          <Link href="/blog/how-to-use-sk777-app-pakistan-guide" className="text-accent hover:underline">
            beginner guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/sk777-app-review-2026" className="text-accent hover:underline">
            2026 review
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
