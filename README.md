# GESTAO-ECOMMERCE-REACT
Projeto criado para o Desafio #2 da Gama Academy. Este é meu primeiro projeto feito em ReactJS onde o usuário é capaz de cadastrar novos produtos e clientes para sua Loja Ecommerce.

**Deploy feito no provedor: https://www.netlify.com/**

**Link para visualização: https://evaldojr-gestao-ecommerce.netlify.app/**

## Funcionalidades

- ***React-Router-DOM***
  - Implementado links em botões onde o usuário possa acessar outra página sem recarregar o conteúdo.

- ***Styled-Components***
  - styled-components é uma biblioteca para React e React Native que permite usar estilos de nível de componente em seu aplicativo que são escritos com uma mistura de JavaScript e CSS usando uma técnica chamada CSS-in-JS

- ***useEffects, useState***
  - _useEffets_
    - Componente do React para aplicar efeitos/scripts antes de todos os componentes da página serem renderizadas. A finalidade deste uso no projeto foi para renderizar a lista de Clientes e Produtos cadastrados no LocalStorage do navegador toda vez que o usuário acessar/recarregar a página

  - _useState_
    - Componente do React para alterar o estado das informações e variáveis em tempo de execução. A finalidade deste uso no projeto foi para capturar informações dos inputs para que todas as informações reais sejam enviadas no submit do formulário.

- ***LocalStorage***
  - Utilizado o localstorage do navegador para guardar todas as informações devidamente estruturados entre Clientes e Produtos. A aplicação utiliza as informações do localstorage para renderizar a lista de itens cadastrados.
