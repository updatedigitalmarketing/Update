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
Company details, service categories, project names, performance claims, quotation, and source artwork come from the supplied Update-Portfolio.pdf. Website copy adapts that material. Portfolio results are historical examples, not guarantees. The logo is a raster extraction; replace assets/logo.png with an official transparent export for maximum sharpness if available. Only publish assets you are authorized to use.

## Accessibility and browser support
Includes keyboard navigation, visible focus states, a skip link, reduced-motion support, labeled form fields, image alternatives and accessible filter states. Designed for current desktop and mobile browsers.
