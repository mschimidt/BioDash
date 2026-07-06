// --- REGISTRO DE PLUGINS CHART.JS ---
Chart.register(ChartDataLabels);

// --- ESTADO INICIAL DA APLICAÇÃO ---
const DEFAULT_STATE = {
    evaluations: {
        matheus: [
            {
                id: "eval_matheus_1",
                date: "2025-12-07",
                weight: 119.4,
                muscle: 38.1,
                fat: 43.7,
                visceral: 24,
                water: 49.3
            },
            {
                id: "eval_matheus_2",
                date: "2026-01-09",
                weight: 111.7,
                muscle: 37.1,
                fat: 41.5,
                visceral: 22,
                water: 47.9
            },
            {
                id: "eval_matheus_3",
                date: "2026-02-07",
                weight: 109.3,
                muscle: 37.5,
                fat: 39.5,
                visceral: 20,
                water: 48.5
            },
            {
                id: "eval_matheus_4",
                date: "2026-07-03",
                weight: 95.5,
                muscle: 38.6,
                fat: 28.7,
                visceral: 11,
                water: 49.7
            }
        ],
        adrielli: [
            {
                id: "eval_adrielli_1",
                date: "2026-04-09",
                weight: 80.9,
                muscle: 47.51,
                fat: 51.3,
                visceral: 20,
                water: 28.8,
                medidas: {
                    cintura: 91.0,
                    abdomen: 109.0,
                    quadril: 110.0,
                    bracoD: 32.5,
                    bracoE: 32.5,
                    coxaD: 61.0,
                    coxaE: 60.0,
                    panturrilhaD: 42.0,
                    panturrilhaE: 41.0
                },
                dobras: {
                    triceps: 40.0,
                    subescapular: 48.0,
                    peitoral: 30.0,
                    axilar: 35.0,
                    suprailiaca: 35.0,
                    abdominal: 46.5,
                    coxa: 46.0,
                    age: 30
                }
            },
            {
                id: "eval_adrielli_2",
                date: "2026-05-18",
                weight: 76.3,
                muscle: 46.61,
                fat: 51.0,
                visceral: 20,
                water: 27.4,
                medidas: {
                    cintura: 85.5,
                    abdomen: 108.0,
                    quadril: 109.0,
                    bracoD: 33.0,
                    bracoE: 32.0,
                    coxaD: 58.0,
                    coxaE: 55.0,
                    panturrilhaD: 40.0,
                    panturrilhaE: 40.0
                },
                dobras: {
                    triceps: 32.5,
                    subescapular: 27.5,
                    peitoral: 43.7,
                    axilar: 26.5,
                    suprailiaca: 40.0,
                    abdominal: 46.0,
                    coxa: null,
                    age: 30
                }
            },
            {
                id: "eval_adrielli_3",
                date: "2026-07-03",
                weight: 77.0,
                muscle: 46.97,
                fat: 50.3,
                visceral: 19,
                water: 28.1,
                medidas: {
                    cintura: 88.0,
                    abdomen: 106.0,
                    quadril: 108.0,
                    bracoD: 33.0,
                    bracoE: 33.0,
                    coxaD: 59.0,
                    coxaE: 60.0,
                    panturrilhaD: 40.0,
                    panturrilhaE: 41.0
                },
                dobras: {
                    triceps: 34.0,
                    subescapular: 30.0,
                    peitoral: 43.0,
                    axilar: 30.0,
                    suprailiaca: 37.5,
                    abdominal: 43.5,
                    coxa: 40.0,
                    age: 30
                }
            }
        ]
    },
    diets: {
        matheus: {
            kcal: 2200,
            p: 160,
            c: 240,
            f: 65,
            meals: [
                { name: "Café da Manhã", time: "08:00", foods: "3 ovos mexidos, 2 fatias de pão integral, 1 colher de requijão light", kcal: 380, p: 25, c: 26, f: 18 },
                { name: "Almoço", "time": "12:30", foods: "150g de peito de frango grelhado, 200g de arroz integral, salada de folhas à vontade", kcal: 520, p: 48, c: 50, f: 8 },
                { name: "Lanche da Tarde", time: "16:00", foods: "30g de whey protein, 30g de aveia em flocos, 1 banana", kcal: 320, p: 28, c: 38, f: 4 },
                { name: "Jantar", time: "20:00", foods: "150g de patinho moído, 150g de batata doce cozida, legumes no vapor", kcal: 580, p: 45, c: 45, f: 12 }
            ]
        },
        adrielli: {
            kcal: 1600,
            p: 120,
            c: 160,
            f: 50,
            meals: [
                { name: "Café da Manhã", time: "07:30", foods: "2 ovos mexidos, 1 fatia de pão integral, café preto sem açúcar", kcal: 240, p: 16, c: 15, f: 12 },
                { name: "Colação", time: "10:00", foods: "1 maçã picada, 10g de castanhas", kcal: 120, p: 1, c: 15, f: 6 },
                { name: "Almoço", time: "12:00", foods: "100g de filé de tilápia, 100g de arroz, legumes variados no vapor", kcal: 340, p: 28, c: 25, f: 6 },
                { name: "Lanche", time: "16:00", foods: "1 iogurte natural desnatado, 15g de aveia, 15g de whey", kcal: 220, p: 18, c: 20, f: 3 },
                { name: "Jantar", time: "19:30", foods: "100g de peito de frango, salada de folhas com 1 colher de azeite", kcal: 360, p: 30, c: 5, f: 15 }
            ]
        }
    },
    shoppingList: [],
    targets: {
        matheus: { weight: 80, fat: 14 },
        adrielli: { weight: 60, fat: 22 }
    }
};

let state = {};
let currentProfile = 'matheus';
let currentTab = 'painel';
let currentChartMetric = 'peso';
let currentSubDash = 'medidas'; // 'medidas' ou 'dobras'

// Instâncias dos Gráficos Chart.js
let evolutionChartInstance = null;
let medidasChartInstance = null;
let dobrasChartInstance = null;

// Mapeamento de alimentos para compras automáticas
const FOOD_KEYWORDS = [
    { keyword: 'frango', name: 'Peito de Frango', category: 'Proteínas' },
    { keyword: 'ovo', name: 'Ovos', category: 'Proteínas' },
    { keyword: 'patinho', name: 'Patinho Moído', category: 'Proteínas' },
    { keyword: 'carne', name: 'Carne Moída / Bifes', category: 'Proteínas' },
    { keyword: 'tilápia', name: 'Filé de Tilápia / Peixe', category: 'Proteínas' },
    { keyword: 'peixe', name: 'Filé de Tilápia / Peixe', category: 'Proteínas' },
    { keyword: 'whey', name: 'Whey Protein', category: 'Suplementos' },
    { keyword: 'creatina', name: 'Creatina', category: 'Suplementos' },
    { keyword: 'arroz', name: 'Arroz Integral / Branco', category: 'Carboidratos' },
    { keyword: 'batata', name: 'Batata Doce / Inglesa', category: 'Carboidratos' },
    { keyword: 'aveia', name: 'Aveia em Flocos', category: 'Carboidratos' },
    { keyword: 'pão', name: 'Pão Integral', category: 'Carboidratos' },
    { keyword: 'banana', name: 'Banana', category: 'Vegetais e Frutas' },
    { keyword: 'maçã', name: 'Maçã', category: 'Vegetais e Frutas' },
    { keyword: 'salada', name: 'Folhas Verdes (Alface, Rúcula)', category: 'Vegetais e Frutas' },
    { keyword: 'legumes', name: 'Legumes Variados (Brócolis, Cenoura)', category: 'Vegetais e Frutas' },
    { keyword: 'azeite', name: 'Azeite de Oliva Extra Virgem', category: 'Gorduras e Laticínios' },
    { keyword: 'queijo', name: 'Queijo Cottage / Minas Light', category: 'Gorduras e Laticínios' },
    { keyword: 'requijão', name: 'Requeijão Light', category: 'Gorduras e Laticínios' },
    { keyword: 'leite', name: 'Leite Desnatado', category: 'Gorduras e Laticínios' },
    { keyword: 'iogurte', name: 'Iogurte Natural Desnatado', category: 'Gorduras e Laticínios' },
    { keyword: 'castanhas', name: 'Castanhas / Oleaginosas', category: 'Gorduras e Laticínios' }
];

// --- INICIALIZAÇÃO DA APLICAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    switchProfile(currentProfile);
    switchTab(currentTab);
    lucide.createIcons();
    
    // Configura data padrão do formulário de avaliação para hoje
    const dateInput = document.getElementById('eval-date');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
});

// --- SISTEMA DE PERSISTÊNCIA ---
function loadState() {
    const saved = localStorage.getItem('biodash_state');
    if (saved) {
        try {
            state = JSON.parse(saved);
            // Garante retrocompatibilidade se faltarem campos novos
            if (!state.targets) state.targets = DEFAULT_STATE.targets;
            // Se as avaliações locais estiverem vazias, injeta os dados reais do DEFAULT_STATE
            if ((!state.evaluations.matheus || state.evaluations.matheus.length === 0) &&
                (!state.evaluations.adrielli || state.evaluations.adrielli.length === 0)) {
                state.evaluations = JSON.parse(JSON.stringify(DEFAULT_STATE.evaluations));
                saveState();
            } else {
                // Atualiza as avaliações padrão locais caso tenham sido atualizadas no DEFAULT_STATE
                ['matheus', 'adrielli'].forEach(profile => {
                    if (state.evaluations[profile]) {
                        DEFAULT_STATE.evaluations[profile].forEach(defEv => {
                            const idx = state.evaluations[profile].findIndex(e => e.id === defEv.id);
                            if (idx !== -1) {
                                const localEv = state.evaluations[profile][idx];
                                if (localEv.fat !== defEv.fat || localEv.visceral !== defEv.visceral || localEv.water !== defEv.water) {
                                    state.evaluations[profile][idx] = JSON.parse(JSON.stringify(defEv));
                                }
                            }
                        });
                    }
                });
                saveState();
            }
        } catch (e) {
            console.error("Erro ao ler LocalStorage, reiniciando estado.", e);
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    } else {
        // Inicializa com o estado padrão (dietas configuradas com histórico real)
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
    }
}

function saveState() {
    localStorage.setItem('biodash_state', JSON.stringify(state));
}

// --- CONTROLE DE ABAS E PERFIS ---
function switchProfile(profile) {
    currentProfile = profile;
    
    // Atualiza tema visual no Body
    document.body.className = `theme-${profile}`;
    
    // Atualiza botões do cabeçalho
    document.getElementById('btn-matheus').classList.toggle('active', profile === 'matheus');
    document.getElementById('btn-adrielli').classList.toggle('active', profile === 'adrielli');
    
    // Exibe ou oculta campos exclusivos da Adrielli
    const adrielliDash = document.getElementById('adrielli-specific-dash');
    const adrielliFields = document.getElementById('adrielli-fields-wrap');
    
    if (profile === 'adrielli') {
        if (adrielliDash) adrielliDash.classList.remove('hidden');
        if (adrielliFields) adrielliFields.classList.remove('hidden');
    } else {
        if (adrielliDash) adrielliDash.classList.add('hidden');
        if (adrielliFields) adrielliFields.classList.add('hidden');
    }
    
    // Atualiza as exibições
    refreshAllViews();
}

function switchTab(tabId) {
    currentTab = tabId;
    
    // Atualiza conteúdo
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });
    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) targetTab.classList.add('active');
    
    // Atualiza barra de navegação
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('active');
    });
    const targetNav = document.getElementById(`nav-${tabId}`);
    if (targetNav) targetNav.classList.add('active');
    
    // Força recriação de gráficos para evitar bugs de tamanho no celular
    if (tabId === 'painel') {
        setTimeout(renderCharts, 100);
    }
}

function refreshAllViews() {
    renderDashboard();
    renderHistory();
    renderDiet();
    renderShoppingList();
    renderSettings();
}

// --- MOTOR DE STORYTELLING E ANÁLISE ---
function renderDashboard() {
    const evals = state.evaluations[currentProfile] || [];
    const name = currentProfile === 'matheus' ? 'Matheus' : 'Adrielli';
    const target = state.targets[currentProfile];
    const isAdrielli = currentProfile === 'adrielli';
    
    // Atualiza rótulos dinâmicos de acordo com o perfil
    const lblMuscle = document.getElementById('lbl-muscle');
    if (lblMuscle) {
        lblMuscle.innerText = isAdrielli ? 'Massa Magra' : 'Massa Muscular';
    }
    const btnChartMuscle = document.getElementById('btn-chart-muscle');
    if (btnChartMuscle) {
        btnChartMuscle.innerText = isAdrielli ? 'Massa Magra' : 'Músculo';
    }
    
    const storyContainer = document.getElementById('story-content');
    
    // Se não houver avaliações
    if (evals.length === 0) {
        // Atualiza cards de resumo para vazio
        document.getElementById('current-weight').innerHTML = `-- <span class="unit">kg</span>`;
        document.getElementById('current-fat').innerHTML = `-- <span class="unit">%</span>`;
        document.getElementById('current-muscle').innerHTML = `-- <span class="unit">kg</span>`;
        document.getElementById('current-water-visceral').innerHTML = `--`;
        
        document.getElementById('weight-trend').className = 'metric-trend trend-stable';
        document.getElementById('weight-trend').innerText = 'Sem dados';
        document.getElementById('fat-trend').className = 'metric-trend trend-stable';
        document.getElementById('fat-trend').innerText = 'Sem dados';
        document.getElementById('muscle-trend').className = 'metric-trend trend-stable';
        document.getElementById('muscle-trend').innerText = 'Sem dados';
        document.getElementById('water-visceral-trend').className = 'metric-trend trend-stable';
        document.getElementById('water-visceral-trend').innerText = 'Sem dados';
        
        storyContainer.innerHTML = `
            <div class="empty-state-dashboard">
                <p>Olá, <strong>${name}</strong>! Nenhuma avaliação cadastrada ainda.</p>
                <p style="font-size: 13px; opacity: 0.8; margin-top: 5px;">Vá para a aba <strong>Histórico</strong> e clique em <strong>Nova Avaliação</strong> para inserir seus primeiros dados físicos!</p>
            </div>
        `;
        return;
    }
    
    // Ordena avaliações por data (mais recente por último)
    const sortedEvals = [...evals].sort((a, b) => new Date(a.date) - new Date(b.date));
    const latest = sortedEvals[sortedEvals.length - 1];
    const first = sortedEvals[0];
    const prev = sortedEvals.length > 1 ? sortedEvals[sortedEvals.length - 2] : null;
    
    // Atualiza Cards de Resumo
    document.getElementById('current-weight').innerHTML = `${latest.weight.toFixed(2)} <span class="unit">kg</span>`;
    document.getElementById('current-fat').innerHTML = `${latest.fat.toFixed(1)} <span class="unit">%</span>`;
    document.getElementById('current-muscle').innerHTML = `${latest.muscle.toFixed(2)} <span class="unit">kg</span>`;
    
    // Calcula tendências recentes (Última vs Anterior)
    updateTrendIndicator('weight-trend', latest.weight, prev ? prev.weight : null, 'kg', false);
    updateTrendIndicator('fat-trend', latest.fat, prev ? prev.fat : null, '%', false);
    updateTrendIndicator('muscle-trend', latest.muscle, prev ? prev.muscle : null, 'kg', true);
    
    // Quarto card dinâmico (Dobras vs Água/Visceral)
    const lblWaterVisceral = document.getElementById('lbl-water-visceral');
    if (isAdrielli) {
        if (lblWaterVisceral) lblWaterVisceral.innerText = 'Soma de Dobras';
        const sumD = (latest.dobras ? (latest.dobras.triceps || 0) + 
                     (latest.dobras.subescapular || 0) + 
                     (latest.dobras.peitoral || 0) + 
                     (latest.dobras.axilar || 0) + 
                     (latest.dobras.suprailiaca || 0) + 
                     (latest.dobras.abdominal || 0) + 
                     (latest.dobras.coxa || 0) : 0);
        document.getElementById('current-water-visceral').innerHTML = `${sumD.toFixed(1)} <span class="unit">mm</span>`;
        
        if (prev && prev.dobras) {
            const prevSumD = (prev.dobras.triceps || 0) + 
                             (prev.dobras.subescapular || 0) + 
                             (prev.dobras.peitoral || 0) + 
                             (prev.dobras.axilar || 0) + 
                             (prev.dobras.suprailiaca || 0) + 
                             (prev.dobras.abdominal || 0) + 
                             (prev.dobras.coxa || 0);
            const diffD = sumD - prevSumD;
            document.getElementById('water-visceral-trend').innerText = `Anterior: ${prevSumD.toFixed(1)} mm (${diffD > 0 ? '+' : ''}${diffD.toFixed(1)} mm)`;
        } else {
            document.getElementById('water-visceral-trend').innerText = 'Sem anterior';
        }
        document.getElementById('water-visceral-trend').className = 'metric-trend trend-stable';
    } else {
        if (lblWaterVisceral) lblWaterVisceral.innerText = 'Água / G. Visceral';
        document.getElementById('current-water-visceral').innerHTML = `${latest.water ? latest.water.toFixed(1) + '%' : '--'} / ${latest.visceral || '--'}`;
        const waterViscStr = prev ? `${prev.water ? prev.water.toFixed(0) + '%' : '--'} / Gv:${prev.visceral || '--'}` : 'Sem anterior';
        document.getElementById('water-visceral-trend').innerText = `Anterior: ${waterViscStr}`;
        document.getElementById('water-visceral-trend').className = 'metric-trend trend-stable';
    }

    // STORYTELLING & METAS (ANÁLISE DE DADOS E APRESENTAÇÃO)
    let storyHTML = '';
    const dateFormatted = formatDate(latest.date);
    
    // Cálculo de Massa Gorda em Kg
    const firstFatKg = first.weight * (first.fat / 100);
    const latestFatKg = latest.weight * (latest.fat / 100);
    const diffFatKg = latestFatKg - firstFatKg;
    const diffMuscleKg = latest.muscle - first.muscle;
    const diffWeight = latest.weight - first.weight;
    
    if (sortedEvals.length === 1) {
        storyHTML = `
            <p><span class="story-badge">Início</span> Sua jornada começou oficialmente em <strong>${dateFormatted}</strong>.</p>
            <p>Seu peso inicial é <strong>${latest.weight.toFixed(2)} kg</strong> com <strong>${latest.fat.toFixed(1)}%</strong> de gordura corporal (${latestFatKg.toFixed(1)} kg) e <strong>${latest.muscle.toFixed(2)} kg</strong> de ${isAdrielli ? 'massa magra' : 'massa muscular'}.</p>
            <p>🎯 Suas metas configuradas: chegar a <strong>${target.weight} kg</strong> com <strong>${target.fat}%</strong> de gordura. Continue firme!</p>
        `;
    } else {
        // Storytelling evolutivo
        const recentWeightDiff = latest.weight - (prev ? prev.weight : latest.weight);
        const recentFatDiff = latest.fat - (prev ? prev.fat : latest.fat);
        const recentMuscleDiff = latest.muscle - (prev ? prev.muscle : latest.muscle);
        
        storyHTML += `<p><span class="story-badge">Última Evolução</span> Em comparação com a avaliação anterior (${prev ? formatDate(prev.date) : ''}):</p>`;
        
        let recentPoints = [];
        if (recentWeightDiff !== 0) {
            recentPoints.push(`peso alterou em <strong>${recentWeightDiff > 0 ? '+' : ''}${recentWeightDiff.toFixed(2)} kg</strong>`);
        }
        if (recentFatDiff !== 0) {
            recentPoints.push(`gordura corporal <strong>${recentFatDiff > 0 ? 'subiu' : 'caiu'} ${Math.abs(recentFatDiff).toFixed(1)}%</strong>`);
        }
        if (recentMuscleDiff !== 0) {
            recentPoints.push(`${isAdrielli ? 'massa magra' : 'massa muscular'} <strong>${recentMuscleDiff > 0 ? 'aumentou' : 'reduziu'} ${Math.abs(recentMuscleDiff).toFixed(2)} kg</strong>`);
        }
        storyHTML += `<p>Seu ${recentPoints.join(', ')}.</p>`;
        
        // Histórico Acumulado
        storyHTML += `<p style="margin-top: 10px;"><span class="story-badge">Acumulado</span> Desde o início em ${formatDate(first.date)}:</p>`;
        
        let accumulatedPoints = [];
        if (diffWeight !== 0) {
            accumulatedPoints.push(`Alteração de peso total de <strong>${diffWeight > 0 ? '+' : ''}${diffWeight.toFixed(2)} kg</strong>`);
        }
        if (diffFatKg !== 0) {
            accumulatedPoints.push(`Eliminou <strong>${Math.abs(diffFatKg).toFixed(1)} kg de gordura pura</strong> ${diffFatKg < 0 ? '🔥' : '📈'}`);
        }
        if (diffMuscleKg !== 0) {
            accumulatedPoints.push(`${diffMuscleKg > 0 ? 'Ganhou' : 'Perdeu'} <strong>${Math.abs(diffMuscleKg).toFixed(2)} kg de ${isAdrielli ? 'massa magra' : 'músculos'}</strong> ${diffMuscleKg > 0 ? '💪' : '⚠️'}`);
        }
        storyHTML += `<ul>${accumulatedPoints.map(p => `<li>${p}</li>`).join('')}</ul>`;
        
        // Progresso até a Meta
        const weightGoalDiff = latest.weight - target.weight;
        const fatGoalDiff = latest.fat - target.fat;
        
        storyHTML += `<p style="margin-top: 10px;"><span class="story-badge">Alvo</span> </p>`;
        if (Math.abs(weightGoalDiff) < 0.5 && Math.abs(fatGoalDiff) < 1) {
            storyHTML += `<p>🎉 <strong>Incrível!</strong> Você atingiu suas metas de peso e percentual de gordura. Hora de traçar novos desafios!</p>`;
        } else {
            let targetText = [];
            if (weightGoalDiff > 0) {
                targetText.push(`faltam <strong>${weightGoalDiff.toFixed(2)} kg</strong> para a meta de peso (${target.weight} kg)`);
            } else if (weightGoalDiff < 0) {
                targetText.push(`precisa ganhar <strong>${Math.abs(weightGoalDiff).toFixed(2)} kg</strong> para o peso alvo (${target.weight} kg)`);
            }
            
            if (fatGoalDiff > 0) {
                targetText.push(`precisa reduzir <strong>${fatGoalDiff.toFixed(1)}%</strong> de gordura para o alvo de ${target.fat}%`);
            }
            storyHTML += `<p>Para atingir os seus objetivos, ${targetText.join(' e ')}.</p>`;
        }
    }
    
    storyContainer.innerHTML = storyHTML;
    renderCharts();
}

function updateTrendIndicator(elemId, current, previous, unit, higherIsBetter) {
    const el = document.getElementById(elemId);
    if (!el) return;
    
    if (previous === null) {
        el.className = 'metric-trend trend-stable';
        el.innerText = 'Primeira avaliação';
        return;
    }
    
    const diff = current - previous;
    const absDiff = Math.abs(diff);
    
    if (diff === 0) {
        el.className = 'metric-trend trend-stable';
        el.innerText = `Mantido (${unit})`;
    } else {
        const isPositiveChange = diff > 0;
        const isGood = higherIsBetter ? isPositiveChange : !isPositiveChange;
        
        el.className = `metric-trend ${isGood ? 'trend-up' : 'trend-down'}`;
        
        let arrow = '';
        if (isGood) {
            arrow = higherIsBetter ? '▲' : '▼';
        } else {
            arrow = isPositiveChange ? '▲' : '▼';
        }
        
        el.innerHTML = `${arrow} ${isPositiveChange ? '+' : '-'}${absDiff.toFixed(2)}${unit} (${isGood ? 'Melhorou' : 'Piorou'})`;
    }
}

// --- GERENCIADOR DE GRÁFICOS (CHART.JS) ---
function changeChartMetric(metric) {
    currentChartMetric = metric;
    
    // Atualiza botões
    const container = document.querySelector('.chart-toggle');
    if (container) {
        container.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        if (metric === 'peso') {
            container.querySelector('button[onclick*="peso"]')?.classList.add('active');
        } else if (metric === 'gordura') {
            container.querySelector('button[onclick*="gordura"]')?.classList.add('active');
        } else if (metric === 'musculo') {
            document.getElementById('btn-chart-muscle')?.classList.add('active');
        }
    }
    
    renderCharts();
}

function toggleSubDash(type) {
    currentSubDash = type;
    
    document.getElementById('btn-sub-medidas').classList.toggle('active', type === 'medidas');
    document.getElementById('btn-sub-dobras').classList.toggle('active', type === 'dobras');
    
    document.getElementById('medidas-chart-container').classList.toggle('hidden', type !== 'medidas');
    document.getElementById('dobras-chart-container').classList.toggle('hidden', type !== 'dobras');
    
    renderCharts();
}

function renderCharts() {
    const evals = state.evaluations[currentProfile] || [];
    if (evals.length === 0) return;
    
    // Ordena por data
    const sorted = [...evals].sort((a, b) => new Date(a.date) - new Date(b.date));
    const labels = sorted.map(e => formatDateShort(e.date));
    
    // --- 1. GRÁFICO PRINCIPAL DE BIOIMPEDÂNCIA ---
    let yLabel = '';
    let datasetLabel = '';
    let dataPoints = [];
    let accentColor = currentProfile === 'matheus' ? '#06b6d4' : '#e06a55';
    let gradientFillColor = currentProfile === 'matheus' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(224, 106, 85, 0.1)';
    
    if (currentChartMetric === 'peso') {
        yLabel = 'Peso (kg)';
        datasetLabel = 'Peso Corporal';
        dataPoints = sorted.map(e => e.weight);
    } else if (currentChartMetric === 'gordura') {
        yLabel = 'Gordura (%)';
        datasetLabel = '% de Gordura';
        dataPoints = sorted.map(e => e.fat);
    } else if (currentChartMetric === 'musculo') {
        const isAdrielli = currentProfile === 'adrielli';
        yLabel = isAdrielli ? 'Massa Magra (kg)' : 'Músculo (kg)';
        datasetLabel = isAdrielli ? 'Massa Magra' : 'Massa Muscular';
        dataPoints = sorted.map(e => e.muscle);
    }
    
    if (evolutionChartInstance) {
        evolutionChartInstance.destroy();
    }
    
    const ctx1 = document.getElementById('evolutionChart').getContext('2d');
    evolutionChartInstance = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: datasetLabel,
                data: dataPoints,
                borderColor: accentColor,
                backgroundColor: gradientFillColor,
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointBackgroundColor: accentColor,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    align: 'top',
                    font: { size: 10, weight: '600' },
                    formatter: function(value) {
                        return currentChartMetric === 'gordura' ? value.toFixed(1) + '%' : value.toFixed(1);
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'var(--text-muted)', font: { size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'var(--text-muted)', font: { size: 10 } }
                }
            }
        }
    });
    
    // --- 2. GRÁFICOS ESPECÍFICOS DE MEDIDAS / DOBRAS (ADRIELLI) ---
    if (currentProfile === 'adrielli') {
        // Filtrar apenas avaliações que tenham medidas/dobras cadastradas
        const withMedidas = sorted.filter(e => e.medidas && e.medidas.cintura);
        const labelsMedidas = withMedidas.map(e => formatDateShort(e.date));
        
        if (medidasChartInstance) medidasChartInstance.destroy();
        if (dobrasChartInstance) dobrasChartInstance.destroy();
        
        if (currentSubDash === 'medidas' && withMedidas.length > 0) {
            const ctxMedidas = document.getElementById('medidasChart').getContext('2d');
            medidasChartInstance = new Chart(ctxMedidas, {
                type: 'line',
                data: {
                    labels: labelsMedidas,
                    datasets: [
                        { label: 'Cintura', data: withMedidas.map(e => e.medidas.cintura), borderColor: '#f87171', borderWidth: 2, fill: false, tension: 0.2 },
                        { label: 'Abdômen', data: withMedidas.map(e => e.medidas.abdomen), borderColor: '#fbbf24', borderWidth: 2, fill: false, tension: 0.2 },
                        { label: 'Quadril', data: withMedidas.map(e => e.medidas.quadril), borderColor: '#34d399', borderWidth: 2, fill: false, tension: 0.2 },
                        { label: 'Coxa D', data: withMedidas.map(e => e.medidas.coxaD), borderColor: '#60a5fa', borderWidth: 2, fill: false, tension: 0.2 },
                        { label: 'Braço D', data: withMedidas.map(e => e.medidas.bracoD), borderColor: '#a78bfa', borderWidth: 2, fill: false, tension: 0.2 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { boxWidth: 10, color: 'var(--text-muted)', font: { size: 9 } } },
                        datalabels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            align: 'top',
                            font: { size: 9 },
                            formatter: function(value) { return value; }
                        }
                    },
                    scales: {
                        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'var(--text-muted)' } },
                        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'var(--text-muted)' } }
                    }
                }
            });
        }
        
        const withDobras = sorted.filter(e => e.dobras && e.dobras.triceps);
        const labelsDobras = withDobras.map(e => formatDateShort(e.date));
        
        if (currentSubDash === 'dobras' && withDobras.length > 0) {
            const ctxDobras = document.getElementById('dobrasChart').getContext('2d');
            
            // Soma das Dobras
            const sumDobras = withDobras.map(e => {
                return (e.dobras.triceps || 0) + 
                       (e.dobras.subescapular || 0) + 
                       (e.dobras.peitoral || 0) + 
                       (e.dobras.axilar || 0) + 
                       (e.dobras.suprailiaca || 0) + 
                       (e.dobras.abdominal || 0) + 
                       (e.dobras.coxa || 0);
            });
            
            dobrasChartInstance = new Chart(ctxDobras, {
                type: 'line',
                data: {
                    labels: labelsDobras,
                    datasets: [{
                        label: 'Soma de 7 Dobras (mm)',
                        data: sumDobras,
                        borderColor: '#fb7185',
                        backgroundColor: 'rgba(251, 113, 133, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.2,
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { color: 'var(--text-muted)', font: { size: 10 } } },
                        datalabels: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            align: 'top',
                            font: { size: 10, weight: '600' },
                            formatter: function(value) { return value.toFixed(1); }
                        }
                    },
                    scales: {
                        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'var(--text-muted)' } },
                        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'var(--text-muted)' } }
                    }
                }
            });
        }
    }
}

// --- HISTÓRICO DE AVALIAÇÕES - LOGÍCA ---
function renderHistory() {
    const list = document.getElementById('eval-history-list');
    const evals = state.evaluations[currentProfile] || [];
    
    if (evals.length === 0) {
        list.innerHTML = `
            <div class="empty-state card">
                <i data-lucide="calendar" class="empty-icon"></i>
                <p>Nenhuma avaliação física cadastrada para este perfil.</p>
                <button class="btn btn-secondary btn-sm" onclick="openNewEvalModal()">Cadastrar Primeira</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Ordena do mais recente para o mais antigo para a lista
    const sorted = [...evals].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    sorted.forEach(ev => {
        const dateStr = formatDate(ev.date);
        
        let detailsHtml = '';
        if (currentProfile === 'adrielli' && ev.dobras && ev.dobras.triceps) {
            const sumD = (ev.dobras.triceps || 0) + 
                         (ev.dobras.subescapular || 0) + 
                         (ev.dobras.peitoral || 0) + 
                         (ev.dobras.axilar || 0) + 
                         (ev.dobras.suprailiaca || 0) + 
                         (ev.dobras.abdominal || 0) + 
                         (ev.dobras.coxa || 0);
            detailsHtml = `
                <div class="eval-grid-item">
                    <span class="eval-grid-label">Dobras (Soma)</span>
                    <span class="eval-grid-value">${sumD.toFixed(1)} mm</span>
                </div>
                <div class="eval-grid-item">
                    <span class="eval-grid-label">Cintura / Abd.</span>
                    <span class="eval-grid-value">${ev.medidas.cintura} / ${ev.medidas.abdomen} cm</span>
                </div>
                <div class="eval-grid-item">
                    <span class="eval-grid-label">Quadril</span>
                    <span class="eval-grid-value">${ev.medidas.quadril} cm</span>
                </div>
            `;
            if (ev.visceral !== null || ev.water !== null) {
                detailsHtml += `
                    <div class="eval-grid-item">
                        <span class="eval-grid-label">Gord. Visceral</span>
                        <span class="eval-grid-value">${ev.visceral || '--'}</span>
                    </div>
                    <div class="eval-grid-item">
                        <span class="eval-grid-label">Água Corporal</span>
                        <span class="eval-grid-value">${ev.water ? ev.water.toFixed(1) + '%' : '--'}</span>
                    </div>
                `;
            }
        } else {
            detailsHtml = `
                <div class="eval-grid-item">
                    <span class="eval-grid-label">Gord. Visceral</span>
                    <span class="eval-grid-value">${ev.visceral || '--'}</span>
                </div>
                <div class="eval-grid-item">
                    <span class="eval-grid-label">Água Corporal</span>
                    <span class="eval-grid-value">${ev.water ? ev.water.toFixed(1) + '%' : '--'}</span>
                </div>
            `;
        }
        
        html += `
            <div class="eval-card">
                <div class="eval-header">
                    <div class="eval-date-wrap">
                        <i data-lucide="calendar"></i>
                        <span>${dateStr}</span>
                    </div>
                </div>
                <div class="eval-grid">
                    <div class="eval-grid-item">
                        <span class="eval-grid-label">Peso</span>
                        <span class="eval-grid-value">${ev.weight.toFixed(2)} kg</span>
                    </div>
                    <div class="eval-grid-item">
                        <span class="eval-grid-label">Gordura %</span>
                        <span class="eval-grid-value">${ev.fat.toFixed(1)}%</span>
                    </div>
                    <div class="eval-grid-item">
                        <span class="eval-grid-label">${currentProfile === 'adrielli' ? 'Massa Magra' : 'Massa Músculo'}</span>
                        <span class="eval-grid-value">${ev.muscle.toFixed(2)} kg</span>
                    </div>
                    ${detailsHtml}
                </div>
                <div class="eval-actions">
                    <button class="btn btn-danger btn-sm" onclick="deleteEvaluation('${ev.id}')">
                        <i data-lucide="trash-2"></i> Excluir
                    </button>
                </div>
            </div>
        `;
    });
    
    list.innerHTML = html;
    lucide.createIcons();
}

function openNewEvalModal() {
    // Limpa campos
    document.getElementById('form-new-eval').reset();
    document.getElementById('eval-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('pollock-result-box').style.display = 'none';
    
    // Ajusta o formulário de acordo com o perfil
    const adrielliFields = document.getElementById('adrielli-fields-wrap');
    const evalMuscleLabel = document.getElementById('lbl-eval-muscle');
    const evalMuscleInput = document.getElementById('eval-muscle');
    
    if (currentProfile === 'adrielli') {
        adrielliFields.classList.remove('hidden');
        if (evalMuscleLabel) evalMuscleLabel.innerText = 'Massa Magra (kg)';
        if (evalMuscleInput) evalMuscleInput.placeholder = 'Ex: 46.50';
    } else {
        adrielliFields.classList.add('hidden');
        if (evalMuscleLabel) evalMuscleLabel.innerText = 'Massa Muscular (kg)';
        if (evalMuscleInput) evalMuscleInput.placeholder = 'Ex: 34.20';
    }
    
    document.getElementById('modal-eval-title').innerText = `Avaliação de ${currentProfile === 'matheus' ? 'Matheus' : 'Adrielli'}`;
    openModal('modal-new-eval');
}

// ALGORITMO POLLOCK 7 DOBRAS
function calculatePollock() {
    const age = parseFloat(document.getElementById('eval-age').value);
    const d1 = parseFloat(document.getElementById('eval-d-triceps').value) || 0;
    const d2 = parseFloat(document.getElementById('eval-d-subescapular').value) || 0;
    const d3 = parseFloat(document.getElementById('eval-d-peitoral').value) || 0;
    const d4 = parseFloat(document.getElementById('eval-d-axilar').value) || 0;
    const d5 = parseFloat(document.getElementById('eval-d-suprailiaca').value) || 0;
    const d6 = parseFloat(document.getElementById('eval-d-abdominal').value) || 0;
    const d7 = parseFloat(document.getElementById('eval-d-coxa').value) || 0;
    
    if (!age || d1 <= 0 || d2 <= 0 || d3 <= 0 || d4 <= 0 || d5 <= 0 || d6 <= 0 || d7 <= 0) {
        document.getElementById('pollock-result-box').style.display = 'none';
        return null;
    }
    
    const sum = d1 + d2 + d3 + d4 + d5 + d6 + d7;
    
    // Pollock 7 Dobras para Mulheres
    // DC = 1.0970 - (0.00046971 * Sum7) + (0.00000056 * Sum7^2) - (0.00012828 * Age)
    const dc = 1.0970 - (0.00046971 * sum) + (0.00000056 * sum * sum) - (0.00012828 * age);
    
    // Equação de Siri: %G = ((4.95 / DC) - 4.50) * 100
    const fatPercent = ((4.95 / dc) - 4.50) * 100;
    
    if (fatPercent > 2 && fatPercent < 60) {
        const formatted = fatPercent.toFixed(1);
        document.getElementById('pollock-calc-value').innerText = formatted + ' %';
        document.getElementById('pollock-result-box').style.display = 'flex';
        return formatted;
    } else {
        document.getElementById('pollock-result-box').style.display = 'none';
        return null;
    }
}

function applyPollockValue() {
    const val = calculatePollock();
    if (val) {
        document.getElementById('eval-fat').value = val;
    }
}

function saveNewEvaluation(e) {
    e.preventDefault();
    
    const newEval = {
        id: 'eval_' + Date.now(),
        date: document.getElementById('eval-date').value,
        weight: parseFloat(document.getElementById('eval-weight').value),
        muscle: parseFloat(document.getElementById('eval-muscle').value),
        fat: parseFloat(document.getElementById('eval-fat').value),
        visceral: parseInt(document.getElementById('eval-visceral').value) || null,
        water: parseFloat(document.getElementById('eval-water').value) || null
    };
    
    if (currentProfile === 'adrielli') {
        newEval.medidas = {
            cintura: parseFloat(document.getElementById('eval-cintura').value) || null,
            abdomen: parseFloat(document.getElementById('eval-abdomen').value) || null,
            quadril: parseFloat(document.getElementById('eval-quadril').value) || null,
            bracoD: parseFloat(document.getElementById('eval-braco-d').value) || null,
            bracoE: parseFloat(document.getElementById('eval-braco-e').value) || null,
            coxaD: parseFloat(document.getElementById('eval-coxa-d').value) || null,
            coxaE: parseFloat(document.getElementById('eval-coxa-e').value) || null,
            panturrilhaD: parseFloat(document.getElementById('eval-panturrilha-d').value) || null,
            panturrilhaE: parseFloat(document.getElementById('eval-panturrilha-e').value) || null
        };
        newEval.dobras = {
            triceps: parseFloat(document.getElementById('eval-d-triceps').value) || null,
            subescapular: parseFloat(document.getElementById('eval-d-subescapular').value) || null,
            peitoral: parseFloat(document.getElementById('eval-d-peitoral').value) || null,
            axilar: parseFloat(document.getElementById('eval-d-axilar').value) || null,
            suprailiaca: parseFloat(document.getElementById('eval-d-suprailiaca').value) || null,
            abdominal: parseFloat(document.getElementById('eval-d-abdominal').value) || null,
            coxa: parseFloat(document.getElementById('eval-d-coxa').value) || null,
            age: parseInt(document.getElementById('eval-age').value) || null
        };
    }
    
    state.evaluations[currentProfile].push(newEval);
    saveState();
    closeModal('modal-new-eval');
    refreshAllViews();
    
    // Auto atualiza a lista de compras caso queira
    syncShoppingListFromDiets();
}

function deleteEvaluation(id) {
    if (confirm("Deseja realmente excluir esta avaliação física permanentemente?")) {
        state.evaluations[currentProfile] = state.evaluations[currentProfile].filter(e => e.id !== id);
        saveState();
        refreshAllViews();
    }
}

// --- DIETAS E MACROS - LÓGICA ---
function renderDiet() {
    const diet = state.diets[currentProfile];
    
    if (!diet) {
        document.getElementById('meals-container').innerHTML = `<p>Dieta não cadastrada.</p>`;
        return;
    }
    
    // Calcula totais atuais das refeições cadastradas
    let currentKcal = 0;
    let currentP = 0;
    let currentC = 0;
    let currentF = 0;
    
    let mealsHtml = '';
    
    diet.meals.forEach((m, idx) => {
        currentKcal += m.kcal || 0;
        currentP += m.p || 0;
        currentC += m.c || 0;
        currentF += m.f || 0;
        
        // Separa os alimentos em lista visual
        const foodsArray = m.foods.split(',').map(f => f.trim()).filter(f => f.length > 0);
        const foodsLi = foodsArray.map(f => `<li class="meal-food-item">${f}</li>`).join('');
        
        mealsHtml += `
            <div class="meal-card">
                <div class="meal-header">
                    <div class="meal-title-group">
                        <i data-lucide="clock"></i>
                        <span class="meal-name">${m.name}</span>
                        <span class="meal-time">${m.time}</span>
                    </div>
                    <span class="meal-macros-badge">${m.kcal} kcal | ${m.p}g P | ${m.c}g C | ${m.f}g G</span>
                </div>
                <div class="meal-body">
                    <ul class="meal-foods-list">
                        ${foodsLi || '<li>Nenhum alimento cadastrado</li>'}
                    </ul>
                </div>
            </div>
        `;
    });
    
    document.getElementById('meals-container').innerHTML = mealsHtml;
    
    // Atualiza barras de macros do perfil
    document.getElementById('diet-calories-val').innerText = `${currentKcal} / ${diet.kcal}`;
    
    updateMacroProgressBar('bar-protein', 'macro-p-vals', currentP, diet.p);
    updateMacroProgressBar('bar-carb', 'macro-c-vals', currentC, diet.c);
    updateMacroProgressBar('bar-fat', 'macro-f-vals', currentF, diet.f);
    
    lucide.createIcons();
}

function updateMacroProgressBar(barId, labelId, current, target) {
    const bar = document.getElementById(barId);
    const label = document.getElementById(labelId);
    
    if (bar && label) {
        const percent = Math.min((current / target) * 100, 100);
        bar.style.width = `${percent}%`;
        label.innerText = `${current}g / ${target}g`;
    }
}

// EDITOR DE DIETA
let editingMeals = [];

function openDietEditor() {
    const diet = state.diets[currentProfile];
    
    document.getElementById('diet-target-kcal').value = diet.kcal;
    document.getElementById('diet-target-p').value = diet.p;
    document.getElementById('diet-target-c').value = diet.c;
    document.getElementById('diet-target-f').value = diet.f;
    
    editingMeals = JSON.parse(JSON.stringify(diet.meals));
    renderEditorMeals();
    openModal('modal-diet-editor');
}

function renderEditorMeals() {
    const container = document.getElementById('editor-meals-container');
    let html = '';
    
    editingMeals.forEach((m, idx) => {
        html += `
            <div class="editor-meal-block">
                <button type="button" class="remove-meal-btn" onclick="removeMealFromEditor(${idx})">
                    &times; Excluir Refeição
                </button>
                <div class="form-grid-2">
                    <div class="form-group">
                        <label>Nome da Refeição</label>
                        <input type="text" value="${m.name}" onchange="updateEditorMealField(${idx}, 'name', this.value)" required>
                    </div>
                    <div class="form-group">
                        <label>Horário</label>
                        <input type="time" value="${m.time}" onchange="updateEditorMealField(${idx}, 'time', this.value)">
                    </div>
                </div>
                <div class="form-group">
                    <label>Alimentos (separe por vírgula para lista)</label>
                    <textarea rows="2" onchange="updateEditorMealField(${idx}, 'foods', this.value)" placeholder="Ex: 100g de frango, 150g de arroz">${m.foods}</textarea>
                </div>
                <div class="form-grid-4">
                    <div class="form-group">
                        <label>Calorias</label>
                        <input type="number" value="${m.kcal}" onchange="updateEditorMealField(${idx}, 'kcal', parseInt(this.value))">
                    </div>
                    <div class="form-group">
                        <label>Prot (g)</label>
                        <input type="number" value="${m.p}" onchange="updateEditorMealField(${idx}, 'p', parseInt(this.value))">
                    </div>
                    <div class="form-group">
                        <label>Carb (g)</label>
                        <input type="number" value="${m.c}" onchange="updateEditorMealField(${idx}, 'c', parseInt(this.value))">
                    </div>
                    <div class="form-group">
                        <label>Gord (g)</label>
                        <input type="number" value="${m.f}" onchange="updateEditorMealField(${idx}, 'f', parseInt(this.value))">
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function addMealToEditor() {
    editingMeals.push({ name: "Nova Refeição", time: "12:00", foods: "", kcal: 0, p: 0, c: 0, f: 0 });
    renderEditorMeals();
}

function removeMealFromEditor(idx) {
    editingMeals.splice(idx, 1);
    renderEditorMeals();
}

function updateEditorMealField(idx, field, val) {
    editingMeals[idx][field] = val;
}

function saveDiet(e) {
    e.preventDefault();
    
    state.diets[currentProfile] = {
        kcal: parseInt(document.getElementById('diet-target-kcal').value),
        p: parseInt(document.getElementById('diet-target-p').value),
        c: parseInt(document.getElementById('diet-target-c').value),
        f: parseInt(document.getElementById('diet-target-f').value),
        meals: editingMeals
    };
    
    saveState();
    closeModal('modal-diet-editor');
    refreshAllViews();
    
    // Auto atualiza a lista de compras após mexer nas dietas
    syncShoppingListFromDiets();
}

// --- LISTA DE COMPRAS - LÓGICA ---
function renderShoppingList() {
    const container = document.getElementById('shopping-categories-container');
    const items = state.shoppingList || [];
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state card">
                <i data-lucide="shopping-cart" class="empty-icon"></i>
                <p>Sua lista de compras está vazia.</p>
                <button class="btn btn-secondary btn-sm" onclick="syncShoppingListFromDiets()">Sincronizar das Dietas</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Agrupa por categoria
    const categories = {};
    items.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });
    
    let html = '';
    
    // Ordena categorias para exibição consistente
    const catKeys = Object.keys(categories).sort();
    
    catKeys.forEach(cat => {
        let itemsHtml = '';
        
        categories[cat].forEach(item => {
            itemsHtml += `
                <div class="shopping-item-checkbox">
                    <input type="checkbox" id="chk-${item.id}" ${item.checked ? 'checked' : ''} onchange="toggleShoppingItem('${item.id}', this.checked)">
                    <span class="shopping-item-label">${item.name}</span>
                    ${item.qty ? `<span class="shopping-item-qty">${item.qty}</span>` : ''}
                    <button class="delete-shop-item-btn" onclick="deleteShoppingItem('${item.id}')" title="Excluir item">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            `;
        });
        
        html += `
            <div class="shopping-category-card">
                <div class="category-header">${cat}</div>
                <div class="shopping-items-list">
                    ${itemsHtml}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    lucide.createIcons();
}

// Sincroniza a lista de compras varrendo as dietas de Matheus e Adrielli
function syncShoppingListFromDiets() {
    // Mantém itens manuais (source !== 'dieta' ou itens marcados que o usuário quer lembrar)
    const manualItems = (state.shoppingList || []).filter(item => item.source !== 'dieta');
    
    const dietItemsMap = new Map();
    
    // Varre dietas dos dois perfis
    ['matheus', 'adrielli'].forEach(prof => {
        const diet = state.diets[prof];
        if (diet && diet.meals) {
            diet.meals.forEach(meal => {
                const text = meal.foods.toLowerCase();
                
                // Procura palavras-chave
                FOOD_KEYWORDS.forEach(food => {
                    if (text.includes(food.keyword)) {
                        // Tenta extrair a quantidade se estiver escrita antes do ingrediente (ex: "150g de frango")
                        let qty = '';
                        const regex = new RegExp(`(\\d+(?:g|kg|ml|\\s*unidades|\\s*ovos|\\s*colheres)?)\\s+(?:de\\s+)?${food.keyword}`, 'i');
                        const match = text.match(regex);
                        if (match) {
                            qty = match[1].trim();
                        }
                        
                        const key = `${food.name}_${food.category}`;
                        if (dietItemsMap.has(key)) {
                            // Se já existe, tenta combinar quantidades se forem simples
                            const existing = dietItemsMap.get(key);
                            if (qty && existing.qty && qty !== existing.qty) {
                                // Se for só gramas, soma os inteiros
                                const num1 = parseInt(existing.qty);
                                const num2 = parseInt(qty);
                                if (existing.qty.includes('g') && qty.includes('g') && !isNaN(num1) && !isNaN(num2)) {
                                    existing.qty = `${num1 + num2}g`;
                                } else {
                                    existing.qty += ` + ${qty}`;
                                }
                            } else if (qty && !existing.qty) {
                                existing.qty = qty;
                            }
                        } else {
                            dietItemsMap.set(key, {
                                id: 'shop_' + food.name.replace(/\s+/g, '_').toLowerCase(),
                                name: food.name,
                                category: food.category,
                                qty: qty || '',
                                checked: false,
                                source: 'dieta'
                            });
                        }
                    }
                });
            });
        }
    });
    
    // Converte mapa de volta em lista
    const newDietItems = Array.from(dietItemsMap.values());
    
    // Combina mantendo os itens manuais. Se o item manual já estiver coberto na dieta, remove o manual duplicado
    const merged = [...newDietItems];
    manualItems.forEach(manual => {
        const isDuplicated = merged.some(d => d.name.toLowerCase() === manual.name.toLowerCase());
        if (!isDuplicated) {
            merged.push(manual);
        }
    });
    
    state.shoppingList = merged;
    saveState();
    renderShoppingList();
}

function toggleShoppingItem(id, checked) {
    const idx = state.shoppingList.findIndex(item => item.id === id);
    if (idx !== -1) {
        state.shoppingList[idx].checked = checked;
        saveState();
    }
}

function deleteShoppingItem(id) {
    state.shoppingList = state.shoppingList.filter(item => item.id !== id);
    saveState();
    renderShoppingList();
}

function clearCheckedShoppingItems() {
    if (confirm("Remover todos os itens riscados da lista de compras?")) {
        state.shoppingList = state.shoppingList.filter(item => !item.checked);
        saveState();
        renderShoppingList();
    }
}

function openAddShoppingItemModal() {
    document.getElementById('form-shopping-item').reset();
    openModal('modal-shopping-item');
}

function saveShoppingItem(e) {
    e.preventDefault();
    
    const name = document.getElementById('shop-item-name').value;
    const category = document.getElementById('shop-item-category').value;
    const qty = document.getElementById('shop-item-qty').value;
    
    const newItem = {
        id: 'shop_manual_' + Date.now(),
        name: name,
        category: category,
        qty: qty || '',
        checked: false,
        source: 'manual'
    };
    
    state.shoppingList.push(newItem);
    saveState();
    closeModal('modal-shopping-item');
    renderShoppingList();
}

// --- AJUSTES E CONFIGURAÇÕES ---
function renderSettings() {
    // Opcional se for adicionar inputs na aba de ajustes
}

function exportDataJSON() {
    const dataStr = JSON.stringify(state, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `biodash_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importDataJSON(e) {
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported.evaluations && imported.diets) {
                state = imported;
                saveState();
                alert("Dados importados com sucesso!");
                refreshAllViews();
            } else {
                alert("Arquivo de backup inválido. Chaves principais faltando.");
            }
        } catch (err) {
            alert("Erro ao ler arquivo JSON. Verifique se ele está no formato correto.");
            console.error(err);
        }
    };
    
    if (e.target.files && e.target.files[0]) {
        fileReader.readAsText(e.target.files[0]);
    }
}

function clearAllData() {
    if (confirm("CUIDADO! Você irá deletar permanentemente todas as informações cadastradas neste painel (avaliações e dietas). Esta ação NÃO pode ser desfeita. Tem certeza?")) {
        localStorage.removeItem('biodash_state');
        loadState();
        refreshAllViews();
        alert("Todos os dados foram resetados.");
    }
}

// --- FUNÇÕES UTILITÁRIAS ---
function formatDate(dateString) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('pt-BR');
}

function formatDateShort(dateString) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}`;
    }
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}
