'use client';

import { useState } from 'react';
import Link from 'next/link';

const BlogCategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    { name: 'Account & Login', href: '/blog/create-sk777-account-and-login' },
    { name: 'Download & Install', href: '/blog/how-to-download-install-sk777-apk-pakistan' },
    { name: 'Deposit Guide', href: '/blog/sk777-deposit-jazzcash-easypaisa-guide' },
    { name: 'Withdraw Guide', href: '/blog/sk777-withdraw-money-guide' },
    { name: 'App Review', href: '/blog/sk777-app-review-2026' },
    { name: 'Safety', href: '/blog/is-sk777-safe-legal-pakistan' },
    { name: 'Beginner Guide', href: '/blog/how-to-use-sk777-app-pakistan-guide' },
    { name: 'Bonus & Rewards', href: '/blog/sk777-bonus-daily-rewards-guide' },
    { name: 'Play on PC', href: '/blog/how-to-play-sk777-on-pc' },
    { name: 'Customer Service', href: '/blog/sk777-customer-service-account-help' },
    { name: 'Games List', href: '/blog/sk777-games-list-pakistan' },
    { name: 'Invite Friends', href: '/blog/sk777-invite-friends-referral-guide' },
    { name: 'Minimum Deposit', href: '/blog/sk777-minimum-deposit-pakistan' },
    { name: 'Withdrawal PIN', href: '/blog/sk777-withdrawal-pin-setup' },
    { name: 'App Not Working', href: '/blog/sk777-app-not-working-fix' },
  ];

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-secondary text-white rounded-md"
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
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
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