// Small flat icons in brand colours. name: "royalty" | "training" | "equipment" | "warranty"
const STROKE = "#2b0f10";

const ICONS = {
  royalty: (
    <>
      <circle cx="32" cy="32" r="24" fill="#ffd23f" stroke={STROKE} strokeWidth="2" />
      <path d="M22 42 42 22" stroke="#e8572a" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill={STROKE} />
      <circle cx="40" cy="40" r="4" fill={STROKE} />
    </>
  ),
  training: (
    <>
      <path d="M32 12 6 24l26 12 26-12z" fill="#e8572a" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 31v12q16 10 32 0V31L32 38z" fill="#ffd23f" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M58 24v18" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  equipment: (
    <>
      <path d="M10 26h44l-5 28H15z" fill="#ffd23f" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 26v28M32 26v28M44 26v28M12 38h40" stroke={STROKE} strokeWidth="1.5" />
      <path d="M54 26 62 14" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
      <path d="M26 12q6-6 12 0" fill="none" stroke="#e8572a" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  warranty: (
    <>
      <path d="M32 6 10 14v16c0 14 9 24 22 28 13-4 22-14 22-28V14z" fill="#ffd23f" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      <path d="m21 32 8 8 15-16" fill="none" stroke="#e8572a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function BenefitIcon({ name, size = 56 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" focusable="false">
      {ICONS[name] ?? null}
    </svg>
  );
}
