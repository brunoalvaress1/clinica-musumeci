import Section, { SectionHead } from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import Icon from "../ui/Icon.jsx";
import { PRINCIPIOS } from "../../data/content.js";

export default function Principios() {
  return (
    <Section tone="surface" tight>
      <Reveal>
        <SectionHead eyebrow="Quem somos" title="Missão, visão e valores">
          <p>O que orienta o trabalho da Clínica Musumeci todos os dias.</p>
        </SectionHead>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
        {PRINCIPIOS.map((p, i) => (
          <Reveal key={p.titulo} delay={i * 0.06} className="bg-white p-6 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[1.15rem]">{p.titulo}</h3>
            <p className="mb-0 mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              {p.texto}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
