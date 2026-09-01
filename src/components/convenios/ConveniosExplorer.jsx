import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import { cn } from "../../lib/cn.js";
import { CONVENIOS } from "../../data/content.js";
import { waLink } from "../../lib/whatsapp.js";

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
const isParticular = (nome) => norm(nome) === "particular";

export default function ConveniosExplorer() {
  const [sel, setSel] = useState(null);
  const selObj = CONVENIOS.find((c) => c.nome === sel) || null;

  return (
    <div>
      <p className="text-center text-[0.85rem] text-ink-muted">
        Toque no seu plano para ver a cobertura.
      </p>

      <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
        {CONVENIOS.map((c, i) => (
          <PlanCard
            key={c.nome}
            plan={c}
            index={i}
            selected={sel === c.nome}
            onSelect={() => setSel(sel === c.nome ? null : c.nome)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selObj && (
          <motion.div
            key={selObj.nome}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-6 max-w-2xl rounded-2xl bg-white p-5 text-left ring-1 ring-line sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-28 w-52 flex-none place-items-center rounded-xl bg-surface p-4 ring-1 ring-line">
                <PlanMark plan={selObj} big />
              </div>
              <div>
                <p className="text-[1.2rem] font-semibold text-ink">
                  {selObj.nome}
                </p>
                <p className="mt-1 text-[0.92rem] text-ink-muted">
                  {selObj.nota}
                </p>
              </div>
            </div>

            <a
              href={waLink(
                isParticular(selObj.nome)
                  ? "Olá, Clínica Musumeci! Quero atendimento particular. Podem me passar valores e horários?"
                  : `Olá, Clínica Musumeci! Meu convênio é ${selObj.nome}. Quero confirmar a cobertura e agendar.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-wa px-4 py-2.5 text-[0.86rem] font-semibold text-white transition-colors hover:bg-wa-600"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {isParticular(selObj.nome)
                ? "Falar sobre particular no WhatsApp"
                : `Confirmar ${selObj.nome} no WhatsApp`}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PlanCard({ plan, index, selected, onSelect }) {
  const part = isParticular(plan.nome);
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
      whileHover={{ y: -4 }}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={plan.nome}
      className={cn(
        "group relative flex h-44 flex-col items-center justify-center gap-2 rounded-2xl p-6 transition-shadow",
        selected
          ? "bg-white ring-2 ring-brand"
          : part
          ? "bg-brand-50 ring-1 ring-brand/15 hover:ring-brand/30"
          : "bg-white ring-1 ring-line hover:shadow-md2"
      )}
    >
      <PlanMark plan={plan} />
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -right-2.5 -top-2.5 grid h-7 w-7 place-items-center rounded-full bg-brand text-white shadow-md2"
        >
          <Icon name="check" className="h-4 w-4" />
        </motion.span>
      )}
    </motion.button>
  );
}

/** Logo do convênio; se o arquivo não existir, cai para o nome num selo. */
function PlanMark({ plan, big = false }) {
  const [broken, setBroken] = useState(false);
  const part = isParticular(plan.nome);

  if (part) {
    return (
      <span className="flex items-center gap-2 text-[1.3rem] font-semibold text-brand-700">
        <Icon name="card" className="h-6 w-6" />
        Particular
      </span>
    );
  }

  if (plan.logo && !broken) {
    return (
      <img
        src={plan.logo}
        alt={plan.nome}
        loading="lazy"
        onError={() => setBroken(true)}
        className={cn(
          "w-auto object-contain",
          big ? "max-h-20 max-w-full" : "max-h-28 max-w-full"
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        "text-center font-semibold leading-tight text-ink-soft",
        big ? "text-[1.15rem]" : "text-[1.15rem]"
      )}
    >
      {plan.nome}
    </span>
  );
}
