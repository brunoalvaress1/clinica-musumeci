import Section, { SectionHead } from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import Icon from "../ui/Icon.jsx";
import { cn } from "../../lib/cn.js";
import { UNITS, mapsLink } from "../../data/site.js";

export default function Unidades() {
  return (
    <Section tight>
      <Reveal>
        <SectionHead eyebrow="Onde nos encontrar" title="Nossas unidades">
          <p>
            A Clínica Musumeci hoje e as próximas instalações, que vão ampliar o
            atendimento e a formação em otorrinolaringologia em Leme.
          </p>
        </SectionHead>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {UNITS.map((u, i) => (
          <Reveal key={u.nome} delay={i * 0.08}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6 sm:p-7",
                u.aberta
                  ? "border-line bg-white shadow-soft"
                  : "border-dashed border-line-strong bg-surface"
              )}
            >
              <span
                className={cn(
                  "inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em]",
                  u.aberta
                    ? "bg-brand-50 text-brand-700"
                    : "bg-accent/15 text-accent-600"
                )}
              >
                <Icon
                  name={u.aberta ? "badge-check" : "calendar-clock"}
                  className="h-3.5 w-3.5"
                />
                {u.papel}
              </span>

              <h3 className="mt-4 text-[1.2rem] leading-snug">{u.nome}</h3>

              <p className="mt-2 flex items-start gap-2 text-[0.92rem] text-ink-soft">
                <Icon
                  name="map-pin"
                  className="mt-0.5 h-4 w-4 flex-none text-ink-muted"
                />
                <span>{u.endereco}</span>
              </p>

              <p className="mt-3 text-[0.9rem] font-medium text-ink">{u.quando}</p>
              {u.nota && (
                <p className="mt-1 text-[0.88rem] text-ink-muted">{u.nota}</p>
              )}

              <a
                href={mapsLink(u.mapa)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-5 text-[0.88rem]"
              >
                Ver no mapa
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
