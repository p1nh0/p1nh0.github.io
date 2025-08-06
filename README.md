# How to preview pages
    Using VS Code press 'CMD + L' followed by 'CMD + O' (= Live Server open)

# Uploading to github
    on VS Code press 'CTRL + ~' 
    then hit git push and insert password
    (see local file _HOWTO.md) 

# HOWTO: Add Content to www.tiagoangelo.net

This guide explains how to properly add new content to your portfolio site, following best practices for structure and SEO.

---

## How to Add Content to **Projects**

Each project is a separate HTML file in the `/projects` folder.

### Steps:
1. **Duplicate** `_example-project.html` and rename it (e.g. `2025-sound-sculpture.html`)
2. Fill in:
   - `<title>` tag (SEO-relevant)
   - `<meta name="description">` tag
   - A relevant `<img>` for preview (stored in `/assets/img`)
   - Text content using clean semantic HTML (`<h1>`, `<p>`, etc.)
3. Save and test in browser.

**SEO Tips:**
- Use descriptive filenames: `year-name.html`  
- Add alt text to images: `<img src="..." alt="Short description of the project">`
- Keep descriptions concise and keyword-rich.

The new project will automatically show up in `projects.html`.

---

## How to Add Content to **Music**

This is a single HTML file: `music.html`.

### Steps:
1. Open `music.html`
2. Add a new music block inside the container (look at existing entries for format).
3. Include:
   - A short description
   - Embeds from Bandcamp, SoundCloud, YouTube, etc.
   - Date of creation/release (optional)

**SEO Tips:**
- Use `<h2>` or `<h3>` for titles.
- Add `<meta>` tags for embeds if platform allows.
- Keep descriptions clear and keyword-aware.

---

## How to Add Content to **Free Stuff**

Each grid category links to a separate HTML file inside `/freestuff`.

### Steps:
1. Choose the category (e.g., `maxforlive.html`)
2. Add a new block with:
   - Title
   - Description
   - Download link or external link (e.g. to Freesound)
   - Optional preview (audio, image)

To create a **new category**:
1. Duplicate an existing category page (e.g., `maxpd.html`) and rename it.
2. Update the link in `freestuff.html`.

**SEO Tips:**
- Use descriptive links (`download max patch`, `listen to samples`, etc.)
- Include `alt` tags for all media.
- Mention licenses clearly.

---

## How to Add Content to **Teaching & Research**

This is a single file: `teaching.html`.

### Steps:
1. Open `teaching.html`
2. Add new teaching entry:
   - Course/workshop title
   - Brief description of content or role
   - Optional image or link to materials
3. For research, list:
   - Title of publication
   - Link (DOI, journal page, PDF)
   - Brief abstract or summary

**SEO Tips:**
- Use proper headings and links.
- Use `<article>` or `<section>` to separate blocks semantically.
- Include dates where applicable.

---

## Notes

- All new images/media should go in `/assets/img` or relevant subfolders.
- All internal links must use **absolute paths**, e.g. `/projects/2025-sound-sculpture.html`.
- Keep code tidy and consistent.
- Always test locally with **Live Server** before pushing to GitHub.
- Local file _HOWTO.md has more tips
- local _dev has examples and other useful files
---
