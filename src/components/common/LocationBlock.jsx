import Reveal from "../ui/Reveal.jsx";
import Icon from "../ui/Icon.jsx";
import { SITE, MAPS_EMBED } from "../../data/site.js";
import { waLink, DEFAULT_WA_MESSAGE } from "../../lib/whatsapp.js";

export default function LocationBlock({ showNote = false }) {
  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
      <Reveal>
        <ul className="grid gap-6">
          <InfoItem icon="map-pin" title="Endereço">
            {SITE.address.street} — {SITE.address.district}
            <br />
            {SITE.address.city}/{SITE.address.state} · CEP {SITE.address.zip}
          </InfoItem>
          <InfoItem icon="phone" title="Telefone">
            <a className="hover:text-brand-600" href={`tel:${SITE.phone}`}>
              {SITE.phoneLabel}
            </a>
          </InfoItem>
          <InfoItem icon="whatsapp" title="WhatsApp">
            <a
              className="hover:text-brand-600"
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensagem agora
            </a>
          </InfoItem>
        </ul>

        <table className="mt-6 w-full border-collapse text-[0.95rem]">
          <caption className="eyebrow mb-2 text-left">
            Horário de atendimento
          </caption>
          <tbody>
            {SITE.hours.map((h) => (
              <tr key={h.label} className="border-b border-line">
                <th className="py-2.5 text-left font-normal font-sans text-ink-soft">
                  {h.label}
                </th>
                <td className="py-2.5 text-right font-semibold text-ink">
                  {h.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showNote && (
          <p className="prose-note mt-6">
            Endereço e telefone confirmados. Os horários acima são ilustrativos —
            ajuste antes de publicar.
          </p>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="h-full min-h-[360px] overflow-hidden rounded-xl2 border border-line shadow-md2">
          <iframe
            title={`Mapa — ${SITE.address.street}, ${SITE.address.city}/${SITE.address.state}`}
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full border-0"
          />
        </div>
      </Reveal>
    </div>
  );
}

function InfoItem({ icon, title, children }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <b className="block font-display text-ink">{title}</b>
        {children}
      </span>
    </li>
  );
}
