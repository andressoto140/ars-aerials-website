# ARS Aerials Website

A static one-page site (plain HTML/CSS/JS, no build step) covering three services:
drone aerial content, web development, and NFC Google-review cards.

## Files
- `index.html` — all page content/sections
- `css/style.css` — styling (dark theme, drone/aerial look)
- `js/script.js` — mobile nav toggle + footer year

## Run it locally
No install needed beyond Node (for the `serve` package):

```bash
npx serve .
```

Then open the printed local URL (usually http://localhost:3000).

You can also just double-click `index.html` to open it directly in a browser,
though some browsers restrict local file access slightly — using `serve` is safer.

## Still needs your input (marked as placeholders)
1. **Pricing** — NFC cards are $40 each or 3 for $99. Web dev packages are
   Starter $300, Get Found Bundle $399 and Business $700+, each then $99/year.
   Prices live in `index.html` under the `#nfc` and `#webdev` sections
   (search for `price-value`).
2. **Google Business Profile link** — once you (or a client) has a live NFC
   card, the actual review link comes from that business's own Google Business
   Profile "Get more reviews" short link, generated per-customer — not something
   to hardcode into this site.

## About section
Added an "About the developer" section (`#about`) built from your resume —
professional summary, highlights (Pasco Sheriff's Office work, AWS certification,
degree), tech stack tags, and links to your LinkedIn/GitHub. This builds
credibility specifically for the web development service.

## Portfolio
The Portfolio section embeds your 3 pinned TikTok videos (SI TE OLVIDO, LA VERDAD
DE MI VIDA, ESTABA PENSANDO) live via TikTok's official embed widget — they play
inline and stay in sync with view/like counts automatically. To swap which videos
show, update the `data-video-id` / `cite` values on the `<blockquote class="tiktok-embed">`
elements in the `#portfolio` section of `index.html` with new video URLs.

## Adding raw drone footage
The Portfolio section has a "Raw drone footage" block below the edited TikTok
reels, meant to show the flying/raw side separately from the edited final cuts —
it's currently empty and hidden until you add clips. To add a raw clip:
1. Drop the video file (compressed MP4, H.264, ideally under ~15MB) into `videos/`.
2. In `index.html`, find `<div class="raw-footage-grid" id="rawFootageGrid">` in
   the `#portfolio` section and add a line like:
   `<video controls playsinline src="videos/your-clip.mp4"></video>`
3. The grid and styling (rounded corners, sizing) are already set up in
   `css/style.css` under `.raw-footage-grid` — no CSS changes needed.

## Contact methods
All contact actions use direct phone (`tel:+18133129735`) instead of WhatsApp —
the "Get a Quote", hero, and NFC order buttons all click-to-call. Facebook
(ARS Aerial, 83K) and TikTok (`@ars.aerials`, 12K) are linked throughout;
personal Instagram was removed per your request.

## Deploying (make it live)
Easiest free options for a static site like this:
- **Netlify Drop** — drag the whole folder onto https://app.netlify.com/drop
- **Vercel** — `npx vercel` from this folder
- **GitHub Pages** — push this folder to a GitHub repo and enable Pages in repo settings

Once you pick a domain (e.g. `arsaerials.com`), any of the above let you attach
a custom domain for free (you just pay for the domain itself, usually ~$10-15/yr).
