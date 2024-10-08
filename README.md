# SuperTeste

Este repositório contém um projeto de testes end-to-end utilizando [Cypress](https://www.cypress.io/). Este README fornece um guia para configurar, executar e entender o projeto.

## Índice

   - [Introdução](#introdução)
   - [Descrição](#descrição)
   - [Pré-requisitos](#pré-requisitos)
   - [Instalação](#instalação)
   - [Executando Testes](#executando-testes)
   - [Gerando Relatórios](#gerando-relatorios)


<div id='introdução'/> 
   
## Introdução

   Este projeto utiliza o Cypress para testes automatizados de aplicações [web] (https://web.superfrete.com/). Inclui a configuração básica, a criação de testes e a geração de relatórios com capturas de tela.

<div id='descrição'/>

## Descrição

   Este projeto tem por finalidade a automação de testes da aplicação web (https://web.superfrete.com/).
   Foram abordados 5 specs de testes afim de cobrir todos os casos de validações e de sucesso possíveis no momento de calcular um frete com desconto na plataforma.
   - `id_01_Calcula_Frete_Sucesso.cy.js` Aborda o cenário de sucesso para se calcular um frete com desconto.
   - `id_02_Calcula_Frete_Altura_Invalido.cy.js` Aborda o cenário de Altura inválida e valida se houve uma mensagem informativa para o usuário.
   - `id_03_Calcula_Frete_Largura_Invalido.cy.js` Aborda o cenário de Largura inválida e valida se houve uma mensagem informativa para o usuário.
   - `id_04_Calcula_Frete_Comprimento_invalido.cy.js` Aborda o cenário de Comprimento inválida e valida se houve uma mensagem informativa para o usuário.
   - `id_05_Calcula_Frete_Dimensoes_excedentes.cy.js` Aborda o cenário em que as dimensões do pacote excedem o limite e valida se houve uma mensagem informativa para o usuário.

<div id='pré-requisitos'/>

## Pré-requisitos

   Antes de começar, certifique-se de ter o seguinte instalado:

   - [Node.js](https://nodejs.org/) (v14 ou superior)
   - [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

<div id='instalação'/>

## Instalação

   1. **Clone o repositório**

      > git clone https://github.com/jaiirsilva/SuperTeste

   2. **Instale as dependências**

      Isso instalará o Cypress e outras dependências listadas no package.json.
      > npm install

<div id='executando-testes'/>

## Executando Testes
   
   **Para executar os testes em modo headless (sem interface gráfica) basta alterar o nome do spec de teste, conforme exemplo abaixo:**
   > npx cypress run --browser chrome --spec ".\cypress\e2e\id_01_Calcula_Frete_Sucesso.cy.js"
      
   **Para executar todos os specs de uma única vez setando o chrome como navegador padrão, pode usar o comando abaixo:**
   > npx cypress run --browser chrome

<div id='gerando-relatorios'/>

## Gerando Relatórios
   
   1. **Após a execução dos testes, os relatórios serão gerados no diretório especificado na configuração do Mochawesome (cypress/reports).**
      
