import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use K1177 App in Pakistan: Beginner Guide',
  description: 'Complete beginner guide to K1177 in Pakistan: download, register, deposit, play, and withdraw.',
  keywords: [
    'how to use K1177',
    'K1177 beginner guide',
    'K1177 Pakistan guide',
    'K1177 tutorial'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-use-k1177-app-pakistan-guide` },
  openGraph: {
    title: 'How to Use K1177 App in Pakistan: Beginner Guide',
    description: 'Complete beginner guide to K1177 in Pakistan: download, register, deposit, play, and withdraw.',
    url: `${SITE_URL}/blog/how-to-use-k1177-app-pakistan-guide`,
    siteName: 'K1177',
    type: 'article',
    images: [{ url: `${SITE_URL}/k1177game-member-day.webp`, width: 1200, height: 630, alt: 'How to Use K1177 App in Pakistan: Beginner Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Use K1177 App in Pakistan: Beginner Guide"
        description="Complete beginner guide to K1177 in Pakistan: download, register, deposit, play, and withdraw."
        slug="how-to-use-k1177-app-pakistan-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177game-member-day.webp`}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-muted">How to Use K1177 App in Pakistan: Beginner Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">How to Use K1177 App in Pakistan: Beginner Guide</h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image src="/k1177game-member-day.webp" alt="How to Use K1177 App in Pakistan: Beginner Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          New to K1177 in Pakistan? This end-to-end November 2026 walkthrough links every major step —
          download, account, payments, games, bonuses, and support — with responsible 18+ play throughout.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">1. Download &amp; install the APK</h2>
        <p>
          K1177 is not on Google Play. Use{' '}
          <Link href="/download-k1177" className="text-accent hover:underline">k1177apk.com.pk</Link>{' '}
          (V1.6, ~51 MB). Enable unknown sources, install, open once on mobile data.{' '}
          <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">Detailed install</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">2. Register &amp; log in</h2>
        <p>
          Pakistani SIM, unique password, OTP on-device only.{' '}
          <Link href="/blog/create-k1177-account-and-login" className="text-accent hover:underline">Account guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">3. Explore the lobby</h2>
        <p>
          Browse slots, cards, fishing, sports picks, and jackpots. Start with minimum bets.{' '}
          <Link href="/blog/k1177-games-list-pakistan" className="text-accent hover:underline">Games list</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">4. Deposit with JazzCash / EasyPaisa</h2>
        <p>
          Shop → pick wallet → approve payment request. Start at minimum tier.{' '}
          <Link href="/blog/k1177-minimum-deposit-pakistan" className="text-accent hover:underline">Min deposit</Link> ·{' '}
          <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">Deposit guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">5. Claim bonuses wisely</h2>
        <p>
          Daily rescue, treasure chest, member day — optional. Read turnover.{' '}
          <Link href="/blog/k1177-bonus-daily-rewards-guide" className="text-accent hover:underline">Bonus guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">6. Set withdrawal PIN &amp; cash out</h2>
        <p>
          Bind wallet, enter PIN, submit withdraw.{' '}
          <Link href="/blog/k1177-withdrawal-pin-setup" className="text-accent hover:underline">PIN setup</Link> ·{' '}
          <Link href="/blog/k1177-withdraw-money-guide" className="text-accent hover:underline">Withdraw guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">7. When something breaks</h2>
        <p>
          Crashes or delayed pay —{' '}
          <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">fix guide</Link> and{' '}
          <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">customer service</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">PC players</h2>
        <p>
          <Link href="/blog/how-to-play-k1177-on-pc" className="text-accent hover:underline">BlueStacks / emulator guide</Link> ·{' '}
          <Link href="/k1177-for-pc" className="text-accent hover:underline">K1177 for PC page</Link>.
        </p>
        <p>
          Deep dive: <Link href="/blog/k1177-app-review-2026" className="text-accent hover:underline">2026 review</Link> ·{' '}
          <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-accent hover:underline">safety &amp; legal</Link>.
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD K1177 APK" />
        <p className="text-sm text-muted/70 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">K1177 blog</Link>.
        </p>
      </div>
    </article>
  );
}
