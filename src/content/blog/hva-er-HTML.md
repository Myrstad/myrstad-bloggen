---
title: HTML for idioter
date: 2023-07-02
author:
  name: Morten Myrstad
  email: mailto:post@mortenmyrstad.no
image:
  src: /img/html.jpg
  alt: Vanlige symboler å se i et HTML-dokuement
description: HTML er fundamentet til alt du ser på nett, så hva er det egentlig, og hvordan fungerer det?
draft: false
tags: ['norsk', 'html']
---

## HyperText Markup Language!

**Hypertekst** betyr mer eller mindre bare at den kan lenke til andre nettsider. Som gir mening siden hva mer er en nettside egentlig mer enn informasjon i form av tekst og bilder samt lenker som fører deg til andre nettsider med samme type informasjon? Egentlig ingenting mer i det hele tatt...

Så hva er **markup** som i "markup language" eller 'markeringsspråk' som det heter på norsk? Det er egentlig ikke noe mer enn måte å skrive ned et dokument med ferdigdefinerte forhold og funksjoner. For eksempel brukes `<h1> Tekst her </h1>` som en hoved overskrift på en nettside. `Tekst her` i seg selv er bare tekst ... men med litt 'markup' har den fått en større betydning!

Hvordan brukes HTML i praksis? Vel om vi tar hånd om standarden HTML5, den nyeste standarden har vi en del å snakke om.

Hvis vi ser på HTML som et hus vi bygger, er 'body' eller kroppen selve byggesteinene mens, 'head' eller hodet er all informasjonen om huset vi ikke kan se på huset. Som når det ble lagd, hvor stort, hvem som eier tomta osv. Så når vi nå ser på et helt vanlig HTML-template (standard side) bør mye "klikke" på plass allerede.

```html
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Min første nettside</title>
  </head>
  <body>
    <h1>Min tittel</h1>
    <p>Mitt første avsnitt</p>
    <a href="https://google.com">Link til Google!</a>
  </body>
</html>
```

Her ser vi også blant annet at `<body></body>` har en start del `<body>` og en slutt del `</body>`. Dette betyr at vi kan ha mange elementer (byggeklosser) strukturert inni hverandre. Som at HTML omfatter alt, og body omfatter alt innhold som er synlig på nettsiden. I hodet får vi en del informasjon til nettleseren og som søkemotorer bruker for å rangere nettsider

I eksemplet ser du (om nettsiden hadde blitt publisert) kun 4 ting. I nettleserfanen vil du se "Min første nettside", og på selve nettsiden vil du se en overskrift markert med `<h1>`, et avsnitt markert `<p>` og ei lenke markert med `<a>`. Alt annet er kun for å hjelpe nettleseren med å avgjøre hvilket språk nettsiden er på, 10 poeng om du finner ut av hvor det står. `DOCTYPE` og `meta` attributtene er blant annet for å kunne bruke bokstaver som **ÆØÅ** og hjelpe med at nettsiden ser bra ut på mobil. Ønsker du lære mer så bør du sjekke ut [Wikipedia artikkelen](https://en.wikipedia.org/wiki/HTML).

## Oppsummering

HTML filer er dokumenter som gir mye informasjon om både innhold og metadata. Det er strukturert på en måte slik at nettleserne våre enkelt kan forstå og vise fram innholdet i dokumentet. Og hvis vi ser på en ferdig nettside som et hus, er HTML-en enkelt sagt rammen til huset, uten maling, møbler og funksjonalitet ... For å fikse opp denne rammen trengs CSS, og om nødvendig JavaScript.
