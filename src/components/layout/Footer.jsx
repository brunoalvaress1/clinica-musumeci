import { Link } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import BrandMark from "../ui/BrandMark.jsx";
import { SITE, ADDRESS_LINE } from "../../data/site.js";
import { waLink, DEFAULT_WA_MESSAGE } from "../../lib/whatsapp.js";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink text-[0.92rem] text-[#a9bfc2]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:py-20">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <BrandMark className="h-11 w-11 flex-none" />
            <span className="flex flex-col leading-tight">
              <strong className="font-display text-[1.12rem] font-semibold text-white">
                {SITE.name}
              </strong>
              <small className="text-[0.72rem] text-[#8aa3a6]">
                Otorrinolaringologia
              </small>
            </span>
          </Link>
          <p className="mt-5 max-w-[34ch] leading-relaxed">
            Clínica de otorrinolaringologia em Leme/SP. Consultas e exames de
            ouvido, nariz e garganta para todas as idades, com atendimento
            humanizado.
          </p>
        </div>

        <FooterCol title="Navegação">
          <FooterLink to="/">Início</FooterLink>
          <FooterLink to="/sobre">A Clínica</FooterLink>
          <FooterLink to="/exames">Consultas e exames</FooterLink>
          <FooterLink to="/convenios">Convênios</FooterLink>
          <FooterLink to="/contato">Contato</FooterLink>
        </FooterCol>

        <FooterCol title="Serviços">
          <FooterLink to="/exames?cat=consulta">Consultas</FooterLink>
          <FooterLink to="/exames?cat=audio">Exames de audição</FooterLink>
          <FooterLink to="/exames?cat=endo">Endoscopias</FooterLink>
          <FooterLink to="/exames?cat=otoneuro">Tontura e equilíbrio</FooterLink>
          <FooterLink to="/exames?cat=sono">Ronco e apneia</FooterLink>
        </FooterCol>

        <FooterCol title="Contato">
          <li>{SITE.address.street}</li>
          <li>
            {SITE.address.district} — {SITE.address.city}/{SITE.address.state}
          </li>
          <li>
            <a className="hover:text-white" href={`tel:${SITE.phone}`}>
              {SITE.phoneLabel}
            </a>
          </li>
          <li>
            <a
              className="hover:text-white"
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap justify-between gap-x-6 gap-y-1.5 py-6 text-[0.82rem] text-[#8aa3a6]">
          <span>
            © {year} {SITE.name}. Todos os direitos reservados.
          </span>
          <span>{ADDRESS_LINE}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="mb-5 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white">
        {title}
      </h4>
      <ul className="grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link className="text-[#cdddde] hover:text-white" to={to}>
        {children}
      </Link>
    </li>
  );
}
