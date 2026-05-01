## 📌 Portfólio de Testes Automatizados com Cypress
![CI](https://github.com/icaromarinho/portfolio/actions/workflows/ci.yml/badge.svg)

Este repositório contém uma coleção de testes automatizados desenvolvidos com **Cypress**, cobrindo fluxos críticos e cenários negativos da aplicação [SauceDemo](https://www.saucedemo.com/).

## ✅ Testes já implementados
- **Login**: valida autenticação com credenciais válidas e inválidas.  
- **Fluxo de compras**: adiciona produtos ao carrinho, valida cálculos de subtotal, taxa, total final e conclui a compra.  
- **Logout**: garante que o usuário retorna para a página de login após sair da aplicação.  
- **Checkout sem dados obrigatórios**: valida mensagem de erro ao tentar prosseguir com o fluxo de compra sem preencher campos obrigatórios.  

## 🧩 Boas práticas aplicadas
Durante o desenvolvimento dos testes, foram utilizadas técnicas e recursos que garantem organização, reutilização de código e qualidade na automação:

- **Uso de `beforeEach`**: para reaproveitar código comum entre os testes e reduzir duplicação.  
- **Massa de testes externa**: importação de arquivos `.json` para simular diferentes cenários de forma organizada e flexível.  
- **Validações completas**: checagem de mensagens de erro, URLs e elementos da interface para assegurar consistência nos fluxos.  
- **Estrutura modular**: cada arquivo de teste cobre um fluxo ou cenário específico, facilitando manutenção e evolução.  
- **Evidências automáticas**: geração de vídeos e screenshots durante a execução dos testes, permitindo análise detalhada e documentação dos resultados.  
- **Integração contínua (CI/CD)**: pipeline configurado no GitHub Actions para rodar os testes automaticamente a cada push, garantindo feedback rápido sobre a qualidade do código.

## 🛠️ Tecnologias utilizadas
- [Cypress](https://www.cypress.io/)  
- JavaScript
- GitHub Actions (CI/CD)  

## 📂 Estrutura
Os testes estão organizados na pasta `cypress/e2e`, cada arquivo cobrindo um fluxo ou cenário específico.  
O pipeline de CI/CD está configurado na pasta `.github/workflows`, com o arquivo `ci.yml` responsável por executar os testes automaticamente em cada push.

## 📌 Como executar
**1**. Clone este repositório:
   
   git clone https://github.com/icaromarinho/portfolio.git

**2**. Entre na pasta do projeto:
 
    cd portfolio

**3**. Instale as dependências:

    npm install

**4**. Execute os testes com a interface do Cypress:

    npx cypress open

**5**. (Opcional) Para executar todos os testes em modo headless (sem interface gráfica) e gerar vídeos com as evidências automaticamente:

    npx cypress run


## 🔄 Integração Contínua (CI/CD)
Este projeto utiliza GitHub Actions para executar os testes de forma automática em cada push.
O pipeline está configurado para:

- Fazer checkout do código.
- Instalar dependências com cache.
- Executar todos os testes Cypress.
- Armazenar **screenshots** como artefatos em caso de falhas.

> Observação: os vídeos são gerados automaticamente apenas quando os testes são executados em modo headless localmente (`npx cypress run`).


## 📢 Observação
Este portfólio está em constante evolução. Novos testes e melhorias serão adicionados regularmente para demonstrar boas práticas em automação de testes e integração contínua.
Além disso, os vídeos gerados automaticamente em modo headless permitem revisar a execução completa dos testes, facilitando a análise e documentação dos resultados.