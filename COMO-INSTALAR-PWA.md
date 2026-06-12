# 💛 Cris & Dai — agora é um app (PWA)

A retrospectiva virou um **PWA**: dá pra instalar na tela inicial do celular,
abre em tela cheia (sem barra de navegador) e funciona **offline** depois da
primeira visita.

## O que subir pro GitHub Pages
Suba **todos** estes arquivos (na mesma pasta, na raiz do site):

```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
icon-maskable-512.png
apple-touch-icon.png
nossa-musica.mp3      ← seu arquivo de música
fotos/                ← a pasta com as fotos
```

> Importante: o PWA só funciona em **HTTPS**. O GitHub Pages já é HTTPS,
> então está tudo certo. (Aberto direto do arquivo no PC, o modo app não ativa —
> mas no site publicado, sim.)

## Como ela instala no celular

**Android (Chrome):**
1. Abrir o link `https://crisrafaelribeiro.github.io/cris-e-dai/`
2. Aparece um aviso "Adicionar à tela inicial" / "Instalar app" — tocar nele.
   (Se não aparecer: menu ⋮ → "Adicionar à tela inicial".)
3. Pronto: vira um ícone de coração na tela inicial. 💗

**iPhone (Safari):**
1. Abrir o link no **Safari** (precisa ser o Safari).
2. Tocar no botão de compartilhar (quadrado com seta pra cima).
3. "Adicionar à Tela de Início" → Adicionar.
4. Vira um ícone de coração na tela inicial.

## Atualizou algo depois?
O app guarda uma cópia em cache. Se você publicar uma versão nova e ela não
aparecer, é só abrir o `sw.js` e trocar a linha:

```js
const CACHE = 'cris-e-dai-v1';
```
para `v2`, `v3`, etc. Isso força o app a baixar a versão nova.

Feito com carinho. 💍
