import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 Withdraw Money Guide',
  description: 'How to withdraw money from K1177 to JazzCash or EasyPaisa in Pakistan.',
  keywords: [
    'K1177 withdraw',
    'K1177 cash out',
    'K1177 EasyPaisa withdraw',
    'K1177 JazzCash withdraw'
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-withdraw-money-guide` },
  openGraph: {
    title: 'K1177 Withdraw Money Guide',
    description: 'How to withdraw money from K1177 to JazzCash or EasyPaisa in Pakistan.',
    url: `${SITE_URL}/blog/k1177-withdraw-money-guide`,
    siteName: 'K1177',
    type: 'article',
    images: [{ url: `${SITE_URL}/k1177-game-withdrawl-form.webp`, width: 1200, height: 630, alt: 'K1177 Withdraw Money Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 Withdraw Money Guide"
        description="How to withdraw money from K1177 to JazzCash or EasyPaisa in Pakistan."
        slug="k1177-withdraw-money-guide"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-withdrawl-form.webp`}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-muted">K1177 Withdraw Money Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">K1177 Withdraw Money Guide</h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image src="/k1177-game-withdrawl-form.webp" alt="K1177 Withdraw Money Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Cashing out from K1177 in Pakistan typically means JazzCash or EasyPaisa plus a withdrawal PIN.
          Processing can be minutes to hours depending on queue, bonus turnover, and verification. November
          2026 — always read live limits on the Withdraw form (screenshot on this page).
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Prepare your account</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set your PIN: <Link href="/blog/k1177-withdrawal-pin-setup" className="text-accent hover:underline">withdrawal PIN guide</Link>.</li>
          <li>Bind a wallet number registered in your name.</li>
          <li>Clear any active bonus turnover shown under Offers or Wallet.</li>
          <li>Ensure withdrawable balance excludes locked promo funds.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Withdraw step-by-step</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open K1177 → Withdraw / Cash out.</li>
          <li>Select JazzCash or EasyPaisa.</li>
          <li>Enter amount within min/max displayed.</li>
          <li>Confirm wallet digits and enter withdrawal PIN.</li>
          <li>Submit — status shows Pending until paid.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Timing expectations</h2>
        <p>
          Many requests complete quickly during daytime hours. Night maintenance, high volume, or manual
          review can delay payout. Do not pay “fast withdraw fees” to strangers — that is a common scam.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Common issues</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>PIN rejected:</strong> reset via in-app security — never tell agents your PIN.</li>
          <li><strong>Name mismatch:</strong> wallet CNIC name must align with K1177 profile.</li>
          <li><strong>Turnover not met:</strong> finish wagering or forfeit bonus per terms.</li>
          <li><strong>Stuck pending:</strong>{' '}
            <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">contact support</Link> with request ID.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">FAQ</h2>
        <p><strong>Bank transfer?</strong> Some builds list bank options — if absent, use wallets only.</p>
        <p>Full page: <Link href="/withdraw-money-from-k1177" className="text-accent hover:underline">withdraw money from K1177</Link>. 18+.</p>
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
