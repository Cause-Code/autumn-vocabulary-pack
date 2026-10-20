# Autumn vocabulary guide — GitHub Pages export

This is the actual source of the current CauseEnglish website, exported from
saved Site version 14 (source commit `53bae54a7ee33e758e47498aa7a24c12b032bbd3`).
It is a complete static website, not a screenshot recreation. No framework,
Node.js, package installation, build command, API key or backend is required.

## Contents

- `index.html`: main entry point, at the ZIP root.
- `styles.css`: the existing stylesheet, preserved without design changes.
- `script.js`: responsive sentence fitting and the Download button behavior.
- `assets/`: the current folder artwork, exact page-preview images, SVG lettering,
  knitted background and both locally hosted font files.
- `files/`: place `vocabulary-guide.pdf` here yourself. No PDF or PDF chunks
  are included in the archive. The page-preview PNGs remain part of the design.
- `.nojekyll`: tells GitHub Pages to serve the already prepared static files.

All local asset and download paths are relative. The site works under the
`/autumn-vocabulary-guide/` project path without changing a base URL.

## Deploy using GitHub's website

1. Extract the ZIP on your computer. Do not upload the ZIP itself.
2. Rename your guide exactly `vocabulary-guide.pdf`, then put it inside `files`.
   The button cannot download until this file has been added.
3. On GitHub, create a repository named `autumn-vocabulary-guide`. Choose Public
   for GitHub Free. You do not need to initialize it with another README.
4. Use the repository's upload-files option. Upload the CONTENTS of the extracted
   folder, including `assets` and `files`, and commit them to `main`. Ensure
   `index.html` is at the repository root, not inside another nested folder.
5. Include `.nojekyll`. If your computer hides it during upload, use Add file →
   Create new file on GitHub, name it `.nojekyll`, leave it empty, and commit.
6. Open Settings → Pages. Under Build and deployment, set Source to
   Deploy from a branch, select `main` and `/(root)`, then Save.
7. Wait for the Pages deployment to finish. Open the published URL shown in
   Settings → Pages, normally:
   `https://YOUR-USERNAME.github.io/autumn-vocabulary-guide/`.
8. Click the Download button and confirm that the browser saves the correct PDF.

## If the PDF is larger than 25 MiB

GitHub's browser uploader accepts individual files up to 25 MiB. For a 40–50 MB
PDF, use ordinary Git instead (do not use Git LFS for this download).
Create an empty repository as above. In a terminal inside the extracted folder,
with the PDF already in `files`, run these commands after replacing YOUR-USERNAME:

```bash
git init
git branch -M main
git add .
git commit -m "Add Autumn vocabulary guide website"
git remote add origin https://github.com/YOUR-USERNAME/autumn-vocabulary-guide.git
git push -u origin main
```

Authenticate with your GitHub account when prompted, then complete steps 6–8
above. These commands assume an empty remote repository. GitHub blocks ordinary
Git files larger than 100 MiB; the expected 40–50 MB PDF is below that limit.

## What is preserved and what changes

The existing layout, colors, responsive rules, button styling, typography,
Instagram link, artwork and accessible status messages are preserved. CSS and
JavaScript have simply been separated from the original HTML into editable files.
All eight active design assets are copied unchanged. The historical, unused
folder drafts are not required and are not included.

The Download button fetches `files/vocabulary-guide.pdf`, shows download progress
when the server supplies the size, then asks the browser to save it with that name.
Browser settings may determine whether a save prompt appears. The former PDF
chunk manifest and binary chunks are removed. There are no ChatGPT Sites hosting
or backend dependencies. The Instagram link is the only external navigation.

The existing visible label says `PDF · 25 МБ · без реєстрації`. If you upload a
different-size guide, edit this label in `index.html`; it does not limit download
size. Replacing the PDF does not automatically regenerate the three preview PNGs.

ChatGPT's owner-only access controls, original hostname and version history do
not transfer with static files. The standard GitHub Pages setup described here
publishes the website and its PDF publicly. This export itself does not publish
anything or change the existing private ChatGPT Site. The original
`noindex,nofollow` meta tag is preserved; it is a search-engine request, not access
control. Remove that tag later only if you want the page indexed.

## Verification and troubleshooting

This export was checked for exact stylesheet and asset preservation, JavaScript
syntax, project-path resolution, download success/error handling, and ZIP layout.
No production GitHub deployment or browser visual test was performed.

- Page returns 404: confirm Pages is enabled for `main` / `/(root)` and the
  filename is exactly `index.html` at the root. Check the deployment in Actions.
- Download fails: open `files/vocabulary-guide.pdf` beneath your published URL;
  check its spelling, lowercase extension, location and that the actual file was
  committed. Wait for the new deployment after uploading it.
- For a local HTTP preview, run `python3 -m http.server 8000` in the extracted
  folder (Windows: `py -m http.server 8000`) and visit `http://localhost:8000/`.
  Double-clicking the HTML is not a reliable download test because browsers may
  block fetch requests from `file://` pages.

## Official deployment references

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github
