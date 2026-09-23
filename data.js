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

const CAREER_PHASES = {
  dev: [
    // ========== FASE 1: PLAN ==========
    {
      id: 'plan',
      name: 'PLANNING',
      subtitle: 'Sprint Planning',
      icon: '📋',
      color: '#4FC3F7',
      bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
      bgImage: 'assets/bg_plan.png',
      intro: 'Segunda-feira, 9h da manhã. Você acabou de entrar na call de Sprint Planning. Sofia, a coordenadora, está compartilhando a tela com as tarefas do projeto.',
      scenarios: [
        {
          text: 'Sofia: "Temos que entregar a nova página do site em duas semanas. A diretoria quer pra logo. Alguém acha que vai dar problema?"',
          choices: [
            {
              text: '"Sofia, sem regras claras de como fazer, a gente pode travar no meio. Precisamos alinhar isso antes."',
              effects: { foco: 2, execucao: 0, visao: 2, adaptabilidade: 0 },
              feedback: 'Sofia anota a observação: "Bem pontuado. Vou cobrar o time de negócios para conseguir essa documentação até amanhã."'
            },
            {
              text: '"Sem problemas, Sofia! A gente começa a fazer o visual hoje e vai descobrindo o resto no caminho."',
              effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 2 },
              feedback: 'Marcos, o líder do grupo, franze a testa. "Cuidado com essa pressa, mas gosto do seu otimismo."'
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
      intro: 'A Sprint terminou. O módulo subiu e as métricas estão ótimas. A equipe se reúne numa videochamada descontraída para a Reunião de Avaliação (Retro).',
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
              text: '"A gente ficou muito dependente do Marcos pra aprovar PRs no Revisão de Código. Precisamos diluir isso entre os outros devs."',
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
  ],
  astronauta: [
    {
      id: 'plan', name: 'PLAN', subtitle: 'Alarme na Escuridão de Órbita', icon: '📋', color: '#4FC3F7', bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)', bgImage: 'assets/bg_astronauta.png',
      intro: 'A Terra é uma esfera azul brilhante lá fora. Você está no Módulo de Comando quando o painel pisca em luzes amarelas e um bipe contínuo ecoa pela cabine: "Consumo anormal de Oxigênio no Setor 2. Queda de 12% nos últimos minutos." Não há fogo visível, mas a taxa está caindo. Toda a tripulação olha para você esperando um direcionamento.',
      scenarios: [
        {
          text: 'Questão 1.1: O alarme começou a apitar! Qual sua atitude imediata?', choices: [
            { text: 'A) Isolar a linha no painel e analisar os dados de consumo recentes.', effects: { foco: 3, execucao: -1, visao: 1, adaptabilidade: 0 }, feedback: 'Análise metódica. Entende o problema, mas o ar continua vazando.' },
            { text: 'B) Vestir a máscara e fechar as válvulas manuais de imediato.', effects: { foco: 0, execucao: 3, visao: -2, adaptabilidade: 0 }, feedback: 'Ação rápida. Estanca a urgência, mas agiu sem diagnóstico completo.' },
            { text: 'C) Conectar o tablet para verificar se é falha no sensor ou vazamento real.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Verificação. Evita ações drásticas por conta de alarme falso.' },
            { text: 'D) Ejetar o Setor 2 inteiro no vácuo do espaço!', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Extremo! Eliminou o vazamento e metade dos mantimentos da nave junto.' }
          ]
        },
        {
          text: 'Questão 1.2: Fissura confirmada no duto. Como organiza o plano de reparo?', choices: [
            { text: 'A) Mapear a sequência no manual e dividir tarefas antes da ação.', effects: { foco: 3, execucao: -1, visao: 0, adaptabilidade: 0 }, feedback: 'Estruturado. Garante segurança e evita erros, mas consome minutos vitais.' },
            { text: 'B) Aplicar a resina de vedação direto no duto para fechar logo.', effects: { foco: -1, execucao: 3, visao: 0, adaptabilidade: 0 }, feedback: 'Ágil. Resolve na hora, mas sem plano pode cobrir partes indevidas.' },
            { text: 'C) Usar fita flexível como selo temporário e planejar o conserto depois.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Contenção. Ganha tempo de planejamento sem perder ar.' },
            { text: 'D) Tapar o buraco com chiclete espacial e buscar tutoriais na internet.', effects: { foco: -2, execucao: 0, visao: -2, adaptabilidade: 0 }, feedback: 'Improviso ruim. O chiclete voou com a pressão e não há Wi-Fi aqui.' }
          ]
        },
        {
          text: 'Questão 1.3: Para reparar o duto com segurança, como gerenciar a eletricidade?', choices: [
            { text: 'A) Desligar luzes e lazer, mantendo o suporte de vida ativo.', effects: { foco: 2, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Priorização. Corta o supérfluo sem afetar o essencial.' },
            { text: 'B) Desligar a chave geral e trabalhar no escuro total.', effects: { foco: -2, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Precaução extrema. Zero risco elétrico, mas dificulta o conserto no breu.' },
            { text: 'C) Usar o medidor e desligar apenas o fio exato da solda.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: -1 }, feedback: 'Cirúrgico. Mínimo impacto na nave, mas exige medições minuciosas.' },
            { text: 'D) Redirecionar a carga do setor para as baterias reserva.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 2 }, feedback: 'Uso inteligente. Mantém os sistemas ativos sem parar o trabalho.' }
          ]
        },
        {
          text: 'Questão 1.4: Tudo pronto para a execução. Qual o seu alinhamento final?', choices: [
            { text: 'A) Fazer um briefing de 1 minuto repassando papéis e segurança.', effects: { foco: 3, execucao: 0, visao: 0, adaptabilidade: 1 }, feedback: 'Alinhamento. Garante clareza total e reduz o risco de acidentes.' },
            { text: 'B) Dar o sinal de início imediato sem perder tempo.', effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 0 }, feedback: 'Foco no tempo. Ganha segundos, mas amplia o risco de falha operacional.' },
            { text: 'C) Rechecar os níveis de oxigênio para ver se o vazamento estabilizou.', effects: { foco: 0, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Conferência. Confirma os indicadores antes de intervir fisicamente.' },
            { text: 'D) Pedir uma dancinha para descontrair a equipe antes da solda.', effects: { foco: -2, execucao: 0, visao: 0, adaptabilidade: 2 }, feedback: 'Fora de hora. Relaxou o time, mas perderam dois minutos vitais de ar.' }
          ]
        }
      ]
    },
    {
      id: 'do', name: 'DO', subtitle: 'Caminhada no Espaço Profundo', icon: '💻', color: '#FF7043', bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)', bgImage: 'assets/bg_astro_do.png',
      intro: 'Lado de fora da estação. Ancorado por um cabo, você deve trocar um módulo de comunicação antes que a nave entre na sombra orbital gelada.',
      scenarios: [
        {
          text: 'Questão 2.1: Como inicia o desacoplamento da peça danificada?', choices: [
            { text: 'A) Conferir as travas do traje e soltar os parafusos na ordem do manual.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Padronizado. Garante segurança e evita empenar a estrutura.' },
            { text: 'B) Usar a parafusadeira no torque máximo para retirar tudo rápido.', effects: { foco: 0, execucao: 3, visao: -2, adaptabilidade: 0 }, feedback: 'Força bruta. Ganha tempo, mas pode espanar as roscas do casco.' },
            { text: 'C) Inspecionar os parafusos com a lanterna antes de aplicar força.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Inspeção. Identifica danos antes de estragar a ferramenta.' },
            { text: 'D) Prender a peça antiga a um cabo auxiliar antes de soltar a trava final.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Segurança. Impede que a peça solta vire lixo espacial perigoso.' }
          ]
        },
        {
          text: 'Questão 2.2: O painel novo encaixou, mas o conector não trava. O que faz?', choices: [
            { text: 'A) Examinar o interior do conector com a lanterna em busca de sujeira.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Investigação. Descobre a causa antes de forçar o encaixe.' },
            { text: 'B) Firmar os pés e empurrar o conector com força até travar.', effects: { foco: -1, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Impulso. Pode funcionar, mas arrisca entortar os pinos internos.' },
            { text: 'C) Aplicar lubrificante térmico na borda para facilitar o deslize.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Prático. Contorna a rigidez provocada pelo frio extremo.' },
            { text: 'D) Dar uma martelada com a chave inglesa para encaixar na marra.', effects: { foco: -2, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Dano crítico. O estalo que você ouviu foi a placa nova se partindo ao meio.' }
          ]
        },
        {
          text: 'Questão 2.3: A nave entrou na sombra orbital e ficou tudo breu. Qual sua atitude?', choices: [
            { text: 'A) Ativar o aquecimento do traje, acender os refletores e continuar.', effects: { foco: 0, execucao: 3, visao: -1, adaptabilidade: 0 }, feedback: 'Foco na entrega. Mantém a tarefa em andamento apesar da mudança.' },
            { text: 'B) Pausar 30 segundos, ajustar a visão e confirmar contato via rádio.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Segurança. Garante consciência do ambiente antes de prosseguir no escuro.' },
            { text: 'C) Soltar o cabo de segurança para enxergar a peça por outro ângulo.', effects: { foco: -4, execucao: 0, visao: -4, adaptabilidade: 0 }, feedback: 'Deriva espacial. Sem cabo, você flutuou para longe e precisou de resgate.' },
            { text: 'D) Reajustar a luz do capacete para focar direto na ponta das mãos.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Ajuste fino. Otimiza a iluminação para manter a precisão manual.' }
          ]
        },
        {
          text: 'Questão 2.4: Módulo instalado com sucesso. Qual o último passo antes de retornar?', choices: [
            { text: 'A) Testar o envio de dados e fixar a capa de proteção contra radiação.', effects: { foco: 3, execucao: 0, visao: 0, adaptabilidade: 1 }, feedback: 'Validação. Garante o funcionamento e a proteção antes de fechar.' },
            { text: 'B) Prender todas as ferramentas na bolsa e checar se nada ficou solto.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Organização. Evita perda de material e colisões no casco.' },
            { text: 'C) Tirar uma selfie com a Terra ao fundo e voltar para a cabine.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Rápido. Celebra e agiliza o retorno, mas pula checagens finais.' },
            { text: 'D) Aplicar um lacre extra nos suportes para conter vibrações.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 2 }, feedback: 'Garantia. Adiciona proteção preventiva contra folgas futuras.' }
          ]
        }
      ]
    },
    {
      id: 'check', name: 'CHECK', subtitle: 'Análise dos Indicadores', icon: '🔍', color: '#AB47BC', bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)', bgImage: 'assets/bg_astro_check.png',
      intro: 'De volta à cabine. O painel novo funciona, mas os gráficos mostram consumo 25% maior de bateria. Há um gasto invisível ocorrendo.',
      scenarios: [
        {
          text: 'Questão 3.1: Como investiga esse pico de consumo de energia?', choices: [
            { text: 'A) Cruzar o horário do pico com a oscilação de temperatura externa.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Cruzamento de dados. Revela correlações invisíveis entre ambiente e sistema.' },
            { text: 'B) Comparar o gráfico atual com as margens permitidas no manual.', effects: { foco: 2, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Padrão. Confirma se o desvio está dentro dos limites aceitáveis.' },
            { text: 'C) Pergunta ao colega se sentiu resistência física ao encaixar o cabo.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Fator humano. Busca detalhes práticos que o sensor não registrou.' },
            { text: 'D) Desligar as telas, acender velas e fingir que nada aconteceu.', effects: { foco: 0, execucao: 0, visao: -3, adaptabilidade: -3 }, feedback: 'Perigoso. As velas gastaram o oxigênio e acionaram os alarmes de fogo.' }
          ]
        },
        {
          text: 'Questão 3.2: Causa achada: folga no cabo fez o aquecedor trabalhar em dobro. E agora?', choices: [
            { text: 'A) Registrar a relação: aperto apressado gerou folga e alto consumo.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Causa-raiz. Identifica a origem exata do problema para evitar repetição.' },
            { text: 'B) Ajustar o software para mandar carga extra nas fases de sombra.', effects: { foco: 0, execucao: 0, visao: -1, adaptabilidade: 2 }, feedback: 'Paliativo. Trata o sintoma (falta de carga), mas mantém a folga no cabo.' },
            { text: 'C) Calcular quantos dias a bateria dura mantendo esse nível de consumo.', effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: 0 }, feedback: 'Impacto. Avalia a gravidade no tempo para definir a urgência.' },
            { text: 'D) Deixar em observação e reavaliar os sensores em 48 horas.', effects: { foco: 0, execucao: 1, visao: 1, adaptabilidade: 0 }, feedback: 'Lento. Coleta mais dados, mas mantém o desperdício ativo por dois dias.' }
          ]
        },
        {
          text: 'Questão 3.3: Como transmitir esse parecer técnico para a base na Terra?', choices: [
            { text: 'A) Enviar relatório estruturado: evento, dados, causa e solução.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Clareza. Fornece informações precisas para tomada de decisão em solo.' },
            { text: 'B) Mudar o status para "Operacional com Observações" no sistema.', effects: { foco: -1, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Resumido. Rápido, mas deixa a base sem os detalhes da falha.' },
            { text: 'C) Enviar nota sugerindo alteração no design da trava para novos lotes.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 2 }, feedback: 'Melhoria. Foca na origem industrial para corrigir projetos futuros.' },
            { text: 'D) Culpar um alienígena invisível por ter mexido no conector.', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Invenção. A base ignorou o relato e agendou um exame psiquiátrico para você.' }
          ]
        },
        {
          text: 'Questão 3.4: Como expande essa verificação para outros setores da nave?', choices: [
            { text: 'A) Vistoriar conectores de setores vizinhos em busca de folgas.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Prevenção. Aplica a lição em outros pontos para proteger a nave toda.' },
            { text: 'B) Revisar a agenda de manutenção da semana para manter as checagens.', effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: 0 }, feedback: 'Rotina. Garante o cumprimento estrito do calendário de inspeção.' },
            { text: 'C) Explicar a descoberta ao time no almoço para alertar sobre os encaixes.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Disseminação. Conscientiza a equipe de forma simples e direta.' },
            { text: 'D) Arquivar a análise na pasta do sistema e ir para a próxima tarefa.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Encerramento. Salva o histórico, mas perde a chance de agir preventivamente.' }
          ]
        }
      ]
    },
    {
      id: 'act', name: 'ACT', subtitle: 'Padronizando o Aprendizado', icon: '⚙️', color: '#EF5350', bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)', bgImage: 'assets/bg_astro_act.png',
      intro: 'A Agência Espacial solicitou a criação de um novo padrão oficial para evitar que conectores fiquem com folga nas próximas missões.',
      scenarios: [
        {
          text: 'Questão 4.1: Qual regra definitiva você cria para a montagem?', choices: [
            { text: 'A) Atualizar o manual com checagem obrigatória de alinhamento antes da trava.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Documentação. Formaliza a nova regra na instrução oficial de trabalho.' },
            { text: 'B) Criar um gabarito em 3D que sirva de trava física antierro (Poka-Yoke).', effects: { foco: -1, execucao: 1, visao: 0, adaptabilidade: 3 }, feedback: 'À prova de erro. Cria uma trava física que impede a montagem incorreta.' },
            { text: 'C) Inserir um alerta digital no visor do capacete lembrando de checar o aperto.', effects: { foco: 2, execucao: 1, visao: 0, adaptabilidade: 0 }, feedback: 'Aviso. Usa a tecnologia para orientar o operador no momento certo.' },
            { text: 'D) Proibir ferramentas e fazer as manutenções "na base da torcida".', effects: { foco: -3, execucao: 0, visao: 0, adaptabilidade: -4 }, feedback: 'Sem cabimento. Otimismo não impede peças mecânicas de se soltarem.' }
          ]
        },
        {
          text: 'Questão 4.2: Um veterano reclama que o novo padrão leva 3 minutos a mais. O que faz?', choices: [
            { text: 'A) Mostrar dados de como 3 minutos evitam semanas de estresse na bateria.', effects: { foco: 0, execucao: -1, visao: 3, adaptabilidade: 0 }, feedback: 'Fatos. Convence demonstrando o ganho de segurança versus o tempo investido.' },
            { text: 'B) Propor um teste no simulador comparando o método antigo e o novo.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Prática. Envolve o crítico no teste para que ele comprove a eficácia.' },
            { text: 'C) Redesenhar a checagem usando trava rápida para durar só 30 segundos.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 2 }, feedback: 'Otimização. Mantém o processo seguro sem perdas de eficiência.' },
            { text: 'D) Desafiar o veterano para um braço de ferro: quem vencer decide a regra.', effects: { foco: -2, execucao: 0, visao: -2, adaptabilidade: 0 }, feedback: 'Inútil. Força física não altera o funcionamento elétrico dos conectores.' }
          ]
        },
        {
          text: 'Questão 4.3: Como avaliar se o novo padrão está funcionando na rotina?', choices: [
            { text: 'A) Acompanhar a próxima manutenção de um colega e pedir feedback.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 3 }, feedback: 'Acompanhamento. Observa a execução prática e corrige dificuldades do time.' },
            { text: 'B) Monitorar o consumo de energia nas semanas seguintes para checar estabilidade.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Métricas. Mede a consistência dos resultados ao longo do tempo.' },
            { text: 'C) Registrar a data e hora de início do novo padrão no diário de bordo.', effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: 0 }, feedback: 'Registro. Mantém o histórico exato de quando o processo mudou.' },
            { text: 'D) Fazer uma reunião rápida para ouvir ideias de ajuste da instrução.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 }, feedback: 'Melhoria. Coleta sugestões rápidas para refinar a instrução.' }
          ]
        },
        {
          text: 'Questão 4.4: Padrão consolidado! O que faz com os resultados obtidos?', choices: [
            { text: 'A) Enviar o caso para a agência corrigir os projetos das próximas naves.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Evolução. Garante que o aprendizado em órbita melhore a fabricação na Terra.' },
            { text: 'B) Organizar e arquivar os relatórios na pasta técnica para equipes futuras.', effects: { foco: 2, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Conhecimento. Facilita a consulta e a transição para próximos astronautas.' },
            { text: 'C) Agradecer o time pelo empenho e comemorar o sucesso do novo método.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 }, feedback: 'Reconhecimento. Motiva a equipe e reforça o valor do trabalho bem-feito.' },
            { text: 'D) Publicar o caso na revista da agência como exemplo de resolução de falhas.', effects: { foco: 0, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Exemplo. Inspira outros setores a aplicarem a cultura de melhoria.' }
          ]
        }
      ]
    },
    {
      id: 'kaizen', name: 'KAIZEN', subtitle: 'Comandante da Missão Marte', icon: '🌟', color: '#66BB6A', bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)', bgImage: 'assets/bg_astro_kaizen.png',
      intro: 'Anos depois, você é o Comandante da Missão a Marte. A jornada durará anos no espaço e a cultura da Melhoria Contínua (Kaizen) é sua principal garantia de sobrevivência.',
      scenarios: [
        {
          text: 'Questão 5.1: No projeto da nova nave, como usa sua bagagem técnica?', choices: [
            { text: 'A) Revisar falhas passadas e projetar travas auto-alinháveis com engenheiros.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Engenharia. Usa erros antigos para projetar sistemas mais seguros.' },
            { text: 'B) Testar pessoalmente as ferramentas do traje no simulador antes de aprovar.', effects: { foco: 0, execucao: 2, visao: 1, adaptabilidade: 0 }, feedback: 'Prática. Garante a ergonomia e funcionalidade das ferramentas.' },
            { text: 'C) Exigir um cronograma estrito de testes de estresse antes da montagem.', effects: { foco: 2, execucao: -1, visao: 0, adaptabilidade: 0 }, feedback: 'Rigor. Eleva o nível de exigência dos materiais ao máximo.' },
            { text: 'D) Analisar dados de baterias em frio extremo para prever o uso em Marte.', effects: { foco: 1, execucao: 0, visao: 2, adaptabilidade: 0 }, feedback: 'Previsão. Usa dados para antecipar o comportamento dos sistemas no destino.' }
          ]
        },
        {
          text: 'Questão 5.2: Um novato erra a leitura de pressão no simulador. Como reage?', choices: [
            { text: 'A) Pausar, analisar os dados com ele e pedir que proponha a solução.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Educador. Transforma o erro em aprendizado sem punição (Espírito Kaizen).' },
            { text: 'B) Demonstrar a correção e mandar ele repetir até memorizar.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: -1 }, feedback: 'Repetição. Rápido, mas gera dependência da sua instrução.' },
            { text: 'C) Redesenhar a tela deixando o aviso de pressão mais visível.', effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: 1 }, feedback: 'Ergonomia. Ajusta a interface para evitar a falha humana.' },
            { text: 'D) Trancar o novato fora da nave sem traje por 5 minutos para aprender.', effects: { foco: -5, execucao: -5, visao: -5, adaptabilidade: -5 }, feedback: 'Conduta abusiva. Você foi demitido e a missão a Marte foi cancelada.' }
          ]
        },
        {
          text: 'Questão 5.3: A agência apresenta uma IA para prever falhas. Como implementá-la?', choices: [
            { text: 'A) Usar a IA em modo assistente nos primeiros meses para validar dados.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Prudência. Valida o sistema na prática antes de dar autonomia total.' },
            { text: 'B) Integrar a IA no painel para automatizar correções e poupar tempo.', effects: { foco: 0, execucao: 2, visao: -2, adaptabilidade: 0 }, feedback: 'Risco. Delega o controle total à máquina sem testes prévios.' },
            { text: 'C) Analisar o código-fonte da IA para entender os parâmetros de análise.', effects: { foco: 2, execucao: -1, visao: 0, adaptabilidade: 0 }, feedback: 'Técnico. Estuda a lógica interna antes de aceitar o sistema.' },
            { text: 'D) Criar um diário para anotar acertos e erros da IA e mandar aos programadores.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 2 }, feedback: 'Ajuste fino. Fornece dados reais para aperfeiçoar o software.' }
          ]
        },
        {
          text: 'Questão 5.4: Foguete na plataforma rumo a Marte. Qual seu discurso final?', choices: [
            { text: 'A) "Nossa força é aprender com os passos e evoluir juntos todos os dias."', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Kaizen. Inspira resiliência, foco no aprendizado e evolução contínua.' },
            { text: 'B) "Treinamos duro, conhecemos o manual e temos um plano. Vamos executar!"', effects: { foco: 2, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Planejamento. Passa segurança focada no rigor e nos processos.' },
            { text: 'C) "A hora chegou! Vamos colocar energia na prática e fazer história!"', effects: { foco: -1, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Ação. Motiva o time através do entusiasmo e da iniciativa.' },
            { text: 'D) "Se chacoalhar muito, apertem botões aleatórios e seja o que Deus quiser!"', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Desespero. A frase gerou pânico e a decolagem foi cancelada.' }
          ]
        }
      ]
    }
  ],
  detetive: [
    {
      id: 'plan', name: 'PLAN', subtitle: 'O Planejamento e Isolamento da Cena', icon: '📋', color: '#4FC3F7', bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)', bgImage: 'assets/bg_detetive.png',
      intro: 'O escritório está em caos: marcas no chão, vidros quebrados e a porta arrombada. Os suspeitos começam a transitar pela casa. Você precisa planejar como conter a cena e traçar a estratégia de investigação.',
      scenarios: [
        {
          text: 'Questão 1.1: O alarme da mansão ainda toca e o caos reina. Qual sua atitude imediata?', choices: [
            { text: 'A) Isolar a sala e traçar o plano de coleta antes de agir.', effects: { foco: 3, execucao: -1, visao: 1, adaptabilidade: 0 }, feedback: 'Preservação perfeita. Organiza o fluxo e impede contaminação das provas.' },
            { text: 'B) Ir direto ao cofre arrombado buscar marcas recentes.', effects: { foco: -1, execucao: 3, visao: 0, adaptabilidade: 0 }, feedback: 'Ação rápida. Coleta dados de imediato, mas arrisca pisar em pegadas no caminho.' },
            { text: 'C) Mapear a posição dos suspeitos e observar comportamentos.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 2 }, feedback: 'Análise humana. Captura reações espontâneas antes que inventem desculpas.' },
            { text: 'D) Gritar com todos e trancar a família no sótão.', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Caos total. Gerou pânico sem obter uma única pista válida.' }
          ]
        },
        {
          text: 'Questão 1.2: A porta estava trancada por dentro. Como planeja investigar o mecanismo da tranca?', choices: [
            { text: 'A) Mapear a fechadura com lupa buscando marcas de ferramentas.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Análise detalhada. Descobre se houve truque mecânico pelo lado de fora.' },
            { text: 'B) Testar a chave nas portas vizinhas para comparar padrões.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 }, feedback: 'Checagem prática. Entende a arquitetura de trancamento da casa rapidamente.' },
            { text: 'C) Perguntar ao mordomo quem tinha acesso às cópias.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 2 }, feedback: 'Rastreio de rotina. Mapeia o controle de acesso humano às chaves.' },
            { text: 'D) Chutar a porta ao lado para testar a resistência.', effects: { foco: -2, execucao: 0, visao: -2, adaptabilidade: 0 }, feedback: 'Vandalismo. Destruiu patrimônio e não descobriu nada.' }
          ]
        },
        {
          text: 'Questão 1.3: Há uma taça de vinho caída com resíduo suspeito. Como planeja a coleta?', choices: [
            { text: 'A) Fotografar, selar em frasco estéril e etiquetar.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Cadeia de custódia. Prova irrefutável e aceita legalmente.' },
            { text: 'B) Provar uma gota com o dedo para identificar o gosto.', effects: { foco: -3, execucao: 0, visao: -4, adaptabilidade: 0 }, feedback: 'Imprudência! Era um sedativo forte e você apagou por 4 horas.' },
            { text: 'C) Checar na adega qual garrafa foi aberta.', effects: { foco: 0, execucao: 1, visao: 2, adaptabilidade: 0 }, feedback: 'Cruzamento rápido. Confirma se o vinho veio da casa ou de fora.' },
            { text: 'D) Guardar a taça no bolso para analisar depois.', effects: { foco: -2, execucao: 1, visao: 0, adaptabilidade: 0 }, feedback: 'Contaminação. A taça quebrou no bolso enquanto você andava.' }
          ]
        },
        {
          text: 'Questão 1.4: Para finalizar o plano de contenção, como organizar a equipe antes de iniciar os trabalhos?', choices: [
            { text: 'A) Dividir papéis claros: um nos depoimentos, outro na forense.', effects: { foco: 3, execucao: 0, visao: 0, adaptabilidade: 1 }, feedback: 'Divisão eficiente. Evita sobreposição de tarefas e acelera o processo.' },
            { text: 'B) Mandar todos entrarem na sala ao mesmo tempo e procurar pistas.', effects: { foco: 0, execucao: 2, visao: -2, adaptabilidade: 0 }, feedback: 'Desorganização. Agiliza a busca, mas gera contaminação cruzada.' },
            { text: 'C) Definir o responsável por monitorar as saídas da mansão.', effects: { foco: 0, execucao: 1, visao: 2, adaptabilidade: 0 }, feedback: 'Contenção de risco. Impede a fuga de qualquer suspeito.' },
            { text: 'D) Mandar a equipe fazer uma pausa para o café da tora.', effects: { foco: -2, execucao: 0, visao: 0, adaptabilidade: 2 }, feedback: 'Atraso. Relaxou o time, mas o criminoso ganhou tempo precioso.' }
          ]
        }
      ]
    },
    {
      id: 'do', name: 'DO', subtitle: 'Execução dos Interrogatórios e Coleta', icon: '💻', color: '#FF7043', bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)', bgImage: 'assets/bg_det_do.png',
      intro: 'Três suspeitos isolados: a Esposa (herdeira), o Sócio (falido) e o Sobrinho (endividado). É hora de executar as entrevistas e recolher os dados de campo.',
      scenarios: [
        {
          text: 'Questão 2.1: Como executa a abordagem inicial com os suspeitos?', choices: [
            { text: 'A) Entrevistar cada um separado, com questionário padrão.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Padronização. Facilita cruzar respostas idênticas em busca de falhas.' },
            { text: 'B) Confronte todos juntos na sala com acusações diretas.', effects: { foco: -2, execucao: 2, visao: 0, adaptabilidade: 1 }, feedback: 'Pressão. Cria atrito imediato, mas eles podem alinhar versões.' },
            { text: 'C) Começar pelo suspeito mais calmo para quebrar sua postura.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 2 }, feedback: 'Psicológico. Desmonta o álibi mais bem preparado primeiro.' },
            { text: 'D) Pedir para preencherem um caça-palavras de suspense.', effects: { foco: -3, execucao: -3, visao: 0, adaptabilidade: 0 }, feedback: 'Perda de tempo. Ninguém cooperou e o tempo passou.' }
          ]
        },
        {
          text: 'Questão 2.2: O Sócio afirma que lia na biblioteca das 21h às 22h. Como executa a checagem?', choices: [
            { text: 'A) Pedir detalhes do enredo e posição das luzes da sala.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Teste de veracidade. Detalhes difíceis de inventar de improviso.' },
            { text: 'B) Checar os registros do sistema inteligente de iluminação.', effects: { foco: 2, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Prova digital. Confirma o uso da sala através de dados imutáveis.' },
            { text: 'C) Aceitar a resposta e passar para o próximo suspeito.', effects: { foco: 0, execucao: 2, visao: -2, adaptabilidade: 0 }, feedback: 'Falta de checagem. Economizou tempo, mas aceitou um álibi falso.' },
            { text: 'D) Propor uma disputa de quem lê mais rápido.', effects: { foco: -2, execucao: 0, visao: -2, adaptabilidade: 0 }, feedback: 'Impertinente. O suspeito debochou e você perdeu autoridade.' }
          ]
        },
        {
          text: 'Questão 2.3: A Esposa chora copiosamente durante a conversa. Qual a sua execução?', choices: [
            { text: 'A) Dar água, usar empatia e fazer perguntas abertas.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 4 }, feedback: 'Rapport. Consegue informações valiosas de forma natural.' },
            { text: 'B) Manter a postura rígida e exigir respostas diretas.', effects: { foco: 2, execucao: 0, visao: 0, adaptabilidade: -1 }, feedback: 'Foco técnico. Garante dados objetivos, mas fecha o diálogo espontâneo.' },
            { text: 'C) Confrontar o horário do choro com a hora estimada do crime.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Análise fria. Avalia se a emoção bate cronologicamente com os fatos.' },
            { text: 'D) Chorar junto para demonstrar solidariedade.', effects: { foco: -3, execucao: 0, visao: 0, adaptabilidade: -3 }, feedback: 'Vexame. A equipe teve que tirar você da sala.' }
          ]
        },
        {
          text: 'Questão 2.4: Executando a varredura física no cofre, você acha um fio de fibra sintética. O que faz?', choices: [
            { text: 'A) Guardar em envelope de papel e mandar para análise óptica.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Coleta técnica. Preserva a evidência sem alterar sua composição.' },
            { text: 'B) Comparar na hora com o tecido dos casacos dos suspeitos.', effects: { foco: 0, execucao: 3, visao: 0, adaptabilidade: 1 }, feedback: 'Checagem de campo. Dá uma pista imediata sobre quem esteve ali.' },
            { text: 'C) Usar uma fita adesiva comum para colar o fio num bloco de notas.', effects: { foco: -2, execucao: 1, visao: 0, adaptabilidade: 0 }, feedback: 'Contaminação. A cola da fita estragou o teste químico do laboratório.' },
            { text: 'D) Assoprar a poeira do cofre para enxergar melhor o fundo.', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Destruição. O sopro voou com o fio e destruiu as impressões do painel.' }
          ]
        }
      ]
    },
    {
      id: 'check', name: 'CHECK', subtitle: 'Análise dos Indicadores e Provas', icon: '🔍', color: '#AB47BC', bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)', bgImage: 'assets/bg_det_check.png',
      intro: 'Você reuniu amostras, horários e depoimentos. É hora de checar a consistência dos dados, validar as hipóteses e cruzar as informações no painel do caso.',
      scenarios: [
        {
          text: 'Questão 3.1: Checando o cofre: o segredo correto foi digitado sem arrombamento. O que conclui?', choices: [
            { text: 'A) O criminoso obteve a senha secreta com a vítima.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Dedução lógica. Delimita o foco apenas a quem conhecia o código.' },
            { text: 'B) O criminoso usou um estetoscópio para ouvir as engrenagens.', effects: { foco: 0, execucao: 0, visao: -1, adaptabilidade: 2 }, feedback: 'Hipótese de filme. Possível, mas muito improvável em cofres digitais.' },
            { text: 'C) O cofre travou com defeito e abriu sozinho.', effects: { foco: -2, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Sem fundamento. Ignora o funcionamento básico do equipamento.' },
            { text: 'D) Checar se há desgaste de poeira nos números usados.', effects: { foco: 0, execucao: 1, visao: 3, adaptabilidade: 0 }, feedback: 'Checagem física. Confirma visualmente a sequência exata no teclado.' }
          ]
        },
        {
          text: 'Questão 3.2: O laudo do sedativo indica ação em 15 minutos. A bebida foi servida às 21h00. O que checar?', choices: [
            { text: 'A) Marcar a janela da incapacidade da vítima entre 21h15 e 21h45.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Linha do tempo. Define com precisão o momento do roubo.' },
            { text: 'B) Vistoriar o lixo da cozinha em busca do frasco do remédio.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 1 }, feedback: 'Busca de descarte. Tenta achar a embalagem do veneno no local.' },
            { text: 'C) Assumir que a vítima tomou o remédio voluntariamente.', effects: { foco: 0, execucao: 0, visao: -2, adaptabilidade: 1 }, feedback: 'Conclusão precipitada. Ignora o contexto de uma reunião importante.' },
            { text: 'D) Deduzir que o sedativo era para acalmar o cão da casa.', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Fato isolado. Descartou o dado mais relevante da autópsia técnica.' }
          ]
        },
        {
          text: 'Questão 3.3: Ao cruzar os depoimentos, você nota uma lacuna de 20 minutos no relato do Sobrinho. O que faz?', choices: [
            { text: 'A) Cruzar o horário dele com as câmeras do corredor interno.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Auditoria. Usa fontes neutras para validar ou desmentir o relato.' },
            { text: 'B) Chamar o Sobrinho imediatamente e exigir que explique o hiato.', effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 0 }, feedback: 'Confronto direto. Dá urgência, mas alerta o suspeito antes da hora.' },
            { text: 'C) Preencher a lacuna presumindo que ele foi ao banheiro.', effects: { foco: 0, execucao: 0, visao: -2, adaptabilidade: 1 }, feedback: 'Acomodação. Assume dados não checados dentro da investigação.' },
            { text: 'D) Ignorar os 20 minutos por achar a margem pequena.', effects: { foco: -2, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Erro crasso. A lacuna era exatamente o tempo da execução do crime.' }
          ]
        },
        {
          text: 'Questão 3.4: Como checa se a tranca foi manipulada de fora por um fio de nylon?', choices: [
            { text: 'A) Recriar a cena e fazer o teste prático de puxar a chave com a linha.', effects: { foco: 0, execucao: 0, visao: 1, adaptabilidade: 3 }, feedback: 'Reconstituição. Prova empiricamente se o método era viável.' },
            { text: 'B) Procurar resíduos de nylon na fresta da porta com microscópio portátil.', effects: { foco: 1, execucao: 0, visao: 3, adaptabilidade: 0 }, feedback: 'Verificação forense. Encontra vestígios do material usado no truque.' },
            { text: 'C) Perguntar aos suspeitos se algum deles sabe dar nós em nylon.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 2 }, feedback: 'Sondagem. Avalia o conhecimento prático dos envolvidos.' },
            { text: 'D) Declarar que é impossível fechar portas trancadas por fora.', effects: { foco: -3, execucao: 0, visao: -3, adaptabilidade: 0 }, feedback: 'Desistência. Ignorou técnicas clássicas de invasão.' }
          ]
        }
      ]
    },
    {
      id: 'act', name: 'ACT', subtitle: 'Padronização da Resolução e Ação', icon: '⚙️', color: '#EF5350', bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)', bgImage: 'assets/bg_det_act.png',
      intro: 'O culpado foi identificado: o Sócio. Ele usou o sedativo, obteve a senha na agenda e trancou a porta por fora com uma linha. Agora é hora de agir, fechar o caso e padronizar o relatório para a polícia.',
      scenarios: [
        {
          text: 'Questão 4.1: Como faz a acusação final para garantir a prisão sem brechas?', choices: [
            { text: 'A) Apresentar a narrativa encadeada: veneno, senha, fio e o contrato achado.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Caso blindado. Apresenta uma cadeia lógica indestrutível para a justiça.' },
            { text: 'B) Revelar a prova do contrato no casaco e dar voz de prisão imediata.', effects: { foco: -1, execucao: 3, visao: 0, adaptabilidade: 0 }, feedback: 'Ação direta. Resolve no ato, mas sem explicar todo o método na hora.' },
            { text: 'C) Usar a motivação da falência para induzir o Sócio a confessar.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 4 }, feedback: 'Pressão psíquica. Garante a confissão espontânea do acusado.' },
            { text: 'D) Chutar quem é o culpado e mudar de ideia no meio da fala.', effects: { foco: -3, execucao: 0, visao: 0, adaptabilidade: -3 }, feedback: 'Descredibilidade. Perdeu o controle e gerou vergonha.' }
          ]
        },
        {
          text: 'Questão 4.2: O Sócio tenta correr em direção à saída! Qual sua ação de contenção?', choices: [
            { text: 'A) Trancar as saídas preventivamente antes de dar a acusação.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Ação preventiva. O criminoso tenta fugir, mas dá de cara com a porta trancada.' },
            { text: 'B) Plaquear o suspeito no chão e aplicar imobilização.', effects: { foco: 0, execucao: 3, visao: 0, adaptabilidade: 1 }, feedback: 'Resposta física. Resolve o imprevisto com prontidão e força.' },
            { text: 'C) Pedir ao Sobrinho que segure o Sócio no corredor.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Delegação. Usa recursos presentes no ambiente para conter o dano.' },
            { text: 'D) Gritar por socorro na janela no meio da tempestade.', effects: { foco: -3, execucao: -3, visao: 0, adaptabilidade: 0 }, feedback: 'Inútil. O som do vento abafou sua voz e o suspeito fugiu.' }
          ]
        },
        {
          text: 'Questão 4.3: Como finaliza o relatório de entrega para os delegados que chegaram?', choices: [
            { text: 'A) Entregar o dossiê formal padronizado com laudos, fotos e assinaturas.', effects: { foco: 3, execucao: 0, visao: 1, adaptabilidade: 0 }, feedback: 'Documentação. Permite uma transição perfeita para o processo penal.' },
            { text: 'B) Passar um resumo falado de 2 minutos e liberar a equipe.', effects: { foco: 0, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Apressado. Entrega o criminoso, mas deixa a burocracia incompleta.' },
            { text: 'C) Orientar a família sobre como prestar depoimento oficial na delegacia.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Acolhimento. Presta suporte humano pós-crise aos afetados.' },
            { text: 'D) Jogar os papéis e sacos de provas no lixo da sala.', effects: { foco: -4, execucao: 0, visao: -4, adaptabilidade: 0 }, feedback: 'Anulação. Sem as provas catalogadas, o Juiz soltará o réu amanhã.' }
          ]
        },
        {
          text: 'Questão 4.4: O contrato roubado foi recuperado, mas está rasgado. Como age?', choices: [
            { text: 'A) Mapear e restaurar os pedaços numa placa acrílica selada.', effects: { foco: 3, execucao: 0, visao: 0, adaptabilidade: 1 }, feedback: 'Preservação de item. Garante a leitura e o valor legal do documento.' },
            { text: 'B) Tirar foto rápida dos pedaços no chão e anexar ao chat da equipe.', effects: { foco: -1, execucao: 2, visao: 0, adaptabilidade: 0 }, feedback: 'Registro veloz. Guarda a imagem, mas não preserva o objeto original.' },
            { text: 'C) Pedir que a vítima assine uma segunda via quando acordar.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 2 }, feedback: 'Contorno. Solução administrativa enquanto o original é processado.' },
            { text: 'D) Colar com fita durex comum por cima do texto principal.', effects: { foco: -2, execucao: 0, visao: -2, adaptabilidade: 0 }, feedback: 'Dano. A cola da fita manchou a assinatura e estragou a perícia.' }
          ]
        }
      ]
    },
    {
      id: 'kaizen', name: 'KAIZEN', subtitle: 'Melhoria Contínua dos Protocolos', icon: '🌟', color: '#66BB6A', bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)', bgImage: 'assets/bg_det_kaizen.png',
      intro: 'O caso foi encerrado com sucesso. Como líder da agência, seu papel agora é analisar os erros e acertos dessa operação para aperfeiçoar o método de investigação de toda a equipe para os próximos casos.',
      scenarios: [
        {
          text: 'Questão 5.1: Como usa a falha na demora da coleta do vinho para melhorar o processo da agência?', choices: [
            { text: 'A) Atualizar o manual com checklist obrigatório de coleta nos primeiros 5 minutos.', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Melhoria de padrão. Transforma o erro em um novo procedimento padronizado.' },
            { text: 'B) Desenvolver uma maleta kit-expresso de coleta rápida para crises.', effects: { foco: 0, execucao: 1, visao: 0, adaptabilidade: 3 }, feedback: 'Inovação de ferramentas. Cria um recurso que elimina o tempo de espera.' },
            { text: 'C) Dar uma bronca na equipe por não ter visto a taça antes.', effects: { foco: -1, execucao: 0, visao: 0, adaptabilidade: -2 }, feedback: 'Cultura do esculacho. Gera medo e não corrige a falha no processo.' },
            { text: 'D) Mapear as causas do atraso e redesenhar o fluxo da caixa de ferramentas.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Análise de causa-raiz. Corrige o sistema em vez de culpar as pessoas.' }
          ]
        },
        {
          text: 'Questão 5.2: Um agente novato cometeu um erro de digitação na etiqueta de uma prova. Como aplica o Kaizen?', choices: [
            { text: 'A) Rever o formulário e criar etiquetas com código de barras antierro (Poka-Yoke).', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Processo antierro. Garante que o sistema impeça a falha humana.' },
            { text: 'B) Fazer uma sessão de treino prático com o novato mostrando a forma correta.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Desenvolvimento. Ensina com empatia focando na evolução contínua.' },
            { text: 'C) Suspender o novato das investigações por duas semanas.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: -5 }, feedback: 'Punitivo. Oculta o problema em vez de ensinar o processo certo.' },
            { text: 'D) Assumir a digitação de todas as etiquetas você mesmo a partir de hoje.', effects: { foco: -1, execucao: -2, visao: 0, adaptabilidade: 0 }, feedback: 'Centralização. Cria um gargalo na sua liderança e não desenvolve o time.' }
          ]
        },
        {
          text: 'Questão 5.3: A equipe de Perícia sugere uma nova ferramenta com Inteligência Artificial para ler pegadas. Como implementa?', choices: [
            { text: 'A) Testar a IA em paralelo com o método tradicional por 30 dias antes de aprovar.', effects: { foco: 0, execucao: 0, visao: 3, adaptabilidade: 1 }, feedback: 'Transição segura. Valida a eficácia do novo método sem arriscar dados.' },
            { text: 'B) Adotar a ferramenta na hora e descartar o método antigo de gesso.', effects: { foco: 0, execucao: 2, visao: -2, adaptabilidade: 0 }, feedback: 'Precipitação. Troca o método consolidado sem homologar o novo.' },
            { text: 'C) Rejeitar a tecnologia porque "no meu tempo se investigava no olho".', effects: { foco: 0, execucao: 0, visao: -2, adaptabilidade: -3 }, feedback: 'Resistência. Trava a evolução tecnológica da agência.' },
            { text: 'D) Montar um grupo de estudo com os agentes para avaliar os pontos fortes da ferramenta.', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Engajamento. Envolve o time na escolha das próprias ferramentas de trabalho.' }
          ]
        },
        {
          text: 'Questão 5.4: Na reunião de encerramento do caso com a equipe, qual sua postura Kaizen?', choices: [
            { text: 'A) "Identificamos 3 falhas de fluxo hoje. Como vamos ajustar o padrão para sermos melhores amanhã?"', effects: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 3 }, feedback: 'Foco em evolução. Engaja todos na busca constante pela excelência.' },
            { text: 'B) "O caso foi resolvido no tempo limite. Não precisamos mexer em nada no manual."', effects: { foco: 1, execucao: 0, visao: 0, adaptabilidade: -2 }, feedback: 'Acomodação. Perde a chance de aperfeiçoar os pontos fracos da operação.' },
            { text: 'C) "Parabéns pelo resultado! Vamos focar só em comemorar e esquecer os erros."', effects: { foco: 0, execucao: 2, visao: -1, adaptabilidade: 0 }, feedback: 'Celebrativo. Bom para o clima, mas não gera aprendizado estruturado.' },
            { text: 'D) "Eu resolvi o caso praticamente sozinho, vocês só atrapalharam."', effects: { foco: -3, execucao: 0, visao: 0, adaptabilidade: -4 }, feedback: 'Ego. Destruiu o moral do time e dividiu a agência.' }
          ]
        }
      ]
    }
  ]
};

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
    name: 'Avatar 1',
    gender: 'M',
    desc: 'Determinado e curioso',
    image: 'assets/avatar_leo.png',
    colors: { hair: '#3a2518', skin: '#f0c8a0', shirt: '#2196F3' }
  },
  {
    id: 'luna',
    name: 'Avatar 2',
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
    name: "Desenvolvedor(a)",
    icon: "💻",
    desc: "Lide com código, bugs e arquitetura de sistemas.",
    available: true
  },
  {
    id: "astronauta",
    name: "Astronauta",
    icon: "🚀",
    desc: "Missões espaciais, sobrevivência e manutenção orbital.",
    available: true
  },
  {
    id: "detetive",
    name: "Detetive",
    icon: "🕵️",
    desc: "Resolva mistérios e crimes complexos.",
    available: true
  }
];
