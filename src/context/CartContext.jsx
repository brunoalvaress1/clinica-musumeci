import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { EXAMS } from "../data/exams.js";

const STORAGE_KEY = "musumeci_pedido_v1";
const CartContext = createContext(null);

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(raw)) return [];
    // mantém só ids que ainda existem no catálogo
    return raw.filter((id) => EXAMS.some((e) => e.id === id));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [ids, setIds] = useState(load);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      /* ignore */
    }
  }, [ids]);

  const value = useMemo(() => {
    const has = (id) => ids.includes(id);
    const toggle = (id) =>
      setIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    const add = (id) => setIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    const remove = (id) => setIds((prev) => prev.filter((x) => x !== id));
    const clear = () => setIds([]);
    const items = ids
      .map((id) => EXAMS.find((e) => e.id === id))
      .filter(Boolean);

    return {
      ids,
      items,
      count: ids.length,
      has,
      toggle,
      add,
      remove,
      clear,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    };
  }, [ids, drawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}
