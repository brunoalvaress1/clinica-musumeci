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
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-brand-700 text-white sm:items-center">
      {/* ---------- Fundo em vídeo (ocupa a tela toda, sem cortar o vídeo) ---------- */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* camada de preenchimento: versão borrada, só pra não sobrar faixa lisa */}
        {SITE.media.heroPoster && (
          <img
            src={SITE.media.heroPoster}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
          />
        )}
        <div className="absolute inset-0 bg-brand-700/55" />

        {/* pôster nítido enquanto o vídeo carrega */}
        {SITE.media.hero && (
          <img
            src={SITE.media.hero}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        )}

        {/* vídeo — object-contain = vídeo inteiro, sem corte */}
        {!noVideo && SITE.media.heroVideo && (
          <video
            className="absolute inset-0 h-full w-full object-contain"
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

        {/* véu para leitura do texto: forte embaixo, leve à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-700 via-brand-700/45 to-brand-700/10 sm:via-brand-700/25 sm:to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-700/85 via-brand-700/35 to-transparent sm:block" />
      </div>

      {/* ---------- Texto ---------- */}
      <div className="container-x relative z-10 pb-16 pt-10 sm:py-0">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-[34rem] [text-shadow:0_2px_22px_rgba(6,32,38,.55)]"
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
            className="text-[clamp(2.05rem,4.4vw+1rem,3.9rem)] font-display font-medium leading-[1.07] text-white text-balance"
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
            className="mt-5 max-w-[38ch] text-[1.02rem] leading-relaxed text-white/90 sm:mt-6 sm:text-[1.1rem]"
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
