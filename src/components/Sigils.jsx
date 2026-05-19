import { useId } from "react";

export function NavSigil({ className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16" fill="none" stroke="#D4A84B" strokeWidth="0.8" />
      <polygon
        points="18,4 29,11 29,25 18,32 7,25 7,11"
        fill="none"
        stroke="#D4A84B"
        strokeWidth="0.5"
      />
      <circle cx="18" cy="18" r="2.5" fill="#D4A84B" />
    </svg>
  );
}

export function HeroSigil({ className }) {
  return (
    <svg
      className={className}
      width="110"
      height="110"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" fill="none" stroke="#D4A84B" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.7" />
      <circle cx="60" cy="38" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="60" cy="82" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="41" cy="49" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="79" cy="49" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="41" cy="71" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="79" cy="71" r="22" fill="none" stroke="#D4A84B" strokeWidth="0.45" />
      <circle cx="60" cy="60" r="3.5" fill="#E8C470" />
    </svg>
  );
}

export function ContactSigil({ className }) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="28" fill="none" stroke="#D4A84B" strokeWidth="0.5" />
      <circle cx="30" cy="30" r="14" fill="none" stroke="#D4A84B" strokeWidth="0.5" />
      <polygon points="30,8 50,42 10,42" fill="none" stroke="#D4A84B" strokeWidth="0.5" />
      <polygon points="30,52 50,18 10,18" fill="none" stroke="#D4A84B" strokeWidth="0.5" />
      <circle cx="30" cy="30" r="2" fill="#E8C470" />
    </svg>
  );
}

export function FooterSigil({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="10,2 17,6 17,14 10,18 3,14 3,6"
        fill="none"
        stroke="#D4A84B"
        strokeWidth="0.7"
      />
      <circle cx="10" cy="10" r="2" fill="#D4A84B" />
    </svg>
  );
}

export function MosaicDivider({ className }) {
  const patternId = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      width="200"
      height="20"
      viewBox="0 0 200 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="#D4A84B" strokeWidth="0.4" />
          <rect x="10.5" y="10.5" width="9" height="9" fill="none" stroke="#D4A84B" strokeWidth="0.4" />
          <rect
            x="0.5"
            y="10.5"
            width="9"
            height="9"
            fill="rgba(212,168,75,0.06)"
            stroke="#D4A84B"
            strokeWidth="0.25"
          />
          <rect
            x="10.5"
            y="0.5"
            width="9"
            height="9"
            fill="rgba(212,168,75,0.06)"
            stroke="#D4A84B"
            strokeWidth="0.25"
          />
        </pattern>
      </defs>
      <rect width="200" height="20" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function SacredBg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 1200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hex" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
          <polygon
            points="40,4 76,23 76,69 40,88 4,69 4,23"
            fill="none"
            stroke="#D4A84B"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
      <circle cx="450" cy="300" r="240" fill="none" stroke="#D4A84B" strokeWidth="0.5" />
      <circle cx="450" cy="300" r="180" fill="none" stroke="#D4A84B" strokeWidth="0.3" />
      <circle cx="450" cy="300" r="120" fill="none" stroke="#D4A84B" strokeWidth="0.3" />
      <line x1="450" y1="60" x2="450" y2="540" stroke="#D4A84B" strokeWidth="0.3" />
      <line x1="210" y1="300" x2="690" y2="300" stroke="#D4A84B" strokeWidth="0.3" />
      <line x1="242" y1="92" x2="658" y2="508" stroke="#D4A84B" strokeWidth="0.3" />
      <line x1="658" y1="92" x2="242" y2="508" stroke="#D4A84B" strokeWidth="0.3" />
    </svg>
  );
}
