# BioDash - Evolução Física & Alimentar do Casal

Um dashboard físico e de dieta personalizado para **Matheus** e **Adrielli**, planejado de ponta a ponta para ser acessado pelo celular e hospedado diretamente no **GitHub Pages** de forma gratuita e sem complicação.

## 📱 Funcionalidades Principais

1. **Alteração Instantânea de Temas (Switch de Perfis)**:
   - **Matheus**: Visual escuro tecnológico nas cores azul profundo e ciano neon.
   - **Adrielli**: Visual quente e sofisticado em tons de terracota, rose gold e areia.
2. **Dashboard Dinâmico com Storytelling**:
   - Analisa o histórico de peso, gordura corporal e músculo.
   - Apresenta uma narrativa sobre seu progresso: quanto de gordura pura você eliminou (em kg) 🔥, ganho muscular 💪, metas atingidas e distância restante para os alvos configurados.
   - Gráficos de linha interativos e responsivos (Chart.js) otimizados para smartphones.
3. **Calculadora Pollock 7 Dobras (Exclusiva para Adrielli)**:
   - Implementação nativa do protocolo de Jackson-Pollock com as 7 dobras cutâneas (*Tríceps, Subescapular, Peitoral, Axilar Média, Suprailíaca, Abdominal e Coxa*) para mulheres.
   - Calcula a densidade corporal e o percentual de gordura corporal (%G) automaticamente, pronto para ser aplicado à avaliação com um único clique.
4. **Histórico de Medidas (Adrielli)**:
   - Visualização dedicada para evolução de medidas corporais (cintura, abdômen, quadril, coxa, braço, panturrilha) e gráficos comparativos de dobras e medidas ao longo do tempo.
5. **Gerenciador de Dietas Integrado**:
   - Permite visualizar e editar refeições e horários.
   - Exibe a evolução de macronutrientes do dia (Calorias, Proteínas, Carboidratos e Gorduras) em barras de progresso contra a meta estabelecida.
6. **Lista de Compras Unificada**:
   - Motor de busca automático que analisa a dieta ativa do **Matheus** e da **Adrielli** para extrair ingredientes (ex: ovos, frango, batata, aveia, whey) e agrupá-los por categoria de supermercado de forma inteligente.
   - Opção para adicionar itens manuais (itens de limpeza, higiene ou lanches gerais) e riscar itens já comprados.
7. **Backup de Segurança (Exportar/Importar JSON)**:
   - Como os dados ficam salvos localmente no navegador do seu smartphone (usando `LocalStorage`), incluímos uma seção para baixar um arquivo JSON de backup a qualquer momento para garantir que seus registros nunca sejam perdidos.

---

## 🚀 Como Publicar no GitHub Pages (Grátis)

Hospedar o **BioDash** é extremamente simples e leva menos de 2 minutos:

1. Crie um novo repositório público no seu GitHub chamado `biodash` (ou qualquer nome de sua escolha).
2. Adicione os arquivos do projeto (`index.html`, `style.css`, `app.js`) a esse repositório e faça o push.
3. No GitHub, entre no seu repositório e vá em:
   **Settings (Configurações) ➔ Pages**
4. Na seção **Build and deployment**:
   - Em *Source*, selecione **Deploy from a branch**.
   - Em *Branch*, selecione **main** (ou a branch principal) e selecione a pasta `/ (root)`.
   - Clique em **Save**.
5. Aguarde cerca de 1 minuto. O GitHub fornecerá um link semelhante a:
   `https://seu-usuario.github.io/biodash/`
6. Abra este link no celular, clique no menu de opções do navegador e escolha **"Adicionar à tela inicial"** para usá-lo como se fosse um aplicativo instalado!

---

## 🛠️ Detalhes Técnicos

- **Interface**: Mobile-First, com barra de navegação inferior estilo app nativo e áreas de clique largas.
- **Estilização**: Vanilla CSS 3 moderno, com uso intensivo de Custom Properties para os temas dinâmicos e layout responsivo.
- **Gráficos**: Chart.js carregado via CDN para interações em tempo real.
- **Iconografia**: Lucide Icons para interface limpa e premium.
- **Persistência**: LocalStorage HTML5 + Backup em arquivo físico JSON.
