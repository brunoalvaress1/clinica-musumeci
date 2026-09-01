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

  // WhatsApp: somente números, com DDI 55 + DDD.
  // Confirme se o telefone fixo abaixo tem WhatsApp; se o WhatsApp for
  // um celular, troque apenas "whatsapp".
  whatsapp: "551935713126",
  phone: "+551935713126",
  phoneLabel: "(19) 3571-3126",

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
    // Vídeo de fundo do topo (Home). Troque por "/media/hero.mp4" ou outra URL.
    // heroVideo = desktop (alta resolução); heroVideoMobile = versão leve p/ celular.
    heroVideo:
      "https://videos.pexels.com/video-files/6502167/6502167-uhd_2732_1440_25fps.mp4",
    heroVideoMobile:
      "https://videos.pexels.com/video-files/6502167/6502167-sd_960_506_25fps.mp4",
    heroPoster: unsplash("1576091160399-112ba8d25d1d", 2000),
    hero: unsplash("1576091160399-112ba8d25d1d", 2000),

    recepcao: unsplash("1519494026892-80bbd2d6fd0d", 1400),
    consultorio: unsplash("1631217868264-e5b90bb7e133", 1400),
    audiometria: unsplash("1623376550867-76153536e55a", 1200),
    endoscopia: unsplash("1741174844812-c59239e677be", 1400),
    labirinto: unsplash("1581056771107-24ca5f033842", 1400),
    infantil: unsplash("1632053002928-1919605ee6f7", 1400),
    sono: unsplash("1531353826977-0941b4779a1c", 1400),
    procedimentos: unsplash("1584820927498-cfe5211fd8bf", 1400),
    equipe: unsplash("1516841273335-e39b37888115", 1400),

    // Fotos dos médicos (placeholder — troque por /media/doutor1.jpg etc.
    // O ideal são PNGs com fundo recortado/transparente).
    doutor1: unsplash("1612349316228-5942a9b489c2", 1100),
    doutor2: unsplash("1622253694238-3b22139576c6", 1100),
    doutor3: unsplash("1642975967602-653d378f3b5b", 1100),
  },

  // Vídeos curtos (placeholder — Pexels). Trocar por vídeos da clínica.
  video: {
    consultorio:
      "https://videos.pexels.com/video-files/8413486/8413486-hd_1920_1080_25fps.mp4",
    endoscopia:
      "https://videos.pexels.com/video-files/6130113/6130113-hd_1920_1080_30fps.mp4",
  },

  // Galeria "Conheça a clínica" — SÓ fotos do espaço: dentro, fora, equipamentos.
  // Placeholder (Unsplash). Troque por fotos reais (ex.: "/media/galeria/01.jpg").
  galeria: [
    { img: unsplash("1519494026892-80bbd2d6fd0d", 1500), cap: "Recepção" },
    { img: unsplash("1762625570087-6d98fca29531", 1400), cap: "Sala de espera" },
    { img: unsplash("1629909613654-28e377c37b09", 1400), cap: "Consultório equipado" },
    { img: unsplash("1777269749032-d8d458ae594d", 1400), cap: "Corredor" },
    { img: unsplash("1648224395331-06117e433549", 1400), cap: "Sala de exame" },
    { img: unsplash("1771574204208-b47e2d863bc5", 1400), cap: "Espera" },
    { img: unsplash("1567622153803-4526f47899d9", 1400), cap: "Iluminação de procedimento" },
    { img: unsplash("1648224394432-8830fec15349", 1400), cap: "Equipamentos" },
    { img: unsplash("1766299892683-d50398e31823", 1400), cap: "Monitorização" },
  ],

  social: {
    instagram: "",
    facebook: "",
  },
};

export const ADDRESS_LINE = `${SITE.address.street} — ${SITE.address.district}, ${SITE.address.city}/${SITE.address.state} · CEP ${SITE.address.zip}`;

export const MAPS_QUERY = encodeURIComponent(
  `${SITE.address.street} - ${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}, ${SITE.address.zip}`
);

export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
