import { SITE } from "../data/site.js";

/** Monta um link wa.me com texto pré-preenchido. */
export function waLink(text = "") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Abre o WhatsApp em nova aba com o texto informado. */
export function openWhatsApp(text) {
  window.open(waLink(text), "_blank", "noopener,noreferrer");
}

export const DEFAULT_WA_MESSAGE = `Olá, ${SITE.name}! Vim pelo site e gostaria de informações sobre consultas e exames de otorrino, convênios e horários.`;

/**
 * Constrói a mensagem detalhada do pedido de consultas/exames.
 * @param {Array} exams  lista de itens { nome, categoriaNome, preparo }
 * @param {Object} form   { nome, convenio, periodo, obs }
 */
export function buildOrderMessage(exams, form = {}) {
  const lines = [];
  lines.push(`Olá, ${SITE.name}! Gostaria de agendar os seguintes atendimentos:`);
  lines.push("");

  exams.forEach((ex) => {
    lines.push(`• ${ex.nome}${ex.categoriaNome ? ` (${ex.categoriaNome})` : ""}`);
    if (ex.preparo) lines.push(`   Preparo: ${ex.preparo}`);
  });

  lines.push("");
  lines.push("*Meus dados*");
  lines.push(`Nome: ${form.nome?.trim() || "(vou informar)"}`);
  lines.push(`Convênio: ${form.convenio || "Particular"}`);
  lines.push(`Período de preferência: ${form.periodo || "Sem preferência"}`);
  if (form.obs?.trim()) lines.push(`Observações: ${form.obs.trim()}`);

  lines.push("");
  lines.push(
    "Podem me confirmar horário, cobertura do convênio / valores e o preparo? Enviado pelo site."
  );

  return lines.join("\n");
}
