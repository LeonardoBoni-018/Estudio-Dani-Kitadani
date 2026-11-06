# Studio Dani Kitadani

Site do Studio Dani Kitadani (Lash & Nail Designer · Araçatuba/SP), feito em React + Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

## Estrutura

- `src/data/` — conteúdo editável: contato, procedimentos/valores, cursos, horários, depoimentos.
  Para remover a faixa "Protótipo", defina `SHOW_PROTO_BANNER = false` em `src/data/contact.js`.
- `src/sections/` — seções da página do studio (Hero, Procedimentos, Sobre, Depoimentos, Visita…).
- `src/pages/` — páginas `#studio` e `#cursos`.
- `src/components/` — cabeçalho, rodapé, botão do WhatsApp, ícones.
- `src/hooks/` — rotas por hash, animações de entrada e status "aberto agora" (fuso de São Paulo).
- `src/styles/global.css` — estilos e paleta.

## Deploy

Vercel: framework Vite, build `npm run build`, saída `dist` (ver `vercel.json`).
