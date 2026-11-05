'use client';

import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="k1177-glass-header sticky top-0 z-30 py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <span className="k1177-wordmark k1177-wordmark--nav text-xl md:text-2xl">
            K1177
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-ink hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-k1177" className="text-ink hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-k1177" className="text-ink hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-k1177" className="text-ink hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/k1177-for-pc" className="text-ink hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/about-us" className="text-ink hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-ink hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-ink hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
