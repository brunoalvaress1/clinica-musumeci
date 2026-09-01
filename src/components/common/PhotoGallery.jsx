import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import Section from "../ui/Section.jsx";
import { cn } from "../../lib/cn.js";
import { SITE } from "../../data/site.js";

const FOTOS = SITE.galeria || [];

export default function PhotoGallery({
  eyebrow = "O espaço",
  title = "Conheça a clínica",
  intro = "Recepção, salas de atendimento, equipamentos e o dia a dia da estrutura.",
}) {
  const [open, setOpen] = useState(false); // modal com todas as fotos
  const [zoom, setZoom] = useState(null); // índice da foto ampliada

  const preview = FOTOS.slice(0, 5);

  const close = useCallback(() => {
    setOpen(false);
    setZoom(null);
  }, []);

  useEffect(() => {
    if (!open && zoom === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") (zoom !== null ? setZoom(null) : close());
      if (zoom !== null && e.key === "ArrowRight")
        setZoom((z) => (z + 1) % FOTOS.length);
      if (zoom !== null && e.key === "ArrowLeft")
        setZoom((z) => (z - 1 + FOTOS.length) % FOTOS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, zoom, close]);

  if (!FOTOS.length) return null;

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink-muted">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-[clamp(1.7rem,2.6vw+1rem,2.6rem)] font-medium tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-2 max-w-[52ch] text-[0.95rem] text-ink-muted">
            {intro}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[0.88rem] font-semibold text-ink transition-colors hover:border-brand hover:text-brand-700"
        >
          Ver todas as fotos
          <span className="text-ink-muted">({FOTOS.length})</span>
        </button>
      </div>

      {/* prévia — mosaico */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2">
        {preview.map((f, i) => (
          <button
            type="button"
            key={f.img}
            onClick={() => {
              setOpen(true);
              setZoom(i);
            }}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-surface",
              i === 0 && "sm:col-span-2 sm:row-span-2"
            )}
          >
            <img
              src={f.img}
              alt={f.cap}
              loading="lazy"
              className={cn(
                "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                i === 0 ? "aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"
              )}
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-2 left-3 text-[0.78rem] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {f.cap}
            </span>
          </button>
        ))}
      </div>

      {/* ---------- MODAL: todas as fotos ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[130] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/70 backdrop-blur-xl"
              onClick={close}
            />

            <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-10">
              <div className="flex items-center justify-between text-white">
                <p className="font-medium">
                  {title}{" "}
                  <span className="text-white/60">· {FOTOS.length} fotos</span>
                </p>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Fechar"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
                >
                  <Icon name="x" className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid flex-1 grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-4"
              >
                {FOTOS.map((f, i) => (
                  <button
                    type="button"
                    key={f.img}
                    onClick={() => setZoom(i)}
                    className="group relative h-max overflow-hidden rounded-xl bg-white/5"
                  >
                    <img
                      src={f.img}
                      alt={f.cap}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-2.5 pb-1.5 pt-6 text-left text-[0.74rem] font-medium text-white">
                      {f.cap}
                    </span>
                  </button>
                ))}
              </motion.div>
            </div>

            {/* ---------- LIGHTBOX: foto ampliada ---------- */}
            <AnimatePresence>
              {zoom !== null && (
                <motion.div
                  className="absolute inset-0 z-[10] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setZoom(null)}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoom((z) => (z - 1 + FOTOS.length) % FOTOS.length);
                    }}
                    aria-label="Foto anterior"
                    className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 sm:left-6"
                  >
                    <Icon name="chevron-left" className="h-6 w-6" />
                  </button>

                  <motion.figure
                    key={zoom}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="max-h-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={FOTOS[zoom].img}
                      alt={FOTOS[zoom].cap}
                      className="max-h-[78vh] w-auto rounded-xl object-contain"
                    />
                    <figcaption className="mt-3 text-center text-[0.85rem] text-white/80">
                      {FOTOS[zoom].cap} · {zoom + 1} / {FOTOS.length}
                    </figcaption>
                  </motion.figure>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoom((z) => (z + 1) % FOTOS.length);
                    }}
                    aria-label="Próxima foto"
                    className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 sm:right-6"
                  >
                    <Icon name="chevron-right" className="h-6 w-6" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
