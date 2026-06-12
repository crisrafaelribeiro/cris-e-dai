# 💛 A nossa retrospectiva — Cris & Dai

Presente de Dia dos Namorados em formato de "retrospectiva musical" (estilo Spotify Wrapped).
Tudo funciona offline, direto no celular. Basta abrir o `index.html`.

## Como abrir
1. Mantenha a pasta `fotos/` sempre junto do `index.html`.
2. Toque em `index.html` para abrir no navegador do celular (ou hospede — veja abaixo).
3. Toque em **Começar a viagem** e curta. 💕

## Como navegar
- **Toque no lado direito** da tela → próximo card.
- **Toque no lado esquerdo** → card anterior.
- **Segure o dedo na tela** → pausa o tempo (igual aos Stories).
- Os cards também avançam sozinhos, com a barrinha de progresso no topo.

## 🎵 Colocar a música de verdade
O player já está pronto pra tocar áudio real. Só faltam os arquivos:

1. Pegue o `.mp3` da música (ex.: "Foi Deus" ou "Wherever You Will Go").
2. Renomeie para **`nossa-musica.mp3`**.
3. Coloque na **mesma pasta** do `index.html`.
4. Pronto — ao tocar em "Começar", a música começa.

> Observação: navegadores de celular só deixam o áudio tocar **depois** de um toque na tela.
> Por isso a música começa quando você aperta "Começar a viagem" / o botão ▶ do player.
> Se nenhum arquivo for encontrado, o player roda em modo visual (animado) sem quebrar nada.

## A trilha sonora sugerida (a playlist de vocês)
1. Foi Deus — Cupim na Mesa  *(o casamento)*
2. Wherever You Will Go — The Calling  *(o namoro)*
3. Como é Grande o Meu Amor por Você — Roberto Carlos
4. Velha Infância — Tribalistas
5. Amazing — Westlife
6. Trem-Bala — Ana Vilela
7. Drops of Jupiter — Train

Dica: monte essa playlist no Spotify e deixe tocando no fundo enquanto ela navega. 😊

## Trocar fotos ou textos
- **Fotos:** substitua os arquivos dentro de `fotos/` mantendo os mesmos nomes
  (`namoro_1.jpg`, `casamento_1.jpg`, `bella_2.jpg`, etc).
- **Textos:** abra o `index.html` e edite o trecho `const STORY = [...]` no início do `<script>`.
  Cada bloco é um card: `title`, `body`, `date`, `eyebrow`, `stat`.

## Quer colocar online (link pra mandar pra ela)?
Opções gratuitas e fáceis:
- **Netlify Drop** (netlify.com/drop) → arraste a pasta inteira, ganha um link na hora.
- **GitHub Pages** → suba a pasta num repositório e ative o Pages.

Feito com carinho. 💍
