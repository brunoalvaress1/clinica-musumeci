// =========================================================
// Exames realizados na Clínica Musumeci (otorrinolaringologia).
// Lista oficial informada pela clínica — ajuste `desc` e `preparo`
// conforme o protocolo interno.
// Categorias: "audio" | "otoneuro" | "reabilitacao" | "video"
// =========================================================

export const CATEGORIES = [
  {
    id: "audio",
    nome: "Audiologia",
    icon: "ear",
    img: "audiometria",
    desc: "Avaliação completa da audição, para todas as idades.",
    tagline: "audiometria e testes auditivos para todas as idades",
  },
  {
    id: "otoneuro",
    nome: "Equilíbrio e otoneurologia",
    icon: "activity",
    img: "labirinto",
    desc: "Investigação de tontura, vertigem e alterações do equilíbrio.",
    tagline: "a origem da sua tontura, investigada a fundo",
  },
  {
    id: "reabilitacao",
    nome: "Reabilitação auditiva",
    icon: "volume",
    img: "procedimentos",
    desc: "Aparelhos auditivos, treinamento auditivo e indicação de implantes.",
    tagline: "do aparelho auditivo ao implante coclear",
  },
  {
    id: "video",
    nome: "Exames por vídeo",
    icon: "scan",
    img: "endoscopia",
    desc: "Nariz, faringe e laringe avaliados com vídeo em alta definição.",
    tagline: "nariz, garganta e voz em vídeo",
  },
];

export const categoryName = (id) =>
  CATEGORIES.find((c) => c.id === id)?.nome ?? "";

export const EXAMS = [
  // ---------------- Audiologia ----------------
  {
    id: "audiometria-tonal",
    cat: "audio",
    nome: "Audiometria tonal",
    desc: "Mede o limiar auditivo em diferentes frequências, por via aérea e óssea.",
    preparo: "Repouso auditivo de 14 horas (evitar sons altos e fones de ouvido).",
  },
  {
    id: "audiometria-vocal-lrf",
    cat: "audio",
    nome: "Audiometria vocal — limiar de reconhecimento de fala (LRF)",
    desc: "Identifica o menor volume em que a fala é reconhecida.",
    preparo: "Repouso auditivo de 14 horas. Costuma ser feita junto da audiometria tonal.",
  },
  {
    id: "audiometria-vocal-iprf",
    cat: "audio",
    nome: "Audiometria vocal — índice percentual de reconhecimento de fala (IPRF)",
    desc: "Mede a porcentagem de palavras compreendidas em volume confortável.",
    preparo: "Repouso auditivo de 14 horas. Costuma ser feita junto da audiometria tonal.",
  },
  {
    id: "avaliacao-infantil-peep-show",
    cat: "audio",
    nome: "Avaliação audiológica infantil – Peep Show",
    desc: "Audiometria lúdica condicionada, para crianças pequenas.",
    preparo: "Levar a criança descansada e, quando possível, após repouso auditivo.",
  },
  {
    id: "audiometria-ocupacional",
    cat: "audio",
    nome: "Audiometria ocupacional",
    desc: "Avaliação auditiva para admissão, exame periódico e demissão (PCMSO).",
    preparo:
      "Repouso auditivo de 14 horas. Levar documento com foto e audiometrias anteriores.",
  },
  {
    id: "imitanciometria",
    cat: "audio",
    nome: "Imitanciometria",
    desc: "Avalia o tímpano, o ouvido médio e o reflexo estapediano.",
    preparo: "Sem preparo. Informar cirurgias recentes no ouvido.",
  },
  {
    id: "emissoes-otoacusticas",
    cat: "audio",
    nome: "Emissões otoacústicas (transiente e produto de distorção)",
    desc: "Testa a função das células da cóclea; usada também na triagem auditiva de bebês.",
    preparo: "Sem preparo. Bebês: ir alimentado e com sono.",
  },
  {
    id: "peate",
    cat: "audio",
    nome: "Potencial evocado do tronco cerebral (PEATE)",
    desc: "Avalia a via auditiva do nervo até o tronco cerebral; também conhecido como BERA.",
    preparo:
      "Lavar o cabelo sem creme ou óleo. Crianças podem precisar de sono induzido — confirmar orientação.",
  },
  {
    id: "processamento-auditivo-central",
    cat: "audio",
    nome: "Avaliação do processamento auditivo central (PAC)",
    desc: "Como o cérebro interpreta os sons — indicada em dificuldades escolares e de atenção auditiva.",
    preparo: "Repouso auditivo e boa noite de sono. Idade mínima conforme protocolo.",
  },
  {
    id: "acufenometria",
    cat: "audio",
    nome: "Acufenometria",
    desc: "Mensuração do zumbido (frequência e intensidade) para diagnóstico e acompanhamento.",
    preparo: "Repouso auditivo de 14 horas.",
  },
  {
    id: "microaudiometria",
    cat: "audio",
    nome: "Microaudiometria",
    desc: "Avaliação auditiva de triagem, mais rápida que a audiometria completa.",
    preparo: "Repouso auditivo quando possível.",
  },

  // ---------------- Equilíbrio e otoneurologia ----------------
  {
    id: "exame-otoneurologico-video-frenzel",
    cat: "otoneuro",
    nome: "Exame otoneurológico – Vídeo Frenzel",
    desc: "Pesquisa de nistagmo com óculos de vídeo, para investigar tontura e vertigem.",
    preparo:
      "Suspender medicação para labirinto 48–72 h antes, com aval do médico. Evitar café e álcool 24 h antes. Não usar maquiagem nos olhos.",
  },
  {
    id: "vectoeletronistagmografia",
    cat: "otoneuro",
    nome: "Vectoeletronistagmografia computadorizada",
    desc: "Registro computadorizado dos movimentos oculares para avaliar o labirinto (inclui prova calórica).",
    preparo:
      "Mesmo preparo do Vídeo Frenzel: suspender labirintíticos com aval médico, sem maquiagem nos olhos, sem café e álcool 24 h antes.",
  },

  // ---------------- Reabilitação auditiva ----------------
  {
    id: "adaptacao-aasi",
    cat: "reabilitacao",
    nome: "Adaptação de aparelhos auditivos convencionais",
    desc: "Seleção, molde, programação e acompanhamento do aparelho auditivo.",
    preparo: "Trazer audiometria recente (até 6 meses).",
  },
  {
    id: "treinamento-auditivo-formal",
    cat: "reabilitacao",
    nome: "Treinamento auditivo formal",
    desc: "Programa de estímulos para desenvolver as habilidades de processamento auditivo.",
    preparo: "Trazer a avaliação do processamento auditivo, se já tiver.",
  },
  {
    id: "analise-protese-ancorada-osso",
    cat: "reabilitacao",
    nome: "Análise de casos selecionados para candidatos a prótese ancorada no osso",
    desc: "Estudo de indicação de prótese auditiva ancorada no osso.",
    preparo: "Trazer exames de audição e de imagem já realizados.",
  },
  {
    id: "analise-implante-coclear",
    cat: "reabilitacao",
    nome: "Análise de casos selecionados para candidatos a implante coclear",
    desc: "Avaliação de candidatura ao implante coclear.",
    preparo: "Trazer exames de audição e de imagem já realizados.",
  },

  // ---------------- Exames por vídeo ----------------
  {
    id: "videofaringolaringoscopia",
    cat: "video",
    nome: "Videofaringolaringoscopia",
    desc: "Endoscopia de faringe e laringe com vídeo, avaliando voz e deglutição.",
    preparo: "Evitar refeição pesada na 1 hora anterior.",
  },
  {
    id: "videoendoscopia-nasossinusal",
    cat: "video",
    nome: "Videoendoscopia nasossinusal",
    desc: "Exame das fossas nasais e da drenagem dos seios da face.",
    preparo: "Sem preparo.",
  },
  {
    id: "videoendoscopia-degluticao",
    cat: "video",
    nome: "Videoendoscopia da deglutição",
    desc: "Avalia engasgos e dificuldade para engolir, com alimentos de teste (FEES).",
    preparo: "Levar acompanhante. Jejum conforme orientação da equipe.",
  },
  {
    id: "videoestroboscopia-laringe",
    cat: "video",
    nome: "Videoestroboscopia de laringe",
    desc: "Estudo detalhado da vibração das pregas vocais, para alterações da voz.",
    preparo: "Evitar refeição pesada na 1 hora anterior.",
  },
];

export const examById = (id) => EXAMS.find((e) => e.id === id);
