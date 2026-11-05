import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Create a K1177 Account and Login',
  description: 'Register and log in to K1177 safely using your Pakistani mobile number.',
  keywords: [
    'K1177 login',
    'K1177 register',
    'K1177 account',
    'K1177 signup'
  ],
  alternates: { canonical: `${SITE_URL}/blog/create-k1177-account-and-login` },
  openGraph: {
    title: 'How to Create a K1177 Account and Login',
    description: 'Register and log in to K1177 safely using your Pakistani mobile number.',
    url: `${SITE_URL}/blog/create-k1177-account-and-login`,
    siteName: 'K1177',
    type: 'article',
    images: [{ url: `${SITE_URL}/k1177-game-register.webp`, width: 1200, height: 630, alt: 'How to Create a K1177 Account and Login' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Create a K1177 Account and Login"
        description="Register and log in to K1177 safely using your Pakistani mobile number."
        slug="create-k1177-account-and-login"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-register.webp`}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-muted">How to Create a K1177 Account and Login</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">How to Create a K1177 Account and Login</h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image src="/k1177-game-register.webp" alt="How to Create a K1177 Account and Login" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          After you{' '}
          <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">install the official APK</Link>,
          registration takes a few minutes. Use your own Pakistani SIM — shared or agent-created accounts
          often fail verification at withdraw time.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Register a new account</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Launch K1177 from your home screen.</li>
          <li>Tap Register / Sign up on the login page (see screenshot).</li>
          <li>Enter mobile number with correct country code if prompted.</li>
          <li>Create a strong password (letters + numbers; unique to K1177).</li>
          <li>Enter OTP sent to your SIM — never forward OTP to WhatsApp “helpers.”</li>
          <li>Accept terms; confirm you are 18+.</li>
        </ol>
        <div className="k1177-blog-shot my-6">
          <Image src="/k1177game-login.webp" alt="K1177 login screen Pakistan" width={720} height={1280} className="w-full h-auto object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-ink mt-8">Login daily</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Open app → Login → same number + password.</li>
          <li>Enable stable internet; toggle airplane mode if OTP stalls.</li>
          <li>For password reset, use in-app Forgot password — not third-party links.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Security checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>One account per person — multi-account promos may be banned.</li>
          <li>Set withdrawal PIN before first cash-out attempt.</li>
          <li>Report suspicious login SMS to{' '}
            <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">support</Link>.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">FAQ</h2>
        <p><strong>OTP not arriving?</strong> Wait 60s, check signal, request resend — see{' '}
          <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">fixes</Link>.</p>
        <p>Next: <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link> ·{' '}
          <Link href="/blog/how-to-use-k1177-app-pakistan-guide" className="text-accent hover:underline">beginner guide</Link>.</p>
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
