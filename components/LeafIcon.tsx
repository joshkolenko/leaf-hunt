import type { ReactNode } from "react";
import type { LeafShape } from "@/lib/leaves";

const LEAF_PATHS: Record<string, string> = {
  maple:
    "M50 6 L57 22 L70 14 L67 34 L90 32 L78 48 L86 56 L64 62 L57 78 L50 72 L43 78 L36 62 L14 56 L22 48 L10 32 L33 34 L30 14 L43 22 Z",
  redmaple:
    "M50 8 L55 22 L62 18 L60 32 L80 26 L74 40 L88 44 L74 54 L76 64 L60 62 L54 78 L50 74 L46 78 L40 62 L24 64 L26 54 L12 44 L26 40 L20 26 L40 32 L38 18 L45 22 Z",
  silver:
    "M50 4 L54 30 L68 10 L62 36 L92 30 L66 48 L84 66 L58 58 L52 80 L50 76 L48 80 L42 58 L16 66 L34 48 L8 30 L38 36 L32 10 L46 30 Z",
  oakb:
    "M50 6 L56 20 L66 14 L62 30 L78 26 L68 44 L84 46 L68 58 L76 70 L58 70 L54 86 L50 82 L46 86 L42 70 L24 70 L32 58 L16 46 L32 44 L22 26 L38 30 L34 14 L44 20 Z",
  oakr:
    "M50 8 C60 8 62 18 56 24 C66 20 72 28 64 36 C76 34 80 46 66 50 C78 54 74 66 62 64 C68 72 60 82 52 80 L50 88 L48 80 C40 82 32 72 38 64 C26 66 22 54 34 50 C20 46 24 34 36 36 C28 28 34 20 44 24 C38 18 40 8 50 8 Z",
  bur:
    "M50 6 C66 6 78 14 78 26 C78 34 70 38 64 40 C70 44 72 52 64 54 C60 56 58 60 60 66 C62 74 56 84 50 88 C44 84 38 74 40 66 C42 60 40 56 36 54 C28 52 30 44 36 40 C30 38 22 34 22 26 C22 14 34 6 50 6 Z",
  oval:
    "M50 8 C70 22 76 50 66 72 C60 82 54 86 50 88 C46 86 40 82 34 72 C24 50 30 22 50 8 Z",
  lance:
    "M50 4 C62 22 64 52 58 74 C56 82 52 86 50 88 C48 86 44 82 42 74 C36 52 38 22 50 4 Z",
  round:
    "M50 12 C70 14 82 32 80 52 C78 70 64 82 50 84 C36 82 22 70 20 52 C18 32 30 14 50 12 Z",
  birch:
    "M50 12 C64 22 72 42 68 62 C64 76 56 82 50 84 C44 82 36 76 32 62 C28 42 36 22 50 12 Z",
  heart:
    "M50 86 C30 76 12 58 14 38 C16 20 34 12 48 22 C50 14 60 8 70 12 C86 20 90 42 80 60 C72 72 60 80 50 86 Z",
  tri:
    "M50 10 C56 32 70 52 88 70 C76 80 60 82 50 82 C40 82 24 80 12 70 C30 52 44 32 50 10 Z",
  mitten:
    "M50 86 C34 80 24 64 26 48 C27 38 34 32 40 36 C38 22 44 10 56 10 C68 12 74 26 70 42 C68 56 62 72 50 86 Z",
  tulip:
    "M50 28 L58 12 C72 10 86 18 88 32 C88 42 82 48 74 52 C82 62 74 78 54 84 L50 88 L46 84 C26 78 18 62 26 52 C18 48 12 42 12 32 C14 18 28 10 42 12 Z",
  fan:
    "M50 66 C34 60 12 46 10 24 C24 12 40 12 48 18 L50 30 L52 18 C60 12 76 12 90 24 C88 46 66 60 50 66 Z",
  syc:
    "M50 10 L58 26 L74 16 L70 36 L90 40 L74 54 L78 66 L58 64 L50 82 L42 64 L22 66 L26 54 L10 40 L30 36 L26 16 L42 26 Z",
};

function compoundLeaflets(n: number, len: number, w: number): ReactNode[] {
  const children: ReactNode[] = [
    <line key="stem" x1={50} y1={96} x2={50} y2={8} stroke="var(--muted)" strokeWidth={1.6} />,
  ];
  const pairs = Math.floor(n / 2);
  const top = 12;
  const bot = 82;
  const step = (bot - top) / Math.max(pairs, 1);
  for (let i = 0; i < pairs; i++) {
    const y = top + step * (i + 0.8);
    const l = len * (i < 1 && n === 5 ? 1.2 : 1);
    children.push(
      <ellipse
        key={`l${i}`}
        cx={50 - l / 2 - 2}
        cy={y}
        rx={l / 2}
        ry={w}
        transform={`rotate(-25 ${50 - l / 2 - 2} ${y})`}
        fill="currentColor"
      />,
      <ellipse
        key={`r${i}`}
        cx={50 + l / 2 + 2}
        cy={y}
        rx={l / 2}
        ry={w}
        transform={`rotate(25 ${50 + l / 2 + 2} ${y})`}
        fill="currentColor"
      />,
    );
  }
  if (n % 2) {
    children.push(<ellipse key="tip" cx={50} cy={top - 1} rx={w} ry={len / 2} fill="currentColor" />);
  }
  return children;
}

export function LeafIcon({ shape, color }: { shape: LeafShape; color: string }) {
  let inner: ReactNode;
  if (shape === "hick") {
    inner = compoundLeaflets(5, 30, 7);
  } else if (shape === "walnut") {
    inner = compoundLeaflets(17, 18, 3.6);
  } else if (shape === "sumac") {
    inner = compoundLeaflets(13, 20, 4);
  } else {
    const stemTop = shape === "fan" ? 66 : shape === "tri" ? 82 : 84;
    inner = (
      <>
        <path d={LEAF_PATHS[shape]} fill="currentColor" />
        <line x1={50} y1={98} x2={50} y2={stemTop} stroke="var(--muted)" strokeWidth={1.8} strokeLinecap="round" />
        {shape !== "fan" && (
          <line x1={50} y1={stemTop} x2={50} y2={22} stroke="var(--sheet)" strokeOpacity={0.55} strokeWidth={1.2} />
        )}
      </>
    );
  }
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" style={{ color }}>
      {inner}
    </svg>
  );
}
