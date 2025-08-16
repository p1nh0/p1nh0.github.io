# Personal Portfolio Website – tiagoangelo.net
Instructions on how to add content and use the necessary tools, cuz I'm like a goldfish

## Using VS Code
- press `CMD + L` followed by `CMD + O` (= Live Server open) to preview webpages
- to push to github press `CTRL + ~`, type `git push` and press enter, then type password
- press `CMD + P` to open files and `CMD + SHIFT + P` to search functions (not sure it's called "functions")

## HOW TO ADD CONTENT

### 1. Add a Work
- Create a new HTML file in `/works/`, follow `work-example.html` as template.
- On `/works/index.json` add the new work, which is then loaded dynamically into `works.html` via JS.
- On the new html file edit info in `<head>`, then follow comments to add content.
- If you need to add other containers (ex: youtube, bandcamp, etc.) copy from `/dev/media-containers/` or from other works.
- If adding more than 1 image, copy them to `/img/_originals/` and then use 
`IMAGE BATCH PROCESSOR.workflow` or see `Images` below
- Update sitemap.xml

### 2. Add to or move a work to Archive
- Archived works are displayed in archive.html dynamically 
- Same as Works, but description lies in `/works/index-archive.json`
- Update sitemap.xml

### 3. Add Music
- Copy from an existing entry that is most similar.

### 4. Add Downloads
- Projects link to external pages
- Follow what is already on electronics.html, software.html, maxforlive.html or tutorial.html 

### 5. Add Research
- Follow what is already on research.html


## Images
- images on thumbnails should be 4:3 ratio
- images on slideshows should all have the same size (use omingraffle to cut images, there is a template called `Web Template 960x720`)
- `projectname0.jpg` minimum width of `1200px` - these pictures are used as thumbnails (despite thumbnail loading much smaller widths, there is no need to duplicate files w/ different sizes) as well as outside the website (ex: social media, as referenced by Open Graph tabs on html header)
- all other images have `960px` width
- all images from `works` are stored in `/img/`
- all images from `freestuff`  are stored in `/img/projects/`
- if you want to batch process a collection of images to use with slideshow, use the workflow on `/dev/`. Replace entries with capital letters to properly name the files

## Tips
- `/dev/` folder has templates to copy html code from...
- also has batch converters for images