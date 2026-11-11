# andressotocloud.com

Personal résumé site for Andres Soto, plus a page for the NFC Google review
card side business. Plain HTML, CSS and JavaScript with no build step.

## Pages
- `index.html`: résumé home page (intro and photo, experience, certification,
  skills, project previews, contact)
- `projects.html`: software projects, ARS Aerials videos, raw drone footage
- `nfc.html`: NFC review card landing page. Self-contained (inline CSS and JS,
  GSAP from cdnjs for the entrance and scroll animations)

## Files
- `css/style.css`: shared styles for `index.html` and `projects.html`
- `js/script.js`: mobile menu toggle and footer year
- `images/`: portrait, headshot and the NFC card photo

## Run it locally
```bash
npx serve . -l 5173
```
Then open http://localhost:5173.

## Updating content
- **NFC pricing:** the launch offer ($25 for the first 10 customers, regular
  $40 or 3 for $99) is in `nfc.html` (`.launch-offer` and the `.closing-cta`
  section) and in the NFC band on `index.html`.
- **Raw drone footage:** put compressed MP4 clips (H.264, under ~15 MB) in
  `videos/`, then add a `<figure class="clip">` inside `#footageGrid` on
  `projects.html` (an example is commented there) and delete the
  "Clips are on the way" note below it.
- **TikTok videos:** change the `cite` and `data-video-id` values on the
  `<blockquote class="tiktok-embed">` elements in `projects.html`.

## Deploying
Netlify builds from the `main` branch on GitHub. Merging a pull request into
`main` publishes the site to https://andressotocloud.com.
