import Page from "../components/ui/Page.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <Page title="Página não encontrada">
      <Section className="text-center">
        <p className="eyebrow justify-center">Erro 404</p>
        <h1 className="mt-4 text-[clamp(2rem,4vw+1rem,3rem)]">
          Não encontramos essa página
        </h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-ink-soft">
          O endereço pode ter mudado. Volte para o início ou veja o catálogo de
          exames.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="brand">
            Ir para o início
          </Button>
          <Button to="/exames" variant="ghost">
            Ver exames
          </Button>
        </div>
      </Section>
    </Page>
  );
}
