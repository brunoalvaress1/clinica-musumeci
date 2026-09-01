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

const VIDEO_RATIO = "2732 / 1440"; // proporção do clipe — evita corte no celular

export default function Hero() {
  const reduce = useReducedMotion();
  const [noVideo, setNoVideo] = useState(false);
  const showVideo = !noVideo && SITE.media.heroVideo;

  return (
    <section className="relative isolate overflow-hidden bg-brand-700 text-white sm:flex sm:min-h-svh sm:items-center">
      {/* ================= MOBILE: vídeo como faixa no topo ================= */}
      <div className="relative sm:hidden">
        {showVideo ? (
          <video
            className="w-full object-cover"
            style={{ aspectRatio: VIDEO_RATIO }}
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
        ) : (
          <img
            src={SITE.media.hero}
            alt=""
            className="w-full object-cover"
            style={{ aspectRatio: VIDEO_RATIO }}
          />
        )}
        {/* o vídeo dissolve no fundo teal para o texto encostar "quase por cima" */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-700 to-transparent" />
      </div>

      {/* ================= DESKTOP: vídeo de fundo ================= */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden sm:block">
        {SITE.media.heroPoster && (
          <img
            src={SITE.media.heroPoster}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
          />
        )}
        <div className="absolute inset-0 bg-brand-700/55" />
        {SITE.media.hero && (
          <img
            src={SITE.media.hero}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        )}
        {showVideo && (
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700/85 via-brand-700/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-700/70 to-transparent" />
      </div>

      {/* ================= TEXTO ================= */}
      <div className="container-x relative z-10 -mt-10 pb-14 sm:mt-0 sm:py-0">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-[34rem] sm:[text-shadow:0_2px_22px_rgba(6,32,38,.55)]"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-4 inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-accent sm:mb-5"
          >
            <span className="inline-block h-px w-6 bg-accent" />
            Otorrinolaringologia · {SITE.address.city}/{SITE.address.state}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-[clamp(2rem,4.4vw+1rem,3.9rem)] font-display font-medium leading-[1.08] text-white text-balance"
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
            className="mt-4 max-w-[38ch] text-[1rem] leading-relaxed text-white/90 sm:mt-6 sm:text-[1.1rem]"
          >
            Consultas e exames no mesmo lugar, em Leme. Agendamento simples pelo
            WhatsApp.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-7 sm:mt-9">
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
