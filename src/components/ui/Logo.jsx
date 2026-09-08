import { useState } from "react";
import { cn } from "../../lib/cn.js";
import BrandMark from "./BrandMark.jsx";

/**
 * Logo da Clínica Musumeci (arquivo em /public/logos/logoClinica.png).
 * - `light`: inverte a arte (preta) para branco — uso sobre fundo escuro.
 * - Se o arquivo não carregar, cai no símbolo vetorial (BrandMark) + nome.
 */
export default function Logo({ className = "h-10 w-auto", light = false }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <span className="flex items-center gap-3">
        <BrandMark className="h-11 w-11 flex-none" />
        <span
          className={cn(
            "font-display text-[1.12rem] font-semibold",
            light ? "text-white" : "text-ink"
          )}
        >
          Clínica Musumeci
        </span>
      </span>
    );
  }

  return (
    <img
      src="/logos/logoClinica.png"
      alt="Clínica Musumeci — ouvido, nariz, garganta"
      width={579}
      height={294}
      onError={() => setBroken(true)}
      className={cn(className, light && "brightness-0 invert")}
    />
  );
}
