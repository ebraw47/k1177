import { NextResponse } from 'next/server';

const baseUrl = 'https://k1177apk.com.pk';

const blogSlugs = [
  'k1177-app-review-2026',
  'how-to-download-install-k1177-apk-pakistan',
  'create-k1177-account-and-login',
  'k1177-deposit-jazzcash-easypaisa-guide',
  'k1177-withdraw-money-guide',
  'is-k1177-safe-legal-pakistan',
  'how-to-use-k1177-app-pakistan-guide',
  'k1177-bonus-daily-rewards-guide',
  'how-to-play-k1177-on-pc',
  'k1177-customer-service-account-help',
  'k1177-games-list-pakistan',
  'k1177-invite-friends-referral-guide',
  'k1177-minimum-deposit-pakistan',
  'k1177-withdrawal-pin-setup',
  'k1177-app-not-working-fix',
  'k1177-fake-apk-scam-warnings',
  'k1177-otp-not-received-login-fix',
  'k1177-vip-member-day-guide',
  'k1177-responsible-gaming-pakistan',
  'k1177-update-apk-latest-version',
  'k1177-bind-jazzcash-easypaisa-account',
  'k1177-treasure-chest-jackpot-guide',
];

export async function GET() {
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const now = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: now,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/k1177-game-logo.webp',
          title: 'K1177 Hero Image',
          caption: 'K1177 gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-k1177',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/k1177-game-logo.webp',
          title: 'Download K1177',
          caption: 'Download K1177 APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-k1177', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-k1177', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/k1177-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/k1177-game-logo.webp',
          title: 'K1177 for PC',
          caption: 'Play K1177 on PC using Android Emulator',
        },
      ],
    },
    {
      url: '/about-us',
      lastMod: now,
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/k1177-game-logo.webp',
          title: 'About K1177',
          caption: 'Learn about K1177 gaming platform',
        },
      ],
    },
    {
      url: '/blog',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/k1177-game-logo.webp',
          title: 'K1177 Blog',
          caption: 'Guides and tutorials for K1177',
        },
      ],
    },
    { url: '/contact-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
    { url: '/disclaimer', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: now,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
