# OrangeSix React Sandbox

Aplicação Vite independente para construir e inspecionar componentes da biblioteca em `../react`.

No momento, a página contém o layout do catálogo: navegação, busca e espaços reservados para prévia, variações, props e controles. A exibição dos componentes será definida em uma próxima etapa.

O layout está dividido em `src/components/layout` (header, barra lateral, rodapé da barra lateral, conteúdo e controles) e `src/components/sections` (prévia, variações e props). `src/App.tsx` mantém apenas o componente selecionado e monta essas partes.

## Desenvolvimento

Requisitos: Node.js compatível com Vite 8 e dependências instaladas no projeto `../react`.

```powershell
npm install
npm run dev
```

O modo padrão resolve `@orangesix/react/*` para `../react/src/*`, permitindo HMR ao editar a biblioteca. Todo o layout do sandbox usa utilitários Tailwind 4. `src/styles.css` define somente os tokens do Tailwind em `@theme` (cores, fontes e breakpoints); os arquivos `src/styles/ui-*.ts` agrupam utilitários por área do layout. Não há regras CSS próprias nem Sass.

Convenção do layout: `className` com mais de três utilitários vai para o arquivo `ui-*` correspondente. Use `tv` para estilos com variantes e `clsx` para combinar classes condicionais pequenas. Classes de até três utilitários podem permanecer no JSX. A barra de rolagem da página é declarada no `index.html`, fora dos componentes React.

Os ícones da interface usam `bootstrap-icons`, importado uma vez em `src/main.tsx`. Os nomes dos ícones e seus utilitários Tailwind ficam nos arquivos `ui-*` correspondentes.

## Testar o pacote publicado

Depois que a biblioteca produzir seu CSS base e tiver os componentes migrados:

1. Execute `npm run build` em `../react`.
2. Gere um tarball do conteúdo de `../react/dist` com `npm pack ../react/dist` neste diretório.
3. Instale o arquivo gerado com `npm install --no-save --package-lock=false ./orangesix-react-VERSAO.tgz`. O tarball é temporário e não fica preso ao `package.json`.
4. Execute `npm run dev:package` ou `npm run build:package`. Esse modo desativa o alias para o código-fonte; o build também confere os tipos do pacote instalado.
5. Adicione o import `@orangesix/react/styles.css` em `src/main.tsx` quando esse arquivo passar a ser publicado.

O modo de pacote deve ser validado depois de cada alteração no empacotamento. Um import direto do código-fonte não testa o conteúdo real do tarball.

## Situação atual

A OrangeSix ainda está no PrimeReact 10 e não publica o novo CSS. O layout do catálogo está pronto; as prévias interativas ainda não foram conectadas.
