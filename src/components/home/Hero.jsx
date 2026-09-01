import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import SoundWave from "../ui/SoundWave.jsx";
import { SITE } from "../../data/site.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [noVideo, setNoVideo] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-brand-700 text-white sm:min-h-svh">
      {/* ---------- Mídia: cartão no celular, fundo inteiro no desktop ---------- */}
      <div className="relative px-4 pt-6 sm:absolute sm:inset-0 sm:z-0 sm:p-0">
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg2 ring-1 ring-white/15 sm:aspect-auto sm:h-full sm:rounded-none sm:shadow-none sm:ring-0">
          {SITE.media.hero && (
            <motion.img
              src={SITE.media.hero}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover object-[50%_32%]"
              initial={{ scale: 1.05 }}
              animate={reduce ? undefined : { scale: 1.16 }}
              transition={{
                duration: 26,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )}

          {!noVideo && SITE.media.heroVideo && (
            <video
              className="absolute inset-0 h-full w-full object-cover object-[50%_32%]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={SITE.media.heroPoster}
              onError={() => setNoVideo(true)}
            >
              <source src={SITE.media.heroVideo} type="video/mp4" />
            </video>
          )}

          {/* leve escurecido no cartão (mobile) para a moldura respirar */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-700/45 to-transparent sm:hidden" />

          {/* DESKTOP: véu diagonal só atrás do texto */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(100deg, rgba(8,49,53,.92) 0%, rgba(8,49,53,.55) 32%, rgba(8,49,53,.12) 55%, transparent 72%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-brand-700/75 to-transparent sm:block" />
          <div className="absolute inset-x-0 top-0 hidden h-24 bg-gradient-to-b from-brand-700/40 to-transparent sm:block" />
        </div>
      </div>

      {/* ---------- Texto ---------- */}
      <div className="relative z-10 pb-14 pt-9 sm:absolute sm:inset-0 sm:flex sm:items-center sm:pb-0 sm:pt-0">
        <div className="container-x">
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-[34rem] sm:[text-shadow:0_2px_22px_rgba(6,32,38,.55)]"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-accent"
            >
              <span className="inline-block h-px w-7 bg-accent" />
              Otorrinolaringologia · {SITE.address.city}/{SITE.address.state}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-[clamp(2.15rem,4.4vw+1rem,3.9rem)] font-display font-medium leading-[1.06] text-white text-balance"
            >
              Ouvido, nariz e garganta
              <br className="hidden sm:block" /> com cuidado de{" "}
              <span className="relative whitespace-nowrap">
                especialista
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-10 h-[0.3em] rounded bg-accent/50"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-white/90 sm:mt-6 sm:text-[1.1rem]"
            >
              Consultas e exames no mesmo lugar, em Leme. Agendamento simples pelo
              WhatsApp.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-8 sm:mt-10">
              <SoundWave
                className="h-9 w-52 opacity-90"
                color="rgba(224,165,61,.9)"
                bars={38}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* indicador de rolagem (desktop) */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-1 text-white/55 sm:flex"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Role</span>
        <Icon name="chevron-down" className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
