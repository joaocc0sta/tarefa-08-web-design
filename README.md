# Projeto Web Design Expandido

Este é um projeto front-end desenvolvido para demonstrar a integração de HTML, CSS e JavaScript na criação de uma página web interativa e dinâmica. A página inclui múltiplas seções que reagem às ações do usuário, mostrando conceitos avançados de manipulação do DOM, eventos e funcionalidades assíncronas.

---

## 📜 Sobre o Projeto

O objetivo principal deste projeto é servir como um portfólio prático de habilidades em desenvolvimento web. Ele foi estruturado para ser visualmente agradável, responsivo e funcional, aplicando estilizações modernas com CSS e lógica de programação com JavaScript para criar uma experiência de usuário rica.

---

## ✨ Funcionalidades Principais

O projeto é dividido em três seções interativas principais:

### 1. Seção de Informações

Esta seção serve como um painel de controle para interações simples e diretas com o usuário.

-   **Alerta Simples:** Um botão que, ao ser clicado, exibe uma mensagem de alerta padrão do navegador.
-   **Exibição de Data:** Mostra o ano atual dinamicamente em um parágrafo.
-   **Número Aleatório:** Gera e exibe um número aleatório entre 1 e 100.
-   **Saudação Personalizada:**
    -   Um campo de input permite que o usuário digite seu nome.
    -   Um botão captura o valor do input e exibe uma mensagem de boas-vindas, como "Olá, [Nome]!".
    -   Inclui uma validação para garantir que o nome não esteja vazio.

### 2. Seção de Lista Dinâmica

Demonstra a manipulação de arrays e a renderização de elementos na tela em tempo real.

-   **Adicionar Item:** Um botão permite adicionar novos itens a uma lista não ordenada (`<ul>`). Cada novo item é numerado sequencialmente (Item 1, Item 2, etc.).
-   **Atualização em Tempo Real:** A lista na tela é atualizada instantaneamente a cada novo item adicionado, sem a necessidade de recarregar a página.

### 3. Seção do Contador

Uma implementação de um contador simples para demonstrar a gestão de estado.

-   **Incrementar:** Um botão que aumenta o valor do contador em 1 a cada clique.
-   **Resetar:** Um botão que restaura o valor do contador para 0.
-   **Display:** O valor atual do contador é sempre visível na tela.

### Funcionalidades Adicionais e Globais

-   **Mudança de Cor de Fundo:** Clicar em qualquer lugar no corpo da página altera a cor de fundo para uma cor aleatória de uma lista pré-definida, tornando a navegação mais interativa.
-   **Logs no Console:** O projeto utiliza `console.log()` para debugging e para mostrar o estado de variáveis, como o valor do contador a cada 5 segundos através de um `setInterval`.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias web padrão:

-   **HTML5:** Para a estruturação semântica do conteúdo.
-   **CSS3:** Para estilização, layout responsivo e animações.
-   **JavaScript (ES6+):** Para toda a lógica, interatividade e manipulação do DOM.

---

## 🚀 Como Executar o Projeto

Como este é um projeto puramente front-end, não há necessidade de um servidor ou de processos de build complexos.

1.  Faça o clone ou o download deste repositório.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! A página interativa estará funcionando.

---

## 📂 Estrutura de Arquivos

O projeto está organizado da seguinte forma:

```
/
├── index.html       # Arquivo principal com a estrutura da página
├── style.css        # Arquivo com todas as regras de estilo
└── script.js        # Arquivo com toda a lógica e interatividade
```

---

## 🔮 Possíveis Melhorias Futuras

Embora o projeto seja funcional, existem várias oportunidades para expandi-lo:

1.  **Refatoração do JavaScript:** O botão "Adicionar Item" possui múltiplos listeners de evento. Seria ideal refatorar para que cada ação (adicionar, transformar, filtrar) tenha seu próprio controle.
2.  **Remover Itens da Lista:** Adicionar um botão "x" ao lado de cada item da lista para permitir sua remoção.
3.  **Persistência de Dados:** Utilizar `localStorage` para salvar o estado do contador e os itens da lista, para que os dados não se percam ao recarregar a página.
4.  **Modo Escuro (Dark Mode):** Implementar um botão que alterne entre um tema claro e um tema escuro.
5.  **Acessibilidade (A11y):** Melhorar a acessibilidade adicionando atributos ARIA e garantindo um contraste de cores adequado.
6.  **Validação Avançada:** Implementar uma validação mais robusta para o campo de nome, evitando números ou caracteres especiais.
7.  **Animações com JavaScript:** Adicionar animações mais complexas quando itens são adicionados ou removidos da lista.

---

## 👨‍💻 Autor

Projeto desenvolvido por **João Pedro**.

-   **GitHub:** [jpcardoso07](https://github.com/jpcardoso07)

---

*Este README foi gerado para fornecer uma documentação clara e completa do projeto, seguindo as melhores práticas.*

*Fim do documento.*
