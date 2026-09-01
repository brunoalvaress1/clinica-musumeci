import Page from "../components/ui/Page.jsx";
import Section from "../components/ui/Section.jsx";
import CatalogHero from "../components/exames/CatalogHero.jsx";
import ExamCatalog from "../components/exames/ExamCatalog.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import { waLink } from "../lib/whatsapp.js";

export default function Exames() {
  return (
    <Page title="Consultas e exames">
      <CatalogHero />

      <Section tight>
        <ExamCatalog />

        <p className="mt-8 border-t border-line pt-6 text-[0.9rem] text-ink-muted">
          Não encontrou? Realizamos outros atendimentos.{" "}
          <a
            className="font-semibold text-brand-700 hover:text-brand"
            href={waLink(
              "Olá, Clínica Musumeci! Preciso de um atendimento de otorrino que não encontrei no site: "
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pergunte pelo WhatsApp.
          </a>
        </p>
      </Section>

      <CtaBand />
    </Page>
  );
}
