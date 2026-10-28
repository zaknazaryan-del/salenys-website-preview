AIGUA DE SALENYS — STAGE 10H
28 October 2026

Changes compared with Stage 10G:
1. Remove the decorative "Explore" scroll button at the bottom of the homepage hero (desktop + mobile). The footer navigation, "Discover the Water" and all main website links remain unchanged.
2. Find Salenys > Catalogue & Documents: exactly TWO configurable document rows:
   - Product Catalogue
   - Palletization
   URLs remain null until actual PDF files are supplied.
3. Add Spanish and Catalan translations for new document labels and descriptions.

DEPLOY CORRECTION-ONLY ZIP:
Extract and drag the `src` folder to your GitHub repository using Add file > Upload files. Preserve directory structure, overwrite these three files and commit. Netlify normally automatically starts a new build.

CHECK AFTER DEPLOY:
- Homepage at desktop and mobile sizes: no "Explore" scroll cue.
- Homepage footer Explore navigation still works.
- Find Salenys near bottom: only two rows, Product Catalogue and Palletization.
- EN/ES/CAT labels display correctly.

SOURCE CHECKS: TypeScript/TSX parsing, exact source diff, ZIP integrity passed. Full Vite build not run locally (vite not installed).
