# Brisa Azul Pool Remodeling — GitHub Pages preview

A bilingual, mobile-first, static demonstration website. It includes a service overview, interactive sample before/after sliders, and a **preview-only contact form**.

## Launch on GitHub Pages

Upload all files directly to the public repository root, replacing existing files. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, then **main / (root)**. GitHub will show the published URL after the build succeeds.

## Important: forms do not send inquiries

This is a safe, non-operational form demonstration. The fields are never transmitted or stored. The submit control only displays a bilingual preview message. A browser-side Content Security Policy also disallows form submissions as defense in depth.

Before taking real inquiries, integrate a verified service with input validation, server-side anti-spam controls, business email notifications, a clear privacy policy, and verified success/error states. Replace this preview-only handler and CSP restrictions when a real backend is ready. **Never commit API keys or customer data to the public repository.**

## Photos are examples, not company projects

The three gallery sliders use Unsplash stock images with simulated filters, not real transformation pairs. The page discloses this. Replace both photos in each pair with genuine images from the same position; remove simulated CSS effects and change the gallery copy before launch.

## Privacy and external requests

Only company branding, sample photos and placeholders are present. There are no personal contact details or credentials. Unsplash and Google Fonts are external services and receive browser requests when images and fonts load. No analytics scripts or trackers are included.

## Files

- `index.html`: website markup and CSP
- `styles.css`: desktop/mobile responsive styling
- `script.js`: translations, sliders, language switch and non-sending preview form
- `thank-you.html`: legacy link safety page; explicitly says nothing was submitted
- `pool-fallback.svg`: locally hosted illustration
- `.nojekyll`: disable Jekyll preprocessing

GitHub Pages is suitable for short-lived site previews. GitHub's usage policy restricts using Pages as a host to run an online business; choose business-appropriate hosting before customer launch.
