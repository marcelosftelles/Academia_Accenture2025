# 🧪 Treinamento Cypress – Web Tables DemoQA

Este projeto apresenta um conjunto de testes automatizados desenvolvidos com **Cypress** e **Cucumber (Gherkin)**, com foco na validação das funcionalidades de **cadastro**, **edição** e **exclusão** de usuários na página [Web Tables do DemoQA](https://demoqa.com/webtables).

---

## 📚 Tecnologias e Bibliotecas Utilizadas

- [**Cypress**](https://www.cypress.io/)  
  Framework moderno para testes end-to-end de aplicações web.

- [**Cypress Cucumber Preprocessor**](https://github.com/badeball/cypress-cucumber-preprocessor)  
  Permite escrever testes no formato BDD, com cenários `.feature` em Gherkin e steps em JavaScript.

- [**@faker-js/faker**](https://github.com/faker-js/faker)  
  Geração de dados aleatórios (nomes, e-mails, etc.) para tornar os testes dinâmicos e sem duplicidade.

---

## 📂 Estrutura do Projeto

```
Academia_Accenture2025/
│
├── cypress/
│   ├── e2e/                  # Arquivos .feature com os cenários de teste
│   ├── fixtures/             # Arquivos de dados estáticos (JSON)
│   └── support/
│       ├── commands.js       # Comandos customizados para Cypress
│       ├── pages/            # Page objects e comandos por funcionalidade
│       └── step-definitions/ # Step definitions em JavaScript
│
├── cypress.config.js         # Configuração principal do Cypress
├── cypress.env.json          # Variáveis de ambiente e dados temporários
└── package.json              # Dependências e scripts do projeto
```

---

## 🚀 Como Instalar e Executar

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd Academia_Accenture2025
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute os testes

- **Modo Interativo (Cypress UI):**
  ```bash
  npx cypress open
  ```
  Selecione os arquivos `.feature` desejados para rodar.

- **Modo Headless (terminal):**
  ```bash
  npx cypress run
  ```

---

## ✅ Funcionalidades Testadas

- **Fluxo completo de Web Tables:**
  - Cadastro de usuários com dados gerados dinamicamente.
  - Edição de dados de usuários existentes.
  - Remoção de registros da tabela.
  - Validação dos dados na interface após cada operação.

- **Boas práticas aplicadas:**
  - Escrita clara e objetiva em Gherkin.
  - Steps organizados por funcionalidades.
  - Uso de comandos customizados reutilizáveis.
  - Seletores dinâmicos e robustos.
  - Tratamento seguro de dados sensíveis com `{ log: false }` e variáveis de ambiente.

- **Configurações otimizadas:**
  - Integração com arquivos `.feature`.
  - Base URL pré-definida para os testes.
  - Viewport configurada para garantir consistência visual.

---

## ⚙️ Configurações Importantes

- **`cypress.config.js`:**  
  Configura baseUrl, suporte ao Cucumber, viewport padrão e localização dos testes.

- **`cypress.env.json`:**  
  Utilizado para armazenar dados dinâmicos temporários durante os testes.

---

## 💡 Dicas Úteis

- Crie novos cenários adicionando arquivos `.feature` em `cypress/e2e/`.
- Implemente os respectivos steps em `cypress/support/step-definitions/`.
- Para comandos reutilizáveis, utilize `commands.js` ou encapsule lógicas em `pages/`.
- Utilize dados aleatórios com o Faker para evitar conflitos de cadastro.

---

## 👨‍💻 Autor

Desenvolvido por **Marcelo Telles**  
Projeto criado com finalidade de **treinamento** e **demonstração** de testes automatizados com Cypress e Cucumber.

---

## 📄 Licença

Este projeto é distribuído apenas para fins educacionais. Consulte o autor para mais informações sobre direitos de uso.
