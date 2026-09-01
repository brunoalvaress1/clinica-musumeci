import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import MediaFrame from "../ui/MediaFrame.jsx";
import { cn } from "../../lib/cn.js";
import { useCart } from "../../context/CartContext.jsx";
import { CATEGORIES, EXAMS, categoryName } from "../../data/exams.js";
import { SITE } from "../../data/site.js";

const COMBINING = /[̀-ͯ]/g;
const norm = (s) => s.toLowerCase().normalize("NFD").replace(COMBINING, "");

export default function ExamCatalog() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState(() => {
    const c = params.get("cat");
    return CATEGORIES.some((x) => x.id === c) ? c : CATEGORIES[0].id;
  });

  useEffect(() => {
    const c = params.get("cat");
    if (c && CATEGORIES.some((x) => x.id === c)) setOpenCat(c);
  }, [params]);

  const toggle = (id) => {
    const next = openCat === id ? null : id;
    setOpenCat(next);
    const p = new URLSearchParams(params);
    if (next) p.set("cat", next);
    else p.delete("cat");
    setParams(p, { replace: true });
  };

  const q = norm(query.trim());
  const results = useMemo(() => {
    if (!q) return null;
    return EXAMS.filter((ex) =>
      norm(`${ex.nome} ${ex.desc} ${categoryName(ex.cat)}`).includes(q)
    );
  }, [q]);

  return (
    <div>
      <label className="relative mb-8 block">
        <Icon
          name="search"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Buscar por nome…"
          aria-label="Buscar consulta ou exame"
          className="w-full rounded-full border border-line-strong py-2.5 pl-11 pr-4 text-[0.95rem] outline-none focus:border-brand"
        />
      </label>

      {results ? (
        results.length ? (
          <ul className="divide-y divide-line overflow-hidden rounded-2xl ring-1 ring-line">
            {results.map((ex) => (
              <li key={ex.id} className="px-5">
                <ExamRow exam={ex} withCategory />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-16 text-center text-ink-muted">
            Nada encontrado. Fale com a gente pelo WhatsApp.
          </p>
        )
      ) : (
        <div className="border-y border-line">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              index={i}
              items={EXAMS.filter((e) => e.cat === cat.id)}
              open={openCat === cat.id}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryCard({ cat, items, open, onToggle, index }) {
  return (
    <div
      id={`cat-${cat.id}`}
      className={cn(
        "scroll-mt-28 border-b border-line last:border-b-0",
        open && "bg-surface/60"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-4 py-4 text-left"
      >
        <span className="w-6 flex-none font-display text-[0.9rem] tabular-nums text-ink-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon
          name={cat.icon}
          className={cn(
            "h-4 w-4 flex-none transition-colors",
            open ? "text-brand-600" : "text-ink-muted"
          )}
        />
        <span
          className={cn(
            "flex-1 font-display text-[1.05rem] leading-tight transition-colors sm:text-[1.15rem]",
            open ? "text-brand-700" : "text-ink group-hover:text-brand-700"
          )}
        >
          {cat.nome}
        </span>
        <span className="flex-none tabular-nums text-[0.85rem] text-ink-muted">
          {items.length}
        </span>
        <Icon
          name="chevron-down"
          className={cn(
            "h-4 w-4 flex-none text-ink-muted transition-transform duration-300",
            open && "rotate-180 text-brand-600"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 pb-6 sm:pl-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-8">
              <MediaFrame
                src={SITE.media[cat.img]}
                alt={cat.nome}
                icon={cat.icon}
                ratio="aspect-[3/2]"
                className="lg:self-start"
              />
              <ul className="divide-y divide-line border-t border-line lg:border-t-0">
                {items.map((ex, i) => (
                  <ExamRow key={ex.id} exam={ex} index={i} />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExamRow({ exam, withCategory = false, index = 0 }) {
  const { has, toggle } = useCart();
  const [open, setOpen] = useState(false);
  const [ping, setPing] = useState(false);
  const added = has(exam.id);

  const handleAdd = () => {
    if (!added) setPing(true);
    toggle(exam.id);
  };

  return (
    <motion.li
      className="list-none py-3.5"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.035, 0.4) }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <span className="min-w-0">
            <span className="block truncate font-medium leading-snug text-ink">
              {exam.nome}
            </span>
            {withCategory && (
              <span className="text-[0.78rem] text-ink-muted">
                {categoryName(exam.cat)}
              </span>
            )}
          </span>
          <Icon
            name="chevron-down"
            className={cn(
              "h-3.5 w-3.5 flex-none text-ink-muted transition-transform",
              open && "rotate-180"
            )}
          />
        </button>

        <span className="relative flex-none">
          <motion.button
            type="button"
            onClick={handleAdd}
            whileTap={{ scale: 0.88 }}
            aria-pressed={added}
            aria-label={
              added
                ? `Remover ${exam.nome} do pedido`
                : `Adicionar ${exam.nome} ao pedido`
            }
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors",
              added
                ? "border-brand bg-brand text-white"
                : "border-line-strong text-ink-soft hover:border-brand hover:text-brand-700"
            )}
          >
            <span className="relative grid h-3.5 w-3.5 place-items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={added ? "on" : "off"}
                  initial={{ scale: 0, rotate: -35, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className="absolute"
                >
                  <Icon
                    name={added ? "check" : "plus"}
                    className="h-3.5 w-3.5"
                  />
                </motion.span>
              </AnimatePresence>
            </span>
            {added ? "No pedido" : "Adicionar"}
          </motion.button>

          <AnimatePresence>
            {ping && (
              <motion.span
                initial={{ opacity: 0, y: 2, scale: 0.6 }}
                animate={{ opacity: [0, 1, 0], y: -24, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onAnimationComplete={() => setPing(false)}
                className="pointer-events-none absolute -top-1 right-3 text-[0.8rem] font-bold text-brand"
              >
                +1
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-2 text-[0.86rem] text-ink-muted">{exam.desc}</p>
            <p className="mt-1 text-[0.86rem]">
              <span className="font-semibold text-brand-700">Preparo:</span>{" "}
              <span className="text-ink-muted">{exam.preparo}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
