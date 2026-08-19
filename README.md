# 4000 Bordados — Landing Page

Página de vendas estática (HTML + CSS) para o pacote de **+4000 matrizes de bordado**.
Site 100% estático: é só servir os arquivos (ou publicar no Vercel/Netlify/GitHub Pages).

## Estrutura
- `index.html` — a página
- `styles.css` — CSS (Tailwind compilado) com a paleta vinho + dourado
- `capa-4000.*` — capa principal (banner), em AVIF + WebP
- `imagens/catalogo-*` — prévias reais dos catálogos de matrizes
- `imagens/depoimentos/` — avatares dos depoimentos (locais)

## Performance
- Imagens em **AVIF** com fallback **WebP** via `<picture>`
- Scripts de rastreamento carregados após a 1ª interação / idle (não travam o LCP)
- `content-visibility` nas seções abaixo da dobra
- Fontes do Google carregadas de forma não-bloqueante

## ⚠️ Antes de publicar — trocar pelo seu
Herdado do template, precisa ser substituído em `index.html`:
1. **Meta Pixel** — ID `2486824241743289`
2. **UTMify pixel** — ID `6a2899b0a2a0a7483b514f5d`
3. **Link de checkout Hotmart** — `pay.hotmart.com/L106190324Q`

E o conteúdo de texto (ainda em espanhol, do nicho anterior) pode ser adaptado ao seu produto.
