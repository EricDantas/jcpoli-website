
const Courses_Agronomia = [
  {
    title: "Mapeamento com uso de Drones (40 vagas)",
    instructor: "Murilo Raphael Cardoso",
    institution: "SEMAD (Goiás)",
    desc: `Apenas 40 vagas`,
    date: "11/05",
    time: "14:00-16:45",
    place: "Espaço de Palestras ITS (Campus II)"
  }, 
  
]

const Courses_Civil = [
  {
    title: "Inspeção em obras de infraestrutura: pontes, viadutos, barragens e usinas hidrelétricas",
    instructor: "Profa. Rosana Lucas de Melo Brandão",
    institution: "PUC Goiás",
    desc: `XXXXXXX`,
    date: "09/05",
    time: "10:00-12:00",
    place: "Auditório 3, área II"
  }, 
  {
    title: "Criação de apresentações de trabalhos científicos",
    instructor: "Profa Luri Sabina Cosme da Silva Matos",
    institution: "PUC Goiás",
    desc: `XXXXXXX`,
    date: "09/05",
    time: "15:00-16:30",
    place: "Online: Microsoft Teams"
  },  
  {
    title: "Smath Studio: aplicações em cálculos de Engenharia",
    instructor: "Prof. Me. Antônio Manuel Corado Pombo Fernandes",
    institution: "PUC Goiás",
    desc: `Requisito: Realizar download e instalação prévia do Smath Studio pelo link https://en.smath.com/view/SMathStudio/summary `,
    date: "10/05",
    time: "14:00-18:00",
    place: "Online: Microsoft Teams"
  },
  {
    title: "Simulação de degradação e ensaios de desempenho como ferramentas para a inspeção predial",
    instructor: "Prof. Me. Antônio Manuel Corado Pombo Fernandes",
    institution: "PUC Goiás",
    desc: `XXXXXXXXXXXXX`,
    date: "11/05",
    time: "10:00-12:00",
    place: "Auditório 3, área II"
  },
  {
    title: "Inspeção em protótipos",
    instructor: "Prof. Me. Antônio Manuel Corado Pombo Fernandes",
    institution: "PUC Goiás",
    desc: `XXXXXXXXXXXXX`,
    date: "11/05",
    time: "15:00-16:00",
    place: "Teatro de Arena, área III"
  },
]

const Courses_Computacao = [
  {
    title: '"Na minha máquina funciona": Desenvolvendo em docker para nunca mais ter este problemas',
    instructor: "Luan Fernandes Barcelos",
    institution: "Syncode Systemas",
    desc: `Motivação de uso e introdução ao docker. Criando containers a partir de imagens oficiais. 
        Criando suas próprias imágens. Comunicação de maquina local com docker e docker com docker. 
        Encerramento com exemplo de uso real.`,
    date: "09/05",
    time: "17:00-18:30",
    place: "LAB101-C, Área II",
  },

//======================= DIA 11/05 ==============================//

  {
    title: 'Atividade: Maratona de Programação',
    instructor: "Prof Alexandre/Prof.ª Carmen",
    institution: "PUC Goiás",
    desc: ``,
    date: "11/05",
    time: "18:00-22:00",
    place: "LAB-C, Área II",
  },
]

const Courses_Producao = [
  {
    title: "OFICINA: Interpretação de Mapa Fluxo de Valor - uma abordagem prática",
    instructor: "Enga. de Produção Mariana do Prado e Silva",
    institution: "IFG - Senador Canedo",
    desc: `Apresentação de UX, da empresa e de vagas.`,
    date: "10/05",
    time: "08:00-09:30",
    place: "AUD.2, Área II",
  },
]

const Courses_Caer = [
  {
    title: "Planejamento de Voo",
    instructor: "Salmen Chaquip Bukzem",
    institution: "PUC Goiás",
    desc: ``,
    date: "10/05",
    time: "13:30-17:00",
    place: "AUD.2, Área II",
  },
  {
    title: "Estrutura do Espaço Aéreo Brasileiro",
    instructor: "Salmen Chaquip Bukzem",
    institution: "PUC Goiás",
    desc: ``,
    date: "11/05",
    time: "13:30-17:00",
    place: "AUD.2, Área II",
  },
]


export const miniCourses_Section = [
  {
    curso: "Agronomia",
    minicurso: Courses_Agronomia,
  },
  {
    curso: "CAER",
    minicurso: Courses_Caer
  },
  {
    curso: "Civil",
    minicurso: Courses_Civil
  },
  {
    curso: "Computacao",
    minicurso: Courses_Computacao
  },
  {
    curso: "Producao",
    minicurso: Courses_Producao
  },

]