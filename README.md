# Componente de Alteração de Tema - ThemeSwitcher

## Descrição

O componente `ThemeSwitcher` é um switch de tema em React, criado para alternar entre o modo **light** (claro) e **dark** (escuro). Ele utiliza um checkbox simples para permitir que o usuário alterne entre os temas, manipulando a troca de tema diretamente no cliente e armazenando a preferência no `localStorage`.  

Este componente utiliza um hook personalizado chamado `useThemeSwitcher` para realizar a troca de temas, garantindo que a funcionalidade seja otimizada para desempenho e usabilidade.

## Requisitos

- **React** 18.0+  
- **Next.js** 14.2.14  

## Instalação

1. Instale o pacote:

```bash
npm install dbc-theme-switcher
```

2. Importe o componente e o hook no seu projeto:

```tsx
import { ThemeSwitcher } from 'dbc-theme-switcher';
import { useThemeSwitcher } from 'dbc-theme-switcher';
```

## Exemplo de Uso

```tsx
"use client"; // Caso esteja utilizando Next.js

import React from 'react';
import { ThemeSwitcher } from 'dbc-theme-switcher';

export default App() {
  return (
    <div>
      <h1>Alternador de Tema</h1>
      <ThemeSwitcher />
      {/* Passando as cores light e dark como parâmetros */}
      <ThemeSwitcher lightBgColor="#f00" darkBgColor="#00f" />
    </div>
  );
};
```

```css
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in;
}

.dark {
    background-color: #171717;
}
```

### Propriedades do Componente `ThemeSwitcher`

| Propriedade     | Tipo     | Padrão      | Descrição                                             | Obrigatório |
| :-------------- | :------- | :---------- | :--------------------------------------------------- | :---------- |
| `lightBgColor`  | `string` | `#d5d5d5`   | Cor de fundo usada quando o tema está no modo `light` | `false` |
| `darkBgColor`   | `string` | `#323334`   | Cor de fundo usada quando o tema está no modo `dark`  | `false` |

O `ThemeSwitcher` pode receber cores customizadas para os temas claro e escuro via propriedades `lightBgColor` e `darkBgColor`.

## Comportamento  

O componente `ThemeSwitcher` alterna automaticamente entre os temas **light** e **dark**, adicionando/removendo classes no `document.body` e persistindo a preferência no `localStorage` para uso futuro.

- **Tema Light:** O tema padrão é o `light`, e o checkbox estará desmarcado.  
- **Tema Dark:** O tema é alterado para `dark` ao marcar o checkbox, aplicando a classe CSS configurada para o tema escuro.  

## Hook Personalizado: `useThemeSwitcher`

O hook `useThemeSwitcher` é utilizado para gerenciar a lógica de troca de temas e manipulação do `localStorage`. Ele retorna o tema atual e uma função para alternar o tema.

| Propriedade | Tipo | Descrição |
| :----------- | :---- | :--------- |
| `theme`  | `'light'` ou `'dark'` | O tema atual selecionado, que pode ser `'light'` ou `'dark'`. |
| `toggleTheme` | `() => void` | Função para alternar entre os temas `light` e `dark`. |

## Funcionalidades Avançadas

- **Persistência de Tema**: O tema selecionado pelo usuário é salvo no `localStorage` e recuperado quando o site é carregado novamente.  
- **Suporte para SSR**: O componente foi otimizado para funcionar corretamente em ambientes SSR, como Next.js. O `localStorage` é verificado apenas no cliente.  

## Conclusão

O `ThemeSwitcher` é um componente simples e eficiente para alternar entre temas claros e escuros, oferecendo flexibilidade na personalização e fácil integração em projetos React. Ele utiliza um hook personalizado para gerenciar o estado de tema e a persistência, garantindo que a experiência do usuário seja consistente.
