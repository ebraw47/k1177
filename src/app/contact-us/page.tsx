import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SUPPORT_EMAIL, BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us - K1177 | Get Help & Support',
  description: `Contact ${SUPPORT_EMAIL} for k1177apk.com.pk — K1177 download guides, blog corrections, privacy questions, and site support (not in-app wallet disputes).`,
  keywords: 'contact K1177, K1177 support, K1177 email, customer support, help K1177',
  openGraph: {
    title: 'Contact Us - K1177',
    description: 'Get in touch with K1177 support team for any queries or assistance.',
    url: 'https://k1177apk.com.pk/contact-us',
    siteName: 'K1177',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - K1177',
    description: 'Get in touch with K1177 support team for any queries or assistance.',
  },
  alternates: {
    canonical: 'https://k1177apk.com.pk/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ink">Contact Us</h1>
            <p className="text-lg text-muted/80">We're here to help you!</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted leading-relaxed mb-6">
                This is the contact page for <strong className="text-ink">k1177apk.com.pk</strong> — we
                answer questions about our {BRAND_NAME} guides, download pages, and blog articles. We do
                not operate the game servers; for stuck deposits, failed withdrawals, or account locks,
                use in-app Customer Service first (see{' '}
                <Link href="/blog/k1177-customer-service-account-help" className="text-accent hover:underline">
                  support guide
                </Link>
                ).
              </p>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Email us about broken links, outdated APK version notes, privacy requests, or{' '}
                <Link href="/about-us" className="text-accent hover:underline font-semibold">about us</Link>{' '}
                / <Link href="/privacy" className="text-accent hover:underline font-semibold">privacy policy</Link>{' '}
                / <Link href="/disclaimer" className="text-accent hover:underline font-semibold">disclaimer</Link>{' '}
                questions. Typical reply window: 2–5 business days.
              </p>

              {/* Email Contact Section */}
              <div className="bg-secondary rounded-xl p-8 border-2 border-orange-200">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-ink">Email Us</h2>
                <p className="text-center mb-4 text-muted/80">Send us your questions or concerns via email</p>
                <div className="text-center">
                  <a 
                    href="mailto:support@k1177apk.com.pk" 
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    support@k1177apk.com.pk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">App Information</h3>
              <p className="text-muted/80 mb-4">Need help with the K1177 app?</p>
              <Link href="/" className="text-accent hover:text-accent font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">Privacy Policy</h3>
              <p className="text-muted/80 mb-4">Read our privacy policy</p>
              <Link href="/privacy" className="text-accent hover:text-accent font-semibold">
                Read Policy →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">About Us</h3>
              <p className="text-muted/80 mb-4">Learn more about our platform</p>
              <Link href="/about-us" className="text-accent hover:text-accent font-semibold">
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "K1177",
              "url": "https://k1177apk.com.pk",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@k1177apk.com.pk",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Urdu"]
              }
            }
          })
        }}
      />
    </div>
  );
} 