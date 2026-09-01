import { cn } from "../../lib/cn.js";

/**
 * Transição em "onda" entre seções de cores diferentes.
 * `from`  = cor da seção que TERMINA (fundo do divisor).
 * `color` = cor da seção que COMEÇA (preenchimento da onda).
 */
const COLORS = {
  white: "#ffffff",
  surface: "#f3f7f7",
  ink: "#084c53", // brand-700
  brand: "#0d7b84",
};

export default function WaveDivider({
  from = "transparent",
  color = "white",
  flip = false,
  className,
}) {
  return (
    <div
      aria-hidden
      className={cn("relative -my-px leading-[0]", flip && "rotate-180", className)}
      style={{ background: COLORS[from] ?? from }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[54px] w-full sm:h-[84px]"
      >
        <path
          fill={COLORS[color] ?? color}
          d="M0,44 C240,92 480,4 720,32 C960,60 1200,96 1440,48 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
