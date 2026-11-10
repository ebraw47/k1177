import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';
import WalletLinks, { EasyPaisaLink, JazzCashLink } from '@/components/WalletLinks';

export const metadata: Metadata = {
  title: 'How to Deposit Money in K1177? | Quick & Safe Payment Guide 2026',
  description: 'Learn how to deposit money in K1177 using JazzCash and EasyPaisa. Follow our step-by-step guide for quick, safe, and secure deposits.',
  keywords: 'deposit money K1177, K1177 payment methods, jazzcash deposit, easypaisa deposit, add funds K1177, K1177 recharge',
  openGraph: {
    title: 'How to Deposit Money in K1177? | Quick & Safe Payment Guide',
    description: 'Step-by-step guide to deposit money in K1177 using JazzCash and EasyPaisa. Quick, safe, and secure payment methods.',
    url: 'https://k1177apk.com.pk/deposit-money-in-k1177',
    siteName: 'K1177',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in K1177?',
    description: 'Learn how to deposit money in K1177 using JazzCash and EasyPaisa with our complete guide.',
  },
  alternates: {
    canonical: 'https://k1177apk.com.pk/deposit-money-in-k1177',
  },
};

export default function DepositMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section — text left, deposit screenshot right */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-accent/15">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-ink mb-6">
                How to Deposit Money in <span className="text-[#f5c518]">K1177</span>?
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8">
                Quick, Safe & Easy Payment Methods with <WalletLinks />
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="DEPOSIT NOW" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="k1177-blog-shot w-44 md:w-52 !max-w-none">
                <Image
                  src="/k1177-game-recharge.webp"
                  alt="K1177 - Deposit with JazzCash and EasyPaisa"
                  width={720}
                  height={1280}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-muted leading-relaxed mb-6">
                To play real-money tables in <Link href="/" className="text-accent hover:underline font-semibold">K1177</Link>, you add funds via <JazzCashLink /> or <EasyPaisaLink />. If you haven’t yet, <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download the app</a> first. This page explains how to deposit step by step so your balance is ready in minutes.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                The same channels (<WalletLinks />) are used for withdrawals. After you’ve earned through gameplay, you can <Link href="/withdraw-money-from-k1177" className="text-accent hover:underline font-semibold">withdraw from K1177</Link> using our dedicated withdrawal guide.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Minimum deposit amounts are shown live on the Shop / Recharge screen — they can change with promotions. Start with the smallest tier if you are new; see our{' '}
                <Link href="/blog/k1177-minimum-deposit-pakistan" className="text-accent hover:underline font-semibold">minimum deposit guide</Link>{' '}
                and detailed{' '}
                <Link href="/blog/k1177-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline font-semibold">JazzCash &amp; EasyPaisa walkthrough</Link>.
                Only adults (18+) should add real money. Play within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-12 md:py-16 bg-secondary border-y border-accent/15">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">Deposit troubleshooting (Pakistan)</h2>
          <div className="space-y-6 text-muted">
            <div className="bg-primary rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-2">Payment approved but balance not updated</h3>
              <p className="leading-relaxed">
                Wait 5–15 minutes on a stable connection. Do not submit a second deposit for the same amount until the first clears — duplicate requests confuse support. Screenshot your JazzCash/EasyPaisa receipt and contact in-app support or{' '}
                <Link href="/contact-us" className="text-accent hover:underline">support@k1177apk.com.pk</Link> for site-related help.
              </p>
            </div>
            <div className="bg-primary rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-2">Request never arrives in wallet app</h3>
              <p className="leading-relaxed">
                Confirm the wallet number matches your own account, you have sufficient balance, and mobile data is on. Log out and back into K1177, then retry from Shop. Wrong wallet digits are the most common fixable error.
              </p>
            </div>
            <div className="bg-primary rounded-xl p-6">
              <h3 className="text-xl font-bold text-accent mb-2">Deposit button greyed out</h3>
              <p className="leading-relaxed">
                Update to the latest APK from <Link href="/download-k1177" className="text-accent hover:underline">download K1177</Link>, clear app cache, or try again after server maintenance windows listed in News.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Deposit Money */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
              Steps to Deposit Money in K1177
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Open K1177 App</h3>
                    <p className="text-muted leading-relaxed">
                      First, open the K1177 app on your Android device. Your internet connection must be stable to open the app. Log in to your account by entering your registered phone number and password. Enter your login details correctly to log in successfully.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Click on Shop Option</h3>
                    <p className="text-muted leading-relaxed">
                      After logging in, your dashboard will appear, where you can see many options and different games. Click on the shop button to start the depositing process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Select Payment Method</h3>
                    <p className="text-muted leading-relaxed">
                      After clicking the shop button, a deposit page opens, showing payment methods and options. Choose a payment method, like JazzCash or Easy Paisa, that you can use easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Choose Amount</h3>
                    <p className="text-muted leading-relaxed">
                      After selecting the payment method, choose the amount you can afford to lose. There are many options like Rs 200, Rs 500, Rs 1000, or Rs 2000.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Click on Add Chips</h3>
                    <p className="text-muted leading-relaxed">
                      After entering the deposit details, click the Add Chips option. You will be redirected to the payment page, where you need to enter the account number that you want to use for payment. Click on the submit button to confirm the deposit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Approve Payment</h3>
                    <p className="text-muted leading-relaxed">
                      After clicking on the submit button, you will receive a payment request on your selected account. Log in to your account and approve the payment request that you have received from K1177.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-ink rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-3">Wait for Complete Payment</h3>
                    <p className="text-muted leading-relaxed">
                      After approving the payment request, a deposit will be added to your K1177 account instantly. Sometimes it can take longer due to payment delays or network issues. When you receive payment, you can use it to play games without any hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Secure Deposits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
              Tips for Secure Deposits
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-muted">Use your own mobile wallet to add funds.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-muted">Use a strong internet connection during the deposit process.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-muted">Do not share your mobile wallet pin or login password with anyone.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-muted">Add a small amount if you are a beginner in K1177.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-muted">Play games wisely and manage your funds.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Conclusion</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Adding funds to K1177 is a fast and easy method if you follow all the steps correctly. You are required to open the app, tap the shop button, enter the correct payment details, and approve payment requests to deposit money into your K1177 account.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                You must use secure and real payment methods to deposit money safely and enjoy games instantly. New users can easily add funds to their accounts and play games by following the proper steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How can we add money to our K1177 account?
                </h3>
                <p className="text-muted leading-relaxed">
                  You can add money to your K1177 account by opening the app, selecting the shop option, choosing a payment method and amount, confirming the deposit, and approving the payment request.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Is adding funds to K1177 secure?
                </h3>
                <p className="text-muted leading-relaxed">
                  Yes, it is safe to add funds to K1177, as it uses a modern security system to protect your personal data and funds.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Which payment methods are available on K1177?
                </h3>
                <p className="text-muted leading-relaxed">
                  K1177 provides two payment methods, including Easypaisa and Jazzcash, that are secure and authentic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary border-b border-accent/15">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              Ready to Start Playing?
            </h2>
            <p className="text-lg text-muted mb-8">
              Download K1177 now and deposit money to start earning real cash!
            </p>
            <DownloadButton label="DEPOSIT NOW" />
          </div>
        </div>
      </section>

      {/* Structured Data: HowTo + WebPage for GEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://k1177apk.com.pk/deposit-money-in-k1177#webpage",
                "url": "https://k1177apk.com.pk/deposit-money-in-k1177",
                "name": "How to Deposit Money in K1177 | JazzCash & EasyPaisa Guide 2026",
                "description": "Step-by-step guide to deposit money in K1177 using JazzCash and EasyPaisa in Pakistan.",
                "inLanguage": "en-US",
                "about": { "@type": "Thing", "name": "K1177", "url": "https://k1177apk.com.pk" },
                "mainEntity": { "@id": "https://k1177apk.com.pk/deposit-money-in-k1177#howto" },
                "primaryImageOfPage": { "@type": "ImageObject", "url": "https://k1177apk.com.pk/k1177-game-logo-site.webp" }
              },
              {
                "@id": "https://k1177apk.com.pk/deposit-money-in-k1177#howto",
                "@type": "HowTo",
                "name": "How to Deposit Money in K1177",
                "description": "Step-by-step guide to deposit money in K1177 using JazzCash and EasyPaisa in Pakistan.",
                "totalTime": "PT3M",
                "url": "https://k1177apk.com.pk/deposit-money-in-k1177",
                "step": [
                  { "@type": "HowToStep", "position": 1, "name": "Open K1177 App", "text": "Open the K1177 app on your Android device and log in with your registered phone number and password." },
                  { "@type": "HowToStep", "position": 2, "name": "Click on Shop Option", "text": "On the dashboard, tap the Shop button to start the deposit process." },
                  { "@type": "HowToStep", "position": 3, "name": "Select Payment Method", "text": "Choose JazzCash or EasyPaisa as your payment method." },
                  { "@type": "HowToStep", "position": 4, "name": "Choose Amount", "text": "Select the amount to deposit (e.g. Rs 200, Rs 500, Rs 1000, or Rs 2000)." },
                  { "@type": "HowToStep", "position": 5, "name": "Click on Add Chips", "text": "Tap Add Chips, enter the account number for payment, and submit." },
                  { "@type": "HowToStep", "position": 6, "name": "Approve Payment", "text": "Approve the payment request in your JazzCash or EasyPaisa app." },
                  { "@type": "HowToStep", "position": 7, "name": "Wait for Complete Payment", "text": "The deposit is usually added to your K1177 account within minutes." }
                ]
              }
            ]
          }).replace(/</g, "\\u003c")
        }}
      />
    </div>
  );
}

