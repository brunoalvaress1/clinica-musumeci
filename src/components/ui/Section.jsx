import { cn } from "../../lib/cn.js";
import Aurora from "./Aurora.jsx";

const TONES = {
  white: "bg-white",
  surface: "bg-surface",
  ink: "bg-brand-700 text-[#d7e7e7] [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_.eyebrow]:text-accent",
};

export default function Section({
  children,
  tone = "white",
  tight = false,
  decorated = false,
  className,
  id,
  ...rest
}) {
  return (
    <section
      id={id}
      className={cn(
        TONES[tone],
        decorated && "relative isolate overflow-hidden",
        tight ? "py-12 sm:py-16 lg:py-20" : "py-16 sm:py-24 lg:py-28",
        className
      )}
      {...rest}
    >
      {decorated && <Aurora className="-z-10 opacity-80" />}
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  center = false,
  className,
}) {
  return (
    <div
      className={cn("max-w-[60ch]", center && "mx-auto text-center", className)}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && (
        <h2 className="text-[clamp(1.7rem,2.6vw+1rem,2.6rem)] text-balance">
          {title}
        </h2>
      )}
      {children && (
        <div className="mt-3 text-ink-muted [&_p]:mb-0">{children}</div>
      )}
    </div>
  );
}
