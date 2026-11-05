import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import WalletLinks from '@/components/WalletLinks';
import { EASYPAISA_URL, FACEBOOK_URL, JAZZCASH_URL, SITE_DOMAIN } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-ink pt-8 pb-2 px-4 md:px-8 border-t border-cyan/20 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">K1177</h3>
            <p className="text-sm text-muted mb-4">
              K1177 is Pakistan&apos;s real-money gaming platform for earning games on Android.
              Deposit and withdraw with <WalletLinks className="text-accent hover:underline" /> when
              listed. Play responsibly (18+).
            </p>
            {FACEBOOK_URL && FACEBOOK_URL !== 'https://www.facebook.com/' && (
              <div className="flex space-x-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="K1177 on Facebook"
                >
                  <svg
                    className="w-5 h-5 transition-opacity hover:opacity-90"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download-k1177" className="text-muted hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/k1177-for-pc" className="text-muted hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-muted hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-k1177" className="text-muted hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <a
                  href={JAZZCASH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  JazzCash
                </a>
              </li>
              <li>
                <a
                  href={EASYPAISA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  EasyPaisa
                </a>
              </li>
              <li>
                <Link href="/withdraw-money-from-k1177" className="text-muted hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/create-k1177-account-and-login" className="text-muted hover:text-accent transition-colors">
                  Account & Login
                </Link>
              </li>
              <li>
                <Link href="/blog/is-k1177-safe-legal-pakistan" className="text-muted hover:text-accent transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-muted mb-4">
              Download K1177 to enjoy earning games, daily rewards, and local wallets on Android.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <DownloadButton size="sm" label="DOWNLOAD K1177" />
              <Link
                href="/download-k1177"
                className="inline-flex w-fit items-center justify-center px-4 py-2 rounded-full border border-accent/25 text-sm text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                Installation Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/15 mt-8 pt-4 pb-3 text-center text-sm text-muted/80">
          <p className="mb-0">
            © 2026 K1177. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">
              {SITE_DOMAIN}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
