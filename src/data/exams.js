// =========================================================
// Consultas, exames e procedimentos de otorrinolaringologia.
// Ajuste livremente com a lista real da clínica.
// Categorias: "consulta" | "audio" | "endo" | "otoneuro" | "sono" | "proc"
// =========================================================

export const CATEGORIES = [
  {
    id: "consulta",
    nome: "Consultas",
    icon: "stethoscope",
    img: "consultorio",
    desc: "Avaliação com médico otorrinolaringologista para adultos e crianças.",
    tagline: "avaliação completa de ouvido, nariz e garganta",
  },
  {
    id: "audio",
    nome: "Exames de audição",
    icon: "ear",
    img: "audiometria",
    desc: "Audiometria, imitanciometria e testes auditivos para todas as idades.",
    tagline: "audiometria e testes para todas as idades",
  },
  {
    id: "endo",
    nome: "Endoscopias",
    icon: "scan",
    img: "endoscopia",
    desc: "Nariz, garganta e laringe avaliados com vídeo em alta definição.",
    tagline: "nariz e garganta em vídeo, com laudo no dia",
  },
  {
    id: "otoneuro",
    nome: "Tontura e equilíbrio",
    icon: "activity",
    img: "labirinto",
    desc: "Investigação de labirintite, vertigem e zumbido.",
    tagline: "a origem da sua tontura, investigada a fundo",
  },
  {
    id: "sono",
    nome: "Ronco e apneia do sono",
    icon: "moon",
    img: "sono",
    desc: "Triagem e polissonografia para distúrbios do sono.",
    tagline: "ronco e apneia acompanhados de perto",
  },
  {
    id: "proc",
    nome: "Procedimentos",
    icon: "syringe",
    img: "procedimentos",
    desc: "Remoção de cerume, cauterização nasal e mais, em consultório.",
    tagline: "resolvido ali mesmo, no consultório",
  },
];

export const categoryName = (id) =>
  CATEGORIES.find((c) => c.id === id)?.nome ?? "";

export const EXAMS = [
  // ---------------- Consultas ----------------
  { id: "consulta-otorrino", cat: "consulta", nome: "Consulta otorrinolaringológica", desc: "Avaliação de ouvido, nariz e garganta, diagnóstico e conduta.", preparo: "Levar exames anteriores e a lista de medicamentos em uso." },
  { id: "consulta-infantil", cat: "consulta", nome: "Consulta otorrino infantil", desc: "Atendimento voltado a bebês e crianças.", preparo: "Levar a caderneta da criança e o teste da orelhinha, se houver." },
  { id: "retorno", cat: "consulta", nome: "Retorno / reavaliação", desc: "Acompanhamento de tratamento já iniciado.", preparo: "Trazer o resultado dos exames solicitados na consulta anterior." },
  { id: "teleorientacao", cat: "consulta", nome: "Teleorientação", desc: "Orientação inicial por vídeo para casos selecionados.", preparo: "Estar em ambiente reservado, com boa conexão e câmera." },

  // ---------------- Exames de audição ----------------
  { id: "audiometria", cat: "audio", nome: "Audiometria tonal e vocal", desc: "Mede o limiar auditivo e a compreensão da fala.", preparo: "Repouso auditivo de 14 horas (evitar sons altos e fones)." },
  { id: "imitanciometria", cat: "audio", nome: "Imitanciometria (impedanciometria)", desc: "Avalia o tímpano, o ouvido médio e o reflexo estapediano.", preparo: "Sem preparo. Informar cirurgias recentes no ouvido." },
  { id: "emissoes-otoacusticas", cat: "audio", nome: "Emissões otoacústicas (teste da orelhinha)", desc: "Triagem auditiva de recém-nascidos e bebês.", preparo: "Ideal com o bebê alimentado e dormindo." },
  { id: "bera", cat: "audio", nome: "BERA / PEATE", desc: "Potencial evocado auditivo de tronco encefálico.", preparo: "Crianças podem precisar de sono induzido — confirmar orientação médica." },
  { id: "audiometria-infantil", cat: "audio", nome: "Audiometria infantil (lúdica / condicionada)", desc: "Avaliação da audição por brincadeira, para crianças.", preparo: "Repouso auditivo de 14 horas, quando possível." },
  { id: "processamento-auditivo", cat: "audio", nome: "Avaliação do processamento auditivo central", desc: "Como o cérebro interpreta os sons — indicada em dificuldades escolares.", preparo: "Repouso auditivo e boa noite de sono. Idade mínima conforme protocolo." },

  // ---------------- Endoscopias ----------------
  { id: "nasofibro", cat: "endo", nome: "Nasofibrolaringoscopia", desc: "Endoscopia flexível de nariz, faringe e laringe.", preparo: "Sem preparo. Pode se alimentar normalmente antes." },
  { id: "videolaringo", cat: "endo", nome: "Videolaringoscopia", desc: "Avaliação detalhada das pregas vocais e da voz.", preparo: "Evitar refeição pesada na 1 hora anterior." },
  { id: "rinoscopia", cat: "endo", nome: "Endoscopia nasal (rinoscopia)", desc: "Exame das fossas nasais e da drenagem dos seios da face.", preparo: "Sem preparo." },
  { id: "degluticao", cat: "endo", nome: "Videoendoscopia da deglutição (FEES)", desc: "Avalia engasgos e dificuldade para engolir.", preparo: "Levar acompanhante. Jejum conforme orientação médica." },

  // ---------------- Tontura e equilíbrio ----------------
  { id: "vng", cat: "otoneuro", nome: "Videonistagmografia (VNG)", desc: "Exame do labirinto para tontura e vertigem.", preparo: "Suspender labirintíticos 48–72h (com aval médico). Sem maquiagem nos olhos. Evitar café e álcool 24h antes." },
  { id: "prova-calorica", cat: "otoneuro", nome: "Prova calórica", desc: "Testa cada labirinto com estímulo térmico.", preparo: "Mesmo preparo da videonistagmografia." },
  { id: "vhit", cat: "otoneuro", nome: "vHIT (teste do impulso cefálico)", desc: "Avalia o reflexo vestíbulo-ocular.", preparo: "Levar óculos ou lentes de uso habitual." },
  { id: "posturografia", cat: "otoneuro", nome: "Avaliação do equilíbrio (posturografia)", desc: "Mede a estabilidade postural e o risco de quedas.", preparo: "Roupas e calçados confortáveis." },

  // ---------------- Ronco e apneia do sono ----------------
  { id: "polissonografia", cat: "sono", nome: "Polissonografia", desc: "Estudo completo do sono para diagnóstico de apneia.", preparo: "Lavar o cabelo sem produtos. Evitar cochilos e cafeína no dia." },
  { id: "poligrafia", cat: "sono", nome: "Poligrafia respiratória domiciliar", desc: "Triagem da apneia com aparelho em casa.", preparo: "Seguir o passo a passo entregue com o equipamento." },
  { id: "ronco", cat: "sono", nome: "Avaliação de ronco e apneia", desc: "Consulta direcionada aos distúrbios do sono.", preparo: "Levar relato de quem dorme ao seu lado, se possível." },

  // ---------------- Procedimentos em consultório ----------------
  { id: "cerume", cat: "proc", nome: "Remoção de cerume / lavagem de ouvido", desc: "Retirada da cera com microscopia ou lavagem.", preparo: "Pingar óleo mineral ou solução indicada 2–3 dias antes ajuda." },
  { id: "cauterizacao", cat: "proc", nome: "Cauterização nasal", desc: "Tratamento de sangramentos nasais recorrentes.", preparo: "Evitar aspirina e anti-inflamatórios nos dias anteriores, com aval médico." },
  { id: "aspiracao", cat: "proc", nome: "Aspiração nasossinusal", desc: "Higiene nasal profissional em quadros de sinusite.", preparo: "Sem preparo." },
  { id: "aasi", cat: "proc", nome: "Adaptação de aparelho auditivo (AASI)", desc: "Seleção, molde e regulagem do aparelho auditivo.", preparo: "Trazer audiometria recente (até 6 meses)." },
];

export const examById = (id) => EXAMS.find((e) => e.id === id);
