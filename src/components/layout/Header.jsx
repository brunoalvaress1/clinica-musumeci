import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import BrandMark from "../ui/BrandMark.jsx";
import Button from "../ui/Button.jsx";
import { cn } from "../../lib/cn.js";
import { SITE } from "../../data/site.js";
import { waLink, DEFAULT_WA_MESSAGE } from "../../lib/whatsapp.js";

const LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/sobre", label: "A Clínica" },
  { to: "/exames", label: "Serviços" },
  { to: "/convenios", label: "Convênios" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all",
        scrolled
          ? "border-b border-line bg-white/85 shadow-[0_6px_24px_-18px_rgba(16,38,45,.4)]"
          : "border-b border-transparent bg-white/70"
      )}
    >
      <div className="container-x flex min-h-[76px] items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-ink"
          aria-label={`${SITE.name} — página inicial`}
        >
          <BrandMark className="h-11 w-11 flex-none" />
          <span className="flex flex-col leading-tight">
            <strong className="font-display text-[1.12rem] font-semibold">
              {SITE.name}
            </strong>
            <small className="text-[0.72rem] text-ink-muted">{SITE.tagline}</small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "relative py-1 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100",
                  isActive && "text-ink after:scale-x-100"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button href={waLink(DEFAULT_WA_MESSAGE)} variant="wa" size="sm">
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <Icon name={open ? "x" : "menu"} className="h-5 w-5 text-ink" />
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            aria-label="Navegação principal"
          >
            <div className="container-x flex flex-col gap-1 border-b border-line bg-white pb-8 pt-3 shadow-lg2">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-line py-3.5 text-ink-soft",
                      isActive && "font-semibold text-ink"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button
                href={waLink(DEFAULT_WA_MESSAGE)}
                variant="wa"
                className="mt-4 w-full"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Pedir pelo WhatsApp
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
