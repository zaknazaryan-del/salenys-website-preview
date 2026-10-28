# Salenys — Stage 18: Internal-page scrolling header

**Source baseline:** Stage 17 complete master, including Stage 11–16 production files.

## Approved behavior
- Homepage at top and when scrolled: shield (left) + original Aigua de Salenys lettering (right) always visible.
- Internal pages at top: neither the shield nor the lettering is visible.
- Internal pages after the user starts scrolling (8px): shield and lettering appear together in the fixed header.
- The complete lockup links back to the homepage; on the homepage it smoothly scrolls to the top.
- Same behavior for phone, tablet, and desktop, keeping the existing mobile navigation and three languages.
- No change to photographs, page text, document slots, legal pages, or forms.

## GitHub update
Upload the extracted `src` folder from `Salenys_STAGE18_GITHUB_HEADER_SCROLL_FIX_ONLY.zip`, preserving the paths `src/App.tsx` and `src/index.css`. Commit to main. The GitHub repository must already include ALL source files from the prior full-source synchronization, especially `src/LegalPage.tsx`, or the build will fail.

## Test cases
1. Homepage at top: shield and lettering visible.
2. Homepage after scrolling: shield and lettering still visible.
3. Internal page at top: neither visible.
4. Scroll 8px or farther on internal page: shield and lettering visible.
5. Return to top: both hidden on internal page.
6. Tap logo while scrolled inside an internal page: returns to homepage.
7. Check menu/language controls on mobile and navigation at desktop.

Source and ZIP static checks passed. Netlify production build and real device visual check remain pending.
