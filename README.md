# Visual Vehicle Inspection Report

Standalone, print-optimized, one-page vehicle inspection form.

## Files
- `index.html` — report structure and all sections.
- `styles.css` — visual design + print rules for US Letter.
- `script.js` — demo-fill and print actions.

## Usage
1. Open `index.html` in Chrome.
2. Click **Fill Demo Data** to populate example values.
3. Click **Print / Save as PDF**.
4. Print settings:
   - Paper size: **US Letter**
   - Background graphics: **Enabled**

## Print design notes
- `@page` is set to Letter with `0.35in` margins.
- Buttons are hidden in print mode.
- Colors are preserved with `print-color-adjust: exact`.
