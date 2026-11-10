import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'K1177 blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, safety, and responsible 18+ gaming guides.',
  keywords: [
    'K1177 blog',
    'K1177 guide',
    'K1177 review',
    'K1177 APK',
    'K1177 deposit',
    'K1177 withdraw',
    'K1177 Pakistan 2026',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'K1177 Blog - Guides, Tips & Reviews 2026',
    description: 'Official K1177 guides for download, payments, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: 'K1177',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/k1177-game-logo-site.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Blog',
      },
    ],
  },
};

/** SERP-matched K1177 topics only */
const posts = [
  {
    slug: 'what-is-k1177-game-pakistan',
    title: 'What Is K1177 Game? Pakistan Explained',
    description:
      'Clear overview: what K1177 is, how it works, who it is for, and how JazzCash/EasyPaisa fit in.',
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'k1177-features-guide-pakistan',
    title: 'K1177 Features Guide Pakistan 2026',
    description:
      'Lobby, wallets, bonuses, comparison table, and old vs new improvements in the latest APK.',
    readTime: '11 min read',
    featured: false,
  },
  {
    slug: 'k1177-pros-and-cons-pakistan',
    title: 'K1177 Pros and Cons Pakistan 2026',
    description:
      'Honest advantages and drawbacks for Pakistani players before you deposit.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'k1177-faq-pakistan',
    title: 'K1177 FAQ Pakistan',
    description:
      'Download, Google Play myths, login, deposits, withdrawals, bonuses, and safety — answered.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'k1177-app-review-2026',
    title: 'K1177 App Review 2026',
    description:
      'Honest review: earning games, JazzCash & EasyPaisa, pros, cons, and payout notes for Pakistan.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-download-install-k1177-apk-pakistan',
    title: 'How to Download & Install K1177 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-k1177-account-and-login',
    title: 'How to Create a K1177 Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-deposit-jazzcash-easypaisa-guide',
    title: 'K1177 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'k1177-withdraw-money-guide',
    title: 'K1177 Withdraw Money Guide',
    description: 'Cash out with withdrawal PIN to JazzCash or EasyPaisa — and fix failed requests.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'is-k1177-safe-legal-pakistan',
    title: 'Is K1177 Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal context, and responsible play.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-k1177-app-pakistan-guide',
    title: 'How to Use K1177 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    featured: false,
  },
  {
    slug: 'k1177-bonus-daily-rewards-guide',
    title: 'K1177 Bonus & Daily Rewards Guide 2026',
    description: 'Welcome offers, daily rewards, wagering tips, and how to avoid fake VIP promos.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'how-to-play-k1177-on-pc',
    title: 'How to Play K1177 on PC (BlueStacks & Emulators)',
    description: 'Run the Android APK on Windows: requirements, install steps, and common PC errors.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'k1177-customer-service-account-help',
    title: 'K1177 Customer Service & Account Help',
    description: 'In-app support, login resets, deposit proofs, and how to spot fake agents.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'k1177-games-list-pakistan',
    title: 'K1177 Games List Pakistan 2026',
    description: 'Slots, cards, fishing, live sports picks, jackpots, and how to browse the K1177 lobby in Pakistan.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'k1177-invite-friends-referral-guide',
    title: 'K1177 Invite Friends & Referral Guide',
    description: 'Find your invite code, share safely, understand rewards, and avoid referral scams.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-minimum-deposit-pakistan',
    title: 'K1177 Minimum Deposit Pakistan 2026',
    description: 'Check the live min PKR amount, start small with JazzCash/EasyPaisa, and avoid deposit mistakes.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-withdrawal-pin-setup',
    title: 'How to Set K1177 Withdrawal PIN',
    description: 'Create your cash-out PIN, bind a wallet, and recover safely if you forget it.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-app-not-working-fix',
    title: 'K1177 App Not Working? Common Fixes',
    description: 'Crashes, login errors, and delayed deposits — update APK, network checks, and support tips.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'k1177-fake-apk-scam-warnings',
    title: 'K1177 Fake APK & Scam Warnings',
    description: 'Spot fake APKs, Telegram agents, and phishing links before you deposit.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'k1177-otp-not-received-login-fix',
    title: 'K1177 OTP Not Received & Login Fix',
    description: 'SMS code delays, password errors, and stuck login screens — quick Pakistan fixes.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-vip-member-day-guide',
    title: 'K1177 VIP & Member Day Guide',
    description: 'Claim Member Day / VIP offers safely and read wagering before you withdraw.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-responsible-gaming-pakistan',
    title: 'K1177 Responsible Gaming (18+)',
    description: 'Set limits, avoid chasing losses, and keep real-money play adult-only.',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'k1177-update-apk-latest-version',
    title: 'How to Update K1177 APK (Latest Version)',
    description: 'Install V1.6 over your old build, fix blocked updates, and verify after install.',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'k1177-bind-jazzcash-easypaisa-account',
    title: 'Bind JazzCash & EasyPaisa to K1177',
    description: 'Link your own wallet for deposits and withdrawals — name match and PIN tips.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k1177-treasure-chest-jackpot-guide',
    title: 'K1177 Treasure Chest & Jackpot Guide',
    description: 'How chest rewards and jackpot-style events work — claim tips and risk notes.',
    readTime: '6 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">K1177 Blog</h1>
      <p className="text-muted mb-8 text-lg">
        Guides, payment help, and responsible gaming tips for K1177 players in Pakistan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-accent' : 'border-accent/20 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-ink">{post.title}</h2>
            <p className="text-muted mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-muted/80 mb-4">
              <span>Nov 2026</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
