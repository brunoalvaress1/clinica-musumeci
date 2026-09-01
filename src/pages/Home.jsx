import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import Hero from "../components/home/Hero.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import WaveDivider from "../components/ui/WaveDivider.jsx";
import { waLink, DEFAULT_WA_MESSAGE } from "../lib/whatsapp.js";

const DESTINOS = [
  {
    to: "/sobre",
    icon: "stethoscope",
    title: "A Clínica",
    desc: "Nossa história, a equipe e a estrutura.",
  },
  {
    to: "/exames",
    icon: "ear",
    title: "Consultas e exames",
    desc: "Otorrino, audição, endoscopia, labirinto e sono.",
  },
  {
    to: "/convenios",
    icon: "shield",
    title: "Convênios",
    desc: "Planos atendidos e como confirmar a cobertura.",
  },
  {
    to: "/contato",
    icon: "map-pin",
    title: "Contato",
    desc: "Endereço, mapa, horários e WhatsApp.",
  },
];

export default function Home() {
  return (
    <Page title="Otorrinolaringologia em Leme/SP">
      <Hero />
      <WaveDivider from="ink" color="white" />

      <Section>
        <Reveal>
          <p className="eyebrow mb-8">Navegue pelo site</p>
        </Reveal>

        <ul className="border-y border-line">
          {DESTINOS.map((d, i) => (
            <Reveal key={d.to} delay={i * 0.06} as="li" className="block border-t border-line first:border-t-0">
              <Link
                to={d.to}
                className="group flex items-center gap-5 py-7 transition-colors hover:text-brand-700 sm:gap-7"
              >
                <Icon
                  name={d.icon}
                  className="h-6 w-6 flex-none text-brand-600"
                />
                <span className="flex-1">
                  <span className="block font-display text-[clamp(1.3rem,2vw+.6rem,1.7rem)] text-ink">
                    {d.title}
                  </span>
                  <span className="mt-0.5 block text-[0.95rem] text-ink-muted">
                    {d.desc}
                  </span>
                </span>
                <Icon
                  name="arrow-right"
                  className="h-5 w-5 flex-none text-ink-muted transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-wa-600 hover:text-wa"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Ou fale agora no WhatsApp
          </a>
        </Reveal>
      </Section>
    </Page>
  );
}
