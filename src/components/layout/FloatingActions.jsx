import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { waLink, DEFAULT_WA_MESSAGE } from "../../lib/whatsapp.js";

export default function FloatingActions() {
  const { count, openDrawer } = useCart();
  const { pathname } = useLocation();
  const onExamsPage = pathname.startsWith("/exames");

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {onExamsPage && count > 0 && (
          <motion.button
            key="cart-fab"
            type="button"
            onClick={openDrawer}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2.5 rounded-xl bg-brand-700 py-3 pl-4 pr-3.5 text-[0.9rem] font-semibold text-white shadow-md2 ring-1 ring-inset ring-white/10"
          >
            <Icon name="clipboard" className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Meus exames</span>
            <span className="grid h-6 min-w-[1.5rem] place-items-center rounded-md bg-white/15 px-1 text-[0.8rem] tabular-nums">
              {count}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="inline-flex items-center gap-2 rounded-xl bg-wa px-4 py-3 text-[0.9rem] font-semibold text-white shadow-md2"
        aria-label="Falar no WhatsApp"
      >
        <Icon name="whatsapp" className="h-[18px] w-[18px]" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
}
