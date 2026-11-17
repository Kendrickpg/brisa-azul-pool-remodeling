# Brisa Azul Pool Remodeling — website starter

A bilingual (English / Spanish), responsive, one-page website with elegant South Florida-inspired design, three interactive before/after sliders, service descriptions and a four-field inquiry form.

## View it
Open `index.html` in a browser. Fonts and sample pool photos require an internet connection. It also works when uploaded as a static site to a web host.

## Important: sample images, not actual projects
The site initially uses three sample Unsplash photos, each with a simulated “before” color filter. **These are NOT real before/after transformations and are explicitly disclosed as examples on the website.** Replace these with genuine before and after images from Brisa Azul projects prior to publishing the final business site.

To use real pairs, find each `.comparison` in `index.html` and update its first `<img class="after-photo" src="...">` with the true after photo, and its second `<div class="before-clip"><img src="...">` with the matching before photo taken from the same angle. Remove the simulated filter in `styles.css` from `.before-clip img` and remove the `.before-clip:after` tint if desired. Once genuine projects are in place, replace the demo disclaimer text in the two language dictionaries in `script.js` and remove the demo banner from `index.html` if it is no longer applicable. Images should be optimized as .webp where possible.

Sample photo IDs:
- `photo-1576013551627-0cc20b96c2a7`
- `photo-1575429198097-0414ec08e8cd`
- `photo-1572331165267-854da2b10ccc`

Source: [Unsplash License](https://unsplash.com/license). Stock photos are illustrative only. Replace with company work rather than implying the business performed projects shown.

## Language switch
EN and ES toggle the site without reloading. Choice is stored locally in the browser, and `?lang=es` / `?lang=en` override the saved language for visits with a link. Copy is maintained in `translations` within `script.js`.

## Contact form — deployment requirement
The contact form collects: full name, email, phone, and job description. It includes client-side required validation, a spam honeypot, and a language field.

**Form is not connected to an inbox yet.** It is configured with Netlify Forms (`data-netlify="true"` and hidden `form-name`) and `thank-you.html` as the success page. If you deploy to **Netlify**, ensure form detection is enabled on the site and configure email notifications in the Netlify dashboard under Forms. On other hosts, you must supply a form backend or form-processing provider. Opening this locally prevents fake submissions and displays a preview notice instead.

Form handling is subject to your host's plan and form limits. Use a privacy notice and spam protection appropriate for your business before publishing.

## Publishing on Netlify (an option)
1. Drag this folder into [Netlify Drop](https://app.netlify.com/drop) or connect it to a Git repository, then publish.
2. In Netlify, check that `pool-inquiry` appears under Forms, and configure email notifications for your business inbox.
3. Test in English and Spanish, confirm real form submissions reach you, and check the site on a phone.
4. Add your own domain when ready.

## Files
- `index.html` — home page, gallery and inquiry form.
- `styles.css` — responsive design.
- `script.js` — translations, language switch, comparison sliders, form preview messaging.
- `thank-you.html` — contact form success page.
- `pool-fallback.svg` — bundled illustration shown if remote stock photography is unavailable.

## Not included yet
An operational hosting account, an assigned domain, an email inbox for leads, real project photographs, privacy policy/legal review, and production submission testing. These require your business details and publishing service.
