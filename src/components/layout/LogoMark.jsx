export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="ThinkForward logo">
      <defs>
        <linearGradient id="tf-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="11"
        fill="#0B1220"
        stroke="url(#tf-logo-gradient)"
        strokeWidth="1.5"
      />
      <path
        d="M12 26.5 L20 13 L28 26.5"
        fill="none"
        stroke="url(#tf-logo-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13 V8"
        stroke="#2DD4BF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <circle cx="20" cy="13" r="2.6" fill="#2DD4BF" />
      <circle cx="12" cy="26.5" r="2.2" fill="#38BDF8" />
      <circle cx="28" cy="26.5" r="2.2" fill="#6366F1" />
    </svg>
  );
}