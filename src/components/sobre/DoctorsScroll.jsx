import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "../../lib/cn.js";
import { DOUTORES } from "../../data/content.js";
import { SITE } from "../../data/site.js";

function Heading() {
  return (
    <div className="container-x pt-16 sm:pt-20">
      <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink-muted">
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

function Portrait({ src, alt, className, imgStyle }) {
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
        style={imgStyle}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* ---------- fallback estático (reduzir movimento) ---------- */
function DoctorsList() {
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
              className={cn("w-[62vw] max-w-[260px]", i % 2 === 1 && "sm:order-2")}
            />
            <DoctorText doctor={d} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------- versão com rolagem ---------- */
export default function DoctorsScroll() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) return <DoctorsList />;

  const n = DOUTORES.length;

  return (
    <section className="bg-white">
      <Heading />
      <div ref={ref} style={{ height: `${n * 100}vh` }} className="relative">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div className="container-x relative h-full">
            {DOUTORES.map((d, i) => (
              <DoctorPanel
                key={d.nome}
                doctor={d}
                index={i}
                count={n}
                progress={scrollYProgress}
                flip={i % 2 === 1}
              />
            ))}
            <StepDots progress={scrollYProgress} count={n} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorPanel({ doctor, index, count, progress, flip }) {
  const seg = 1 / count;
  const s = index * seg;
  const e = s + seg;
  const first = index === 0;
  const last = index === count - 1;

  const opacity = useTransform(
    progress,
    [s, s + 0.09, e - 0.09, e],
    [first ? 1 : 0, 1, 1, last ? 1 : 0]
  );
  const zoom = useTransform(
    progress,
    [s, s + 0.1, e - 0.1, e],
    [first ? 1.12 : 1.45, 1.12, 1.0, last ? 1.0 : 1.35]
  );
  const textX = useTransform(
    progress,
    [s + 0.02, s + 0.12, e - 0.1, e],
    [flip ? -40 : 40, 0, 0, flip ? 28 : -28]
  );
  const textOpacity = useTransform(
    progress,
    [s + 0.02, s + 0.13, e - 0.11, e - 0.02],
    [0, 1, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center">
      <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Portrait
          src={SITE.media[doctor.img]}
          alt={doctor.nome}
          imgStyle={{ scale: zoom }}
          className={cn(
            "w-[60vw] max-w-[260px] lg:w-full lg:max-w-[420px]",
            flip && "lg:order-2"
          )}
        />
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className={cn(flip && "lg:order-1")}
        >
          <DoctorText doctor={doctor} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function StepDots({ progress, count }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const unsub = progress.on("change", (v) => {
      setActive(Math.min(count - 1, Math.max(0, Math.floor(v * count + 1e-4))));
    });
    return () => unsub();
  }, [progress, count]);

  return (
    <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2.5 sm:right-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full text-[0.68rem] font-semibold tabular-nums transition-colors sm:h-7 sm:w-7 sm:text-[0.72rem]",
            i === active ? "bg-brand-700 text-white" : "bg-surface text-ink-muted"
          )}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      ))}
    </div>
  );
}
