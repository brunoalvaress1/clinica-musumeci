import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import { cn } from "../../lib/cn.js";
import { CATEGORIES, EXAMS } from "../../data/exams.js";
import { SITE } from "../../data/site.js";

const countFor = (id) => EXAMS.filter((e) => e.cat === id).length;

export default function CatalogHero() {
  const reduce = useReducedMotion();
  const [, setParams] = useSearchParams();
  const [active, setActive] = useState(CATEGORIES[0]);
  const ref = useRef(null);

  const scrollToCat = (id) => {
    const el = document.getElementById(`cat-${id}`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const pick = (c) => {
    setActive(c);
    setParams({ cat: c.id }, { replace: true });
    setTimeout(() => scrollToCat(c.id), 90);
    setTimeout(() => scrollToCat(c.id), 460);
  };

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-700 py-8 text-white sm:py-14 lg:py-20"
    >
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={active.id}
            src={SITE.media[active.img]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 0.2 : 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 hidden h-full w-full object-cover blur-2xl sm:block"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-brand-700 sm:bg-gradient-to-br sm:from-brand-700 sm:via-brand-700/92 sm:to-brand-700/80" />
      </div>

      <div className="container-x relative grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16">
        <div className="min-w-0">
          <h1 className="max-w-[16ch] font-sans text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-white sm:max-w-none sm:text-[clamp(1.9rem,3.2vw+1rem,3rem)] sm:leading-[1.12]">
            Exames de otorrinolaringologia
          </h1>
          <p className="mt-3 max-w-[40ch] text-[0.95rem] leading-relaxed text-white/80 sm:mt-4 sm:text-[1.02rem]">
            Selecione uma área para ver os exames. O pedido segue pelo
            WhatsApp, com o preparo de cada um.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
          {CATEGORIES.map((c, i) => {
            const on = active.id === c.id;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                className="min-w-0"
              >
                <button
                  type="button"
                  onClick={() => pick(c)}
                  onMouseEnter={() => setActive(c)}
                  onFocus={() => setActive(c)}
                  aria-label={`Ver ${c.nome}`}
                  className={cn(
                    "flex h-full w-full min-w-0 flex-col rounded-xl p-3 text-left ring-1 transition-colors sm:p-4",
                    on
                      ? "bg-white/15 ring-white/30"
                      : "bg-white/[0.06] ring-white/10 hover:bg-white/10"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-lg transition-colors",
                      on ? "bg-accent text-[#3a2a06]" : "bg-white/10 text-white"
                    )}
                  >
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  <span className="mt-3 block text-[0.88rem] font-medium leading-snug text-white sm:text-[0.95rem]">
                    {c.nome}
                  </span>
                  <span className="mt-1 text-[0.72rem] text-white/60">
                    {countFor(c.id)} itens
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
