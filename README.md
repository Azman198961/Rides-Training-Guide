# Pathao Rides CX — Training Material Website

Static site, no build step needed. Files:
- index.html
- styles.css
- app.js
- data.js  (all Bangla + English content, editable)

## Deploy to Netlify (no login needed)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. Netlify gives you a live URL instantly (you can rename/claim it later)

## Deploy to Netlify (with an account, recommended for a permanent URL)
1. Sign in at https://app.netlify.com
2. "Add new site" -> "Deploy manually" -> drag this folder
   OR "Import from Git" if you push this folder to a GitHub repo
3. Set a custom subdomain from Site settings -> Domain management

## Editing content later
All text lives in `data.js`, organized as `TOPICS[i].html.bn` and `TOPICS[i].html.en`.
Edit the HTML strings directly — headings (h3/h4), paragraphs (p), lists (ul/ol),
and tables all use plain HTML with existing CSS classes (callout, table-wrap, steps, faq, etc.)
