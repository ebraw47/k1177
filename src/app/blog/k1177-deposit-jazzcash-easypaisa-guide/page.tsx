import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { EasyPaisaLink, JazzCashLink } from '@/components/WalletLinks';
import { APP_VERSION, EASYPAISA_URL, JAZZCASH_URL, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Deposit Guide: JazzCash & EasyPaisa',
  description: 'How to deposit money in K1177 with JazzCash and EasyPaisa in Pakistan.',
  keywords: [
    'K1177 deposit',
    'K1177 JazzCash',
    'K1177 EasyPaisa',
    'K1177 add money'
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: 'K1177 Deposit Guide: JazzCash & EasyPaisa',
    description: 'How to deposit money in K1177 with JazzCash and EasyPaisa in Pakistan.',
    url: `${SITE_URL}/blog/k1177-deposit-jazzcash-easypaisa-guide`,
    siteName: 'K1177',
    type: 'article',
    images: [{ url: `${SITE_URL}/k1177-game-recharge.webp`, width: 1200, height: 630, alt: 'K1177 Deposit Guide: JazzCash & EasyPaisa' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Deposit Guide: JazzCash & EasyPaisa"
        description="How to deposit money in K1177 with JazzCash and EasyPaisa in Pakistan."
        slug="k1177-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-recharge.webp`}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-muted">K1177 Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">K1177 Deposit Guide: JazzCash & EasyPaisa</h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image src="/k1177-game-recharge.webp" alt="K1177 Deposit Guide: JazzCash & EasyPaisa" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          <JazzCashLink /> and <EasyPaisaLink /> are the primary deposit rails for K1177 in Pakistan.
          Official wallet sites:{' '}
          <a href={JAZZCASH_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            jazzcash.com.pk
          </a>{' '}
          and{' '}
          <a href={EASYPAISA_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            easypaisa.com.pk
          </a>
          . This November 2026 guide matches the Shop / Recharge flow — always pay only through the
          official app UI, never to a number sent on WhatsApp.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Before you deposit</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Install {APP_VERSION} from <Link href="/download-k1177" className="text-accent hover:underline">k1177apk.com.pk</Link>.</li>
          <li>Log in and confirm wallet balance reads zero or your expected amount.</li>
          <li>Check live minimum PKR on the amount picker — see{' '}
            <Link href="/blog/k1177-minimum-deposit-pakistan" className="text-accent hover:underline">minimum deposit guide</Link>.</li>
          <li>18+ only; deposit money you can afford to lose.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">JazzCash deposit steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open K1177 → Shop / Recharge / Deposit.</li>
          <li>Select JazzCash and choose an amount tier.</li>
          <li>Tap submit — a payment request opens your JazzCash app (or prompts login).</li>
          <li>Approve with your JazzCash PIN; wait for success SMS.</li>
          <li>Return to K1177 — balance usually updates within minutes.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">EasyPaisa deposit steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Same Shop screen — pick EasyPaisa instead.</li>
          <li>Confirm your EasyPaisa account has sufficient balance.</li>
          <li>Approve the in-app payment request with your wallet PIN.</li>
          <li>Do not close K1177 until the success tick appears.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No payment popup:</strong> update APK, switch Wi‑Fi/mobile data, retry.</li>
          <li><strong>Money left wallet, no chips:</strong> wait 15 minutes, screenshot receipt, contact in-app support — avoid duplicate deposits.</li>
          <li><strong>Wrong number entered:</strong> support may need proof; prevention is easier than reversal.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">FAQ</h2>
        <p><strong>Can I use someone else’s JazzCash?</strong> Use only wallets in your name to avoid withdraw blocks later.</p>
        <p><strong>Deposit for a welcome bonus?</strong> Read turnover on the Offers tile first —{' '}
          <Link href="/blog/k1177-bonus-daily-rewards-guide" className="text-accent hover:underline">bonus guide</Link>.</p>
        <p>Extended steps: <Link href="/deposit-money-in-k1177" className="text-accent hover:underline">deposit money in K1177</Link>.</p>
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
