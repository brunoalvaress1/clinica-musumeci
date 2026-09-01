import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import Section, { SectionHead } from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import LocationBlock from "../components/common/LocationBlock.jsx";
import Faq from "../components/home/Faq.jsx";
import { SITE, MAPS_EMBED, MAPS_LINK } from "../data/site.js";
import { CONVENIO_OPTIONS } from "../data/content.js";
import { openWhatsApp, waLink, DEFAULT_WA_MESSAGE } from "../lib/whatsapp.js";

const ASSUNTOS = [
  "Agendar consulta de otorrino",
  "Agendar exame (audiometria, endoscopia, labirinto…)",
  "Confirmar cobertura de convênio",
  "Dúvida sobre preparo de exame",
  "Resultado de exame",
  "Ronco e apneia do sono",
  "Outro assunto",
];

const inputCls =
  "w-full rounded-[10px] border border-line-strong px-3.5 py-3 text-[0.95rem] outline-none focus:border-brand";

export default function Contato() {
  const [f, setF] = useState({
    nome: "",
    assunto: ASSUNTOS[0],
    detalhes: "",
    convenio: "Particular",
    periodo: "",
  });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `Olá, ${SITE.name}!`,
      "",
      `Assunto: ${f.assunto}`,
    ];
    if (f.nome.trim()) lines.push(`Nome: ${f.nome.trim()}`);
    if (f.detalhes.trim()) lines.push(`Detalhes: ${f.detalhes.trim()}`);
    lines.push(`Convênio: ${f.convenio || "Particular"}`);
    if (f.periodo) lines.push(`Melhor período: ${f.periodo}`);
    lines.push("", "Mensagem enviada pelo site.");
    openWhatsApp(lines.join("\n"));
  };

  return (
    <Page title="Contato e Localização">
      {/* ---------- HERO próprio: cartões de contato + mapa ---------- */}
      <section className="relative isolate overflow-hidden bg-brand-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-700 to-brand-600/70" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/60">
              Contato
            </p>
            <h1 className="font-sans text-[clamp(1.9rem,3.2vw+1rem,3rem)] font-semibold leading-[1.12] tracking-tight text-white text-balance">
              Onde estamos e como falar com a gente
            </h1>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl bg-white/10 p-3.5 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/20"
              >
                <Icon name="map-pin" className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span className="text-[0.9rem] leading-snug">
                  <b className="block font-display">Endereço</b>
                  <span className="text-white/75">
                    {SITE.address.street} — {SITE.address.district}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="group flex items-start gap-3 rounded-xl bg-white/10 p-3.5 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/20"
              >
                <Icon name="phone" className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span className="text-[0.9rem] leading-snug">
                  <b className="block font-display">Telefone</b>
                  <span className="text-white/75">{SITE.phoneLabel}</span>
                </span>
              </a>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl bg-white/10 p-3.5 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/20"
              >
                <Icon name="whatsapp" className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span className="text-[0.9rem] leading-snug">
                  <b className="block font-display">WhatsApp</b>
                  <span className="text-white/75">Abrir conversa</span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-2xl shadow-lg2 ring-1 ring-white/15"
          >
            <iframe
              title="Mapa da Clínica Musumeci"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 sm:h-[360px]"
            />
          </motion.div>
        </div>
      </section>

      <Section tight>
        <Reveal>
          <div className="mx-auto max-w-md">
            <p className="eyebrow mb-4 justify-center text-center">Horário de atendimento</p>
            <table className="w-full border-collapse text-[0.95rem]">
              <tbody>
                {SITE.hours.map((h) => (
                  <tr key={h.label} className="border-b border-line">
                    <th className="py-2.5 text-left font-normal font-sans text-ink-soft">
                      {h.label}
                    </th>
                    <td className="py-2.5 text-right font-semibold text-ink">
                      {h.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Solicitação rápida</p>
            <h2 className="text-[clamp(1.7rem,2.6vw+1rem,2.6rem)] text-balance">
              Monte sua mensagem para o WhatsApp
            </h2>
            <p className="mt-3 text-ink-soft">
              Preencha os campos e clique em enviar. Nada é armazenado no site —
              abrimos o WhatsApp com o texto pronto para você conferir e mandar.
            </p>
            <p className="prose-note mt-6">
              Prefere escolher exame por exame de uma lista? Use a página{" "}
              <Link className="link-arrow inline" to="/exames">
                Exames
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={submit}
              className="rounded-xl border border-line bg-white p-7"
              noValidate
            >
              <Field label="Seu nome" id="wf-nome">
                <input
                  id="wf-nome"
                  type="text"
                  autoComplete="name"
                  value={f.nome}
                  onChange={set("nome")}
                  placeholder="Nome completo"
                  className={inputCls}
                />
              </Field>
              <Field label="Assunto" id="wf-assunto">
                <select id="wf-assunto" value={f.assunto} onChange={set("assunto")} className={inputCls}>
                  {ASSUNTOS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </Field>
              <Field label="Detalhes" id="wf-detalhes">
                <textarea
                  id="wf-detalhes"
                  value={f.detalhes}
                  onChange={set("detalhes")}
                  placeholder="Ex.: consulta + audiometria e imitanciometria para meu filho de 6 anos. Tenho pedido médico."
                  className={`${inputCls} min-h-[80px] resize-y`}
                />
              </Field>
              <Field label="Convênio" id="wf-convenio">
                <select id="wf-convenio" value={f.convenio} onChange={set("convenio")} className={inputCls}>
                  {CONVENIO_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Melhor período" id="wf-periodo">
                <select id="wf-periodo" value={f.periodo} onChange={set("periodo")} className={inputCls}>
                  <option value="">Sem preferência</option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Sábado</option>
                </select>
              </Field>
              <Button as="button" type="submit" variant="wa" className="w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                Abrir no WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      <Faq />
    </Page>
  );
}

function Field({ label, id, children }) {
  return (
    <div className="mb-4 grid gap-1.5">
      <label htmlFor={id} className="text-[0.85rem] font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
