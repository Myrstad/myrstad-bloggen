---
title: Python og Flask for fullstack
date: 2024-02-15
author:
  name: Morten Myrstad
  email: mailto:post@mortenmyrstad.no
image:
  src: /img/jinja.jpg
  alt: En Jinja-shrine i Japan. Som representerer Jinja logoen.
description: JavaScript er funksjonaliteten til det ferdigbygde "huset" bygd fundementalt av HTML og designet med CSS.
draft: false
tags: ['python', 'flask', 'jinja', 'html']
---

## Hva er Flask

Flask er et Python fullstack-rammeverk. Det vil si at det kan brukes til å implementere APIer, en frontend eller en backend, eller alle i kombinasjon. Flask gir utviklere muligheten til å implementere alle REST metodene som kan brukes til å hente, sende, oppdatere eller slette informasjon. Flask er designet for å være enkelt å komme i gang med og enkelt å skalere til større og mer avanserte prosjekter. Flask kan også brukes til å hente informasjon fra andre tredjeparts API-er, som i prosjektet innebærer å hente værdata. 

## Hva er Jinja

Jinja er et HTML basert språk for å kommunisere mellom Python (flask) og HTML. Dette gir muligheten til å hente og bearbeide data i Python for å vise dataen i HTML på en Python-server via språket Jinja. Jinja inkluderer funksjonalitet som ikke er i HTML, som IF-ELSE betingelser, løkker og muligheten til å importere andre HTML-filer, ofte kalt komponenter, direkte inn i egen HTML-struktur. Eventuelt utvide andre HTML/Jinja-komponenter, denne prosessen kalles templating. 

## Komme i gang med Flask

Husk å installere `flask` med `pip`

```
pip install flask
```

Hvis du dessverre ikke har pip, kan du sjekke [denne guiden](https://www.educative.io/answers/how-to-install-pip-on-windows) for hvordan å installere det og komme i gang. Lag en hoved Python-fil gjerne `main.py`. Så lagrer du denne koden, før vi kan kjøre serveren.

```py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
  return 'Hei verden, dette er frontsiden'
```

Sjekk gjerne ut [den offisielle dokumentasjonen](https://jinja.palletsprojects.com/en/3.1.x/) til Jinja for en mer utfyllende guide til å begynne med webutvikling med Python.

## Komme i gang med Jinja

Tenk deg at `main.py` ligger i roten av folderen. Lag en fil `/templates/index.html` med dette for eksempel:

```html jinja
<!doctype html>
<html>
  <head>
    <title>Min Flask nettside</title>
  </head>
  <body>
    <h1>Hei fra template!</h1>
  </body>
</html>
```

`main.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
  return render_template("index.html")
```

Sjekk ut mer jinja-funksjonalitet i dokumentasjonen til Flask [her](https://flask.palletsprojects.com/en/3.0.x/quickstart/#rendering-templates).

## Fordeler og ulemper med Flask

**Fordeler**
 * Enkelt å komme i gang med
 * Enkelt å ekspandere
 * Kraftig og brukbart

**Ulemper**
 * Jinja og templating er vanskelig å feilsøke
 * Hosting er mer komplisert og dyrere enn tradisjonelle alternativer
 * Python er kjent for å være tregt og bruke mye RAM

Om fordelene veier opp for ulempene varier veldig på prosjektet, hvis du ikke trenger en backend eller API-logikk er det ikke anbefalt å benytte Flask. Da static-site-generators som [Astro](https://astro.build) er mer egnet for større prosjekter som kun er frontend. Og selv om du trenger fullstack finnes det javascript alternativer som react's next.js og svelte's sveltekit. Og for backend finnes det mer egnet språk som go, rust eller c for bedre hastighet. Men skal du derimot lage noe enkelt, en demo eller proof-of-concept som et skoleprosjekt er hurtigheten på utviklinger 100% verdt det.