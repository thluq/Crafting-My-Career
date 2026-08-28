// ============================================================
// PIXEL DREAMS — Game Data
// Todos os cenários, escolhas e configurações do jogo
// ============================================================

const TRAITS = [
  {
    id: 'analitico',
    name: 'Analítico',
    icon: '🔍',
    desc: 'Observador e metódico. Encontra padrões onde outros não veem.',
    bonus: '+2 Visão Crítica',
    penalty: '-1 Foco (perfeccionismo)',
    effects: { foco: -1, execucao: 0, visao: 2, adaptabilidade: 0 }
  },
  {
    id: 'inovador',
    name: 'Inovador',
    icon: '💡',
    desc: 'Criativo e ousado. Adora experimentar coisas novas.',
    bonus: '+2 Execução',
    penalty: '-1 Visão Crítica (pula verificações)',
    effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 0 }
  },
  {
    id: 'comunicativo',
    name: 'Comunicativo',
    icon: '💬',
    desc: 'Sociável e empático. Sabe trabalhar em equipe como ninguém.',
    bonus: '+2 Adaptabilidade',
    penalty: '-1 Execução (depende dos outros)',
    effects: { foco: 0, execucao: -1, visao: 0, adaptabilidade: 2 }
  }
];

const PHASES = [
  // ========== FASE 1: PLAN ==========
  {
    id: 'plan',
    name: 'PLANNING',
    subtitle: 'Sprint Planning',
    icon: '📋',
    color: '#4FC3F7',
    bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
    bgImage: 'assets/bg_plan.png',
    intro: 'Segunda-feira, 9h da manhã. Você acabou de entrar na call de Sprint Planning. Sofia, a Product Manager, está compartilhando a tela com dezenas de tickets novos.',
    scenarios: [
      {
        text: 'Sofia (PM): "Temos que entregar o novo módulo de pagamentos em duas semanas. Sei que o escopo tá um pouco nebuloso, mas a diretoria está pressionando. Alguém vê algum impedimento grave?"',
        choices: [
          {
            text: '"Sofia, sem documentação clara da API do parceiro, a gente pode travar no meio. Precisamos alinhar isso antes."',
            effects: { foco: 2, execucao: 0, visao: 2, adaptabilidade: 0 },
            feedback: 'Sofia anota a observação: "Bem pontuado. Vou cobrar o time de negócios para conseguir essa documentação até amanhã."'
          },
          {
            text: '"Sem problemas, Sofia! A gente começa a codar a interface hoje e vai descobrindo o resto no caminho."',
            effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 2 },
            feedback: 'Marcos, o Tech Lead, franze a testa. "Cuidado com essa pressa, mas gosto do seu otimismo."'
          },
          {
            text: 'Ficar em silêncio e esperar os devs mais experientes (Marcos ou Beto) responderem primeiro.',
            effects: { foco: 1, execucao: -1, visao: 0, adaptabilidade: 0 },
            feedback: 'Você prefere não se arriscar. Marcos acaba assumindo a responsabilidade de revisar o escopo.'
          },
          {
            text: '"Eu topo pegar essa task! Se a gente usar aquela biblioteca nova que eu estava estudando, dá pra acelerar bastante!"',
            effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 },
            feedback: 'Beto sorri: "Isso aí! Sangue no olho!". Mas Sofia parece um pouco cética sobre usar ferramentas não testadas.'
          }
        ]
      },
      {
        text: 'A reunião termina e você recebe o primeiro ticket: Configurar o ambiente local e subir o banco de dados. Você abre o README do projeto e...',
        choices: [
          {
            text: '"Nossa, isso tá bem desatualizado. Vou seguir passo a passo e ir atualizando o README para os próximos devs."',
            effects: { foco: 2, execucao: 1, visao: 2, adaptabilidade: 0 },
            feedback: 'Demorou mais que o esperado, mas agora o documento está impecável. Marcos agradeceu o esforço no chat.'
          },
          {
            text: 'Ignorar o README antigo, copiar os arquivos de configuração do Beto que já está com tudo rodando e partir pro código.',
            effects: { foco: -1, execucao: 3, visao: 0, adaptabilidade: 1 },
            feedback: 'Seu ambiente subiu em 10 minutos! Você já está com a IDE aberta.'
          },
          {
            text: '"Vou dar uma olhada na arquitetura do projeto no diagrama primeiro pra entender como esse banco se conecta com a API principal."',
            effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 },
            feedback: 'Você gastou um tempo estudando, mas agora entende o fluxo de dados perfeitamente.'
          }
        ]
      },
      {
        text: 'Beto (Sênior): "Ei, vi que você pegou a task da tela inicial de pagamento. Quer que eu faça um pair programming com você pra dar um gás inicial?"',
        choices: [
          {
            text: '"Claro, Beto! Vai ser ótimo pra eu pegar os padrões de código da equipe mais rápido."',
            effects: { foco: 1, execucao: 1, visao: 0, adaptabilidade: 2 },
            feedback: 'Vocês codam juntos por 2 horas. Você aprendeu atalhos novos que não conhecia!'
          },
          {
            text: '"Valeu Beto, mas prefiro tentar quebrar a cabeça sozinho um pouco primeiro. Se eu travar muito, te chamo!"',
            effects: { foco: 2, execucao: 0, visao: 1, adaptabilidade: 0 },
            feedback: 'Beto faz um joinha. Você passa a tarde imerso no código, desenvolvendo sua autonomia.'
          }
        ]
      }
    ]
  },

  // ========== FASE 2: DO ==========
  {
    id: 'do',
    name: 'CODING',
    subtitle: 'Mão no Código',
    icon: '💻',
    color: '#FF7043',
    bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)',
    bgImage: 'assets/bg_do.png',
    intro: 'A Sprint está na metade. O fone de ouvido está tocando sua playlist de foco, o café está quente e o terminal está aberto.',
    scenarios: [
      {
        text: 'Você está implementando a integração da API, mas percebe que a biblioteca recomendada pela Sofia não suporta um dos métodos necessários.',
        choices: [
          {
            text: 'Escrever uma função customizada do zero para contornar o problema e manter a biblioteca.',
            effects: { foco: 2, execucao: 2, visao: 0, adaptabilidade: 0 },
            feedback: 'Você suou a camisa, mas o código funcionou. Uma solução criativa e técnica.'
          },
          {
            text: '"Sofia, a biblioteca X não vai rolar. Encontrei a Y que faz tudo nativamente, mas vamos precisar mudar a documentação. Posso seguir?"',
            effects: { foco: 0, execucao: 0, visao: 2, adaptabilidade: 2 },
            feedback: 'Sofia demora a responder, mas concorda: "Se é mais seguro, mande bala. Mas me avise se o prazo mudar."'
          },
          {
            text: 'Deixar esse método específico comentado com um TODO e avançar com o resto da tela para entregar algo visual logo.',
            effects: { foco: -1, execucao: 3, visao: 0, adaptabilidade: 1 },
            feedback: 'A tela ficou pronta rápido e o time de design adorou ver! Mas a dívida técnica ficou pra depois...'
          }
        ]
      },
      {
        text: 'ALERTA NO SLACK! O servidor de homologação caiu de novo. Marcos manda no canal geral: "Alguém rodou algum script pesado no banco?"',
        choices: [
          {
            text: '"Fui eu, Marcos. Fui testar uma query de histórico e travou tudo. Como posso matar o processo daqui?"',
            effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 },
            feedback: 'Marcos responde rápido: "Tranquilo, acontece. Roda o comando X no terminal." O servidor volta em segundos.'
          },
          {
            text: 'Ignorar o chat. Você não tem certeza se foi você, e prefere continuar focado na sua feature enquanto alguém resolve.',
            effects: { foco: 2, execucao: 1, visao: -1, adaptabilidade: 0 },
            feedback: 'O servidor ficou fora por 20 minutos até Beto encontrar o problema. Ninguém brigou, mas o time perdeu tempo.'
          },
          {
            text: 'Rapidamente abrir os logs da AWS para investigar se a sua API causou o problema antes de falar qualquer coisa.',
            effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 0 },
            feedback: 'Você acha o erro no log: não foi a sua query! Você manda o print no grupo ajudando a resolver o mistério.'
          }
        ]
      },
      {
        text: 'Faltam dois dias pra fechar a Sprint. Beto te manda mensagem: "Cara, tô afogado aqui. Consegue pegar uma task de validação de formulário que era minha?"',
        choices: [
          {
            text: '"Manda pra cá, Beto! Fico até um pouco mais tarde hoje, mas a gente garante a Sprint."',
            effects: { foco: 0, execucao: 3, visao: 0, adaptabilidade: 1 },
            feedback: 'Beto fica extremamente agradecido. Você ganha muitos pontos com a equipe, mas o cansaço bate forte à noite.'
          },
          {
            text: '"Beto, se eu pegar isso agora, vou arriscar não entregar a integração da API com qualidade. Acho melhor não."',
            effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: -1 },
            feedback: 'Beto entende perfeitamente. Sua API ficou com código impecável, mesmo que a task dele atrase.'
          },
          {
            text: '"Posso pegar, mas me ensina aquele truque de RegEx que você usa, assim eu faço bem mais rápido."',
            effects: { foco: 0, execucao: 1, visao: 1, adaptabilidade: 2 },
            feedback: 'Vocês negociaram bem. Ele te explicou o Regex, você terminou sua parte e ainda salvou a dele!'
          }
        ]
      }
    ]
  },

  // ========== FASE 3: CHECK ==========
  {
    id: 'check',
    name: 'CODE REVIEW',
    subtitle: 'Revisão e Testes',
    icon: '🔍',
    color: '#AB47BC',
    bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)',
    bgImage: 'assets/bg_check.png',
    intro: 'Sexta-feira. Você abre um Pull Request (PR) do seu código para a branch principal. É hora de ser avaliado pelos seus pares.',
    scenarios: [
      {
        text: 'Marcos revisa seu PR e deixa 12 comentários. A maioria sobre pequenos padrões de indentação e nomes de variáveis, mas um deles diz: "Essa lógica no ForLoop vai dar gargalo em produção."',
        choices: [
          {
            text: '"Entendido, Marcos. Vou refatorar para usar Map e Filter, e já corrijo o estilo do código também."',
            effects: { foco: 1, execucao: 1, visao: 1, adaptabilidade: 2 },
            feedback: 'Você aceitou o feedback sem ego. O código novo ficou muito mais performático!'
          },
          {
            text: '"Marcos, a lógica do loop eu vi no StackOverflow e parecia bem otimizada pra esse caso. Quer que eu rode um teste de carga pra provar?"',
            effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: -1 },
            feedback: 'Marcos acha justo. O teste de carga mostra que ele tinha razão no final, mas a discussão técnica foi excelente.'
          },
          {
            text: 'Corrigir tudo em silêncio o mais rápido possível e pedir novo review para não atrasar a entrega.',
            effects: { foco: 2, execucao: 2, visao: 0, adaptabilidade: 0 },
            feedback: 'Tudo corrigido a jato! O PR foi aprovado, embora você nem tenha absorvido muito o porquê de cada mudança.'
          }
        ]
      },
      {
        text: 'Na etapa de testes da interface, o QA (Qualidade) reporta um bug: "No iPhone 11, o botão de pagar fica pela metade escondido atrás do teclado virtual."',
        choices: [
          {
            text: '"Putz, iPhone antigo sempre quebra o CSS. Vou tentar colocar uma media-query rápida pra esse tamanho de tela e seguir."',
            effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 },
            feedback: 'A correção rápida funcionou, mas o código CSS ficou um pouquinho mais sujo. O QA aprovou.'
          },
          {
            text: '"Isso deve ser um problema estrutural do nosso layout. Vou dar um passo pra trás e reescrever usando Flexbox fluido pra funcionar em tudo."',
            effects: { foco: 2, execucao: 0, visao: 2, adaptabilidade: 0 },
            feedback: 'Deu trabalho extra, mas resolveu não só esse problema, como previu falhas futuras em outras telas pequenas.'
          }
        ]
      },
      {
        text: 'No fim do dia, Sofia manda os resultados dos primeiros testes com usuários beta: "Galera, eles acharam o fluxo de pagamento incrível, mas disseram que a tela de sucesso tá muito sem graça."',
        choices: [
          {
            text: '"Que bom que a lógica funcionou! Depois o time de UX que lute com a tela de sucesso, a gente garantiu a segurança."',
            effects: { foco: 2, execucao: 0, visao: -1, adaptabilidade: 1 },
            feedback: 'Você manteve o foco nas suas prioridades de Dev back/front lógico.'
          },
          {
            text: '"Sofia, se eu adicionar uma biblioteca leve de animação de confetes, a gente entrega algo visualmente legal em meia horinha. Topa?"',
            effects: { foco: 0, execucao: 1, visao: 1, adaptabilidade: 2 },
            feedback: 'Sofia adorou a ideia! O confete foi a cereja do bolo que fez os clientes sorrirem.'
          },
          {
            text: '"Vou olhar as métricas do Heatmap pra ver quanto tempo eles ficam nessa tela de sucesso. Talvez a gente possa colocar um banner promocional nela."',
            effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 0 },
            feedback: 'Sua visão de negócios impressionou a Sofia! O banner aumentou o engajamento do app.'
          }
        ]
      }
    ]
  },

  // ========== FASE 4: ACT ==========
  {
    id: 'act',
    name: 'REFACTORING',
    subtitle: 'Mudança de Rota',
    icon: '⚙️',
    color: '#EF5350',
    bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)',
    bgImage: 'assets/bg_act.png',
    intro: 'Segunda semana. A diretoria fez uma reunião de emergência com um investidor. A Sofia vem até a equipe com uma feição tensa.',
    scenarios: [
      {
        text: 'Sofia (PM): "Má notícia, time. O parceiro de pagamentos mudou as regras de compliance ontem à noite. Precisamos adicionar autenticação em dois fatores na mesma tela que vocês já terminaram."',
        choices: [
          {
            text: 'Suspirar forte. "Ok, Sofia. Joga o ticket pra mim, eu varo a noite refatorando essa integração."',
            effects: { foco: 0, execucao: 3, visao: 0, adaptabilidade: 1 },
            feedback: 'Sua dedicação é inquestionável. Você entrega no prazo, a custo de algumas olheiras.'
          },
          {
            text: '"Espera, a gente pode usar o token do login inicial em vez de criar um 2FA novo só pro pagamento? Evitaria quebrar toda a UI."',
            effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 },
            feedback: 'Sofia arregala os olhos: "Isso é genial e salva semanas de trabalho!". Visão sistêmica pura!'
          },
          {
            text: '"Beleza! A gente cria um modal no meio da tela, assim não precisa mexer no layout que já tá pronto."',
            effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 3 },
            feedback: 'Solução ágil, barata e funcional. O time elogia sua flexibilidade para contornar a crise.'
          }
        ]
      },
      {
        text: 'Beto entra na call revoltado: "Isso é um absurdo! A gente passa 10 dias fazendo um código lindo pra ter que remendar tudo na última hora! Eu não aguento isso!"',
        choices: [
          {
            text: '"Concordo plenamente, Beto! É muita falta de respeito com o time técnico não alinharem isso antes."',
            effects: { foco: 0, execucao: -1, visao: 0, adaptabilidade: -1 },
            feedback: 'O clima fica tóxico. A equipe passa mais tempo reclamando do que resolvendo o problema.'
          },
          {
            text: '"Beto, respira. A gente salva a branch antiga no repositório. Pelo menos a gente aprendeu muito montando a arquitetura base."',
            effects: { foco: 1, execucao: 0, visao: 1, adaptabilidade: 2 },
            feedback: 'Você conseguiu acalmar os ânimos. Ver o lado bom trouxe a motivação de volta pra sala.'
          },
          {
            text: '"Bora focar no que a gente tem controle, Beto. Se a gente chorar agora o prazo não muda. Quer ajuda com o refactory da sua parte?"',
            effects: { foco: 2, execucao: 1, visao: 0, adaptabilidade: 1 },
            feedback: 'Pragmatismo que chama! Beto resmunga mas engole o choro e vocês voltam a codar forte.'
          }
        ]
      },
      {
        text: 'O prazo está se esgotando e o Marcos vira pra você: "A gente não vai conseguir entregar tudo. Ou a gente sobe sem os testes unitários da nova feature, ou atrasa o deploy pro cliente em dois dias."',
        choices: [
          {
            text: '"Eu voto em atrasar. Entregar código sem teste de pagamento é pedir pra ter prejuízo financeiro na madrugda."',
            effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 },
            feedback: 'Marcos assente: "Exato. Segurança em primeiro lugar. Vou alinhar o atraso com a diretoria."'
          },
          {
            text: '"Sobe sem os testes automatizados. Eu testo na mão tudo hoje à noite, a gente garante a entrega e eu faço os testes na próxima Sprint."',
            effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 2 },
            feedback: 'Arriscado, mas você assumiu a responsabilidade e entregou o valor para o cliente no prazo combinado!'
          }
        ]
      }
    ]
  },

  // ========== FASE 5: KAIZEN ==========
  {
    id: 'kaizen',
    name: 'RETROSPECTIVA',
    subtitle: 'Evolução Contínua',
    icon: '🌟',
    color: '#66BB6A',
    bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)',
    bgImage: 'assets/bg_kaizen.png',
    intro: 'A Sprint terminou. O módulo subiu e as métricas estão ótimas. A equipe se reúne numa videochamada descontraída para a Retrospectiva (Retro).',
    scenarios: [
      {
        text: 'Sofia abre o board da Retro: "Galera, mandaram muito bem! Mas vamos ser sinceros: o que deu errado nessa Sprint que precisamos melhorar?"',
        choices: [
          {
            text: '"A falha de comunicação com o parceiro lá do início quase nos custou o projeto. Precisamos criar um processo de análise de documentação antes de codar."',
            effects: { foco: 2, execucao: 0, visao: 3, adaptabilidade: 0 },
            feedback: 'Excelente análise de causa-raiz. O time decide implementar uma etapa de "Tech Design" antes das próximas Sprints.'
          },
          {
            text: '"A gente ficou muito dependente do Marcos pra aprovar PRs no Code Review. Precisamos diluir isso entre os outros devs."',
            effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 1 },
            feedback: 'Marcos concorda aliviado. Isso vai desafogar ele e dar mais autonomia para você e o Beto.'
          },
          {
            text: '"Acho que a gente codou muito e comemorou pouco. A gente se estressou atoa com a mudança no final, podíamos ter levado mais leve."',
            effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 3 },
            feedback: 'Risadas no chat. O time percebe que o clima estava muito pesado e decide marcar uma partida de jogo online toda sexta.'
          }
        ]
      },
      {
        text: 'Marcos te manda uma mensagem no privado: "Seu desempenho foi ótimo para as primeiras semanas. Quer focar em evoluir no quê para a próxima Sprint?"',
        choices: [
          {
            text: '"Quero mergulhar mais fundo em arquitetura de software e design patterns para evitar aquele gargalo no banco de dados."',
            effects: { foco: 2, execucao: 0, visao: 2, adaptabilidade: 0 },
            feedback: 'Marcos sorri. "Ótimo caminho. Vou te mandar uns artigos sobre Solid e Clean Architecture."'
          },
          {
            text: '"Quero pegar tickets mais difíceis e assumir mais entregas de código, quero produzir mais!"',
            effects: { foco: 0, execucao: 3, visao: 0, adaptabilidade: 1 },
            feedback: 'A fome de código é real! Você está se tornando uma máquina de execução.'
          },
          {
            text: '"Quero aprender a lidar melhor com o time de Produto e Negócios. Entender como a Sofia pensa as métricas."',
            effects: { foco: 0, execucao: 0, visao: 2, adaptabilidade: 2 },
            feedback: 'Um caminho brilhante! Desenvolvedores que entendem de negócios viram profissionais muito valiosos.'
          }
        ]
      },
      {
        text: 'A call está acabando. Sofia diz: "Pra fechar, uma palavra que defina essa Sprint pra vocês?"',
        choices: [
          {
            text: '"Resiliência."',
            effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 2 },
            feedback: 'As mudanças de última hora não te abalaram!'
          },
          {
            text: '"Foco."',
            effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: 0 },
            feedback: 'Organização foi o que manteve o barco flutuando.'
          },
          {
            text: '"Entrega."',
            effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 0 },
            feedback: 'Mão na massa que trouxe resultados concretos!'
          },
          {
            text: '"Aprendizado."',
            effects: { foco: 0, execucao: 0, visao: 2, adaptabilidade: 0 },
            feedback: 'Cada bug foi uma lição para o futuro.'
          }
        ]
      }
    ]
  }
];

// Perfis profissionais baseados nos dois maiores atributos
const PROFILES = {
  'foco-execucao': {
    name: 'Executor Estratégico',
    emoji: '🏗️',
    desc: 'Você combina planejamento sólido com capacidade de execução. Sabe o que fazer e faz acontecer! Profissionais assim são a espinha dorsal de qualquer empresa.'
  },
  'foco-visao': {
    name: 'Analista Visionário',
    emoji: '🔭',
    desc: 'Seu olhar atento e capacidade de organização te tornam excelente em identificar oportunidades e planejar o caminho. Ideal para cargos de estratégia e consultoria!'
  },
  'foco-adaptabilidade': {
    name: 'Líder Estratégico',
    emoji: '👑',
    desc: 'Você planeja com cuidado e se adapta quando necessário. Essa combinação é rara e muito valorizada em posições de liderança!'
  },
  'execucao-visao': {
    name: 'Solucionador Ágil',
    emoji: '⚡',
    desc: 'Você identifica problemas rapidamente e age para resolvê-los. Uma máquina de resolver desafios! Perfeito para ambientes dinâmicos.'
  },
  'execucao-adaptabilidade': {
    name: 'Inovador Resiliente',
    emoji: '🌊',
    desc: 'Faz acontecer e se adapta a qualquer cenário. Sua resiliência e proatividade te levam longe mesmo em ambientes turbulentos!'
  },
  'visao-adaptabilidade': {
    name: 'Mentor Natural',
    emoji: '🌱',
    desc: 'Seu olhar crítico combinado com empatia e adaptabilidade te tornam um excelente mentor e facilitador. As pessoas confiam em você!'
  }
};

// Dicas de melhoria para cada atributo (mensagem Kaizen!)
const IMPROVEMENT_TIPS = {
  foco: {
    name: 'Foco & Organização',
    icon: '📋',
    color: '#4FC3F7',
    low: 'Tente dividir grandes tarefas em etapas menores. Use listas e cronogramas. Cada pequeno passo conta!',
    high: 'Sua organização é um ponto forte! Continue refinando seus métodos e compartilhe com outros.'
  },
  execucao: {
    name: 'Execução',
    icon: '🔨',
    color: '#FF7043',
    low: 'Pratique mais a ação! Nem tudo precisa ser perfeito para começar. Feito é melhor que perfeito.',
    high: 'Você é uma pessoa de ação! Cuide para equilibrar velocidade com qualidade.'
  },
  visao: {
    name: 'Visão Crítica',
    icon: '🔍',
    color: '#AB47BC',
    low: 'Desenvolva o hábito de revisar e questionar resultados. Pergunte "por quê?" com mais frequência!',
    high: 'Seu olhar crítico é valioso! Use-o para ajudar outros a verem o que estão perdendo.'
  },
  adaptabilidade: {
    name: 'Adaptabilidade',
    icon: '🌿',
    color: '#66BB6A',
    low: 'Pratique flexibilidade! Quando algo não sair como planejado, respire e procure novos caminhos.',
    high: 'Sua capacidade de adaptação é inspiradora! Continue aberto(a) a mudanças e novos aprendizados.'
  }
};

// Personagens pré-definidos
const CHARACTERS = [
  {
    id: 'leo',
    name: 'Leo',
    gender: 'M',
    desc: 'Determinado e curioso',
    image: 'assets/avatar_leo.png',
    colors: { hair: '#3a2518', skin: '#f0c8a0', shirt: '#2196F3' }
  },
  {
    id: 'luna',
    name: 'Luna',
    gender: 'F',
    desc: 'Criativa e corajosa',
    image: 'assets/avatar_luna.png',
    colors: { hair: '#5c3317', skin: '#f0c8a0', shirt: '#E91E63' }
  }
];

// Carreiras disponíveis no jogo
const CAREERS = [
  {
    id: "dev",
    name: "Desenvolvedor(a) de Software",
    icon: "💻",
    desc: "Lide com código, bugs e arquitetura de sistemas.",
    available: true
  },
  {
    id: "marketing",
    name: "Especialista em Marketing",
    icon: "📈",
    desc: "Crie campanhas, analise métricas e lide com clientes.",
    available: false
  },
  {
    id: "design",
    name: "Designer Gráfico",
    icon: "🎨",
    desc: "Prototipagem, identidade visual e experiência do usuário.",
    available: false
  }
];
