# Portfolio requirements test report

Tested: 29 October 2026
Target: D:\portfolio, served at http://127.0.0.1:8000
Verdict: Core website requirements pass the checks performed. Submission is not fully complete.

## Confirmed passes
- Plain HTML, CSS and vanilla JavaScript; no framework dependency or build/install step.
- Required header/navigation, hero, about, skills, projects, contact form and footer.
- Native ES modules separate data, reusable components, utilities and feature behavior.
- Five project objects, two categories, descriptions, technologies and demo/source links.
- Browser filters produce All=5, Full-stack=3, JavaScript Apps=2 and restore all five.
- Mock DOM tests also confirm repeated switching without duplicates and non-mutating filtering.
- Mobile navigation opens/closes, closes when a section link is selected, and supports Enter/Escape.
- Hidden mobile links leave the keyboard tab order: Tab from the closed menu reaches theme.
- aria-expanded, filter aria-pressed and theme aria-pressed reflect state.
- Browser invalid submission rejects short name, malformed email and short message; field errors appear and focus moves to name.
- Browser corrected submission gives exactly: Demo only. Your message has not been sent.
- Automated actual-module tests cover trimmed message boundaries 19/20/500/501, live count and error correction.
- Browser reload restores dark and light preferences. Blocked-storage fallback passes mock tests.
- Browser layout checks at widths 360, 768 and 1280 show no document horizontal overflow.
- Light mobile/tablet/desktop and dark mobile/desktop views inspected; no obvious issues in inspected views.
- Three local screenshot images load when brought into view.
- Browser console contains no captured warnings or errors during these checks.
- Every JavaScript file on D: passes syntax checks.

## Submission gaps
1. D:\portfolio has no .git directory. A repository link, meaningful commits, feature branch, real pull request review and merge have not been demonstrated. If stored remotely elsewhere, provide that evidence to the instructor.
2. README says to double-click start.cmd, but that file is missing from the D: copy. The documented alternative works: run python -m http.server 8000 from D:\portfolio and visit http://localhost:8000. This is a documentation/setup inconsistency, not a build dependency.
3. Desktop/mobile screenshots were captured in this test and placed in the test outputs and D:\portfolio\screenshots. Include these in the repository.

## Verification limits
- No numerical assessment score is assigned: instructor judgment includes content authenticity and Git evidence.
- Formal screen-reader testing, every possible keyboard path and a complete contrast audit were not performed.
- HTTP link checks establish availability only, not complete behavior of externally hosted apps.
- A real-browser temporary extra project was not inserted into source. Module tests cover data extension; real browser confirms generated cards and filters.
- The portfolio needs HTTP because of native ES modules. file:// cannot reliably run it; a local server is allowed by the brief.

## Source
Portfolio_Project_Requirements.pdf supplied by the user, pages 1–5.
