# Light of the Chosen – Policy Pages

This folder contains two pages to host on GitHub Pages for Google Play Console:

- `privacy-policy.html` → Privacy Policy URL
- `delete-data.html` → Data Deletion URL

## How to publish on GitHub Pages

1. Copy both HTML files to the root of your repo (or a `docs/` folder).
2. Commit and push:
   ```bash
   git add privacy-policy.html delete-data.html
   git commit -m "Add policy pages (privacy & delete data)"
   git push
   ```
3. In GitHub → **Settings** → **Pages**:
   - Source: `main` branch
   - Folder: `/root` (if files in repo root) or `/docs` (if you put them in `docs/`)
4. Your URLs will look like:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO/privacy-policy.html`
   - `https://YOUR-USERNAME.github.io/YOUR-REPO/delete-data.html`

Update the contact email in both files before publishing: `support@lightofthechosen.app`.
