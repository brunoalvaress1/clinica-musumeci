// Conteúdo editorial do site (textos ilustrativos — revise antes de publicar).

// `logo` aponta para /public/logos/<arquivo> (SVG ou PNG com fundo transparente).
// Enquanto o arquivo não existir, o card mostra o nome num selo padronizado.
export const CONVENIOS = [
  {
    nome: "Unimed",
    logo: "/logos/unimed.png",
    nota: "Exames de otorrino conforme o plano e a autorização.",
  },
  {
    nome: "Santa Casa",
    logo: "/logos/santacasa.png",
    nota: "Atendimento conforme o convênio Santa Casa e a guia autorizada.",
  },
  {
    nome: "Particular",
    logo: null,
    nota: "Sem convênio: formas de pagamento e valores pelo WhatsApp.",
  },
];

export const CONVENIO_OPTIONS = [
  "Particular",
  "Unimed",
  "Santa Casa",
  "Outro (informo na conversa)",
];

// PLACEHOLDER — troque nomes, CRM, textos e fotos pelos dados reais.
// O ideal são fotos em PNG com fundo recortado/transparente (só o médico).
export const DOUTORES = [
  {
    nome: "Dr. Paulo Musumeci",
    crm: "CRM-SP 00.000 · RQE 0000",
    titulo: "Otorrinolaringologia · nariz e seios da face",
    resumo:
      "Diagnóstico e tratamento de obstrução nasal, rinite, sinusite crônica e desvio de septo, com endoscopia nasal no próprio consultório.",
    focos: ["Rinite e sinusite", "Desvio de septo", "Endoscopia nasal"],
    img: "doutor1",
  },
  {
    nome: "Dr. Ricardo Almeida",
    crm: "CRM-SP 00.000 · RQE 0000",
    titulo: "Otorrinolaringologia · ouvido e audição",
    resumo:
      "Avaliação de perda auditiva, zumbido, tontura e labirintite, com audiometria e exames de equilíbrio realizados na clínica.",
    focos: ["Tontura e labirintite", "Zumbido", "Perda auditiva"],
    img: "doutor2",
  },
  {
    nome: "Dr. André Lima",
    crm: "CRM-SP 00.000 · RQE 0000",
    titulo: "Otorrinolaringologia · garganta e voz",
    resumo:
      "Avaliação de rouquidão e distúrbios da voz e da deglutição, com videofaringolaringoscopia e videoestroboscopia de laringe realizadas na clínica.",
    focos: ["Rouquidão e voz", "Deglutição", "Exames por vídeo"],
    img: "doutor3",
  },
];

// Missão, visão, valores e compromisso — texto institucional da clínica.
export const PRINCIPIOS = [
  {
    titulo: "Nossa Missão",
    icon: "badge-check",
    texto:
      "Oferecer atendimento especializado, unindo excelência técnica, atualização permanente e cuidado humanizado.",
  },
  {
    titulo: "Nossa Visão",
    icon: "activity",
    texto:
      "Evoluir continuamente para oferecer sempre o melhor cuidado e as melhores soluções aos nossos pacientes.",
  },
  {
    titulo: "Nossos Valores",
    icon: "heart-handshake",
    texto: "Ética, respeito, humanização, conhecimento e trabalho em equipe.",
  },
  {
    titulo: "Nosso Compromisso",
    icon: "stethoscope",
    texto:
      "Cuidar de cada paciente com atenção, competência e uma equipe integrada, sempre em busca do melhor resultado.",
  },
];

export const STEPS = [
  {
    n: "01",
    titulo: "Escolha o exame",
    texto: "Navegue pela lista e toque em “Adicionar ao pedido”.",
  },
  {
    n: "02",
    titulo: "Envie pelo WhatsApp",
    texto: "O site monta a mensagem com o preparo de cada item.",
  },
  {
    n: "03",
    titulo: "Confirme e compareça",
    texto: "A equipe confirma horário, convênio e valores.",
  },
];

export const DIFERENCIAIS = [
  { icon: "badge-check", titulo: "Laudos com especialistas", texto: "Exames realizados e laudados por otorrinolaringologistas e fonoaudiólogas." },
  { icon: "ear", titulo: "Exames no mesmo lugar", texto: "Audiologia, equilíbrio, reabilitação auditiva e exames por vídeo num só endereço." },
  { icon: "baby", titulo: "Do bebê ao idoso", texto: "Da triagem auditiva infantil ao cuidado da audição na terceira idade." },
  { icon: "clock", titulo: "Laudo no mesmo dia", texto: "Boa parte dos exames sai no dia da realização." },
];

export const STATS = [
  { valor: 30, sufixo: "+", label: "anos em ouvido, nariz e garganta" },
  { valor: 21, sufixo: "", label: "exames no mesmo endereço" },
  { valor: 2, sufixo: "", label: "convênios + atendimento particular" },
  { valor: 98, sufixo: "%", label: "de pacientes que indicam" },
];

export const TESTIMONIALS = [
  {
    texto:
      "Marquei pela mensagem num domingo, fiz a audiometria no mesmo dia e saí com o laudo em mãos.",
    autor: "Patrícia S.",
    cidade: "Leme/SP",
  },
  {
    texto:
      "Fiz a audiometria e o exame de labirinto no mesmo lugar, sem ficar rodando por outras clínicas. Atendimento muito atencioso.",
    autor: "Antônio C.",
    cidade: "Santa Cruz da Conceição/SP",
  },
  {
    texto:
      "A videofaringolaringoscopia foi bem mais rápida do que eu imaginava e recebi o laudo com as imagens no mesmo dia.",
    autor: "Juliana M.",
    cidade: "Leme/SP",
  },
];

export const FAQ = [
  {
    q: "Preciso de pedido médico para fazer audiometria?",
    a: "Para agendar, não. Leve o pedido se já tiver — ele ajuda na autorização do convênio.",
  },
  {
    q: "A videofaringolaringoscopia dói?",
    a: "É rápida, feita no consultório com anestésico local no nariz. Causa só um leve incômodo, sem sedação.",
  },
  {
    q: "Estou com tontura. Qual exame fazer?",
    a: "Leve o pedido do seu médico. Fazemos o exame otoneurológico (Vídeo Frenzel) e a vectoeletronistagmografia computadorizada aqui mesmo.",
  },
  {
    q: "Vocês atendem crianças?",
    a: "Sim: avaliação audiológica infantil (Peep Show), emissões otoacústicas e PEATE, com equipe acostumada ao público infantil.",
  },
];
