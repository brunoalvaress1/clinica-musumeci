import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn.js";

/** Onda sonora animada — remete a audiometria / voz. Decorativa. */
export default function SoundWave({ className, color = "currentColor", bars = 34 }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn("flex items-end gap-[3px]", className)}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const base = 20 + Math.abs(Math.sin(i * 0.7)) * 60;
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: color, height: `${base}%` }}
            animate={
              reduce
                ? undefined
                : { scaleY: [1, 0.35 + Math.abs(Math.cos(i)) * 0.9, 1] }
            }
            transition={{
              duration: 1.6 + (i % 5) * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.08,
            }}
          />
        );
      })}
    </div>
  );
}
