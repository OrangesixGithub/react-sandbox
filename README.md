# OrangeSix React Sandbox

Aplicação Vite independente para construir e inspecionar componentes da biblioteca em `../react`.

Para alterações feitas por IA, siga o [padrão de escrita](AGENTS.md).

O catálogo inclui uma demonstração interativa dos helpers de `@orangesix/react/api`: `InputLabel`, `InputProps` e `InputFeedback`.

O código do layout do ambiente fica em `src/layout`: `App.tsx` monta a página e guarda o componente selecionado, `panel/` contém os painéis de cabeçalho, navegação, conteúdo e controles, e `context/` contém prévia e props. Cada uma dessas duas pastas mantém seus estilos em `style/`; `src/layout/styles/` guarda o estilo da estrutura principal. As demonstrações da API ficam em `src/components/api`, com seus estilos e estado. Os controles de texto, seleção e checkbox reutilizáveis ficam em `src/components/form`; cada componente de formulário combina apenas os controles de que precisa e mantém seu próprio estado. As tipagens de props do layout ficam em `src/layout/@types/context.d.ts` e `src/layout/@types/panel.d.ts`. As imagens e outros arquivos estáticos ficam em `assets/`, fora de `src`. O alias `@assets/*` permite importá-los no código; o favicon é referenciado diretamente no `index.html`. O catálogo de componentes fica em `src/catalog`, e `src/main.tsx` inicializa a aplicação.

## Desenvolvimento

Requisitos: Node.js compatível com Vite 8 e dependências instaladas no projeto `../react`.

```powershell
cd ../react
npm.cmd run dev:css

# Em outro terminal:
cd ../react-sandbox
npm.cmd run dev
```

O modo padrão resolve `@orangesix/react/*` para `../react/src/*`, permitindo HMR ao editar os componentes da biblioteca. O import `@orangesix/react/style.css` aponta para `../react/src/style/style.css`, compilado ao vivo pelo Tailwind do sandbox. Todo o layout do sandbox usa utilitários Tailwind 4. `src/layout/styles.css` define os tokens do tema escuro em `@theme` e importa a fonte Plus Jakarta Sans; os arquivos `ui-*.ts` de `context/style`, `panel/style` e `layout/styles` agrupam utilitários por área. Não há regras CSS próprias nem Sass.

Convenção do layout: `className` com mais de três utilitários vai para o arquivo `ui-*` correspondente. Use `tv` para estilos com variantes e `clsx` para combinar classes condicionais pequenas. Classes de até três utilitários podem permanecer no JSX. A barra de rolagem da página é declarada no `index.html`, fora dos componentes React.

Os ícones da interface usam `bootstrap-icons`, importado uma vez em `src/main.tsx`. Os nomes dos ícones e seus utilitários Tailwind ficam nos arquivos `ui-*` correspondentes.

## Testar o pacote gerado (`dev:package`)

O modo de pacote resolve `@orangesix/react/*` para `../react/dist/*`, o mesmo resultado que é publicado, sem precisar publicar ou instalar nada:

1. Habilite os componentes validados em `../react/build/components.ts`.
2. Execute `npm run build` em `../react`.
3. Execute `npm run dev:package` (ou `npm run build:package`, que também confere os tipos de `../react/dist`).

Nesse modo, cada pasta de componente é resolvida pelo `package.json` dela (`module` → `index.mjs`), igual aos projetos consumidores, e o `style.css` vem de `../react/dist/style.css`. Se `../react/dist` não existir, o sandbox avisa para rodar o build. Depois de um novo build, o Vite recarrega a página.

## Situação atual

A OrangeSix está migrando os componentes para PrimeReact 11 e já gera o CSS base. A API está conectada ao sandbox em modo fonte; os demais componentes aguardam prévias interativas.
