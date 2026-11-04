import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Invite Friends & Referral Guide',
  description:
    'How SK777 invite / referral links work in Pakistan: find your code, share safely, reward rules, and fake-agent warnings.',
  keywords: [
    'SK777 invite friends',
    'SK777 referral',
    'SK777 invite code',
    'SK777 share link Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-invite-friends-referral-guide` },
  openGraph: {
    title: 'SK777 Invite Friends & Referral Guide',
    description:
      'How SK777 invite / referral links work in Pakistan: find your code, share safely, reward rules, and fake-agent warnings.',
    url: `${SITE_URL}/blog/sk777-invite-friends-referral-guide`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-wallet.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 Invite Friends & Referral Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Invite Friends & Referral Guide"
        description="How SK777 invite / referral links work in Pakistan: find your code, share safely, reward rules, and fake-agent warnings."
        slug="sk777-invite-friends-referral-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-wallet.webp`}
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
        <span className="text-gray-300">SK777 Invite Friends & Referral Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 Invite Friends &amp; Referral Guide
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-wallet.webp"
          alt="SK777 invite friends screen"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Many SK777 builds include an Invite / Share / Referral screen. Rewards (if any) depend on
          live rules — usually a valid signup plus qualifying activity. Never pay a stranger to
          “activate” your invite code.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">How to find your invite link</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the official SK777 app and log in.</li>
          <li>Open Invite Friends / Share / Referral (wording varies by build).</li>
          <li>Copy your personal code or link shown on that screen only.</li>
          <li>Share it with people who already want the app — do not spam chats.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">How referrals usually work</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Friend installs from a trusted source such as sk777app.com.pk.</li>
          <li>Friend registers and enters your code if the form asks for one.</li>
          <li>Reward may unlock after their first deposit or mission — check in-app terms.</li>
          <li>Self-referrals and fake accounts often get voided; follow the written rules.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Safe sharing in Pakistan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Send the official site or your in-app link — not a modified APK file.</li>
          <li>Tell friends to allow unknown sources only for that one install, then turn it off.</li>
          <li>Do not collect their OTP, JazzCash PIN, or EasyPaisa credentials for “help.”</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Fake invite scams</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>“Pay PKR X to unlock VIP invite tier” — not an official SK777 step.</li>
          <li>Agents who ask you to deposit to their personal wallet for “referral credit.”</li>
          <li>Links that do not match sk777app.com.pk or the in-app share sheet.</li>
        </ul>
        <p>
          Related:{' '}
          <Link href="/blog/sk777-bonus-daily-rewards-guide" className="text-accent hover:underline">
            bonus guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/create-sk777-account-and-login" className="text-accent hover:underline">
            register &amp; login
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
