---
title: JavaScript for idioter
date: 2023-07-04
author:
  name: Morten Myrstad
  email: mailto:post@mortenmyrstad.no
image:
  src: /img/javascript.jpg
  alt: Bok med oversatt tittel "Javascript for web-designere"
description: JavaScript er funksjonaliteten til det ferdigbygde "huset" bygd fundementalt av HTML og designet med CSS.
draft: false
tags: ['norsk', 'javascript']
---

## Javascript

Javascript ofte forkortet til _JS_ er internettets programmeringsspråk. En enkel HTML nettside med litt eller mye CSS dekorasjon blir fort litt kjedelig, så om du ønsker å legge til interaktivet, eller mer avansert funksjonalitet er JavaScript en nødvendighet.

Har du for eksempel noen gang trykt på en knapp, også sier nettsiden 'Hei på deg'? Aldri skjedd meg, men om du har lyst til å gjøre det på DIN nettside, har jeg laget noen eksempler på hvordan en kunne ha gjort det. Eksemplene blir 'mer avanserte', eller spørr du meg progresivt mer riktige.

#### Eksempel 1:

```html
<!-- HTML -->
<button onclick="alert('Hei på deg')">Trykk på meg!</button>
```

#### Eksempel 2:

```html
<!-- HTML -->
<button onclick="siHei()">Trykk på meg!</button>
```

```js
//JavaScript
function siHei() {
  alert('Hei på deg kjekken');
}
```

#### Eksempel 3:

```html
<!-- HTML -->
<button>Trykk på meg!</button>
```

```js
//JavaScript
function siHei() {
  alert('Hei på deg kjekken');
}

const knapp = Document.querySelector('button');

//min foretrukte metode
knapp.addEventListener('click', {
  siHei();
});
//alternativt
knapp.onclick = function() {
  siHei();
}
```

## Forklaring av kodesnuttene

`alert` lager en tekstboks som sier noe viktig til deg, lurer du på hvordan en 'alert' ser ut, så: <button onclick="alert('Hei på deg')">Trykk på meg!</button>. Knappen er tro det eller ei, [det første eksemplet](#eksempel-1). Men så kan også JavaScript brukes til _evig_ mye mer enn dette eksemplet. JavaScript kan for eksempel; endre innhold på en nettside, hente data fra en database, lage spill, og så mye mer!

## Konklusjon?

Har du lyst til å lage noe litt mer morsomt enn en kjedelig statisk nettside, trengs JavaScript. Da anbefales JavaScript virkelig å læres, så lenge du har tenkt til å lage nettsider, eller forklare deg hvordan man kan jukse i cookieclicker med en kommando i konsollet.
