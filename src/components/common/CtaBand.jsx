import Reveal from "../ui/Reveal.jsx";
import Button from "../ui/Button.jsx";
import { waLink, DEFAULT_WA_MESSAGE } from "../../lib/whatsapp.js";

export default function CtaBand({
  title = "Pronto para agendar seu exame?",
  text = "Monte seu pedido em poucos toques e fale com a nossa equipe pelo WhatsApp. Rápido, claro e sem fila.",
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          <div className="rounded-2xl bg-brand-700 text-white">
            <div className="flex flex-wrap items-center justify-between gap-8 p-8 sm:p-12">
              <div className="max-w-[44ch]">
                <h2 className="text-white">{title}</h2>
                <p className="mt-1 mb-0 text-[#c9e2e2]">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button to="/exames" variant="accent" size="lg">
                  Montar pedido
                </Button>
                <Button
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  variant="ghostLight"
                  size="lg"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
