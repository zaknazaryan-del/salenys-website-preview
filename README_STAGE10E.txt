AIGUA DE SALENYS — STAGE 10E: MOBILE HOMEPAGE + PRODUCTS HERO
28 October 2026

WHAT THIS PACKAGE CONTAINS
- Stage 10D mobile homepage correction, unchanged (src/index.css):
  * Keep the small navigation logo.
  * Hide the oversized lettering in the mobile homepage hero.
  * Position approved descriptive text low on the hero photograph beside the bottle.
  * Remove the unnecessary text area under the photograph.
- Stage 10E Products hero correction (src/products.css):
  * RESTORE the approved photograph of three glass bottles at the top of Products.
  * Fix the generic .hero mobile style that previously created an empty space.
  * Keep a mobile-sized full-width photograph followed immediately by the introduction.
  * Preserve the complete desktop design and all other website files.

HOW TO UPDATE GITHUB ONCE
1. Download and extract Aigua_de_Salenys_STAGE10E_10D_PLUS_PRODUCTS_FIX_ONLY.zip.
2. In GitHub open the existing salenys-website-preview repository.
3. Choose Add file > Upload files.
4. Drag the extracted src folder from Windows File Explorer (not the file picker)
   so GitHub preserves BOTH exact paths:
      src/index.css
      src/products.css
5. Commit the two replacements in the main branch.
6. Netlify will automatically redeploy. Refresh the preview on mobile.

PACKAGE BASELINE: Stage 10D complete website source.
This patch is cumulative and includes Stage 10D, so no separate Stage 10D upload is needed.
The photo source is already included in the website: public/assets/products/p01.webp.

LOCAL VERIFICATION
- Restored Products photo renders with all three bottles in a Chromium test viewport.
- Image displayed and zero inherited padding at widths: 320,360,390,430,700,768,900,1024,1366 px.
- No horizontal overflow in the representative Products test.
- Desktop styles left unchanged (change applies at <=1100px only).
- A full production app build and live Netlify deploy have not been verified here.

The existing hosting/domain is NOT altered by this ZIP.
