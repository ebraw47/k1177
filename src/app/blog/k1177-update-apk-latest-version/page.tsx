import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { APP_SIZE, APP_VERSION, SITE_DOMAIN, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `How to Update K1177 APK to ${APP_VERSION} Pakistan`,
  description: `Update K1177 to ${APP_VERSION} (${APP_SIZE}) in Pakistan — check your build, install over the old APK, and fix update errors.`,
  keywords: [
    'K1177 update',
    'K1177 latest version',
    `K1177 ${APP_VERSION}`,
    'K1177 APK update Pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k1177-update-apk-latest-version` },
  openGraph: {
    title: `How to Update K1177 APK to ${APP_VERSION} Pakistan`,
    description: `Update K1177 to ${APP_VERSION} (${APP_SIZE}) in Pakistan — check your build, install over the old APK, and fix update errors.`,
    url: `${SITE_URL}/blog/k1177-update-apk-latest-version`,
    siteName: 'K1177',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k1177-game-news.webp`,
        width: 1200,
        height: 630,
        alt: 'K1177 Update APK Latest Version',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title={`How to Update K1177 APK to ${APP_VERSION} Pakistan`}
        description={`Update K1177 to ${APP_VERSION} (${APP_SIZE}) in Pakistan — check your build and fix update errors.`}
        slug="k1177-update-apk-latest-version"
        datePublished="2026-11-05"
        image={`${SITE_URL}/k1177-game-news.webp`}
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
        <span className="text-muted">Update APK</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        How to Update K1177 APK to {APP_VERSION} Pakistan
      </h1>
      <p className="text-muted/80 text-sm mb-8">Updated November 2026 · K1177 Pakistan guide</p>
      <div className="k1177-blog-shot mb-10">
        <Image
          src="/k1177-game-news.webp"
          alt="K1177 news and update notices in-app"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-muted leading-relaxed text-lg">
        <p>
          Old builds cause crashes, missing payment methods, and failed logins. Keep K1177 on{' '}
          {APP_VERSION} (~{APP_SIZE.replace('~', '')}) from {SITE_DOMAIN} only.
        </p>
        <h2 className="text-2xl font-bold text-ink mt-8">Update steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download the latest APK from this site —{' '}
            <Link href="/download-k1177" className="text-accent hover:underline">
              download page
            </Link>
            .
          </li>
          <li>Open the file and tap Update / Install (you usually do not need to uninstall first).</li>
          <li>Open K1177, log in, and confirm the version in About / Settings if shown.</li>
          <li>Test Deposit and Withdraw screens after the update.</li>
        </ol>
        <h2 className="text-2xl font-bold text-ink mt-8">If Android blocks the update</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Allow install from your browser or Files app under Unknown sources.</li>
          <li>Free ~100 MB storage before installing.</li>
          <li>
            If install fails, uninstall only after you note your login number — then reinstall from{' '}
            {SITE_DOMAIN}.
          </li>
        </ul>
        <p>
          Stuck after updating? See{' '}
          <Link href="/blog/k1177-app-not-working-fix" className="text-accent hover:underline">
            app not working fixes
          </Link>{' '}
          ·{' '}
          <Link href="/blog/how-to-download-install-k1177-apk-pakistan" className="text-accent hover:underline">
            full install guide
          </Link>
          . 18+ only.
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label={`DOWNLOAD K1177 ${APP_VERSION}`} />
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
