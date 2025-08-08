# Personal Portfolio Website – tiagoangelo.net
Instructions on how to add content and use the necessary tools, cuz I'm like a goldfish

## Using VS Code
- press `CMD + L` followed by `CMD + O` (= Live Server open) to preview webpages
- to push to github press `CTRL + ~`, type `git push` and press enter
- press `CMD + P` to open files and `CMD + SHIFT + P` to search functions (not sure it's called "functions")

## HOW TO ADD CONTENT

### 1. Add a Work
- Create a new HTML file in `/works/`, follow `work-example.html` as template.
- On `/works/index.json` add the new work, which is then loaded dynamically into `works.html` via JS.
- On the new html file edit info in `<head>`.
- Then follow comments to add content
- If you need to add other containers (ex: youtube, bandcamp, etc.) copy from `/dev/media-containers/`
- If adding more than 1 image, copy them to `/img/_originals/` and then use 
`IMAGE BATCH PROCESSOR.workflow` 
- Update sitemap.xml

### 2. Add Music
- Add Bandcamp/Soundcloud embed into `music.html`.
- Wrap in `<div class="bandcamp-embed">...</div>` for consistency.

### 3. Add Free Stuff
- Add file under `/projects/` matching one of the categories.
- Link will auto-work from `freestuff.html`.


### 4. Add Teaching
- Add content to `research.html` as text or embedded media.


## Images
- `projectname0.jpg` minimum width of `1200px` - these pictures are used as thumbnails (despite thumbnail loading much smaller widths, there is no need to duplicate files w/ different sizes) as well as outside the website (ex: social media, as referenced by Open Graph tabs on html header)
- all other images have `960px` width
- all images from `works` are stored in `/img/`
- all images from `freestuff`  are stored in `/img/projects/`
- if you want to batch process a collection of images to use with slideshow, use the workflow on `/dev/`. Replace entries with capital letters to properly name the files

## Tips
- `/dev/` folder has templates to copy html code from...
