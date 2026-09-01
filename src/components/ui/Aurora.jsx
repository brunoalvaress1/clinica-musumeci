import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn.js";

/**
 * Camada decorativa animada na paleta da marca (dois "borrões" que flutuam).
 * Reutilizada em várias seções para dar continuidade visual ao rolar a página.
 */
export default function Aurora({ className, intensity = 1 }) {
  const reduce = useReducedMotion();

  const common = "absolute rounded-full blur-3xl will-change-transform";
  const loopA = reduce
    ? {}
    : { x: [0, 60 * intensity, 0], y: [0, 40 * intensity, 0], scale: [1, 1.12, 1] };
  const loopB = reduce
    ? {}
    : { x: [0, -50 * intensity, 0], y: [0, -32 * intensity, 0], scale: [1, 1.1, 1] };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className={cn(common, "-left-32 top-[-12%] h-[38rem] w-[38rem]")}
        style={{
          background:
            "radial-gradient(circle, rgba(224,165,61,.22), transparent 62%)",
        }}
        animate={loopA}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(common, "-right-40 bottom-[-24%] h-[44rem] w-[44rem]")}
        style={{
          background:
            "radial-gradient(circle, rgba(13,123,132,.30), transparent 62%)",
        }}
        animate={loopB}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
