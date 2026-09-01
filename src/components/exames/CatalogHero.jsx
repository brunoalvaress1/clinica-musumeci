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
      className="relative isolate flex items-center overflow-hidden bg-brand-700 py-16 text-white sm:py-20"
    >
      {/* fundo: tom borrado da categoria em destaque (sem corte perceptível) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.img
            key={active.id}
            src={SITE.media[active.img]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 0.28 : 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-700/90 to-brand-700/75" />
      </div>

      <div className="container-x relative grid gap-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center lg:gap-16">
        <div>
          <h1 className="font-sans text-[clamp(1.9rem,3.2vw+1rem,3rem)] font-semibold leading-[1.12] tracking-tight text-white">
            Consultas e exames de otorrinolaringologia
          </h1>
          <p className="mt-4 max-w-[52ch] text-[1.02rem] leading-relaxed text-white/80">
            Selecione uma área para ver os atendimentos disponíveis. Você monta o
            pedido e envia pelo WhatsApp — o preparo de cada exame vai junto na
            mensagem.
          </p>
        </div>

        {/* áreas */}
        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
          {CATEGORIES.map((c, i) => {
            const on = active.id === c.id;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 + i * 0.05 }}
                whileHover={reduce ? undefined : { y: -3 }}
                className="min-w-[184px] snap-start lg:min-w-0"
              >
                <button
                  type="button"
                  onClick={() => pick(c)}
                  onMouseEnter={() => setActive(c)}
                  onFocus={() => setActive(c)}
                  aria-label={`Ver ${c.nome}`}
                  className={cn(
                    "flex h-full w-full flex-col rounded-xl p-4 text-left ring-1 backdrop-blur-md transition-colors",
                    on
                      ? "bg-white/15 ring-white/30"
                      : "bg-white/[0.06] ring-white/10 hover:bg-white/10"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                      on ? "bg-accent text-[#3a2a06]" : "bg-white/10 text-white"
                    )}
                  >
                    <Icon name={c.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="mt-5 block text-[0.95rem] font-medium leading-tight text-white">
                    {c.nome}
                  </span>
                  <span className="mt-1 text-[0.76rem] text-white/55">
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
