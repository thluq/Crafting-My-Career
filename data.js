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
    {
      id: 'plan',
      name: "PLAN",
      subtitle: "Planejamento",
      icon: '📋',
      color: '#4FC3F7',
      bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
      bgImage: 'assets/bg_plan.png',
      intro: "Sua equipe est\u00e1 reunida no est\u00fadio. O or\u00e7amento inicial \u00e9 limitado, e o tempo de desenvolvimento definir\u00e1 se a empresa sobrevive ao primeiro ano de opera\u00e7\u00e3o.",
      scenarios: [
        {
          text: "Qual projeto ser\u00e1 o ponto de partida do est\u00fadio?",
          choices: [
            {
              text: "Um jogo 2D de fase simples focado em quem gosta de desafio no PC.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Escopo Controlado. Projeto vi\u00e1vel de validar, com p\u00fablico definido e baixo risco financeiro."
            },
            {
              text: "Um jogo 3D gigante de tiro online para milhares de pessoas no celular.",
              effects: {"foco": -2, "execucao": 3, "visao": 0, "adaptabilidade": 0},
              feedback: "Escopo Inflado. Alto custo operacional e de infraestrutura que estoura o caixa da empresa."
            },
            {
              text: "Um jogo de estrat\u00e9gia por turnos focando na arquitetura de sistemas.",
              effects: {"foco": 0, "execucao": 0, "visao": 2, "adaptabilidade": 1},
              feedback: "Nicho T\u00e9cnico. Demanda alta complexidade de l\u00f3gica, mas garante previsibilidade de produ\u00e7\u00e3o."
            },
            {
              text: "Tentar criar o maior jogo do mundo sozinho em uma semana.",
              effects: {"foco": -3, "execucao": 0, "visao": -4, "adaptabilidade": 0},
              feedback: "Colapso do Projeto. Falta total de planejamento t\u00e9cnico e inviabilidade operacional."
            }
          ]
        },
        {
          text: "Como estruturar a rentabiliza\u00e7\u00e3o do produto?",
          choices: [
            {
              text: "Vender o jogo por um pre\u00e7o fixo e lan\u00e7ar fases extras pagas depois.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Monetiza\u00e7\u00e3o Direta. Fluxo de caixa previs\u00edvel e sem depend\u00eancia de reten\u00e7\u00e3o cont\u00ednua."
            },
            {
              text: "Deixar o jogo de gra\u00e7a, mas cobrar por itens cosm\u00e9ticos dentro do aplicativo.",
              effects: {"foco": 0, "execucao": 2, "visao": 0, "adaptabilidade": 2},
              feedback: "Modelo Freemium. Aumenta o volume da base de usu\u00e1rios e exige escala r\u00e1pida."
            },
            {
              text: "Bloquear mec\u00e2nicas de evolu\u00e7\u00e3o para cobrar dinheiro direto de quem quer avan\u00e7ar.",
              effects: {"foco": 0, "execucao": -2, "visao": -3, "adaptabilidade": 0},
              feedback: "Rejei\u00e7\u00e3o de Mercado. Compromete a reten\u00e7\u00e3o org\u00e2nica e destr\u00f3i o engajamento dos usu\u00e1rios."
            },
            {
              text: "Deixar tudo gratuito e esperar doa\u00e7\u00f5es sem contrato ou plano de incentivo.",
              effects: {"foco": -3, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Insolv\u00eancia. Falta de modelo de neg\u00f3cios que gera fal\u00eancia imediata do est\u00fadio."
            }
          ]
        },
        {
          text: "O escopo est\u00e1 maior que a capacidade de entrega dentro do prazo. Como agir?",
          choices: [
            {
              text: "Cortar recursos secund\u00e1rios e focar na entrega do n\u00facleo funcional do produto (MVP).",
              effects: {"foco": 3, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Corte de Escopo T\u00e1tico. Garante a entrega do produto principal com estabilidade e dentro do prazo."
            },
            {
              text: "Aumentar a carga de trabalho do time sem ajustar os fluxos e metodologias de entrega.",
              effects: {"foco": 0, "execucao": -2, "visao": 0, "adaptabilidade": -3},
              feedback: "Burnout e Desfalque. Desgasta o time e resulta na perda de talentos essenciais no meio do ciclo."
            },
            {
              text: "Adiar o lan\u00e7amento por 4 anos para incluir todas as mec\u00e2nicas originalmente planejadas.",
              effects: {"foco": 0, "execucao": -2, "visao": -1, "adaptabilidade": 0},
              feedback: "Defasagem Tecnol\u00f3gica. O produto perde a janela de oportunidade do mercado."
            },
            {
              text: "Remover o sistema de persist\u00eancia de dados (save) para economizar horas de c\u00f3digo.",
              effects: {"foco": -2, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Falha de Requisito B\u00e1sica. Degrada completamente a experi\u00eancia operacional do produto."
            }
          ]
        }
      ]
    },
    {
      id: 'do',
      name: "DO",
      subtitle: "Execu\u00e7\u00e3o e Constru\u00e7\u00e3o",
      icon: '🔨',
      color: '#FF7043',
      bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)',
      bgImage: 'assets/bg_do.png',
      intro: "A produ\u00e7\u00e3o est\u00e1 a todo vapor. Motores gr\u00e1ficos configurados, reposit\u00f3rios abertos e os primeiros bugs de compila\u00e7\u00e3o surgindo na tela.",
      scenarios: [
        {
          text: "O personagem est\u00e1 colidindo incorretamente e travando na geometria do cen\u00e1rio. Como solucionar?",
          choices: [
            {
              text: "Refatorar o componente de colis\u00e3o no c\u00f3digo e simplificar os volumes geom\u00e9tricos de contato.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Corre\u00e7\u00e3o Estrutural. Elimina a falha de execu\u00e7\u00e3o e mant\u00e9m o processamento otimizado."
            },
            {
              text: "Inserir colisores invis\u00edveis adicionais ao redor do obst\u00e1culo para mascarar o problema.",
              effects: {"foco": -1, "execucao": 0, "visao": 0, "adaptabilidade": 2},
              feedback: "Solu\u00e7\u00e3o Paliativa. Resolve pontualmente, mas cria d\u00e9bito t\u00e9cnico para as fases seguintes."
            },
            {
              text: "Deletar o reposit\u00f3rio do sistema de movimenta\u00e7\u00e3o e reescrever do zero a duas semanas do prazo final.",
              effects: {"foco": -2, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Refatora\u00e7\u00e3o Precipitada. Compromete todo o cronograma de testes da equipe."
            },
            {
              text: "Redefinir a documenta\u00e7\u00e3o do jogo para dizer que atravessar paredes \u00e9 uma mec\u00e2nica intencional.",
              effects: {"foco": 0, "execucao": -2, "visao": -2, "adaptabilidade": 0},
              feedback: "Falta de Rigor. A falha de c\u00f3digo fica evidente para o usu\u00e1rio final e compromete o padr\u00e3o do est\u00fadio."
            }
          ]
        },
        {
          text: "O time de programa\u00e7\u00e3o n\u00e3o possui especialistas na \u00e1rea visual e sonora. Qual a estrat\u00e9gia de suprimento?",
          choices: [
            {
              text: "Terceirizar a demanda enviando especifica\u00e7\u00f5es claras para freelancers e est\u00fadios parceiros.",
              effects: {"foco": 3, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Outsourcing Estruturado. Garante entregas de alta qualidade sem inflar o custo fixo do est\u00fadio."
            },
            {
              text: "Adquirir pacotes de arte e \u00e1udio prontos em marketplaces e integr\u00e1-los \u00e0 pipeline.",
              effects: {"foco": -1, "execucao": 3, "visao": 0, "adaptabilidade": 0},
              feedback: "Produ\u00e7\u00e3o Acelerada. Reduz drasticamente o tempo de entrega, embora reduza a identidade \u00fanica do jogo."
            },
            {
              text: "Produzir os recursos visuais de qualquer forma no Paint e gravar \u00e1udios em microfones internos.",
              effects: {"foco": 0, "execucao": 0, "visao": -2, "adaptabilidade": 1},
              feedback: "Baixo Padr\u00e3o Visual. Reduz o apelo comercial do produto por falta de apuro t\u00e9cnico."
            },
            {
              text: "Baixar artes e sons protegidos por direitos autorais na internet e integrar no build final.",
              effects: {"foco": -4, "execucao": 0, "visao": -4, "adaptabilidade": 0},
              feedback: "Viola\u00e7\u00e3o Legal. O produto \u00e9 removido das plataformas e o est\u00fadio responde a processos jur\u00eddicos."
            }
          ]
        },
        {
          text: "Como estruturar a fase de testes antes de subir o build para a loja?",
          choices: [
            {
              text: "Contratar uma empresa ou equipe especializada em testes de qualidade para rastrear e documentar falhas.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "QA Profissional. Mapeia exce\u00e7\u00f5es t\u00e9cnicas e falhas de mem\u00f3ria antes da distribui\u00e7\u00e3o."
            },
            {
              text: "Organizar um teste fechado com um grupo restrito de usu\u00e1rios e monitorar a telemetria.",
              effects: {"foco": 0, "execucao": 0, "visao": 3, "adaptabilidade": 1},
              feedback: "Valida\u00e7\u00e3o de Campo. Coleta dados reais de desempenho em diferentes configura\u00e7\u00f5es de hardware."
            },
            {
              text: "Validar o jogo executando apenas um teste r\u00e1pido na m\u00e1quina de desenvolvimento principal.",
              effects: {"foco": 0, "execucao": 1, "visao": -3, "adaptabilidade": 0},
              feedback: "Amostragem Insuficiente. O jogo trava em hardware diferente do utilizado no desenvolvimento."
            },
            {
              text: "Subir a vers\u00e3o final para a loja sem nenhuma etapa formal de testes.",
              effects: {"foco": -3, "execucao": -4, "visao": 0, "adaptabilidade": 0},
              feedback: "Lan\u00e7amento Desastroso. A taxa de falhas impede a execu\u00e7\u00e3o em massa e gera pedidos de reembolso."
            }
          ]
        }
      ]
    },
    {
      id: 'check',
      name: "CHECK",
      subtitle: "An\u00e1lise e Monitoramento",
      icon: '🔍',
      color: '#AB47BC',
      bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)',
      bgImage: 'assets/bg_check.png',
      intro: "O bot\u00e3o de publica\u00e7\u00e3o foi pressionado. O tr\u00e1fego de usu\u00e1rios come\u00e7a a subir, os servidores s\u00e3o acionados e a telemetria dispara.",
      scenarios: [
        {
          text: "A taxa de acessos simult\u00e2neos excedeu a proje\u00e7\u00e3o e derrubou a infraestrutura de rede. O que fazer?",
          choices: [
            {
              text: "Executar o dimensionamento autom\u00e1tico dos servidores (Auto-Scaling) e redistribuir a carga.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Resposta T\u00e9cnica Imediata. Restabelece a estabilidade do servi\u00e7o e absorve o pico de tr\u00e1fego."
            },
            {
              text: "Implementar uma fila de espera ordenada por c\u00f3digo para controlar o fluxo de login nos n\u00f3s ativos.",
              effects: {"foco": 1, "execucao": 0, "visao": 2, "adaptabilidade": 0},
              feedback: "Mitiga\u00e7\u00e3o Sistem\u00e1tica. Protege o banco de dados principal de quedas em cadeia."
            },
            {
              text: "Desligar o cluster principal sem comunicar o status da infraestrutura aos usu\u00e1rios.",
              effects: {"foco": 0, "execucao": -3, "visao": -2, "adaptabilidade": 0},
              feedback: "Inoper\u00e2ncia. Causa interrup\u00e7\u00e3o abrupta e gera perda de confian\u00e7a na plataforma."
            },
            {
              text: "Redirecionar a responsabilidade da falha de conex\u00e3o para as operadoras de internet dos clientes.",
              effects: {"foco": 0, "execucao": 0, "visao": -3, "adaptabilidade": -2},
              feedback: "Erro de Diagn\u00f3stico. Ignora os logs do servidor e atrasa a solu\u00e7\u00e3o do problema real."
            }
          ]
        },
        {
          text: "A telemetria indica que 70% dos jogadores abandonam a aplica\u00e7\u00e3o na Fase 3 por pico absurdo de dificuldade.",
          choices: [
            {
              text: "Recalibrar as vari\u00e1veis de atrito e balancear a curva de progress\u00e3o no arquivo de configura\u00e7\u00e3o do jogo.",
              effects: {"foco": 0, "execucao": 0, "visao": 3, "adaptabilidade": 1},
              feedback: "Ajuste Baseado em Dados. Corrige o gargalo de reten\u00e7\u00e3o atrav\u00e9s de dados quantitativos."
            },
            {
              text: "Subir um patch imediato alterando valores sem testar o impacto nas fases subsequentes.",
              effects: {"foco": -2, "execucao": 2, "visao": 0, "adaptabilidade": 0},
              feedback: "Corre\u00e7\u00e3o Apressada. Quebra o desafio das fases avan\u00e7adas por falta de simula\u00e7\u00e3o."
            },
            {
              text: "Remover o sistema de avalia\u00e7\u00f5es das plataformas para barrar a entrada de coment\u00e1rios negativos.",
              effects: {"foco": -3, "execucao": 0, "visao": 0, "adaptabilidade": -3},
              feedback: "Supress\u00e3o de Dados. Bloqueia o feedback dos usu\u00e1rios e impede a melhoria cont\u00ednua do sistema."
            },
            {
              text: "Desabilitar a Fase 3 por completo do c\u00f3digo para evitar que os usu\u00e1rios cheguem ao erro.",
              effects: {"foco": 0, "execucao": -3, "visao": -2, "adaptabilidade": 0},
              feedback: "Mutila\u00e7\u00e3o de Produto. Entrega um produto incompleto e desvaloriza o conte\u00fado j\u00e1 criado."
            }
          ]
        },
        {
          text: "Como identificar a causa exata do abandono do jogo ap\u00f3s os primeiros dias de uso?",
          choices: [
            {
              text: "Analisar o funil de telemetria para mapear em qual cena, evento ou rotina o usu\u00e1rio fecha a aplica\u00e7\u00e3o.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "An\u00e1lise de M\u00e9tricas. Identifica com precis\u00e3o cir\u00fargica a etapa exata de falha no engajamento."
            },
            {
              text: "Disparar relat\u00f3rios autom\u00e1ticos de diagn\u00f3stico de sistema no encerramento da sess\u00e3o.",
              effects: {"foco": 0, "execucao": 2, "visao": 1, "adaptabilidade": 0},
              feedback: "Coleta T\u00e9cnica de Erros. Descobre se a sa\u00edda foi motivada por travamentos (crashes) ocultos."
            },
            {
              text: "Monitorar apenas as impress\u00f5es e engajamento das redes sociais para inferir o uso do jogo.",
              effects: {"foco": 0, "execucao": 1, "visao": -2, "adaptabilidade": 0},
              feedback: "M\u00e9trica de Vaidade. Dados de redes sociais n\u00e3o refletem o comportamento real do usu\u00e1rio dentro da aplica\u00e7\u00e3o."
            },
            {
              text: "Desconsiderar os dados de abandono por acreditar que a rotatividade de usu\u00e1rios \u00e9 puramente aleat\u00f3ria.",
              effects: {"foco": 0, "execucao": 0, "visao": -3, "adaptabilidade": -2},
              feedback: "Neglig\u00eancia Anal\u00edtica. Mant\u00e9m o vazamento de usu\u00e1rios ativo sem aplicar corre\u00e7\u00f5es."
            }
          ]
        }
      ]
    },
    {
      id: 'act',
      name: "ACT",
      subtitle: "Padroniza\u00e7\u00e3o e Atualiza\u00e7\u00f5es",
      icon: '🔄',
      color: '#EF5350',
      bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)',
      bgImage: 'assets/bg_act.png',
      intro: "O jogo est\u00e1 publicado e est\u00e1vel. Agora o foco \u00e9 a sustenta\u00e7\u00e3o do produto: corre\u00e7\u00f5es cr\u00edticas, ciclos de atualiza\u00e7\u00e3o e reinvestimento dos lucros.",
      scenarios: [
        {
          text: "O que deve ser priorizado na primeira grande atualiza\u00e7\u00e3o do produto?",
          choices: [
            {
              text: "Consolidar a corre\u00e7\u00e3o de erros priorit\u00e1rios do backlog e introduzir m\u00f3dulos adicionais de conte\u00fado.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Ciclo de Manuten\u00e7\u00e3o Equilibrado. Estabiliza o produto base enquanto reengaja a base ativa."
            },
            {
              text: "Desenvolver apenas novos pacotes de microtransa\u00e7\u00f5es pagas enquanto o c\u00f3digo base permanece inst\u00e1vel.",
              effects: {"foco": -3, "execucao": 0, "visao": -2, "adaptabilidade": 0},
              feedback: "Erro de Prioriza\u00e7\u00e3o. Aumenta a taxa de rejei\u00e7\u00e3o por negligenciar a estabilidade t\u00e9cnica."
            },
            {
              text: "Reescrever a arquitetura completa do projeto para alterar o g\u00eanero principal do produto sem aviso.",
              effects: {"foco": 0, "execucao": 0, "visao": -2, "adaptabilidade": -3},
              feedback: "Ruptura de Produto. Descarta a base de usu\u00e1rios conquistada e desalinha a proposta do est\u00fadio."
            },
            {
              text: "Cobrar uma taxa extra para disponibilizar o patch de corre\u00e7\u00e3o das falhas do lan\u00e7amento.",
              effects: {"foco": 0, "execucao": -3, "visao": -4, "adaptabilidade": 0},
              feedback: "Pr\u00e1tica Abusiva. Gera crise de imagem instant\u00e2nea e boicote comercial nas plataformas."
            }
          ]
        },
        {
          text: "O volume de usu\u00e1rios ativos di\u00e1rios apresentou queda acentuada ap\u00f3s meses do lan\u00e7amento. Como reverter?",
          choices: [
            {
              text: "Integrar novos eventos com marcos temporais e liberar APIs para integra\u00e7\u00e3o com parceiros e criadores.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Tra\u00e7\u00e3o Operacional. Restabelece o fluxo de novos usu\u00e1rios atrav\u00e9s de expans\u00e3o de alcance."
            },
            {
              text: "Modificar os par\u00e2metros de matchmaking para for\u00e7ar a integra\u00e7\u00e3o entre inst\u00e2ncias de jogos distintas.",
              effects: {"foco": -1, "execucao": 0, "visao": 0, "adaptabilidade": 2},
              feedback: "Manobra de Infraestrutura. Preenche salas de espera, mas pode degradar a lat\u00eancia da conex\u00e3o."
            },
            {
              text: "Abandonar a manuten\u00e7\u00e3o do t\u00edtulo atual e iniciar do zero a produ\u00e7\u00e3o de uma sequ\u00eancia.",
              effects: {"foco": -2, "execucao": 0, "visao": -1, "adaptabilidade": 0},
              feedback: "Descontinuidade Prematura. Descarta um ativo vi\u00e1vel e gera desconfian\u00e7a sobre novos lan\u00e7amentos."
            },
            {
              text: "Manipular visualmente os contadores de usu\u00e1rios no dashboard p\u00fablico para simular alta reten\u00e7\u00e3o.",
              effects: {"foco": 0, "execucao": -2, "visao": -3, "adaptabilidade": 0},
              feedback: "Falsifica\u00e7\u00e3o de Dados. Perda imediata de credibilidade t\u00e9cnica quando auditado."
            }
          ]
        },
        {
          text: "O projeto obteve retorno financeiro positivo. Qual a destina\u00e7\u00e3o dos recursos no plano de neg\u00f3cios?",
          choices: [
            {
              text: "Alocar capital no fundo de reserva do est\u00fadio, provisionar custos fixos e estruturar o plano de cargos da equipe.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Sustentabilidade Financeira. Garante runway operacional longo e protege o est\u00fadio contra oscila\u00e7\u00f5es de mercado."
            },
            {
              text: "Reinvestir 100% da receita em campanhas de tr\u00e1fego pago de convers\u00e3o imediata sem reten\u00e7\u00e3o de reserva.",
              effects: {"foco": -2, "execucao": 2, "visao": 0, "adaptabilidade": 0},
              feedback: "Aloca\u00e7\u00e3o Agressiva. Gera picos de acesso de curto prazo, mas deixa o est\u00fadio vulner\u00e1vel a imprevistos."
            },
            {
              text: "Publicar o roadmap t\u00e9cnico de atualiza\u00e7\u00f5es para os pr\u00f3ximos 6 meses com metas e entreg\u00e1veis claros.",
              effects: {"foco": 3, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Governan\u00e7a Transparente. Alinha expectativas de mercado e estabelece padr\u00f5es de entrega."
            },
            {
              text: "Retirar integralmente os dividendos sem provisionar impostos, infraestrutura ou manuten\u00e7\u00e3o de servidor.",
              effects: {"foco": -4, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Sangria Financeira. Provoca o colapso do est\u00fadio no primeiro vencimento de despesas fixas."
            }
          ]
        }
      ]
    },
    {
      id: 'kaizen',
      name: "KAIZEN",
      subtitle: "Melhoria Cont\u00ednua",
      icon: '🌿',
      color: '#66BB6A',
      bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)',
      bgImage: 'assets/bg_kaizen.png',
      intro: "O projeto estabilizou e deu lucro. \u00c9 o momento de reunir a lideran\u00e7a t\u00e9cnica, revisar o post-mortem do desenvolvimento e aperfei\u00e7oar os processos para o pr\u00f3ximo ciclo.",
      scenarios: [
        {
          text: "O tempo de compila\u00e7\u00e3o e resolu\u00e7\u00e3o de bugs no projeto anterior atrasou as entregas. Como prevenir o gargalo?",
          choices: [
            {
              text: "Criar uma biblioteca interna de scripts modulares testados e implementar diretrizes estritas de refatora\u00e7\u00e3o.",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": 3},
              feedback: "Reuso de C\u00f3digo. Estabelece uma arquitetura escal\u00e1vel e acelera a fase inicial de novos projetos."
            },
            {
              text: "Implementar uma pipeline de Integra\u00e7\u00e3o Cont\u00ednua (CI/CD) com testes unit\u00e1rios autom\u00e1ticos a cada commit.",
              effects: {"foco": 0, "execucao": 1, "visao": 3, "adaptabilidade": 0},
              feedback: "Automa\u00e7\u00e3o de Qualidade. Detecta regress\u00f5es de c\u00f3digo no momento exato em que s\u00e3o inseridas."
            },
            {
              text: "Aumentar a jornada di\u00e1ria da equipe de tecnologia nas semanas de fechamento de sprint.",
              effects: {"foco": 0, "execucao": -2, "visao": 0, "adaptabilidade": -3},
              feedback: "Falha de Gest\u00e3o. Tenta compensar defici\u00eancias de processo atrav\u00e9s de sobrecarga operacional."
            },
            {
              text: "Descartar a equipe de desenvolvimento veterana para contratar juniores com custo por hora reduzido.",
              effects: {"foco": -2, "execucao": 0, "visao": -2, "adaptabilidade": 0},
              feedback: "Perda de Capital Intelectual. Descarta o aprendizado acumulado e repete erros do passado."
            }
          ]
        },
        {
          text: "A entrega de assets externos gerou gargalos na fase final. Como reestruturar essa cadeia?",
          choices: [
            {
              text: "Padronizar os crit\u00e9rios de aceite (Definition of Done) e catalogar fornecedores pr\u00e9-qualificados por desempenho.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Controle de Processos. Minimiza o retrabalho e garante a ader\u00eancia t\u00e9cnica dos entreg\u00e1veis."
            },
            {
              text: "Executar sess\u00f5es formais de Post-Mortem com o time para mapear pontos de fric\u00e7\u00e3o e alinhar melhorias.",
              effects: {"foco": 0, "execucao": 0, "visao": 1, "adaptabilidade": 3},
              feedback: "Avalia\u00e7\u00e3o Sist\u00eamica. Promove o aprendizado organizacional a partir de falhas reais de produ\u00e7\u00e3o."
            },
            {
              text: "Proibir a contrata\u00e7\u00e3o de qualquer recurso externo, for\u00e7ando a equipe interna a executar tarefas fora de sua especialidade.",
              effects: {"foco": 0, "execucao": 0, "visao": -2, "adaptabilidade": -2},
              feedback: "Perda de Especializa\u00e7\u00e3o. Reduz o padr\u00e3o do produto final e sobrecarrega os profissionais."
            },
            {
              text: "Aceitar o descumprimento de prazos sem renegociar cronogramas ou aplicar penalidades contratuais.",
              effects: {"foco": -2, "execucao": -1, "visao": 0, "adaptabilidade": 0},
              feedback: "Aus\u00eancia de Governan\u00e7a. Compromete a previsibilidade do est\u00fadio frente aos investidores."
            }
          ]
        },
        {
          text: "Como a lideran\u00e7a do est\u00fadio aborda o in\u00edcio do desenvolvimento do segundo jogo?",
          choices: [
            {
              text: "\"Documentaremos todas as li\u00e7\u00f5es aprendidas, padr\u00f5es de arquitetura e gargalos superados em nossa Wiki corporativa.\"",
              effects: {"foco": 3, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Gest\u00e3o do Conhecimento. Transforma experi\u00eancia operacional em ativos reutiliz\u00e1veis de processo."
            },
            {
              text: "\"Com base nas m\u00e9tricas e na infraestrutura constru\u00edda, refinaremos nossa pipeline para produzir com mais efici\u00eancia.\"",
              effects: {"foco": 0, "execucao": 0, "visao": 1, "adaptabilidade": 3},
              feedback: "Cultura Kaizen. Foca na evolu\u00e7\u00e3o incremental cont\u00ednua dos m\u00e9todos e ferramentas do est\u00fadio."
            },
            {
              text: "\"Nosso sucesso anterior garante que qualquer produto lan\u00e7ado sob nossa marca vender\u00e1 sem ajustes de processo.\"",
              effects: {"foco": 0, "execucao": 0, "visao": -3, "adaptabilidade": -2},
              feedback: "Complac\u00eancia Estrat\u00e9gica. Ignora as mudan\u00e7as nas din\u00e2micas de mercado e nos padr\u00f5es t\u00e9cnicos."
            },
            {
              text: "\"Transferiremos toda a responsabilidade de gest\u00e3o t\u00e9cnica para os desenvolvedores e reduziremos a supervis\u00e3o.\"",
              effects: {"foco": -3, "execucao": -2, "visao": 0, "adaptabilidade": 0},
              feedback: "Desmobiliza\u00e7\u00e3o do Comando. Causa desalinhamento entre os objetivos de neg\u00f3cio e a execu\u00e7\u00e3o t\u00e9cnica."
            }
          ]
        }
      ]
    }
  ],
  astronauta: [
    {
      id: 'plan',
      name: "PLAN",
      subtitle: "Planejar",
      icon: '📋',
      color: '#4FC3F7',
      bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
      bgImage: 'assets/bg_astronauta.png',
      intro: "Faltam poucas horas para os motores rugirem. O painel avisa: os tanques de ar pesam toneladas e a viagem dura 6 meses. Se o planejamento do consumo falhar aqui, o ar acaba antes da metade do caminho.",
      scenarios: [
        {
          text: "Como voc\u00ea desenha a estrat\u00e9gia de consumo de ar para n\u00e3o ficar na m\u00e3o no meio do nada?",
          choices: [
            {
              text: "Estipular uma cota di\u00e1ria milimetricamente contada e botar um rel\u00f3gio digital em cada cabine mostrando o ar restante.",
              effects: {"foco": 3, "execucao": 0, "visao": 0, "adaptabilidade": -1},
              feedback: "M\u00e3o de Ferro. Mant\u00e9m o consumo sob r\u00e9dea curta, mas deixa o ambiente com cara de quartel general."
            },
            {
              text: "Criar um \"pulm\u00e3o verde\": conectar a Estufa de Alfaces Espaciais ao sistema para ir renovando o ar enquanto a tripula\u00e7\u00e3o dorme.",
              effects: {"foco": 0, "execucao": 0, "visao": 3, "adaptabilidade": 1},
              feedback: "Sacada Biol\u00f3gica. Usa a pr\u00f3pria natureza da nave para fabricar oxig\u00eanio de gra\u00e7a ao longo do voo."
            },
            {
              text: "Fazer sess\u00f5es de yoga e medita\u00e7\u00e3o di\u00e1rias com a equipe para todo mundo aprender a respirar devagar e diminuir o ritmo.",
              effects: {"foco": -1, "execucao": 0, "visao": 0, "adaptabilidade": 3},
              feedback: "Zen Espacial. Reduz o estresse e o gasto de ar, mas basta um susto para o batimento disparar e estragar a m\u00e9dia."
            },
            {
              text: "\"Na volta a gente compra\": decolar com os tanques cheios e resolver a cota de ar s\u00f3 quando o ponteiro entrar na reserva.",
              effects: {"foco": -3, "execucao": 0, "visao": -2, "adaptabilidade": 0},
              feedback: "Sem Ju\u00edzo. O ponteiro despencou no primeiro m\u00eas e gerou p\u00e2nico na cabine."
            }
          ]
        },
        {
          text: "A nave precisa perder 150 kg URGENTE para conseguir sair da gravidade da Terra. Como corta peso no sistema de ar?",
          choices: [
            {
              text: "Trocar os canos pesados de ferro por dutos ocos de tit\u00e2nio, cortando peso sem perder a press\u00e3o.",
              effects: {"foco": 1, "execucao": 3, "visao": 0, "adaptabilidade": 0},
              feedback: "Cir\u00fargico. Perde quilos pesados na estrutura mantendo o sistema seguro."
            },
            {
              text: "Fazer um circuito fechado: transformar a umidade do suor da academia da nave em \u00e1gua para regar as plantas que geram o2",
              effects: {"foco": 0, "execucao": 0, "visao": 3, "adaptabilidade": 1},
              feedback: "Gambiarra Genial. Conecta o suor dos astronautas diretamente na f\u00e1brica de ar das plantas."
            },
            {
              text: "Fechar a torneira do ar nas cabines durante a noite para a galera economizar enquanto dorme.",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": -2},
              feedback: "Economia de Palito. Bate a meta de peso, mas a equipe acorda parecendo que foi atropelada por um trator."
            },
            {
              text: "Desmontar a sirene de alarme e metade das luzes de emerg\u00eancia dos tanques de oxig\u00eanio.",
              effects: {"foco": 0, "execucao": -2, "visao": -3, "adaptabilidade": 0},
              feedback: "Tirando o Extintor. Ficou leve, mas voc\u00ea acabou de ficar cego para qualquer vazamento futuro."
            }
          ]
        }
      ]
    },
    {
      id: 'do',
      name: "DO",
      subtitle: "Executar",
      icon: '🔨',
      color: '#FF7043',
      bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)',
      bgImage: 'assets/bg_astro_do.png',
      intro: "40\u00ba dia de voo. Um solavanco seco faz a nave balan\u00e7ar! CABUM! A conex\u00e3o do tubo de ar racha com a vibra\u00e7\u00e3o do motor. O apito de emerg\u00eancia ensurdece a cabine: o ar puro est\u00e1 vazando para o espa\u00e7o!",
      scenarios: [
        {
          text: "O ar t\u00e1 vazando r\u00e1pido e o painel t\u00e1 piscando em vermelho! Qual \u00e9 o seu movimento?",
          choices: [
            {
              text: "Puxar o capacete, correr pro corredor e meter a fita de veda\u00e7\u00e3o de alt\u00edssima press\u00e3o direto na rachadura com as m\u00e3os!",
              effects: {"foco": 0, "execucao": 3, "visao": -1, "adaptabilidade": 0},
              feedback: "Instinto Puro. Estanca a sangria de ar na ra\u00e7a, mas nem parou para ver por que o cano quebrou."
            },
            {
              text: "Correr pro painel principal, dar um golpe no bot\u00e3o de emerg\u00eancia e isolar a \u00e1rea rachada pelas travas digitais.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Frio e Calculista. Salva o oxig\u00eanio da nave de forma r\u00e1pida e segura, sem se expor."
            },
            {
              text: "Ligar os ventiladores da Estufa no m\u00e1ximo para tentar \"empurrar\" ar novo pra cabine enquanto pensa no que fazer.",
              effects: {"foco": 0, "execucao": -2, "visao": 0, "adaptabilidade": 2},
              feedback: "Improviso Furado. Soprou ar limpo para dentro, mas ele continuou saindo pelo mesmo buraco."
            },
            {
              text: "Ficar olhando pro painel esperando o computador de bordo resolver o vazamento sozinho.",
              effects: {"foco": -2, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Travado pelo Medo. A demora quase fez todo mundo apagar por falta de ar."
            }
          ]
        },
        {
          text: "Furo selado! S\u00f3 que a fuma\u00e7a preta de um curto-circuito queimou o filtro e tomou conta da cabine. Ningu\u00e9m consegue enxergar um palmo!",
          choices: [
            {
              text: "Meter a m\u00e3o na caixa de ferramentas, puxar o manual e seguir o passo a passo da depura\u00e7\u00e3o de emerg\u00eancia.",
              effects: {"foco": 3, "execucao": 1, "visao": 0, "adaptabilidade": 0},
              feedback: "Pelas Regras. Limpa o ar da cabine certinho, exatamente como treinou no simulador."
            },
            {
              text: "Sacar o filtro de \u00e1gua da estufa de plantas e encaixar na entrada de ar da cabine para usar o carv\u00e3o \u00famido como m\u00e1scara!",
              effects: {"foco": 0, "execucao": 1, "visao": 0, "adaptabilidade": 3},
              feedback: "Mestre da Gambiarra. Salva os pulm\u00f5es da equipe usando pe\u00e7as da horta espacial!"
            },
            {
              text: "\"Abre a porta!\" \u2014 Ejetar 10% do ar da cabine pro v\u00e1cuo do espa\u00e7o para levar a fuma\u00e7a embora junto.",
              effects: {"foco": 0, "execucao": 1, "visao": -2, "adaptabilidade": 0},
              feedback: "Dr\u00e1stico. A fuma\u00e7a sumiu na hora, mas levou junto uma parte valiosa do oxig\u00eanio restante."
            },
            {
              text: "Distribuir panos molhados pra galera segurar no nariz e mandar todo mundo \"esperar a fuma\u00e7a baixar\".",
              effects: {"foco": 0, "execucao": -2, "visao": 0, "adaptabilidade": -3},
              feedback: "P\u00e9ssima Ideia. A fuma\u00e7a impregnou no sistema e travou as turbinas do ar-condicionado."
            }
          ]
        }
      ]
    },
    {
      id: 'check',
      name: "CHECK",
      subtitle: "Checar / Analisar",
      icon: '🔍',
      color: '#AB47BC',
      bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)',
      bgImage: 'assets/bg_astro_check.png',
      intro: "A poeira baixou, o apito parou e a nave est\u00e1 em sil\u00eancio. A crise passou, mas a pergunta que n\u00e3o quer calar \u00e9: com o ar que sobrou depois do vazamento, a gente consegue chegar vivos em Marte?",
      scenarios: [
        {
          text: "O visor marca que sobrou s\u00f3 60% do oxig\u00eanio. Como voc\u00ea encara esse n\u00famero?",
          choices: [
            {
              text: "Montar uma planilha viva no painel: cruzar a respira\u00e7\u00e3o de cada um com os dados de fotoss\u00edntese di\u00e1ria das alfaces da estufa.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Mente Cient\u00edfica. Sabe exatamente a gota de ar que cada astronauta pode gastar por hora."
            },
            {
              text: "Ligar os refletores roxos da Estufa no modo turbo para fazer as plantas trabalharem em dobro e repor o ar perdido.",
              effects: {"foco": -1, "execucao": 0, "visao": 0, "adaptabilidade": 3},
              feedback: "Ajuste Verde. P\u00f5e a natureza para ralar o triplo e cobrir a bagun\u00e7a do vazamento."
            },
            {
              text: "Trancar os controles do ar na marra e avisar: \"A partir de hoje, ar condicionado s\u00f3 no n\u00edvel m\u00ednimo at\u00e9 pousar!\"",
              effects: {"foco": 2, "execucao": 0, "visao": 0, "adaptabilidade": -2},
              feedback: "Torneira Fechada. O ar vai durar at\u00e9 Marte, mas a equipe t\u00e1 trabalhando no limite do cansa\u00e7o."
            },
            {
              text: "Desligar a tela do painel de ar e falar: \"Galera, n\u00e3o olhem pro ponteiro pra n\u00e3o ficar ansiosos\".",
              effects: {"foco": -2, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Modo Avestruz. Escondeu a cabe\u00e7a no buraco e n\u00e3o viu que o ar continuava caindo aos poucos."
            }
          ]
        },
        {
          text: "O scanner avisa que o filtro do ar ficou cheio de fuligem da fuma\u00e7a e t\u00e1 entupindo a cada 8 horas. Como descobre o problema?",
          choices: [
            {
              text: "Raspar uma amostra da sujeira e colocar no microsc\u00f3pio para ver se \u00e9 cinza de metal queimado ou resina de planta.",
              effects: {"foco": 0, "execucao": 1, "visao": 3, "adaptabilidade": 0},
              feedback: "Investigador. Descobre a causa exata e aplica o produto certo pra limpar sem estragar a pe\u00e7a."
            },
            {
              text: "Inverter a polaridade dos ventiladores para dar um \"assopro reverso\" e expelir a sujeira do filtro sem desmontar nada!",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": 3},
              feedback: "Engenhosidade. Limpa o sistema usando a pr\u00f3pria press\u00e3o do ar a seu favor."
            },
            {
              text: "Botar o copiloto para limpar o filtro manualmente com uma escovinha de dente a cada troca de turno.",
              effects: {"foco": 0, "execucao": 1, "visao": 0, "adaptabilidade": -2},
              feedback: "Trabalho Bra\u00e7al. Resolve o problema do filtro, mas deixa o coitado do copiloto mo\u00eddo de cansa\u00e7o."
            },
            {
              text: "Arrancar o filtro sujo de vez e deixar o ar circular sem filtro nenhum pela nave.",
              effects: {"foco": 0, "execucao": -3, "visao": -2, "adaptabilidade": 0},
              feedback: "Poeira no Motor. A poeira solta entrou nas engrenagens e queimou o ar-condicionado central."
            }
          ]
        }
      ]
    },
    {
      id: 'act',
      name: "ACT",
      subtitle: "Padronizar e Agir",
      icon: '🔄',
      color: '#EF5350',
      bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)',
      bgImage: 'assets/bg_astro_act.png',
      intro: "O Planeta Vermelho surge enorme na janela! A nave aterrissou. Com os ajustes da Fase 3, o ar deu para chegar. Agora voc\u00ea precisa conectar o sistema de ar da nave direto na nova C\u00fapula de Marte e criar a regra definitiva de uso.",
      scenarios: [
        {
          text: "Qual \u00e9 o seu plano para juntar o ar da nave com o ar da nova C\u00fapula em solo marciano?",
          choices: [
            {
              text: "Puxar a prancheta, seguir o manual de conex\u00e3o de 10 passos e testar a press\u00e3o 3 vezes antes de girar a manivela.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Procedimento Blindado. Transi\u00e7\u00e3o perfeita. Nem uma mol\u00e9cula de oxig\u00eanio escapou pro nada."
            },
            {
              text: "Encaixar os tubos da Estufa Biom\u00f3vel direto na ventila\u00e7\u00e3o da C\u00fapula, fazendo a base nascer j\u00e1 produzindo ar puro!",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Integra\u00e7\u00e3o Total. Transforma a horta da nave no pulm\u00e3o verde da nova col\u00f4nia marciana."
            },
            {
              text: "\"Vamos logo com isso!\": girar a v\u00e1lvula principal rapidamente para desembarcar as malas mais r\u00e1pido.",
              effects: {"foco": -2, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Apressado. Economizou tempo, mas a press\u00e3o deu um tranco e fez o painel da c\u00fapula apitar."
            },
            {
              text: "Mudar a ordem de encaixe dos tubos na hora do pouso sem avisar ningu\u00e9m da equipe.",
              effects: {"foco": -3, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Confus\u00e3o Geral. Um duto mal travado fez o oxig\u00eanio da c\u00fapula vazar na poeira de Marte."
            }
          ]
        },
        {
          text: "Pouso conclu\u00eddo e base acesa! Como voc\u00ea registra essa vit\u00f3ria para as futuras col\u00f4nias?",
          choices: [
            {
              text: "Escrever o novo \"Manual de Sobreviv\u00eancia de Ar\" com tudo o que deu certo na viagem e mandar via r\u00e1dio para a Terra.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Legado Oficial. Seu guia virou a b\u00edblia de instru\u00e7\u00e3o para todos os novos astronautas."
            },
            {
              text: "Transformar os tanques de ar vazios da nave em dep\u00f3sitos de emerg\u00eancia fixos acoplados ao lado da C\u00fapula.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Reaproveitamento. Transforma lata velha em seguran\u00e7a extra para a col\u00f4nia no solo."
            },
            {
              text: "Contar como foi a solu\u00e7\u00e3o do vazamento numa conversa informal com a equipe durante o jantar de comemora\u00e7\u00e3o.",
              effects: {"foco": -2, "execucao": 0, "visao": 0, "adaptabilidade": 1},
              feedback: "Papo de Bar. A ideia foi legal, mas ningu\u00e9m anotou os detalhes t\u00e9cnicos no relat\u00f3rio."
            },
            {
              text: "Desligar o r\u00e1dio e n\u00e3o anotar nada no di\u00e1rio de bordo para ir direto descansar na base nova.",
              effects: {"foco": -3, "execucao": 0, "visao": -2, "adaptabilidade": 0},
              feedback: "Sem Registro. Ningu\u00e9m aprendeu com os erros e acertos da sua viagem."
            }
          ]
        }
      ]
    },
    {
      id: 'kaizen',
      name: "KAIZEN",
      subtitle: "Melhorar Continuamente",
      icon: '🌿',
      color: '#66BB6A',
      bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)',
      bgImage: 'assets/bg_astro_kaizen.png',
      intro: "A base est\u00e1 firme e o ar t\u00e1 gostoso de respirar. O ciclo acabou com sucesso! Mas um verdadeiro Comandante olha para o cano que quebrou na Fase 2 e pensa: \"O que vou mudar no projeto da pr\u00f3xima nave (Ares-V) para que esse cano NUNCA MAIS quebre?\"",
      scenarios: [
        {
          text: "O tubo quebrou por causa da trepida\u00e7\u00e3o do motor. Como voc\u00ea aplica o Kaizen nesse peda\u00e7o da nave?",
          choices: [
            {
              text: "Inventar um conector magn\u00e9tico sanfonado que balan\u00e7a junto com o motor sem nunca rachar a estrutura!",
              effects: {"foco": 0, "execucao": 0, "visao": 1, "adaptabilidade": 3},
              feedback: "Evolu\u00e7\u00e3o de Engenharia! Voc\u00ea eliminou a falha de projeto! A pr\u00f3xima nave vai ser imune a esse vazamento."
            },
            {
              text: "Colocar no checklist do piloto: \"A cada 48 horas, olhar com o microsc\u00f3pio se o cano t\u00e1 trincando\".",
              effects: {"foco": 3, "execucao": 1, "visao": 0, "adaptabilidade": 0},
              feedback: "Melhoria na Rotina. Cria uma preven\u00e7\u00e3o constante para pegar o problema logo no comecinho."
            },
            {
              text: "Trocar o cano quebrado por um novo rigorosamente igual e torcer para o motor trepidar menos na pr\u00f3xima vez.",
              effects: {"foco": 0, "execucao": 1, "visao": 0, "adaptabilidade": -2},
              feedback: "Mesma Coisa. Trocou a pe\u00e7a, mas a falha de projeto continua l\u00e1 esperando a pr\u00f3xima viagem."
            },
            {
              text: "Dar uma bronca na f\u00e1brica que fez o cano e dizer que foi apenas \"um azar que n\u00e3o vai se repetir\".",
              effects: {"foco": -2, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Teimosia. N\u00e3o mudou nem a pe\u00e7a nem o processo. A nave Ares-V vai passar pelo mesmo sufoco."
            }
          ]
        },
        {
          text: "Qual \u00e9 a sua mensagem de encerramento na transmiss\u00e3o ao vivo para a Academia de Astronautas da Terra?",
          choices: [
            {
              text: "\"Quase morremos por uma falha no cano. Mas aprendemos com o erro, mudamos a engenharia e hoje a humanidade tem uma nave 100% mais segura!\"",
              effects: {"foco": 0, "execucao": 0, "visao": 1, "adaptabilidade": 3},
              feedback: "Mestre da Evolu\u00e7\u00e3o! Mostra que errar faz parte, mas n\u00e3o evoluir com o erro \u00e9 inaceit\u00e1vel."
            },
            {
              text: "\"Pegamos todos os perrengues do ar e criamos uma simula\u00e7\u00e3o ultra-realista para os novatos treinarem no simulador.\"",
              effects: {"foco": 3, "execucao": 1, "visao": 0, "adaptabilidade": 0},
              feedback: "Escola de Voo. Transforma a sua experi\u00eancia real no melhor treino da hist\u00f3ria da ag\u00eancia."
            },
            {
              text: "\"Chegamos vivos, ent\u00e3o o treinamento antigo continua bom. N\u00e3o precisa mudar nada nos manuais.\"",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": -2},
              feedback: "Zona de Conforto. Perdeu a oportunidade de ouro de deixar a pr\u00f3xima miss\u00e3o muito melhor."
            },
            {
              text: "\"O espa\u00e7o \u00e9 perigoso demais. Se um cano quebrar, s\u00f3 resta rezar pra ter a mesma sorte que a gente teve.\"",
              effects: {"foco": 0, "execucao": -2, "visao": -3, "adaptabilidade": 0},
              feedback: "Sorte n\u00e3o \u00e9 M\u00e9todo. Ignorou a ci\u00eancia da melhoria cont\u00ednua e deixou o futuro nas m\u00e3os do acaso."
            }
          ]
        }
      ]
    }
  ],
  detetive: [
    {
      id: 'plan',
      name: "PLAN",
      subtitle: "Planejar",
      icon: '📋',
      color: '#4FC3F7',
      bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
      bgImage: 'assets/bg_detetive.png',
      intro: "21h30. Sob uma tempestade severa e luzes vacilantes, o alarme do escrit\u00f3rio dispara no segundo andar da Mans\u00e3o Blackwood. Na sala, Arthur Blackwood jaz desacordado com um ferimento na cabe\u00e7a, o cofre est\u00e1 escancarado sem o contrato e a porta permaneceu trancada por dentro. Entre cacos de vidro e o cheiro forte de u\u00edsque, os tr\u00eas h\u00f3spedes gritam desorientados no corredor.",
      scenarios: [
        {
          text: "Como agir imediatamente diante da confus\u00e3o de pessoas no corredor?",
          choices: [
            {
              text: "Esticar a fita de isolamento na porta, dar um grito de \"Todo mundo parado!\" e desenhar as vias de acesso no bloco antes de pisar na sala.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Preserva\u00e7\u00e3o Blindada. Congela a cena no tempo e impede que pegadas valiosas sejam apagadas."
            },
            {
              text: "Salvar o que d\u00e1! Dar um salto por cima do vidro estilha\u00e7ado e ir direto ao painel do cofre ver marcas recentes.",
              effects: {"foco": -1, "execucao": 3, "visao": 0, "adaptabilidade": 0},
              feedback: "A\u00e7\u00e3o Impulsiva. Chega r\u00e1pido ao cofre, mas a sola do seu sapato esmagou uma pista no tapete."
            },
            {
              text: "Observar a movimenta\u00e7\u00e3o no corredor para mapear rapidamente a din\u00e2mica do ambiente antes de intervir.",
              effects: {"foco": 0, "execucao": 0, "visao": 1, "adaptabilidade": 2},
              feedback: "Leitura de Ambiente. Adapta a estrat\u00e9gia de conten\u00e7\u00e3o ao comportamento inicial do grupo."
            },
            {
              text: "Entrar em p\u00e2nico junto, passar esparadrapo na boca de todos e trancar a fam\u00edlia inteira no s\u00f3t\u00e3o escuro.",
              effects: {"foco": -3, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Caos Absoluto. Gerou p\u00e2nico na casa, violou direitos e n\u00e3o conseguiu uma \u00fanica prova."
            }
          ]
        },
        {
          text: "A porta do escrit\u00f3rio estava trancada por DENTRO. Como investigar o mecanismo da tranca?",
          choices: [
            {
              text: "Sacar a lupa, ajoelhar e procurar no olho da fechadura por fiapos de linha, arranh\u00f5es de arame ou marcas de metal rec\u00e9m-feitas.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Detetive Cl\u00e1ssico. Procura a assinatura mec\u00e2nica de um truque de trancamento por fora."
            },
            {
              text: "Correr pelo corredor testando a chave do escrit\u00f3rio nas portas dos quartos para ver se a casa usa um sistema de chaves-mestre.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Atalho Pr\u00e1tico. Entende a arquitetura das trancas da mans\u00e3o em quest\u00e3o de minutos."
            },
            {
              text: "Inspecionar o desgaste das chaves sobressalentes no quadro geral para identificar c\u00f3pias recentes.",
              effects: {"foco": 2, "execucao": 1, "visao": 0, "adaptabilidade": 0},
              feedback: "Checagem Operacional. Foca no controle f\u00edsico e no hist\u00f3rico de duplicatas do sistema."
            },
            {
              text: "Dar uma voadora no batente da porta do quarto ao lado para \"sentir a resist\u00eancia da madeira\".",
              effects: {"foco": -2, "execucao": 0, "visao": -2, "adaptabilidade": 0},
              feedback: "Vandalismo. Destruiu o patrim\u00f4nio da casa e n\u00e3o descobriu nada sobre o crime."
            }
          ]
        }
      ]
    },
    {
      id: 'do',
      name: "DO",
      subtitle: "Executar",
      icon: '🔨',
      color: '#FF7043',
      bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 50%, #bf360c 100%)',
      bgImage: 'assets/bg_det_do.png',
      intro: "Com a estrada bloqueada pela tempestade e sem sinal de telefone, voc\u00ea re\u00fane os tr\u00eas suspeitos na sala de estar: a Esposa, o S\u00f3cio e o Sobrinho. \u00c0s 22h10, sob luzes que oscilam, o clima \u00e9 tenso e todos trocam acusa\u00e7\u00f5es exaltadas.",
      scenarios: [
        {
          text: "Como executar a abordagem inicial dos depoimentos na sala?",
          choices: [
            {
              text: "Levar um de cada vez para a biblioteca fechada e aplicar o question\u00e1rio padr\u00e3o de checagem de \u00e1libis.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Inqu\u00e9rito Met\u00f3dico. Permite comparar as respostas com precis\u00e3o cir\u00fargica em busca de furos."
            },
            {
              text: "Separar os tr\u00eas imediatamente em c\u00f4modos distintos para impedir a troca de informa\u00e7\u00f5es.",
              effects: {"foco": 0, "execucao": 3, "visao": 1, "adaptabilidade": 0},
              feedback: "Isolamento T\u00e1tico. Corta a comunica\u00e7\u00e3o entre os suspeitos e for\u00e7a relatos individuais sem alinhamento."
            },
            {
              text: "Adaptar a ordem das perguntas conforme as rea\u00e7\u00f5es imediatas demonstradas pelos suspeitos durante o isolamento.",
              effects: {"foco": 0, "execucao": 1, "visao": 0, "adaptabilidade": 3},
              feedback: "Inqu\u00e9rito Din\u00e2mico. Ajusta o ritmo da entrevista conforme novas brechas aparecem."
            },
            {
              text: "Distribuir ca\u00e7a-palavras de suspense para ver quem responde mais r\u00e1pido e entrega o nervosismo.",
              effects: {"foco": -3, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Perda de Tempo. Ningu\u00e9m cooperou e voc\u00ea perdeu a autoridade da investiga\u00e7\u00e3o."
            }
          ]
        },
        {
          text: "O S\u00f3cio diz que esteve na biblioteca e a Esposa alega que estava no quarto. Como validar esses depoimentos?",
          choices: [
            {
              text: "Checar detalhes f\u00edsicos do ambiente da biblioteca com o S\u00f3cio e auditar a medica\u00e7\u00e3o descrita pela Esposa.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Verifica\u00e7\u00e3o de Fatos. Confronta as declara\u00e7\u00f5es com elementos materiais comprov\u00e1veis."
            },
            {
              text: "Confrontar os dois diretamente na sala com as inconsist\u00eancias temporais coletadas.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Interrogat\u00f3rio Direto. Aplica press\u00e3o de campo para for\u00e7ar contradi\u00e7\u00f5es sob estresse."
            },
            {
              text: "Cruzar os hor\u00e1rios das rotinas relatadas com a oscila\u00e7\u00e3o de energia do gerador registrada no painel.",
              effects: {"foco": 0, "execucao": 0, "visao": 2, "adaptabilidade": 2},
              feedback: "An\u00e1lise T\u00e9cnica. Utiliza marcos objetivos da infraestrutura da casa para balizar os \u00e1libis."
            },
            {
              text: "Desafiar o S\u00f3cio para uma disputa de leitura r\u00e1pida e ignorar totalmente o depoimento da Esposa.",
              effects: {"foco": -3, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Vexame. A equipe precisou intervir para que voc\u00ea n\u00e3o perdesse o controle do caso."
            }
          ]
        }
      ]
    },
    {
      id: 'check',
      name: "CHECK",
      subtitle: "Checar / Analisar",
      icon: '🔍',
      color: '#AB47BC',
      bgGradient: 'linear-gradient(135deg, #1a0033 0%, #4a0072 50%, #7b1fa2 100%)',
      bgImage: 'assets/bg_det_check.png',
      intro: "23h. Arthur acorda desorientado, o cofre digital n\u00e3o tem marcas de arrombamento (a senha de 6 d\u00edgitos foi inserida de primeira) e o laudo indica sedativo no u\u00edsque. As pe\u00e7as do quebra-cabe\u00e7a come\u00e7am a se encaixar no seu quadro de pistas.",
      scenarios: [
        {
          text: "O teclado do cofre foi operado sem erros. O que isso indica na investiga\u00e7\u00e3o?",
          choices: [
            {
              text: "O criminoso obteve o c\u00f3digo direto com a v\u00edtima ou acessou sua agenda pessoal de anota\u00e7\u00f5es.",
              effects: {"foco": 1, "execucao": 0, "visao": 3, "adaptabilidade": 0},
              feedback: "Dedu\u00e7\u00e3o L\u00f3gica. Afunila as suspeitas apenas para o c\u00edrculo \u00edntimo da v\u00edtima."
            },
            {
              text: "Usar l\u00e2mpada ultravioleta no teclado para mapear a gordura dos dedos nos n\u00fameros mais pressionados.",
              effects: {"foco": 0, "execucao": 1, "visao": 3, "adaptabilidade": 0},
              feedback: "Per\u00edcia de Campo. Confirma visualmente os d\u00edgitos exatos da combina\u00e7\u00e3o usada no roubo."
            },
            {
              text: "Modificar o foco da investiga\u00e7\u00e3o para identificar quem teve acesso aos cadernos e gavetas de Arthur.",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": 2},
              feedback: "Reagrupamento Estrat\u00e9gico. Redireciona a varredura para os locais de guarda de informa\u00e7\u00f5es."
            },
            {
              text: "Concluir que a tempestade provocou um curto-circuito e fez o cofre destravar sozinho.",
              effects: {"foco": -2, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Sem Fundamento. Ignorou a engenharia do equipamento e a ci\u00eancia investigativa."
            }
          ]
        },
        {
          text: "O sedativo age em 15 minutos (servido \u00e0s 21h) e o Sobrinho possui um hiato de 20 minutos. Como cruzar esses dados?",
          choices: [
            {
              text: "Delimitar a incapacidade da v\u00edtima entre 21h15 e 21h45 e auditar os 20 minutos do Sobrinho nas c\u00e2meras do corredor.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Cronograma Certo. Cruza a farmacologia do sedativo com imagens neutras de auditoria."
            },
            {
              text: "Executar uma busca r\u00e1pida pelas lixeiras da casa para localizar o frasco ou ampola do sedativo.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "Varredura de Campo. Foca na localiza\u00e7\u00e3o f\u00edsica do recipiente descartado."
            },
            {
              text: "Ajustar a linha do tempo do caso inserindo o intervalo do sedativo como janela principal do crime.",
              effects: {"foco": 0, "execucao": 0, "visao": 2, "adaptabilidade": 2},
              feedback: "Recalibragem de Matriz. Reorganiza os dados operacionais conforme a prova farmacol\u00f3gica."
            },
            {
              text: "Apagar a lacuna do relat\u00f3rio por achar o intervalo de 20 minutos pequeno demais para um crime.",
              effects: {"foco": -2, "execucao": 0, "visao": -3, "adaptabilidade": 0},
              feedback: "Erro Crasso. A lacuna ignorada era exatamente o tempo de execu\u00e7\u00e3o do roubo."
            }
          ]
        }
      ]
    },
    {
      id: 'act',
      name: "ACT",
      subtitle: "Padronizar e Agir",
      icon: '🔄',
      color: '#EF5350',
      bgGradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #c62828 100%)',
      bgImage: 'assets/bg_det_act.png',
      intro: "02h. As viaturas chegam. A investiga\u00e7\u00e3o aponta para o S\u00f3cio: sedou a v\u00edtima, pegou a senha na agenda, roubou o contrato e usou uma linha sint\u00e9tica para trancar a porta por fora. Ao ver a pol\u00edcia, ele esconde a m\u00e3o no bolso.",
      scenarios: [
        {
          text: "O S\u00f3cio leva a m\u00e3o ao bolso ao ver as viaturas. Como realizar a acusa\u00e7\u00e3o e conten\u00e7\u00e3o?",
          choices: [
            {
              text: "Trancar as sa\u00eddas preventivamente e apresentar a narrativa encadeada: veneno, senha, fibra e contrato.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Caso Blindado. Apresenta uma cadeia l\u00f3gica indestrut\u00edvel enquanto impede qualquer tentativa de fuga."
            },
            {
              text: "Avan\u00e7ar no S\u00f3cio, tomar o contrato do bolso dele e aplicar imobiliza\u00e7\u00e3o f\u00edsica no ch\u00e3o.",
              effects: {"foco": 0, "execucao": 3, "visao": 0, "adaptabilidade": 1},
              feedback: "A\u00e7\u00e3o Direta. Resolve a tentativa de oculta\u00e7\u00e3o no ato com prontid\u00e3o f\u00edsica."
            },
            {
              text: "Bloquear a rota de sa\u00edda do S\u00f3cio usando a posi\u00e7\u00e3o dos policiais rec\u00e9m-chegados.",
              effects: {"foco": 0, "execucao": 2, "visao": 0, "adaptabilidade": 2},
              feedback: "Cerco T\u00e1tico. Adapta o posicionamento da equipe para anular qualquer brecha de fuga."
            },
            {
              text: "Acusar o Sobrinho por engano, perceber o erro no meio da fala e tentar mudar de ideia para o S\u00f3cio.",
              effects: {"foco": -3, "execucao": -3, "visao": 0, "adaptabilidade": 0},
              feedback: "Descredibilidade. Perdeu o controle da sala e virou motivo de piada."
            }
          ]
        },
        {
          text: "Com o culpado contido, como finalizar a entrega oficial do caso para os delegados?",
          choices: [
            {
              text: "Entregar o dossi\u00ea formal padronizado com laudos, fotos etiquetadas, linha do tempo e assinaturas.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Transi\u00e7\u00e3o Executiva. Garante que o processo penal siga sem brechas para os advogados do r\u00e9u."
            },
            {
              text: "Lacrar e etiquetar todas as evid\u00eancias recolhidas na presen\u00e7a das autoridades respons\u00e1veis.",
              effects: {"foco": 1, "execucao": 3, "visao": 0, "adaptabilidade": 0},
              feedback: "Fechamento Operacional. Conclui a cust\u00f3dia das provas com rigor de campo."
            },
            {
              text: "Adequar o relat\u00f3rio final aos formatos exigidos pelo protocolo da delegacia de plant\u00e3o.",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": 2},
              feedback: "Ajuste de Fluxo. Garante que a documenta\u00e7\u00e3o atenda aos requisitos da recep\u00e7\u00e3o oficial."
            },
            {
              text: "Jogar os sacos de provas e cadernos de anota\u00e7\u00f5es no lixo da sala e dizer que o trabalho terminou.",
              effects: {"foco": -4, "execucao": 0, "visao": -4, "adaptabilidade": 0},
              feedback: "Anula\u00e7\u00e3o. Sem as provas catalogadas, o Juiz soltar\u00e1 o r\u00e9u na audi\u00eancia de cust\u00f3dia."
            }
          ]
        }
      ]
    },
    {
      id: 'kaizen',
      name: "KAIZEN",
      subtitle: "Melhorar Continuamente",
      icon: '🌿',
      color: '#66BB6A',
      bgGradient: 'linear-gradient(135deg, #002200 0%, #1b5e20 50%, #388e3c 100%)',
      bgImage: 'assets/bg_det_kaizen.png',
      intro: "Manh\u00e3 seguinte na sede. O suspeito est\u00e1 preso, mas a revis\u00e3o do plant\u00e3o revela gargalos operacionais: falta de frascos de amostragem no in\u00edcio e um erro de digita\u00e7\u00e3o ao catalogar provas.",
      scenarios: [
        {
          text: "Faltaram frascos de coleta r\u00e1pida na Fase 1. Como tratar essa falha no Kaizen?",
          choices: [
            {
              text: "Desenvolver um \"Kit Expresso de Coleta R\u00e1pida\" com recipientes pr\u00e9-etiquetados para crises.",
              effects: {"foco": 0, "execucao": 1, "visao": 0, "adaptabilidade": 3},
              feedback: "Inova\u00e7\u00e3o de Ferramenta. Transforma um gargalo em um recurso que elimina o tempo de espera."
            },
            {
              text: "Mapear as causas do atraso (Os 5 Porqu\u00eas) e redesenhar o fluxo de reposi\u00e7\u00e3o da caixa de ferramentas.",
              effects: {"foco": 0, "execucao": 0, "visao": 3, "adaptabilidade": 1},
              feedback: "An\u00e1lise de Causa-Raiz. Corrige o sistema log\u00edstico em vez de buscar culpados pontuais."
            },
            {
              text: "Atualizar o manual da ag\u00eancia tornando obrigat\u00f3rio um checklist de insumos antes de sair da sede.",
              effects: {"foco": 3, "execucao": 0, "visao": 1, "adaptabilidade": 0},
              feedback: "Padroniza\u00e7\u00e3o. Garante que nenhum agente cometa o mesmo erro por esquecimento."
            },
            {
              text: "Dar uma bronca generalizada na equipe por n\u00e3o ter checado a maleta antes de entrar na viatura.",
              effects: {"foco": -1, "execucao": -2, "visao": 0, "adaptabilidade": 0},
              feedback: "A\u00e7\u00e3o Ineficiente. Gera atrito na equipe e n\u00e3o corrige a falha no processo de abastecimento."
            }
          ]
        },
        {
          text: "Um novato errou a digita\u00e7\u00e3o de uma etiqueta de prova. Como evitar que isso se repita?",
          choices: [
            {
              text: "Criar etiquetas com c\u00f3digo de barras e preenchimento digital antierro (Poka-Yoke).",
              effects: {"foco": 1, "execucao": 0, "visao": 0, "adaptabilidade": 3},
              feedback: "Processo Antierro. O sistema impede que a falha humana aconte\u00e7a antes mesmo da digita\u00e7\u00e3o."
            },
            {
              text: "Implementar uma etapa de dupla checagem obrigat\u00f3ria antes do envio dos dados ao sistema.",
              effects: {"foco": 3, "execucao": 1, "visao": 0, "adaptabilidade": 0},
              feedback: "Controle de Qualidade. Estabelece barreira operacional de valida\u00e7\u00e3o das informa\u00e7\u00f5es."
            },
            {
              text: "Reestruturar o fluxo de entrada de dados para ser executado via aplicativo m\u00f3vel direto de campo.",
              effects: {"foco": 0, "execucao": 2, "visao": 0, "adaptabilidade": 2},
              feedback: "Moderniza\u00e7\u00e3o de Processo. Elimina etapas intermedi\u00e1rias e reduz o risco de inconsist\u00eancias."
            },
            {
              text: "Assumir a digita\u00e7\u00e3o e colagem de absolutamente todas as etiquetas voc\u00ea mesmo a partir de hoje.",
              effects: {"foco": -1, "execucao": -2, "visao": 0, "adaptabilidade": 0},
              feedback: "Centraliza\u00e7\u00e3o. Virou um gargalo na lideran\u00e7a e impediu o crescimento da equipe."
            }
          ]
        }
      ]
    }
  ]
};

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
