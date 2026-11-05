import { EASYPAISA_URL, JAZZCASH_URL } from '@/lib/constants';

type WalletLinksProps = {
  className?: string;
  /** Show "and" between names when inline */
  inline?: boolean;
  /** Render as text/spans only — use inside other <a>/Link to avoid nested anchors */
  plain?: boolean;
};

const linkClass = 'text-accent hover:underline font-semibold';
const plainClass = 'text-accent font-semibold';

export function JazzCashLink({
  className = linkClass,
  plain = false,
}: {
  className?: string;
  plain?: boolean;
}) {
  if (plain) {
    return <span className={className || plainClass}>JazzCash</span>;
  }
  return (
    <a href={JAZZCASH_URL} target="_blank" rel="noopener noreferrer" className={className}>
      JazzCash
    </a>
  );
}

export function EasyPaisaLink({
  className = linkClass,
  plain = false,
}: {
  className?: string;
  plain?: boolean;
}) {
  if (plain) {
    return <span className={className || plainClass}>EasyPaisa</span>;
  }
  return (
    <a href={EASYPAISA_URL} target="_blank" rel="noopener noreferrer" className={className}>
      EasyPaisa
    </a>
  );
}

/** “JazzCash & EasyPaisa” with official site links (or plain text when nested) */
export default function WalletLinks({
  className = linkClass,
  inline = true,
  plain = false,
}: WalletLinksProps) {
  const jazz = <JazzCashLink className={className} plain={plain} />;
  const easy = <EasyPaisaLink className={className} plain={plain} />;

  if (!inline) {
    return (
      <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
        {jazz}
        {easy}
      </span>
    );
  }
  return (
    <>
      {jazz}
      {' & '}
      {easy}
    </>
  );
}
