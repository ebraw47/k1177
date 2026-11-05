import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_DOMAIN, SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Fake APK & Scam Warnings Pakistan 2026',
  description:
    'Spot fake K1177 APKs, Telegram “agents,” and phishing links in Pakistan. Download only from the official site and protect your wallet.',
  keywords: [
    'K1177 fake APK',
    'K1177 scam',
    'K1177 Telegram fraud',
    'K1177 phishing Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-fake-apk-scam-warnings` },
  openGraph: {
    title: 'K1177 Fake APK & Scam Warnings Pakistan 2026',
    description:
      'Spot fake K1177 APKs, Telegram “agents,” and phishing links in Pakistan. Download only from the official site and protect your wallet.',
    url: `${SITE_URL}/blog/k1177-fake-apk-scam-warnings`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-support.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Fake APK Scam Warnings',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Fake APK & Scam Warnings Pakistan 2026"
        description="Spot fake K1177 APKs, Telegram agents, and phishing links in Pakistan. Download only from the official site."
        slug="k1177-fake-apk-scam-warnings"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-support.webp`}
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
        <span className="text-muted">Fake APK &amp; Scam Warnings</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 Fake APK &amp; Scam Warnings Pakistan 2026
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-support.webp"
          alt="K1177 support screen — use in-app help, not random chat agents"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Most K1177 losses outside the games themselves come from fake APKs and “support agents” on
          Telegram or WhatsApp. This guide shows the red flags before you install or send PKR.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Only download from the official domain</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <strong className="text-ink">{SITE_DOMAIN}</strong> and the Download button on this
            site.
          </li>
          <li>Ignore shortened links, random Drive folders, and “mod” or “unlocked” APKs.</li>
          <li>If the install screen asks for SMS, call, or accessibility access beyond normal install, cancel.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Common scam patterns</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Someone asks for your OTP, withdrawal PIN, or password “to unlock a bonus.”</li>
          <li>A chat agent sends a JazzCash number that is not shown inside the K1177 Deposit screen.</li>
          <li>A site looks like K1177 but the domain spelling is different.</li>
          <li>“Guaranteed profit” packages sold outside the official Offers tab.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">What to do if you already paid a scammer</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Stop further transfers and change your K1177 password / PIN if you shared them.</li>
          <li>Report the transaction inside your JazzCash or EasyPaisa app when available.</li>
          <li>
            Contact real help via in-app support or{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
            — never a stranger’s chat ID.
          </li>
        </ol>
        <p>
          Related:{' '}
          <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-accent hover:underline">
            safety &amp; legal
          </Link>{' '}
          ·{' '}
          <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">
            official install guide
          </Link>
          . 18+ only.
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD OFFICIAL K1177 APK" />
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
