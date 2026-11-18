# David L.W. Casimes — portfolio

Static site on GitHub Pages, no build step.

- `index.html` — home: video, selected graphics and photos, work, recognition, toolkit, contact
- `work.html` — full graphics and photography gallery
- `experience.html` — experience
- `styles.css`, `site.js` — styles, YouTube click-to-play embeds and the image lightbox
- `img/work/` — web-size images (1600px)

## Adding a video
Upload it to YouTube as Unlisted, then add a line to the `VIDEOS` list near the bottom of `index.html`:

    { id:"YOUTUBE_ID", title:"Title", meta:"1:23", desc:"One sentence." },

The ID is the part after `watch?v=` or `youtu.be/`. The first video shows full width.
