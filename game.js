// ============================================================
// PIXEL DREAMS — Motor do Jogo
// Gerencia estados, transições, lógica e UI
// ============================================================

const Game = {
  // Estado do Jogo
  state: {
    playerName: '',
    characterId: null,
    careerId: null,
    trait: null,
    baseAttrs: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 0 },
    attrs: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 0 },
    pointsLeft: 10,
    currentPhase: 0,
    currentScenario: 0,
    choiceHistory: [],
    totalScenarios: 0,
    completedScenarios: 0
  },

  // ===== INICIALIZAÇÃO =====
  init() {
    // Contar total de cenários
    this.state.totalScenarios = PHASES.reduce((sum, p) => sum + p.scenarios.length, 0);
    // Renderizar tela inicial
    this.showScreen('screen-title');
  },

  // ===== NAVEGAÇÃO ENTRE TELAS =====
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.classList.add('fade-out');
    });
    setTimeout(() => {
      document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('fade-out');
        s.style.display = 'none';
      });
      const target = document.getElementById(screenId);
      target.style.display = 'flex';
      // Force reflow before adding active class
      target.offsetHeight;
      target.classList.add('active');
    }, 300);
  },

  // ===== CRIAÇÃO DE PERSONAGEM =====
  startCharacterCreation() {
    this.renderAvatars();
    this.renderCareers();
    this.renderAttributes();
    this.renderTraits();
    this.showScreen('screen-character');
  },

  renderAvatars() {
    const row = document.getElementById('avatar-row');
    row.innerHTML = CHARACTERS.map(c => `
      <div class="avatar-card" data-id="${c.id}" onclick="Game.selectAvatar('${c.id}')">
        <div class="avatar-pixel" style="background-image: url('${c.image}')"></div>
        <span class="avatar-card-name">${c.name}</span>
        <span class="avatar-card-desc">${c.desc}</span>
      </div>
    `).join('');
  },

  selectAvatar(id) {
    this.state.characterId = id;
    document.querySelectorAll('.avatar-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.avatar-card[data-id="${id}"]`).classList.add('selected');
    this.checkCharacterReady();
  },

  renderCareers() {
    const row = document.getElementById('careers-row');
    row.innerHTML = CAREERS.map(c => `
      <div class="career-card ${c.available ? '' : 'disabled'}" data-id="${c.id}" ${c.available ? `onclick="Game.selectCareer('${c.id}')"` : ''}>
        <span class="trait-icon">${c.icon}</span>
        <span class="trait-name">${c.name}</span>
        <span class="trait-desc">${c.desc}</span>
        ${c.available ? '' : '<span class="career-status">Em Breve</span>'}
      </div>
    `).join('');
  },

  selectCareer(id) {
    this.state.careerId = id;
    document.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.career-card[data-id="${id}"]`).classList.add('selected');
    this.checkCharacterReady();
  },

  renderAttributes() {
    const grid = document.getElementById('attributes-grid');
    const attrMeta = [
      { key: 'foco', name: 'Foco', icon: '📋', color: 'var(--color-foco)' },
      { key: 'execucao', name: 'Execução', icon: '🔨', color: 'var(--color-execucao)' },
      { key: 'visao', name: 'Visão Crítica', icon: '🔍', color: 'var(--color-visao)' },
      { key: 'adaptabilidade', name: 'Adaptabilidade', icon: '🌿', color: 'var(--color-adaptabilidade)' }
    ];

    grid.innerHTML = attrMeta.map(a => `
      <div class="attr-row">
        <span class="attr-icon">${a.icon}</span>
        <span class="attr-name" style="color:${a.color}">${a.name}</span>
        <button class="attr-btn" onclick="Game.changeAttr('${a.key}', -1)" data-attr="${a.key}" data-dir="minus">−</button>
        <span class="attr-value" id="attr-val-${a.key}">0</span>
        <button class="attr-btn" onclick="Game.changeAttr('${a.key}', 1)" data-attr="${a.key}" data-dir="plus">+</button>
        <div class="attr-mini-bar">
          <div class="attr-mini-fill" id="attr-fill-${a.key}" style="width:0%; background:${a.color}"></div>
        </div>
      </div>
    `).join('');
  },

  changeAttr(key, delta) {
    const current = this.state.baseAttrs[key];
    const newVal = current + delta;

    if (newVal < 0 || newVal > 5) return;
    if (delta > 0 && this.state.pointsLeft <= 0) return;

    this.state.baseAttrs[key] = newVal;
    this.state.pointsLeft += (delta > 0 ? -1 : 1);

    // Update UI
    document.getElementById(`attr-val-${key}`).textContent = newVal;
    document.getElementById(`attr-fill-${key}`).style.width = `${(newVal / 5) * 100}%`;
    document.getElementById('points-left').textContent = this.state.pointsLeft;

    // Update button states
    this.updateAttrButtons();
    this.checkCharacterReady();
  },

  updateAttrButtons() {
    document.querySelectorAll('.attr-btn[data-dir="plus"]').forEach(btn => {
      const key = btn.dataset.attr;
      btn.disabled = this.state.pointsLeft <= 0 || this.state.baseAttrs[key] >= 5;
    });
    document.querySelectorAll('.attr-btn[data-dir="minus"]').forEach(btn => {
      const key = btn.dataset.attr;
      btn.disabled = this.state.baseAttrs[key] <= 0;
    });
  },

  renderTraits() {
    const row = document.getElementById('traits-row');
    row.innerHTML = TRAITS.map(t => `
      <div class="trait-card" data-id="${t.id}" onclick="Game.selectTrait('${t.id}')">
        <span class="trait-icon">${t.icon}</span>
        <span class="trait-name">${t.name}</span>
        <span class="trait-desc">${t.desc}</span>
        <span class="trait-bonus">✦ ${t.bonus}</span>
        <span class="trait-penalty">⚠ ${t.penalty}</span>
      </div>
    `).join('');
  },

  selectTrait(id) {
    this.state.trait = id;
    document.querySelectorAll('.trait-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.trait-card[data-id="${id}"]`).classList.add('selected');
    this.checkCharacterReady();
  },

  checkCharacterReady() {
    const name = document.getElementById('input-name').value.trim();
    const ready = name.length > 0 && this.state.characterId && this.state.trait && this.state.careerId && this.state.pointsLeft < 10;
    document.getElementById('btn-confirm-char').disabled = !ready;
  },

  confirmCharacter() {
    const name = document.getElementById('input-name').value.trim();
    if (!name || !this.state.characterId || !this.state.trait || !this.state.careerId) return;

    this.state.playerName = name;

    // Apply trait effects to base attributes
    const trait = TRAITS.find(t => t.id === this.state.trait);
    this.state.attrs = { ...this.state.baseAttrs };
    for (const key in trait.effects) {
      this.state.attrs[key] = Math.max(0, this.state.attrs[key] + trait.effects[key]);
    }

    // Store initial attrs for comparison
    this.state.initialAttrs = { ...this.state.attrs };

    // Start the game!
    this.state.currentPhase = 0;
    this.state.currentScenario = 0;
    this.state.completedScenarios = 0;
    this.showPhaseTransition();
  },

  // ===== TRANSIÇÃO DE FASE =====
  showPhaseTransition() {
    const phase = PHASES[this.state.currentPhase];

    document.getElementById('transition-icon').textContent = phase.icon;
    document.getElementById('transition-phase').textContent = `FASE ${this.state.currentPhase + 1}`;
    document.getElementById('transition-name').textContent = phase.name;
    document.getElementById('transition-name').style.color = phase.color;
    document.getElementById('transition-subtitle').textContent = phase.subtitle;
    document.getElementById('transition-intro').textContent = phase.intro;

    const fill = document.getElementById('transition-bar-fill');
    fill.style.background = phase.color;
    fill.style.width = '0%';

    this.showScreen('screen-transition');

    // Animate bar and auto-transition
    setTimeout(() => { fill.style.width = '100%'; }, 500);
    setTimeout(() => { this.startGameScreen(); }, 3000);
  },

  // ===== TELA DE JOGO =====
  startGameScreen() {
    this.renderSidebar();
    this.renderScenario();
    this.showScreen('screen-game');
  },

  renderSidebar() {
    const char = CHARACTERS.find(c => c.id === this.state.characterId);
    const trait = TRAITS.find(t => t.id === this.state.trait);

    document.getElementById('sidebar-avatar-icon').innerHTML = `<img src="${char.image}" style="width: 24px; height: 24px; border-radius: 4px; object-fit: cover; border: 1px solid var(--border-inner);">`;
    document.getElementById('sidebar-name').textContent = this.state.playerName;
    document.getElementById('sidebar-trait').textContent = `${trait.icon} ${trait.name}`;

    this.renderStatBars();
    this.updatePhaseProgress();
  },

  renderStatBars() {
    const container = document.getElementById('stat-bars');
    const attrMeta = [
      { key: 'foco', name: 'Foco', color: 'var(--color-foco)' },
      { key: 'execucao', name: 'Execução', color: 'var(--color-execucao)' },
      { key: 'visao', name: 'Visão', color: 'var(--color-visao)' },
      { key: 'adaptabilidade', name: 'Adapta.', color: 'var(--color-adaptabilidade)' }
    ];

    container.innerHTML = attrMeta.map(a => {
      const val = this.state.attrs[a.key];
      const pct = Math.min(100, (val / 30) * 100); // max ~30 points possible
      return `
        <div class="stat-item">
          <div class="stat-header">
            <span class="stat-label" style="color:${a.color}">${a.name}</span>
            <span class="stat-value" id="stat-val-${a.key}">${val}</span>
          </div>
          <div class="stat-bar">
            <div class="stat-fill" id="stat-fill-${a.key}" style="width:${pct}%; background:${a.color}"></div>
          </div>
          <div class="stat-change" id="stat-change-${a.key}"></div>
        </div>
      `;
    }).join('');
  },

  updateStatBars(effects) {
    const attrKeys = ['foco', 'execucao', 'visao', 'adaptabilidade'];
    const colors = {
      foco: 'var(--color-foco)',
      execucao: 'var(--color-execucao)',
      visao: 'var(--color-visao)',
      adaptabilidade: 'var(--color-adaptabilidade)'
    };

    attrKeys.forEach(key => {
      const val = this.state.attrs[key];
      const pct = Math.min(100, (val / 30) * 100);
      const fillEl = document.getElementById(`stat-fill-${key}`);
      const valEl = document.getElementById(`stat-val-${key}`);
      const changeEl = document.getElementById(`stat-change-${key}`);

      if (fillEl) {
        fillEl.style.width = `${pct}%`;
      }
      if (valEl) {
        valEl.textContent = val;
      }

      // Show change indicator
      if (changeEl && effects && effects[key] !== 0) {
        const delta = effects[key];
        changeEl.textContent = delta > 0 ? `+${delta}` : `${delta}`;
        changeEl.className = `stat-change show ${delta > 0 ? 'positive' : 'negative'}`;
        setTimeout(() => { changeEl.classList.remove('show'); }, 2000);
      }
    });
  },

  updatePhaseProgress() {
    const total = this.state.totalScenarios;
    const done = this.state.completedScenarios;
    const pct = (done / total) * 100;

    const label = document.getElementById('sidebar-phase-label');
    const fill = document.getElementById('sidebar-phase-fill');

    if (label) label.textContent = `Fase ${this.state.currentPhase + 1}/5 — ${done}/${total}`;
    if (fill) fill.style.width = `${pct}%`;
  },

  renderScenario() {
    const phase = PHASES[this.state.currentPhase];
    const scenario = phase.scenarios[this.state.currentScenario];

    // Update phase indicator
    const badge = document.getElementById('phase-badge');
    badge.textContent = `${phase.icon} ${phase.name}`;
    badge.style.color = phase.color;
    badge.style.borderColor = phase.color;

    document.getElementById('scenario-counter').textContent =
      `${this.state.currentScenario + 1}/${phase.scenarios.length}`;

    // Update background
    document.getElementById('screen-game').style.background = `url('${phase.bgImage}') center/cover no-repeat`;

    // Show dialogue
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.style.display = 'block';
    this.typeText('dialogue-text', scenario.text);

    // Hide feedback
    document.getElementById('feedback-box').classList.add('hidden');

    // Render choices
    const grid = document.getElementById('choices-grid');
    grid.style.display = 'grid';
    grid.innerHTML = scenario.choices.map((c, i) => `
      <button class="choice-btn" data-num="${i + 1}." onclick="Game.makeChoice(${i})">
        ${c.text}
      </button>
    `).join('');
  },

  typeText(elementId, text) {
    const el = document.getElementById(elementId);
    el.textContent = '';
    let i = 0;
    const speed = 15;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  },

  makeChoice(index) {
    const phase = PHASES[this.state.currentPhase];
    const scenario = phase.scenarios[this.state.currentScenario];
    const choice = scenario.choices[index];

    // Apply effects
    for (const key in choice.effects) {
      this.state.attrs[key] = Math.max(0, this.state.attrs[key] + choice.effects[key]);
    }

    // Store choice
    this.state.choiceHistory.push({
      phase: this.state.currentPhase,
      scenario: this.state.currentScenario,
      choice: index
    });

    // Update UI
    this.updateStatBars(choice.effects);

    // Highlight selected choice
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === index) btn.classList.add('selected');
    });

    // Show feedback after a short delay
    setTimeout(() => {
      document.getElementById('choices-grid').style.display = 'none';
      const feedbackBox = document.getElementById('feedback-box');
      document.getElementById('feedback-text').textContent = choice.feedback;
      feedbackBox.classList.remove('hidden');
    }, 500);
  },

  nextScenario() {
    this.state.completedScenarios++;
    this.updatePhaseProgress();

    const phase = PHASES[this.state.currentPhase];

    // Next scenario in current phase?
    if (this.state.currentScenario + 1 < phase.scenarios.length) {
      this.state.currentScenario++;
      this.renderScenario();
      return;
    }

    // Next phase?
    if (this.state.currentPhase + 1 < PHASES.length) {
      this.state.currentPhase++;
      this.state.currentScenario = 0;
      this.showPhaseTransition();
      return;
    }

    // Game Over — show results!
    this.showResults();
  },

  // ===== RESULTADOS =====
  showResults() {
    this.renderProfile();
    this.renderResultBars();
    this.renderAnalysis();
    this.renderTips();
    this.showScreen('screen-results');
  },

  getProfile() {
    const attrs = this.state.attrs;
    const sorted = Object.entries(attrs).sort((a, b) => b[1] - a[1]);
    const top2 = sorted.slice(0, 2).map(a => a[0]).sort().join('-');

    return PROFILES[top2] || PROFILES['foco-execucao'];
  },

  renderProfile() {
    const profile = this.getProfile();
    const container = document.getElementById('results-profile');

    container.innerHTML = `
      <div class="profile-emoji">${profile.emoji}</div>
      <div class="profile-name">${this.state.playerName} — ${profile.name}</div>
      <p class="profile-desc">${profile.desc}</p>
    `;
  },

  renderResultBars() {
    const container = document.getElementById('results-bars');
    const attrMeta = [
      { key: 'foco', name: 'Foco & Organização', color: 'var(--color-foco)' },
      { key: 'execucao', name: 'Execução', color: 'var(--color-execucao)' },
      { key: 'visao', name: 'Visão Crítica', color: 'var(--color-visao)' },
      { key: 'adaptabilidade', name: 'Adaptabilidade', color: 'var(--color-adaptabilidade)' }
    ];

    const maxVal = Math.max(
      ...Object.values(this.state.attrs),
      ...Object.values(this.state.initialAttrs),
      10
    );

    container.innerHTML = `
      <h3>📊 EVOLUÇÃO DOS ATRIBUTOS</h3>
      ${attrMeta.map(a => {
        const initial = this.state.initialAttrs[a.key];
        const final = this.state.attrs[a.key];
        const initialPct = (initial / maxVal) * 100;
        const finalPct = (final / maxVal) * 100;
        const delta = final - initial;
        const deltaStr = delta >= 0 ? `+${delta}` : `${delta}`;

        return `
          <div class="result-bar-item">
            <div class="result-bar-header">
              <span class="result-bar-name" style="color:${a.color}">${a.name}</span>
              <span class="result-bar-values">${initial} → ${final} (${deltaStr})</span>
            </div>
            <div class="result-bar-track">
              <div class="result-bar-initial" style="width:${initialPct}%; background:${a.color}"></div>
              <div class="result-bar-final" style="width:${finalPct}%; background:${a.color}"></div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  },

  renderAnalysis() {
    const container = document.getElementById('results-analysis');
    const attrs = this.state.attrs;
    const sorted = Object.entries(attrs).sort((a, b) => b[1] - a[1]);

    const nameMap = {
      foco: 'Foco & Organização',
      execucao: 'Execução',
      visao: 'Visão Crítica',
      adaptabilidade: 'Adaptabilidade'
    };

    const strengths = sorted.slice(0, 2);
    const weaknesses = sorted.slice(2);

    container.innerHTML = `
      <h3>📋 ANÁLISE DO PERFIL</h3>
      <div class="analysis-item" style="border-color: var(--color-adaptabilidade)">
        <div class="analysis-label">💪 PONTOS FORTES</div>
        <div class="analysis-text">
          ${strengths.map(s => `<strong>${nameMap[s[0]]}</strong> (${s[1]} pts)`).join(' e ')}
          — Essas são suas maiores qualidades! Continue desenvolvendo-as.
        </div>
      </div>
      <div class="analysis-item" style="border-color: var(--color-act)">
        <div class="analysis-label">🎯 PONTOS DE MELHORIA</div>
        <div class="analysis-text">
          ${weaknesses.map(s => `<strong>${nameMap[s[0]]}</strong> (${s[1]} pts)`).join(' e ')}
          — Essas áreas têm espaço para crescimento. Veja as dicas abaixo!
        </div>
      </div>
      <div class="analysis-item" style="border-color: var(--accent-gold)">
        <div class="analysis-label">📈 RESUMO DA JORNADA</div>
        <div class="analysis-text">
          Você completou ${this.state.choiceHistory.length} decisões ao longo de 5 fases.
          Cada escolha moldou seu perfil profissional. Lembre-se: não existe caminho errado, apenas caminhos diferentes!
        </div>
      </div>
    `;
  },

  renderTips() {
    const container = document.getElementById('results-tips');
    const attrs = this.state.attrs;
    const sorted = Object.entries(attrs).sort((a, b) => b[1] - a[1]);
    const maxVal = sorted[0][1];

    container.innerHTML = `
      <h3>🌟 DICAS DE MELHORIA CONTÍNUA</h3>
      <div class="tips-grid">
        ${Object.entries(IMPROVEMENT_TIPS).map(([key, tip]) => {
          const val = attrs[key];
          const isHigh = val >= maxVal * 0.7;
          return `
            <div class="tip-item">
              <div class="tip-header" style="color:${tip.color}">
                ${tip.icon} ${tip.name}
              </div>
              <div class="tip-text">${isHigh ? tip.high : tip.low}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  // ===== REINICIAR =====
  restart() {
    this.state = {
      playerName: '',
      characterId: null,
      careerId: null,
      trait: null,
      baseAttrs: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 0 },
      attrs: { foco: 0, execucao: 0, visao: 0, adaptabilidade: 0 },
      pointsLeft: 10,
      currentPhase: 0,
      currentScenario: 0,
      choiceHistory: [],
      totalScenarios: PHASES.reduce((sum, p) => sum + p.scenarios.length, 0),
      completedScenarios: 0
    };
    this.showScreen('screen-title');
  }
};

// ===== LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  Game.init();

  // Character name input listener
  document.getElementById('input-name').addEventListener('input', () => {
    Game.checkCharacterReady();
  });
});
