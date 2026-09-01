import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section, { SectionHead } from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import { FAQ } from "../../data/content.js";
import { cn } from "../../lib/cn.js";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="surface">
      <Reveal>
        <SectionHead
          center
          eyebrow="Dúvidas frequentes"
          title="O que as pessoas costumam perguntar"
        />
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-[820px] border-t border-line">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[1.08rem] text-ink"
              >
                {item.q}
                <span
                  className={cn(
                    "relative h-3.5 w-3.5 flex-none transition-transform duration-300",
                    isOpen && "rotate-[135deg]"
                  )}
                  aria-hidden
                >
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 bg-brand" />
                  <span className="absolute left-1/2 top-1/2 h-3.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-brand" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-[0.97rem] text-ink-soft">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
