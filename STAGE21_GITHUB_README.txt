SALENYS — STAGE 21 · GITHUB REVIEW PATCH
Based on Stage 20 cumulative source (1 November 2026)

CHANGES
1. Header Find Salenys dropdown: Business relationships, Contact Salenys,
   Suggest Salenys Here, Catalogue & Documents. Desktop hover/focus,
   mobile tap using the existing submenu toggle. Each item anchors to
   the existing corresponding section on the Find Salenys page.
2. Footer blue section: new smaller map-pin icon immediately to the right
   of YouTube; links to the supplied official Google Maps location.
3. Fixed header background after scrolling: translucent pale blue
   (#F2FAFB) on desktop and mobile. Transparent initial state preserved.
4. Homepage secondary hero button: "Order Salenys" links to the existing
   Find Salenys order dialog, which opens automatically on arrival.

FILES TO UPLOAD TO GITHUB
  src/App.tsx
  src/FindSalenysPage.tsx
  src/index.css
  src/findSalenys.css
  src/translations.ts

INSTRUCTIONS
In GitHub repository `salenys-website-preview`, select Add file > Upload
files. Drag the extracted src folder and commit to main, preserving paths.
Netlify should build the new preview automatically. This is a SOURCE patch,
not a compiled dist. It does not change the existing hosted website.

REVIEW CHECKLIST
[ ] Header Find dropdown shows four correct options on desktop hover/focus.
[ ] Each dropdown item scrolls to its corresponding Find page section.
[ ] Mobile menu expands Find submenu with four options by tapping arrow.
[ ] Footer map pin after YouTube opens supplied Google Maps listing.
[ ] On scroll the header becomes pale blue, not grey/white.
[ ] Homepage Order Salenys opens the existing four-field order dialog.
[ ] Existing pages, translations and forms otherwise unchanged.

LAUNCH STATUS
This is for GitHub/Netlify visual confirmation. Final legal approval,
retention implementation, medical-claim review of PDFs, and live PHP mail
sending tests are separate release requirements. Do not overwrite host
production files with this source ZIP.
