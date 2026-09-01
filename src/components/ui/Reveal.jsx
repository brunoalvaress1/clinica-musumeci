import { motion } from "framer-motion";

/**
 * Anima a entrada do conteúdo quando ele aparece na viewport.
 * Uso: <Reveal delay={0.1}><h2>...</h2></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as = "div",
  once = true,
  amount = 0.2,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
