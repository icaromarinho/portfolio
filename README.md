## 📌 Portfólio de Testes Automatizados com Cypress

Este repositório contém uma coleção de testes automatizados desenvolvidos com **Cypress**, cobrindo fluxos críticos e cenários negativos da aplicação [SauceDemo](https://www.saucedemo.com/).

## ✅ Testes já implementados
- **Login**: valida autenticação com credenciais válidas e inválidas.  
- **Fluxo de compras**: adiciona produtos ao carrinho, valida cálculos de subtotal, taxa, total final e conclui a compra.  
- **Logout**: garante que o usuário retorna para a página de login após sair da aplicação.  
- **Checkout sem dados obrigatórios**: valida mensagem de erro ao tentar prosseguir com o fluxo de compra sem preencher campos obrigatórios.  

## 🛠️ Tecnologias utilizadas
- [Cypress](https://www.cypress.io/)  
- JavaScript  

## 📂 Estrutura
Os testes estão organizados na pasta `cypress/e2e`, cada arquivo cobrindo um fluxo ou cenário específico.

## 📌 Como executar
**1**. Clone este repositório:
   
   git clone https://github.com/icaromarinho/portfolio.git

**2**. Entre na pasta do projeto:
 
    cd portfolio

**3**. Instale as dependências:

    npm install

**4**. Execute os testes com a interface do Cypress:

    npx cypress open


## 📢 Observação
Este portfólio está em constante evolução. Novos testes e melhorias serão adicionados regularmente para demonstrar boas práticas em automação de testes.