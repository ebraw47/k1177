import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K1177 OTP Not Received & Login Fix Pakistan',
  description:
    'Fix K1177 OTP not coming, wrong password, and login stuck screens in Pakistan — network checks, number format, and support tips.',
  keywords: [
    'K1177 OTP not received',
    'K1177 login problem',
    'K1177 SMS code',
    'K1177 cannot login Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-otp-not-received-login-fix` },
  openGraph: {
    title: 'K1177 OTP Not Received & Login Fix Pakistan',
    description:
      'Fix K1177 OTP not coming, wrong password, and login stuck screens in Pakistan — network checks, number format, and support tips.',
    url: `${SITE_URL}/blog/k1177-otp-not-received-login-fix`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177game-login.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Login OTP Fix',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K1177 OTP Not Received & Login Fix Pakistan"
        description="Fix K1177 OTP not coming, wrong password, and login stuck screens in Pakistan."
        slug="k1177-otp-not-received-login-fix"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177game-login.webp`}
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
        <span className="text-muted">OTP &amp; Login Fix</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        K1177 OTP Not Received &amp; Login Fix Pakistan
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177game-login.webp"
          alt="K1177 login screen for OTP and password help"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          If K1177 registration or login hangs on the SMS code, most issues are number format,
          network, or an outdated APK — not a permanent account block.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">OTP checklist</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Use a Pakistani mobile in 03XX XXXXXXX format (no extra spaces or country code typos).</li>
          <li>Switch between Wi‑Fi and mobile data; wait 60–90 seconds before tapping Resend.</li>
          <li>Disable SMS blockers / dual-SIM apps that filter unknown senders.</li>
          <li>Toggle airplane mode for 10 seconds, then request a new code.</li>
          <li>
            Update to the latest APK from{' '}
            <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">
              the install guide
            </Link>
            .
          </li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Password / login errors</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm Caps Lock and Urdu/English keyboard layout.</li>
          <li>Use “Forgot password” only inside the official app — never a link from chat.</li>
          <li>Clear app cache if the login button spins forever, then reopen.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Still stuck?</h2>
        <p>
          Open in-app Customer Service with your registered number and screenshots. Full walkthrough:{' '}
          <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">
            customer service guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/create-k1177-account-and-login" className="text-accent hover:underline">
            create account &amp; login
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
