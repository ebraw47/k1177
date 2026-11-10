import { FACEBOOK_URL } from '@/lib/constants';

type FacebookLogoLinkProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-9 h-9',
};

export default function FacebookLogoLink({
  className = '',
  size = 'md',
}: FacebookLogoLinkProps) {
  if (!FACEBOOK_URL || FACEBOOK_URL === 'https://www.facebook.com/') {
    return null;
  }

  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="K1177 on Facebook"
      className={`inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-85 ${className}`}
      title="Follow K1177 on Facebook"
    >
      <svg
        className={sizeMap[size]}
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="#1877F2"
      >
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.928-1.956 1.879v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    </a>
  );
}
