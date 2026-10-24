import { motion } from "framer-motion";
import { cn } from "../../lib/cn.js";
import { DOUTORES } from "../../data/content.js";
import { SITE } from "../../data/site.js";

function Heading() {
  return (
    <div className="container-x pt-16 sm:pt-20">
      <p className="mb-2 text-[0.8rem] font-medium text-brand-600">
        Corpo clínico
      </p>
      <h2 className="text-[clamp(1.7rem,2.6vw+1rem,2.6rem)] font-semibold tracking-tight text-ink">
        Quem vai te atender
      </h2>
    </div>
  );
}

function DoctorText({ doctor }) {
  return (
    <div>
      <p className="mb-3 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
        {doctor.titulo}
      </p>
      <h3 className="text-[clamp(1.5rem,2.2vw+1rem,2.2rem)] font-semibold leading-tight text-ink">
        {doctor.nome}
      </h3>
      <p className="mt-1 text-[0.85rem] text-ink-muted">{doctor.crm}</p>
      <p className="mt-4 max-w-[46ch] text-ink-soft">{doctor.resumo}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {doctor.focos.map((f) => (
          <li
            key={f}
            className="rounded-full bg-brand-50 px-3 py-1.5 text-[0.8rem] font-medium text-brand-700"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Portrait({ src, alt, className, imgStyle, position = "center 28%" }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square overflow-hidden rounded-full bg-surface shadow-[0_30px_70px_-25px_rgba(16,38,45,.4)] ring-1 ring-line",
        className
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ objectPosition: position, ...imgStyle }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function DoctorsScroll() {
  return (
    <section className="bg-white">
      <Heading />
      <div className="container-x mt-10 space-y-16 pb-16">
        {DOUTORES.map((d, i) => (
          <motion.article
            key={d.nome}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-8 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-12"
          >
            <Portrait
              src={SITE.media[d.img]}
              alt={d.nome}
              position={d.enquadre}
              className={cn("w-[62vw] max-w-[260px]", i % 2 === 1 && "sm:order-2")}
            />
            <DoctorText doctor={d} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
