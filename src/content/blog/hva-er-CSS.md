---
title: CSS for idioter
date: 2023-07-03
author:
  name: Morten Myrstad
  email: mailto:post@mortenmyrstad.no
image:
  src: /img/css.jpg
  alt: Maling, som symboliserer hvordan CSS designer nettsider
description: CSS er malingen, strukturen, og innredninger på huset vi kaller HTML. Uten CSS hadde internettet mildt sagt vært veldig kjedelig
draft: false
tags: ['css']
---

## Cascading Style Sheet

**Cascading Style Sheet** (CSS) eller gjennomgående stilark på norsk gir HTML dokumentet farge og struktur. Hvis vi igjen ser en nettside som et hus hvor HTML er selve rammen av huset, blir CSS malingen, strukturen og innredningen til huset. Fordi et rent HTML-dokument er sorthvitt og ikke har noe design i det hele tatt, trengs CSS for å få nettsider til å se evig mye bedre ut.

Her kommer et eksempel av hvordan man for eksempel kunne fått alle avsnittene (p for paragraphs) på nettsiden til å få blå tekst:

```css
p {
  color: blue;
}
```

Ser enkelt nok ut, men CSS kan brukes til ufattelig mye mer enn det. Fordi CSS også kan gi visuell struktur til elementer. Hva betyr det? For eksempel at istedenfor at tre bilder på en nettside er vertikale (standard) til at de er horisontale i forhold til hverandre. Og enda mer avansert så kan den på stor skjerm ha horisontal konfigurasjon, mens på mobil er den vertikal.

Et enkelt eksempel med flexbox (ikke noe du trenger å kunne akkurat nå) kan se slikt ut.

HTML:

```html
<div>
  <img src="1.png" alt="første" />
  <img src="2.png" alt="andre" />
  <img src="3.png" alt="tredje" />
</div>
```

CSS:

```css
div {
  display: flex;
  flex-direction: row;
  gap: 1rem; /* Tilsvarer 16px (pixler) */
}

img {
  width: 100%;
  max-width: 100%;
}

/* For mindre skjermer så skal bildene vises vertikalt */
@media (max-width: 500px) {
  div {
    flex-direction: column;
  }
}
```

Det er verdt å merke seg at om du ikke vet hva en `div` er, er det enkelt sagt en kontainer uten noe innhold, som gjør det en god kandidat til å endre visuelt med CSS, uten at innhold blir lagt til. **Flex** er fleksibilitet, og brukes til å strukturere visuelt hvordan nettsiden ser ut.

## Konklusjon

CSS er veldig enkelt sagt hva som får nettsider til å se bra ut. CSS endrer aldri innhold på en nettside, kun det visuelle! Det er veldig mye jeg ikke har snakket om når det gjelder CSS, så les deg gjerne opp på CSS på [Wikipedia](https://en.wikipedia.org/wiki/CSS) om du ønsker å lære mer.
