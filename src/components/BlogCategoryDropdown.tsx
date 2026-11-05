'use client';

import { useState } from 'react';
import Link from 'next/link';

const BlogCategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    { name: 'Account & Login', href: '/blog/create-k1177-account-and-login' },
    { name: 'Download & Install', href: '/blog/how-to-download-install-k1177-apk-pakistan' },
    { name: 'Deposit Guide', href: '/blog/k1177-deposit-jazzcash-easypaisa-guide' },
    { name: 'Withdraw Guide', href: '/blog/k1177-withdraw-money-guide' },
    { name: 'App Review', href: '/blog/k1177-app-review-2026' },
    { name: 'Safety', href: '/blog/is-k1177-safe-legal-pakistan' },
    { name: 'Beginner Guide', href: '/blog/how-to-use-k1177-app-pakistan-guide' },
    { name: 'Bonus & Rewards', href: '/blog/k1177-bonus-daily-rewards-guide' },
    { name: 'Play on PC', href: '/blog/how-to-play-k1177-on-pc' },
    { name: 'Customer Service', href: '/blog/k1177-customer-service-account-help' },
    { name: 'Games List', href: '/blog/k1177-games-list-pakistan' },
    { name: 'Invite Friends', href: '/blog/k1177-invite-friends-referral-guide' },
    { name: 'Minimum Deposit', href: '/blog/k1177-minimum-deposit-pakistan' },
    { name: 'Withdrawal PIN', href: '/blog/k1177-withdrawal-pin-setup' },
    { name: 'App Not Working', href: '/blog/k1177-app-not-working-fix' },
    { name: 'Fake APK & Scams', href: '/blog/k1177-fake-apk-scam-warnings' },
    { name: 'OTP & Login Fix', href: '/blog/k1177-otp-not-received-login-fix' },
    { name: 'VIP & Member Day', href: '/blog/k1177-vip-member-day-guide' },
    { name: 'Responsible Gaming', href: '/blog/k1177-responsible-gaming-pakistan' },
    { name: 'Update APK', href: '/blog/k1177-update-apk-latest-version' },
    { name: 'Bind Wallet', href: '/blog/k1177-bind-jazzcash-easypaisa-account' },
    { name: 'Treasure Chest', href: '/blog/k1177-treasure-chest-jackpot-guide' },
  ];

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-secondary text-ink rounded-md"
      >
        <span>Select Category</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full md:w-64 mt-1 bg-secondary rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  href={category.href}
                  className="block px-4 py-2 text-sm text-ink hover:bg-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCategoryDropdown; 