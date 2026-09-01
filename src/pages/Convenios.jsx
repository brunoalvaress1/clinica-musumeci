import { motion, useReducedMotion } from "framer-motion";
import Page from "../components/ui/Page.jsx";
import Section, { SectionHead } from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import ConveniosExplorer from "../components/convenios/ConveniosExplorer.jsx";
import { waLink } from "../lib/whatsapp.js";

const DOCS = [
  { titulo: "Documento com foto", texto: "RG ou CNH. Para menores, do responsável." },
  { titulo: "Pedido médico", texto: "Original ou foto legível, se já tiver." },
  { titulo: "Carteirinha do convênio", texto: "Física ou no aplicativo do plano." },
];

function RadarBg() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-8 -translate-x-1/2">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/15"
            style={{ width: 220 + i * 240, height: 220 + i * 240 }}
            animate={reduce ? undefined : { scale: [1, 1.05, 1], opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 0%, rgba(224,165,61,.10), transparent 70%)",
        }}
      />
    </div>
  );
}

export default function Convenios() {
  return (
    <Page title="Convênios">
      {/* ---------- HERO: verificador de cobertura ---------- */}
      <section className="relative isolate overflow-hidden border-b border-line bg-surface">
        <RadarBg />
        <div className="container-x relative py-16 text-center sm:py-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink-muted"
          >
            Convênios &amp; particular
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mx-auto max-w-[16ch] font-sans text-[clamp(1.9rem,3.2vw+1rem,3rem)] font-semibold leading-[1.12] tracking-tight text-ink text-balance"
          >
            Seu convênio é atendido?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-3 max-w-[46ch] text-ink-muted"
          >
            Atendemos <strong className="text-ink">Unimed</strong> e{" "}
            <strong className="text-ink">Santa Casa</strong>, além do atendimento
            particular.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9"
          >
            <ConveniosExplorer />
          </motion.div>
        </div>
      </section>

      {/* ---------- O que levar: passos numerados ---------- */}
      <Section tight>
        <Reveal>
          <SectionHead eyebrow="No dia do atendimento" title="O que levar" />
        </Reveal>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-3">
          {DOCS.map((d, i) => (
            <Reveal key={d.titulo} as="li" delay={i * 0.08} className="bg-white p-6">
              <span className="font-display text-[1.6rem] leading-none text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.02rem]">{d.titulo}</h3>
              <p className="mb-0 mt-1 text-[0.88rem] text-ink-muted">{d.texto}</p>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 text-[0.9rem] text-ink-muted">
          A cobertura varia conforme o plano, o contrato e o tipo de atendimento.{" "}
          <a
            className="font-semibold text-brand-700 hover:text-brand"
            href={waLink(
              "Olá, Clínica Musumeci! Quero confirmar cobertura do meu convênio para otorrino."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a recepção.
          </a>
        </p>
      </Section>
    </Page>
  );
}
