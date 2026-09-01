import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Section, { SectionHead } from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import { TESTIMONIALS } from "../../data/content.js";

export default function Testimonials() {
  return (
    <Section>
      <Reveal>
        <SectionHead
          center
          eyebrow="Quem já foi atendido"
          title="Histórias de quem confia na gente"
        />
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-[820px]">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.autor}>
              <blockquote className="rounded-xl2 border border-line bg-white p-8 text-center sm:p-12">
                <div className="mb-4 tracking-[0.15em] text-accent" aria-hidden>
                  ★★★★★
                </div>
                <p className="mb-0 font-display text-[clamp(1.1rem,1.6vw,1.4rem)] italic leading-relaxed text-ink">
                  “{t.texto}”
                </p>
                <footer className="mt-5 text-[0.9rem] not-italic text-ink-muted">
                  <b className="block not-italic text-ink">{t.autor}</b>
                  {t.cidade}
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </Section>
  );
}
