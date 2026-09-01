import { useEffect } from "react";
import { motion } from "framer-motion";

/** Casca de página: fade-in suave + título do documento. */
export default function Page({ title, children }) {
  useEffect(() => {
    if (title) document.title = `${title} · Clínica Musumeci`;
  }, [title]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Cabeçalho padrão das páginas internas. */
export function PageHero({ crumb, eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 90% 0%, rgba(224,165,61,.14), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(13,123,132,.12), transparent 60%)",
        }}
      />
      <div className="container-x relative py-14 sm:py-20">
        <div className="max-w-[62ch]">
          {crumb && (
            <p className="mb-4 text-[0.82rem] text-ink-muted">{crumb}</p>
          )}
          {eyebrow && (
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="text-[clamp(2rem,4vw+1rem,3.2rem)] text-balance"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {title}
          </motion.h1>
          {children && (
            <motion.div
              className="mt-4 text-ink-soft [&_p]:mb-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
