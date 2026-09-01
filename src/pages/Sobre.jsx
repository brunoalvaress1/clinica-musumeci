import { motion } from "framer-motion";
import Page from "../components/ui/Page.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import DoctorsScroll from "../components/sobre/DoctorsScroll.jsx";
import PhotoGallery from "../components/common/PhotoGallery.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import { SITE } from "../data/site.js";

export default function Sobre() {
  return (
    <Page title="A Clínica">
      {/* ---------- HERO ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-[clamp(1.9rem,3.2vw+1rem,3rem)] font-sans font-semibold leading-[1.12] tracking-tight text-ink">
              A Clínica Musumeci
            </h1>
            <p className="mt-4 max-w-[54ch] leading-relaxed text-ink-soft">
              Otorrinolaringologia no centro de Leme, num só endereço: médicos
              otorrino e fonoaudiólogas, exames de audição, endoscopia, exames de
              labirinto e avaliação do sono. Na maioria dos casos, a consulta e
              os exames são resolvidos na mesma visita.
            </p>
            <p className="mt-3 max-w-[54ch] leading-relaxed text-ink-soft">
              Trabalhamos com protocolos de qualidade, rastreabilidade dos exames
              e laudos revisados por especialistas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <MediaFrame
              src={SITE.media.equipe}
              alt="Clínica Musumeci"
              caption="Clínica Musumeci · Leme/SP"
              icon="stethoscope"
              ratio="aspect-[3/2]"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------- Corpo clínico ---------- */}
      <DoctorsScroll />

      {/* ---------- Conheça a clínica (só fotos do espaço) ---------- */}
      <PhotoGallery />

      <Testimonials />
    </Page>
  );
}
