import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { APP_OS, APP_SIZE, APP_VERSION, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Download & Install K1177 APK in Pakistan',
  description: 'Step-by-step guide to download and install K1177 APK on Android in Pakistan safely.',
  keywords: [
    'K1177 download',
    'K1177 APK',
    'install K1177 Pakistan',
    'K1177 APK download'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-download-install-k1177-apk-pakistan` },
  openGraph: {
    title: 'How to Download & Install K1177 APK in Pakistan',
    description: 'Step-by-step guide to download and install K1177 APK on Android in Pakistan safely.',
    url: `${SITE_URL}/blog/how-to-download-install-k1177-apk-pakistan`,
    siteName: 'K1177',
    type: 'article',
    images: [{ url: `${SITE_URL}/k1177game-login.webp`, width: 1200, height: 630, alt: 'How to Download & Install K1177 APK in Pakistan' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Download & Install K1177 APK in Pakistan"
        description="Step-by-step guide to download and install K1177 APK on Android in Pakistan safely."
        slug="how-to-download-install-k1177-apk-pakistan"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177game-login.webp`}
      />
      <nav className="text-sm text-muted/80 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-muted">How to Download & Install K1177 APK in Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">How to Download & Install K1177 APK in Pakistan</h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image src="/k1177game-login.webp" alt="How to Download & Install K1177 APK in Pakistan" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Searching &quot;K1177 Game Free Download Pakistan&quot; leads to many copycat pages. The safe path
          is k1177apk.com.pk: {APP_VERSION}, {APP_SIZE}, {APP_OS}. K1177 is sideload-only — we do not
          claim a Google Play listing.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Before you download</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use your own Android phone (18+).</li>
          <li>Keep at least 200 MB free storage for download + install.</li>
          <li>Connect to stable mobile data or Wi‑Fi.</li>
          <li>Ignore Telegram APKs that ask for upfront PKR.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">Download steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open k1177apk.com.pk in Chrome or your default browser.</li>
          <li>Tap <strong>Download K1177 APK</strong> (routes through the official link).</li>
          <li>Wait until the full {APP_SIZE} file completes — do not cancel mid-way.</li>
          <li>Settings → allow <strong>Install unknown apps</strong> for that browser.</li>
          <li>Open Downloads, tap the APK, confirm Install.</li>
          <li>Open K1177, then{' '}
            <Link href="/blog/create-k1177-account-and-login" className="text-accent hover:underline">register or log in</Link>.
          </li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">Enable unknown sources (Android)</h2>
        <p>
          On Android 12+, go to Settings → Apps → Special app access → Install unknown apps → Chrome →
          Allow. Samsung users: Settings → Biometrics and security → Install unknown apps. Without this,
          the install button stays greyed out.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Fake APK warning</h2>
        <p>
          Real builds are near {APP_SIZE}. Tiny files, mismatched icons, or requests for JazzCash OTP in
          chat are red flags. Compare with{' '}
          <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-accent hover:underline">safety guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Install blocked:</strong> re-enable unknown sources for the browser you used.</li>
          <li><strong>Parse error / corrupt APK:</strong> delete file, re-download from{' '}
            <Link href="/download-k1177" className="text-accent hover:underline">download page</Link>.</li>
          <li><strong>App won’t open:</strong> update Android System WebView, clear cache, reinstall.</li>
          <li><strong>Login loop after install:</strong> see{' '}
            <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">app not working fixes</Link>.</li>
        </ul>
        <h2 className="text-2xl font-bold text-ink mt-8">FAQ</h2>
        <p><strong>Can I update without losing balance?</strong> Usually yes if you install over the same official APK — still screenshot balance before major updates.</p>
        <p><strong>PC install?</strong> Use BlueStacks with the same APK:{' '}
          <Link href="/blog/how-to-play-k1177-on-pc" className="text-accent hover:underline">PC guide</Link>.</p>
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
