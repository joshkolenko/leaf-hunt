export function LeafIcon({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4C14 10 6 26 10 42c2 8 10 16 22 18 2-16 2-34-0-56Z"
        fill={color}
        opacity={0.9}
      />
      <path
        d="M32 4C50 10 58 26 54 42c-2 8-10 16-22 18"
        fill={color}
      />
      <path
        d="M32 10v48"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
