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

## Rastreamento e checkout
- ✅ **Meta Pixel** — ID `2486824241743289` (confirmado do dono, instalado e disparando `PageView`)
- ✅ **Link de checkout Hotmart** — `pay.hotmart.com/B107231150D` (produto próprio)

### ⚠️ Ainda pendente — trocar pelo seu em `index.html`
- **UTMify pixel** — ID `6a2899b0a2a0a7483b514f5d` (ainda é o do template)

Conteúdo já adaptado para o produto de +4000 matrizes, com as categorias reais:
Floral, Infantil, Frases y Nombres, Personajes, Punto Cruz, Religioso, Masculino, Mantas,
Palas y Cenefas, Profesiones y Marcas, Reducidos e Equipos de Fútbol. Textos em espanhol (mercado LatAm).
