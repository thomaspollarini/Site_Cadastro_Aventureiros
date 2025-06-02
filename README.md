# 📜 Mini Formulário "Guilda de Aventureiros" – Desafio de JavaScript

Este projeto é um **mini formulário interativo** com tema medieval, onde o usuário pode registrar aventureiros em uma guilda. O sistema adiciona dinamicamente cada novo membro a uma lista, calculando e atribuindo um rank automaticamente com base na experiência informada. Todo o processo ocorre no lado do cliente (**client-side**), utilizando HTML, CSS e JavaScript.

---

## 🔗 Visualização do projeto

👉 [Acesse aqui!](https://thomaspollarini.github.io/Site_Cadastro_Aventureiros/)

## 💡 Sobre o projeto

Inspirado em universos de fantasia e RPG, o "Guilda de Aventureiros" permite ao usuário:

* Inserir o nome e a quantidade de experiência (EXP) de um aventureiro.
* Visualizar o aventureiro recém-cadastrado em uma tabela que lista todos os membros da guilda.
* Ver um rank (como "Camponês", "Aprendiz", "Aventureiro", etc.) ser atribuído automaticamente com base na EXP.

O projeto foca na manipulação do **DOM** com JavaScript para criar uma experiência dinâmica e interativa, além de praticar a estilização com **CSS** para criar uma atmosfera temática.

---

## ⚙️ Funcionalidades principais

-   ✨ **Cadastro de Aventureiros**: Permite adicionar novos membros à guilda.
-   📈 **Cálculo Automático de Rank**: O sistema define o rank do aventureiro baseado na sua EXP.
-   📋 **Listagem Dinâmica**: Novos aventureiros são adicionados à tabela em tempo real, sem recarregar a página.
-   📜 **Interface Temática**: Estilo visual que remete a um pergaminho antigo em uma taverna, utilizando fontes e imagens personalizadas.
-   ✅ **Validação Simples**: Verifica se os campos foram preenchidos corretamente antes do registro.
-   📱 **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela para melhor visualização.

---

## 🚀 Tecnologias e ferramentas utilizadas

-   **JavaScript (ES6+)** – Responsável pela lógica do projeto:
    -   Manipulação do **DOM** para adicionar elementos dinamicamente à tabela.
    -   Gerenciamento de **eventos de clique** no botão de registro.
    -   Lógica condicional para **cálculo de rank** baseado na experiência.
    -   **Validação de entrada** dos dados do formulário.
    -   Limpeza automática dos campos após o registro.

-   **HTML5** – Estruturação semântica da página:
    -   Uso de `<table>` para exibir a lista de aventureiros.
    -   Formulário com campos de `input` para nome e experiência.

-   **CSS3** – Estilização e ambientação visual:
    -   Uso de **fontes personalizadas** (`@import url`).
    -   **Backgrounds com imagens** para criar a atmosfera de taverna e pergaminho.
    -   Layout com **Flexbox** para alinhar e distribuir os elementos.
    -   Estilização de tabela, inputs e botões.
    -   **Media Queries** para responsividade em diferentes dispositivos.
    -   Efeitos de `hover` para interatividade.

---

## 📚 Aprendizados e práticas consolidadas

-   🧠 **Lógica de programação** para determinar ranks e processar dados de formulário.
-   ✍️ **Manipulação dinâmica do DOM**, criando e adicionando elementos HTML via JavaScript.
-   🖱️ **Tratamento de eventos** para interações do usuário.
-   📝 **Criação e validação de formulários client-side**.
-   🎨 **Estilização com CSS** para criar uma interface temática e responsiva.
-   📱 Implementação de **design responsivo** com Media Queries.
-   🧩 Organização do código em funções para melhor legibilidade e manutenção.

---

> 🚀 **Observação:** O desafio inicial para este projeto era mais simples, consistindo apenas em desenvolver a lógica para classificar o rank de um herói com base na sua quantidade de experiência (EXP), sem a necessidade de uma interface gráfica, estilização, geração de lista ou o contexto de RPG medieval. Decidi expandir a proposta original, aplicando meus conhecimentos em HTML, CSS e manipulação do DOM, além de um toque de criatividade, para desenvolver uma aplicação mais completa, atrativa e divertida.
