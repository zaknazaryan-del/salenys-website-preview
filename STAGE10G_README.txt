AIGUA DE SALENYS — STAGE 10G MOBILE CORRECTION (28 OCTOBER 2026)
BASELINE: Stage 10F COMPLETE REVIEW

1. Mobile homepage header at top: Salenys shield on the LEFT, lettering on the RIGHT.
2. On scrolling beyond the existing 48px threshold: lettering disappears; clickable shield stays fixed.
3. On all internal page routes: lettering stays hidden from the start; clickable shield stays fixed.
4. The two existing descriptive lines to the left of the homepage bottle are darker (near-black).
5. The approved desktop design, contact details, photos and functionality are unchanged.

UPDATE GITHUB: Extract this CHANGES-ONLY ZIP. Drag src folder into repository root with its subfolder intact so GitHub overwrites src/App.tsx and src/index.css. Commit; Netlify should build from the new commit. Preview the homepage top, homepage scrolled, and an internal page on a real phone before locking.

SOURCE VALIDATION: TypeScript transpile syntax OK, PostCSS syntax OK, file and ZIP integrity OK.
PRODUCTION BUILD / LIVE RESPONSIVE VERIFICATION: Not run for this stage; requires actual Netlify deployment and phone review.
