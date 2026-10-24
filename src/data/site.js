// =========================================================
// Configuração central do site — AJUSTE AQUI
// =========================================================

// Helper para montar URLs de imagem do Unsplash (usadas só como placeholder).
function unsplash(id, w = 1400) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const SITE = {
  name: "Clínica Musumeci",
  tagline: "Otorrinolaringologia · Leme/SP",
  especialidade: "Otorrinolaringologia",

  // WhatsApp: somente números, com DDI 55 + DDD. É o celular da clínica.
  whatsapp: "5519991946076",
  whatsappLabel: "(19) 99194-6076",

  // Telefones fixos (botão "ligar"). O primeiro é o principal.
  phone: "+551935713126",
  phoneLabel: "(19) 3571-3126",
  phones: [
    { label: "(19) 3571-3126", tel: "+551935713126" },
    { label: "(19) 3554-1318", tel: "+551935541318" },
  ],

  address: {
    street: "R. Joaquim Mourão, 830",
    district: "Centro",
    city: "Leme",
    state: "SP",
    zip: "13610-070",
  },

  // Horários (ilustrativos — confirme com a clínica)
  hours: [
    { label: "Segunda a sexta", value: "8h – 18h" },
    { label: "Sábado", value: "8h – 12h" },
    { label: "Exames audiológicos", value: "com hora marcada" },
    { label: "Domingo e feriados", value: "Fechado" },
  ],

  // -------------------------------------------------------
  // Mídia
  //
  // Estão sendo usadas fotos de banco de imagens (Unsplash) só como
  // PLACEHOLDER. Troque pelas fotos reais da clínica:
  //   opção A) coloque os arquivos em /public/media (ex.: /media/recepcao.jpg)
  //            e troque o valor abaixo por "/media/recepcao.jpg";
  //   opção B) cole a URL de qualquer imagem/vídeo.
  // Se a imagem não carregar, o site mostra um bloco em degradê
  // na paleta da marca — nada quebra.
  // -------------------------------------------------------
  // Cada chave usa uma imagem DIFERENTE (sem repetir a mesma foto pelo site).
  media: {
    heroVideo: "",
    heroVideoMobile: "",
    heroPoster: "/media/fachada-clinica.jpg",
    hero: "/media/fachada-clinica.jpg",

    recepcao: "/media/recepcao.jpg",
    consultorio: "/media/consultorio.jpg",
    audiometria: "/media/exame-audicao.jpg",
    endoscopia: "/media/exame-endoscopia.jpg",
    labirinto: "/media/exame-equilibrio.jpg",
    infantil: "/media/consultorio.jpg",
    sono: "/media/corredor.jpg",
    procedimentos: "/media/exame-reabilitacao.jpg",
    equipe: "/media/fachada-clinica.jpg",
    fachada: "/media/fachada.jpg",
    fachadaRua: "/media/fachada-rua.jpg",
    entrada: "/media/entrada.jpg",
    placa: "/media/placa.jpg",
    equipamentos: "/media/equipamentos.jpg",

    doutor1: "/media/paulo-musumeci.jpg",
    doutor2: "/media/aline-bazon.jpg",
    doutor3: "/media/ricardo-musumeci.jpg",
    doutor4: "/media/marcelo-moutinho.jpg",
    doutor5: "/media/carolina-marchiori.jpg",
  },

  video: {
    consultorio: "/media/equipamentos.mp4",
    endoscopia: "/media/fachada.mp4",
  },

  galeria: [
    { img: "/media/galeria-fachada.jpg", video: "/media/galeria-fachada.mp4", cap: "Fachada" },
    { img: "/media/galeria-recepcao.jpg", video: "/media/galeria-recepcao.mp4", cap: "Recepção" },
    { img: "/media/galeria-paulo.jpg", cap: "Consultório" },
    { img: "/media/galeria-exame.jpg", cap: "Sala de exame" },
    { img: "/media/galeria-consultorio.jpg", cap: "Sala de atendimento" },
    { img: "/media/galeria-escultura.jpg", cap: "Recepção" },
    { img: "/media/galeria-marcelo.jpg", cap: "Consultório" },
    { img: "/media/galeria-aline.jpg", cap: "Fonoaudiologia" },
    { img: "/media/galeria-estante.jpg", cap: "Acervo" },
    { img: "/media/galeria-sala.jpg", cap: "Sala de atendimento" },
    { img: "/media/galeria-certificados.jpg", cap: "Consultório" },
    { img: "/media/galeria-equipamentos.jpg", cap: "Equipamentos" },
    { img: "/media/galeria-video-sala.jpg", video: "/media/galeria-video-sala.mp4", cap: "Sala de exame" },
    { img: "/media/galeria-video-exame.jpg", video: "/media/galeria-video-exame.mp4", cap: "Sala de exame" },
    { img: "/media/galeria-video-microscopio.jpg", video: "/media/galeria-video-microscopio.mp4", cap: "Equipamentos" },
  ],

  social: {
    instagram: "",
    facebook: "",
  },
};

export const ADDRESS_LINE = `${SITE.address.street} — ${SITE.address.district}, ${SITE.address.city}/${SITE.address.state} · CEP ${SITE.address.zip}`;

// Helpers de mapa a partir de um texto de endereço (usados também pelas unidades).
export const mapsQuery = (q) => encodeURIComponent(q);
export const mapsEmbed = (q) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
export const mapsLink = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const CLINICA_QUERY_TXT = `${SITE.address.street} - ${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}, ${SITE.address.zip}`;

export const MAPS_QUERY = mapsQuery(CLINICA_QUERY_TXT);
export const MAPS_EMBED = mapsEmbed(CLINICA_QUERY_TXT);
export const MAPS_LINK = mapsLink(CLINICA_QUERY_TXT);

// -------------------------------------------------------
// Unidades — a Clínica hoje e as próximas instalações.
// Datas informadas pela clínica; ajuste os textos de "nota" conforme o projeto.
// -------------------------------------------------------
export const UNITS = [
  {
    nome: "Clínica Musumeci",
    papel: "Unidade em funcionamento",
    endereco: "R. Joaquim Mourão, 830 — Leme/SP",
    mapa: "R. Joaquim Mourão, 830 - Leme - SP",
    quando: "Aberta ao público",
    aberta: true,
    nota: "Onde os exames são realizados hoje.",
  },
  {
    nome: "Instituto Musumeci",
    papel: "Nova unidade",
    endereco: "R. Fernando Costa, 741 — Leme/SP",
    mapa: "R. Fernando Costa, 741 - Leme - SP",
    quando: "Início das atividades previsto para março de 2027",
    aberta: false,
    nota: "Nova unidade da Clínica Musumeci, em Leme.",
  },
  {
    nome: "Centro de Estudos da Clínica Musumeci",
    papel: "Nova unidade",
    endereco: "R. Joaquim Mourão, 820 — Leme/SP",
    mapa: "R. Joaquim Mourão, 820 - Leme - SP",
    quando: "Inauguração prevista para março de 2028",
    aberta: false,
    nota: "Espaço voltado a ensino, pesquisa e atualização em otorrinolaringologia.",
  },
];
