# Aung Heein Zay — Portfolio

Personal portfolio for Let's Tech Club. The profile, orange visual direction and three featured full-stack projects are based on the supplied portfolio: https://portfolio-steel-eight-1lp6tkr2rc.vercel.app/ . Two additional local JavaScript exercises remain clearly marked as course practice.

## Run locally
JavaScript now uses native ES modules. Serve the folder over HTTP; opening index.html with a file URL blocks module imports in most browsers.

With Python installed, open a terminal and run:

```powershell
cd D:\portfolio
python -m http.server 8000
```

Open http://localhost:8000 in your browser. Stop the server with Ctrl+C. No build step or npm install is needed. `package.json` only declares ES module syntax for Node checks. Use the same server address when testing theme persistence.

## Structure and separation of concerns
- index.html: semantic page structure and static personal content.
- css/style.css: appearance, responsive layout and theme tokens.
- js/main.js: entry point; calls feature initializers only.
- js/data/projects.js: project data; edit or add objects here.
- js/components/project-card.js: reusable card component; creates safe DOM nodes.
- js/features/projects.js: derives categories, filters data, updates selected state and result count.
- js/features/navigation.js: mobile menu, breakpoints and Escape handling.
- js/features/theme.js: theme state and accessible button state.
- js/features/contact.js: form feedback, count, focus and submit behavior.
- js/utils/dom.js: reusable element creation using textContent, not interpolated HTML.
- js/utils/storage.js: guarded preference reads and writes.
- js/utils/validation.js: pure field validation shared independently of UI.
- js/timer.js and js/list.js: isolated scripts for the two course demos.
- assets/: local project screenshots and demo CSS.

## Features
All, Full-stack and JavaScript Apps filters are generated from project data, showing 5/3/2 projects. A new category automatically creates a filter. Light is the default; dark mode is remembered if storage is available. The keyboard-accessible mobile menu hides inactive links and closes on navigation or Escape. The contact form trims values, validates name, email and 20–500 character messages, exposes errors and focuses the first invalid field. Valid submission always says: “Demo only. Your message has not been sent.” The email link is the real contact alternative.

## Content and credits
Profile, education, contact links, project descriptions and screenshots come from the user's supplied portfolio. The original site uses Next.js/Tailwind; this implementation uses only HTML, CSS and vanilla JavaScript as required by the course. Framework names in skills/project tags describe those projects, not dependencies of this portfolio. The hotel example.com demo was deliberately replaced with its source repository. The AHZ monogram is original CSS/text artwork; no unrelated avatar was copied. Original reading/café demos remain available in projects/ but are not featured.

## Limitations and submission
The form never sends or saves messages. The two local exercise apps reset on reload. External demos are maintained independently. This update does not deploy or modify the linked Vercel site. Publish this repository to an accessible remote and complete a real feature branch, pull request review and merge for the course. Local commits alone do not satisfy the pull request requirement.

Desktop and mobile screenshots are included in `screenshots/`. `TEST-REPORT.md` records browser checks at 360, 768 and 1280px, mobile navigation and keyboard behavior, project filtering, form feedback and theme reload persistence. Formal screen-reader and contrast audits remain unverified. The older `VERIFICATION.txt` describes checks from before that browser test; use `TEST-REPORT.md` for the latest results.

## Git history

The completed project is being recorded in three logical commits: page structure, styling/assets, and modular JavaScript/documentation. These commits organize an existing implementation; they do not claim that development originally occurred in those stages. No historical dates or earlier work sessions are fabricated. A hosted pull request is still required for submission.
