# Padrão de escrita para IA

## Preferência de navegação

Mantenha os menus de componentes do sandbox em ordem alfabética, inclusive nos resultados da busca. Ao adicionar novos componentes, preserve essa ordenação automaticamente.

## Padrão das páginas de campos

Siga `../react/docs/sandbox.md`: apresente os exemplos Controlled e HookForm quando ambos forem suportados, com valores iniciais vazios e o valor atual exibido abaixo de cada campo (`Valor do state:` e `Valor do HookForm:`, com `JSON.stringify`). Preserve a seção em coluna com `gap-6` e cada exemplo em coluna com `gap-2`. Não adicione exemplos extras de variações ou estados à página padrão sem solicitação do dono do projeto.

Use estas regras ao criar ou editar arquivos do projeto. Antes de concluir uma alteração, confira os arquivos modificados e preserve o padrão descrito aqui.

## 1. Imports em escada

Ordene os imports pelo comprimento da instrução completa: a linha mais curta fica acima e a mais longa fica abaixo. Considere todo o texto do import, inclusive nomes importados e caminho, e não apenas o tamanho do caminho. A regra também vale para `import type`.

```ts
import { clsx } from "clsx";
import { Header } from "./panel/Header";
import type { ComponentName } from "../catalog/components";
```

Ao adicionar, remover ou editar um import, confira novamente a ordem do conjunto. Em caso de mesmo comprimento, mantenha a ordem já existente.

## 2. Componentes React

Todo componente React novo deve seguir os comentários estruturais adotados pelo sistema. A referência fornecida para esse padrão é `resources/react/Crm/Atividade/Ligacao/Filter.tsx`.

Exporte componentes React sempre pelo nome. Nunca use `export default` para componentes; importe-os também pelo nome, com chaves (por exemplo, `import { Filter } from "./Filter";`).

### Identificação do módulo

Imediatamente antes da declaração do componente, escreva um JSDoc que identifique o contexto e o módulo funcional. Substitua os nomes do exemplo conforme o componente criado e preserve a acentuação. Descreva o módulo, em vez de repetir apenas o nome técnico do arquivo.

```tsx
/**
 * Módulo (CRM) - Ligação
 */
export function Filter() {
    // ...
}
```

### Identificação da renderização

Imediatamente antes do `return` que produz o JSX principal, use exatamente este bloco, com o mesmo texto, barras e espaçamento:

```tsx
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div>Conteúdo do componente</div>
    );
```

Use o bloco somente no retorno principal. Não o repita em callbacks, condições ou retornos auxiliares.

### Propriedades na assinatura

Desestruture na assinatura somente as propriedades que recebem valor padrão. Mantenha as demais em `...props`, inclusive as obrigatórias e as opcionais sem valor padrão.

```tsx
type ListaProps = {
    itens?: Item[];
    renderItem?(item: Item): React.ReactNode;
};

export function Lista({ itens = [], ...props }: ListaProps) {
    return itens.map((item) => props.renderItem?.(item));
}
```

### Uso de componentes no JSX

Ao usar um componente React com duas ou mais props, deixe a abertura (`<Componente`) sozinha na primeira linha. Escreva a primeira prop na linha seguinte e mantenha uma prop por linha, inclusive quando houver exatamente duas.

```tsx
<Sidebar
    selected={selected}
    onSelect={setSelected}/>
```

### Exemplo completo

```tsx
/**
 * Módulo (CRM) - Ligação
 */
export function Filter() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div>
            Conteúdo do componente
        </div>
    );
}
```

Ao criar um componente, confira o export nomeado, o JSDoc, o bloco de renderização, a acentuação e a assinatura das props. Depois, execute o ESLint no arquivo com `npm exec -- eslint <caminho-do-arquivo>` (no PowerShell deste ambiente, `npm.cmd exec -- eslint <caminho-do-arquivo>`).
