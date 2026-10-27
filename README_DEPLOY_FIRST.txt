AIGUA DE SALENYS - NETLIFY / GITHUB COMPLETE UPLOAD

THIS ZIP CONTAINS REACT SOURCE CODE, NOT AN ALREADY BUILT dist/ FOLDER.
Use GitHub + Netlify Import repository to build it. Do NOT use Netlify Drop.

STEP 1 - EXTRACT this ZIP. At the top level you must see:
  index.html, package.json, vite.config.ts, netlify.toml, .nvmrc, src/, public/.
  Inside src/: main.tsx and App.tsx.
  Inside public/assets/: salenys-logo.svg, hero-final-integrated.webp, etc.

STEP 2 - RECOMMENDED: Create a NEW empty/private GitHub repository
  e.g. salenys-website-preview-clean (keep your old repository untouched).
  Upload the ENTIRE CONTENTS of this extracted folder (not the ZIP file itself).
  The root GitHub file list must contain index.html, package.json, vite.config.ts,
  src/ and public/. Check by clicking src/ that main.tsx and App.tsx are there.
  If using GitHub web: drag the contents of the extracted folder to Upload files;
  ensure every folder's nested files are included before pressing Commit.
  For a more reliable folder upload, use GitHub Desktop on Windows.

STEP 3 - NETLIFY: Add new project > Import existing project > GitHub.
  Select the new repository; branch main, base directory EMPTY.
  Build command: npm run build
  Publish directory: dist
  Netlify can read these from netlify.toml in the repository.
  Node 22 selected via .nvmrc.

STEP 4 - Browse the published *.netlify.app link on computer and phone.

NOTES
  All photos are optimized WebP. The source files and image references were
  statically validated. A full npm build could NOT be executed in the package
  preparation environment (npm registry DNS unavailable). Netlify will perform
  the build and reveal any remaining runtime/build errors.
  Contact forms are presently visual demonstrations and do not send messages.
  Legal pages / final translations and visual device tests remain pending.
