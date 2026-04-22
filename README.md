# discombobulateme — portfolio

Personal portfolio by Paloma Oliveira. Each section explores a different facet of the work through intentionally chaotic, magazine-style layouts, ASCII art animations, and hover image cycling. Built with HTMX to keep the stack as simple as possible.

## Structure

```
/portfolio
  ├── index.html
  ├── styles/
  │     └── main.css
  ├── utils/
  │     ├── global.js           # HTMX afterSwap handlers & scroll-based image cycling
  │     ├── scroll.js           # Scroll-snap navigation between sections
  │     └── changeLinkImage.js  # Image carousel on link hover/focus
  └── public/
        ├── sections/
        │     ├── me.html
        │     ├── devrel.html
        │     ├── dev.html
        │     ├── opensource.html
        │     ├── genderequity.html
        │     ├── accessibility.html
        │     ├── writing.html
        │     ├── curator.html
        │     └── artist.html
        ├── images/
        │     ├── arqueologia0-5.webp
        │     ├── norma0-4.webp
        │     ├── cc.webp
        │     ├── docs.webp
        │     ├── foss-backstage.webp
        │     ├── hack-nights.webp
        │     ├── medhacker.webp
        │     ├── metaphors.webp
        │     ├── ospos-for-good.webp
        │     ├── p-maestra.webp
        │     ├── p-rainow.webp
        │     ├── pyladies.png
        │     ├── pysv.webp
        │     ├── saucelabs.webp
        │     ├── tenderintelligences.webp
        │     ├── transmutacion.webp
        │     └── un.webp
        ├── gifs/
        │     ├── nova.gif
        │     ├── p-nianchat.gif
        │     ├── p-rainbow-bridge.gif
        │     ├── p-rainbow-color.gif
        │     ├── p-rainbow-nobg.gif
        │     ├── p-rainbow.gif
        │     └── peinado.gif
        ├── icons/
        │     ├── carousel.svg
        │     ├── pdf.svg
        │     └── preview.svg
        └── pdfs/
              └── transmutacion.pdf
```

## Sections

| Section | Layout | Background | Notes |
|---|---|---|---|
| me | layout1 | cyan → lime | intro |
| devrel | layout2 | cream → pink | |
| dev | layout3 | mint → lavender | image cycling via module |
| opensource | layout4 | yellow → magenta | image cycling via module |
| genderequity | layout5 | orange → cyan | marching ASCII parade |
| accessibility | layout2 | cream → pink | carousel + PDF download |
| writing | layout6 | gold → coral | |
| curator | layout7 | mint → yellow | |
| artist | layout8 | purple → cyan | sliding ASCII marquee |

## Tech

- [HTMX](https://htmx.org/) 2.0.2 — sections load via `hx-get` / `hx-trigger="load"`
- CSS Grid — each section has its own named-area grid
- CSS Scroll Snap — full-viewport vertical snapping
- Google Fonts: Bagel Fat One, Langar, Nunito
- No build step, no framework
