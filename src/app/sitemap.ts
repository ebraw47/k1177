import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'daily', priority: 1 },
    {
      url: `${SITE_URL}/download-k1177`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/deposit-money-in-k1177`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/withdraw-money-from-k1177`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/k1177-for-pc`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages];
}
