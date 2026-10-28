AIGUA DE SALENYS — MOBILE STAGE 10C
28 October 2026
Baseline: Stage 10B (mobile header) approved working source.

This package is an intermediate mobile review version, NOT the final launch handoff.
The approved desktop design is left unchanged.

CHANGES
1. HOME / MOBILE (src/index.css): Place the exact approved Aigua de Salenys
   lettering PNG on the existing opening photograph to the left of the bottle.
   The brand title no longer occupies a separate block below the photo,
   allowing the approved subtitles and buttons to rise immediately beneath it.
2. PRODUCTS / MOBILE (src/products.css): Remove the large empty opening region
   and bring the approved product introduction below the fixed header.
   A separate fix removes desktop hero class padding from the product image on
   intermediate/tablet sizes; the photograph remains available there.
3. EXPERIENCE / MOBILE (src/experience.css): Increase the opening photo height,
   cropping to retain the Salenys bottle and glass.
4. HISTORY / MOBILE (src/history.css): Increase the first photo height,
   cropping to retain the natural spring and historic barrels.

DEPLOY CHANGES ONLY
- Extract the STAGE10C_CHANGES_ONLY ZIP.
- In GitHub salenys-website-preview choose Add file > Upload files.
- Drag the src folder from the extraction (preserving its internal paths).
- Review the four overwritten CSS files and Commit changes.
- Netlify will deploy the updated main branch; reload on your mobile device.

VERIFICATION
- Four stylesheet files parsed without top-level syntax errors.
- Representative HTML/CSS of the affected pages was rendered in Chromium
  (widths 320, 390, 430, 768, 1366 px). No horizontal overflow detected.
- Both approved photo and logotype files are retained byte-identically.
- Complete npm/Vite production build could not be executed in this workspace
  because npm registry network access was unavailable. Confirm Netlify build.
- Font rendering and full production React page behavior require live review.

IMPORTANT
The Netlify temporary preview remains separate from the existing Salenys
public domain and hosting. This version does not deploy to the existing host.
