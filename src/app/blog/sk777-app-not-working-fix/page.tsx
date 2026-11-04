import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 App Not Working? Common Fixes (Pakistan)',
  description:
    'Fix SK777 not opening, crashing, login errors, or deposit delays in Pakistan — update APK, clear cache, and when to contact support.',
  keywords: [
    'SK777 not working',
    'SK777 app crash',
    'SK777 login error',
    'SK777 fix Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-app-not-working-fix` },
  openGraph: {
    title: 'SK777 App Not Working? Common Fixes (Pakistan)',
    description:
      'Fix SK777 not opening, crashing, login errors, or deposit delays in Pakistan — update APK, clear cache, and when to contact support.',
    url: `${SITE_URL}/blog/sk777-app-not-working-fix`,
    siteName: 'SK777',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/sk777-game-home.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 App Not Working Fixes',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 App Not Working? Common Fixes (Pakistan)"
        description="Fix SK777 not opening, crashing, login errors, or deposit delays in Pakistan — update APK, clear cache, and when to contact support."
        slug="sk777-app-not-working-fix"
        datePublished="2026-11-05"
        image={`${SITE_URL}/sk777-game-home.webp`}
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
        <span className="text-gray-300">SK777 App Not Working? Common Fixes</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        SK777 App Not Working? Common Fixes (Pakistan)
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/sk777-game-home.webp"
          alt="SK777 home screen for troubleshooting"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          If SK777 will not open, keeps crashing, or payments stall, most issues come from an old APK,
          weak network, or a modified install. Work through these fixes before you reinstall.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">App won&apos;t open or crashes</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Force-close SK777 and reopen it.</li>
          <li>Free storage space — low disk often causes install/parse errors.</li>
          <li>
            Re-download the latest APK from{' '}
            <Link href="/" className="text-accent hover:underline">
              sk777app.com.pk
            </Link>{' '}
            and install over the old build.
          </li>
          <li>Restart the phone, then try again on Wi-Fi or mobile data.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Login errors</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm the same phone number / password you registered with.</li>
          <li>Check system time is automatic (wrong clock can break OTP).</li>
          <li>Switch network (Wi-Fi ↔ mobile data) if the request times out.</li>
          <li>
            Still locked out? Use{' '}
            <Link
              href="/blog/sk777-customer-service-account-help"
              className="text-accent hover:underline"
            >
              customer service steps
            </Link>
            .
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Deposit or balance not updating</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wait a few minutes; keep the JazzCash / EasyPaisa receipt.</li>
          <li>Confirm you paid the exact in-app account — not a chat number.</li>
          <li>Do not send a second payment to “force” credit.</li>
          <li>Open in-app support with transaction ID and screenshots.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">When to reinstall</h2>
        <p>
          Uninstall only after you know your login details. Install again only from sk777app.com.pk —
          see the{' '}
          <Link
            href="/blog/how-to-download-install-sk777-apk-pakistan"
            className="text-accent hover:underline"
          >
            download &amp; install guide
          </Link>
          . Avoid APKs from Telegram groups; they often break or steal sessions.
        </p>
        <p>Play responsibly (18+). Fix the app first — never share OTP or withdraw PIN to “repair” it.</p>
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
