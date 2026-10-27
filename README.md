# Update Digital Marketing — Landing page

A responsive, build-free website based on the supplied Update Digital Marketing portfolio. All images and branding are stored locally. No framework, installation, API key, or paid service is required.

## Open locally
Open index.html in your browser. Keep the assets folder, styles.css and script.js next to it.

## Publish on GitHub Pages
1. Create a GitHub repository (public for free GitHub Pages hosting).
2. Upload the CONTENTS of this folder to the repository root. index.html should be at the root, not inside another folder.
3. In the repository, open Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select main and / (root), then Save.
6. GitHub will show your website URL on that page once deployment completes.

No build command is required. All paths are relative, so the page works on repository URLs as well as custom domains. GitHub Pages must be enabled; uploading files alone does not activate hosting.

## Files
- index.html: page structure and content
- styles.css: responsive layout and brand design tokens
- script.js: mobile navigation, portfolio filters and email enquiry preparation
- assets/: logo and project images extracted from the supplied portfolio
- .nojekyll: enables plain static file hosting

## Contact form
The form prepares an email through the visitor's configured email app. It does not send a message or store submissions. Visitors review and send the email themselves. A direct email link is also available. To collect submissions directly on the website, connect a form service or backend and replace the submit handler.

## Edit
Brand colors are at the top of styles.css. Change text in index.html. The destination email is in both index.html and script.js. Replace images in assets while retaining their filenames, or update the corresponding paths. No external fonts or image services are used.

## Content and assets
Company details, service categories, project names, performance claims, quotation, and source artwork come from the supplied Update-Portfolio.pdf. Website copy adapts that material. Portfolio results are historical examples, not guarantees. The official logo is supplied as assets/logo.svg, copied unchanged from Update Logo.svg. The main brand blue is #18467D. Only publish assets you are authorized to use.

## Accessibility and browser support
Includes keyboard navigation, visible focus states, a skip link, reduced-motion support, labeled form fields, image alternatives and accessible filter states. Designed for current desktop and mobile browsers.

## October 27 update: motion and Results & Insights
- Animated hero rings, entrance sequence, scroll reveals and hover transitions.
- Results counters animate once when scrolled into view.
- Pause/enable motion control in the hero; system reduced-motion preference is respected.
- New Results navigation link and results section using the supplied WhatsApp report screenshots.
- Report images open in a keyboard-accessible dialog. Close with the Close button, Escape, or backdrop.
- All results retain their individual reporting periods. ROAS has no visible period in its screenshot. Social 30-day snapshot has no visible year. Shopify sales are store totals, not advertising attribution.
- Analytics screenshots in assets/results are the supporting sources. Browser chrome was removed from desktop captures; metric values and graphs were not altered.
- No dependencies or build steps were added.

## Official branding correction
Official SVG logo is used in the header, footer and favicon. Main blue: #18467D. Supporting blue tints are used for contrast on dark backgrounds.

## Rounded identity update
Cards, project images, result panels and report dialogs use rounded corners. Buttons and form fields use coordinated smaller corner radii; filter and value chips retain their pill shape.

## Client logo showcase
Six supplied client logos link to the six Instagram profiles. Desktop: three columns and two rows; smaller screens adapt to two or one column. Hover and keyboard focus lift the card and zoom the logo; pressing gives a tap response. Eureka uses a blue logo panel to display its supplied white transparent logo.

Results report account selector and identifying content thumbnails are blurred in the distributed images. Original report images with identifying information are excluded from this website folder and final ZIP. Report previews and enlarged views use the same anonymized assets.
