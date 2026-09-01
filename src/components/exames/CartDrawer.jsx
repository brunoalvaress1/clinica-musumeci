import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";
import Button from "../ui/Button.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { categoryName } from "../../data/exams.js";
import { buildOrderMessage, openWhatsApp } from "../../lib/whatsapp.js";
import { CONVENIO_OPTIONS } from "../../data/content.js";

const PERIODOS = ["", "Manhã", "Tarde", "Sábado"];

const fieldCls =
  "w-full rounded-lg border border-line-strong bg-white px-3.5 py-2.5 text-[0.95rem] text-ink outline-none transition-colors focus:border-brand";

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, remove, clear } = useCart();
  const [form, setForm] = useState({
    nome: "",
    convenio: "Particular",
    periodo: "",
    obs: "",
  });

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeDrawer();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDrawer]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const send = () => {
    if (!items.length) return;
    const payload = items.map((ex) => ({
      nome: ex.nome,
      categoriaNome: categoryName(ex.cat),
      preparo: ex.preparo,
    }));
    openWhatsApp(buildOrderMessage(payload, form));
  };

  return (
    <AnimatePresence>
      {drawerOpen && (
        <motion.div
          className="fixed inset-0 z-[120]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-[3px]"
            onClick={closeDrawer}
          />

          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-white shadow-lg2"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Solicitação de exames"
          >
            <header className="flex items-start justify-between border-b border-line px-6 py-5">
              <div>
                <h2 className="text-[1.15rem] font-semibold text-ink">
                  Meus exames
                </h2>
                <p className="mt-0.5 text-[0.82rem] text-ink-muted">
                  {items.length
                    ? `${items.length} ${items.length === 1 ? "item selecionado" : "itens selecionados"}`
                    : "Nenhum item ainda"}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Fechar"
                className="grid h-9 w-9 place-items-center rounded-lg text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="grid place-items-center gap-3 py-12 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-ink-muted">
                    <Icon name="clipboard" className="h-5 w-5" />
                  </span>
                  <p className="text-[0.92rem] text-ink-muted">
                    Selecione os exames na lista para montar sua solicitação.
                  </p>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-line border-y border-line">
                    {items.map((ex) => (
                      <li
                        key={ex.id}
                        className="flex items-center gap-3 py-3"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[0.92rem] font-medium text-ink">
                            {ex.nome}
                          </p>
                          <p className="text-[0.78rem] text-ink-muted">
                            {categoryName(ex.cat)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(ex.id)}
                          aria-label={`Remover ${ex.nome}`}
                          className="grid h-8 w-8 flex-none place-items-center rounded-lg text-ink-muted transition-colors hover:bg-surface hover:text-[#b4472f]"
                        >
                          <Icon name="trash" className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-[0.76rem] text-ink-muted">
                      O preparo de cada exame vai na mensagem.
                    </p>
                    <button
                      type="button"
                      onClick={clear}
                      className="text-[0.78rem] font-medium text-ink-muted hover:text-ink"
                    >
                      Limpar
                    </button>
                  </div>

                  <hr className="my-5 border-line" />

                  <p className="mb-3 text-[0.82rem] font-semibold uppercase tracking-wide text-ink-muted">
                    Seus dados
                  </p>

                  <Field label="Nome" htmlFor="of-nome">
                    <input
                      id="of-nome"
                      type="text"
                      autoComplete="name"
                      value={form.nome}
                      onChange={set("nome")}
                      placeholder="Nome completo"
                      className={fieldCls}
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Convênio" htmlFor="of-convenio">
                      <select
                        id="of-convenio"
                        value={form.convenio}
                        onChange={set("convenio")}
                        className={fieldCls}
                      >
                        {CONVENIO_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Período" htmlFor="of-periodo">
                      <select
                        id="of-periodo"
                        value={form.periodo}
                        onChange={set("periodo")}
                        className={fieldCls}
                      >
                        {PERIODOS.map((p) => (
                          <option key={p || "none"} value={p}>
                            {p || "Sem preferência"}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Observações (opcional)" htmlFor="of-obs">
                    <textarea
                      id="of-obs"
                      value={form.obs}
                      onChange={set("obs")}
                      placeholder="Tenho pedido médico, uso de medicação, criança…"
                      className={`${fieldCls} min-h-[64px] resize-y`}
                    />
                  </Field>
                </>
              )}
            </div>

            <footer className="grid gap-2 border-t border-line px-6 py-4">
              <Button
                as="button"
                variant="wa"
                onClick={send}
                disabled={items.length === 0}
                className="w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Enviar pelo WhatsApp
              </Button>
              <button
                type="button"
                onClick={closeDrawer}
                className="rounded-full px-4 py-2 text-[0.86rem] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                Continuar escolhendo
              </button>
            </footer>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="mb-3.5 grid gap-1.5">
      <label htmlFor={htmlFor} className="text-[0.82rem] font-medium text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}
