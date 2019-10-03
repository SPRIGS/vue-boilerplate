
# A checklist for all projects that are going live

This checklist is used whenever a project is going live at https://www.sprigs.eu

## 1. Browserstack tests
- [ ] Desktop: test on latest versions of Chrome, IE/Edge, Firefox, Safari
- [ ] Mobile: test on latest versions of Mobile Safari, Android

## 2. Front end checklist

### Assets
- [ ] Search sources for `http://`. Replace by `https://`
- [ ] Lint (s)css sources
- [ ] Webfonts: is the live domain configured in services like Typekit, Fonts.com etc.?
- [ ] Is the browserlist properly configured for autoprefixer and babel-preset-env?
- [ ] When using PurgeCSS: check if layout is preserved.

### Scripts
- [ ] Is `yarn.lock` present?
- [ ] Check JS lint errors. Remove all `console.log` lines in scripts
- [ ] Check for console errors

### Page weight
- [ ] Evaluate site speed using `PageSpeed Insights`
- [ ] Open Inspector network/timeline tab to identify heavy assets 
- [ ] Check if heavy assets are cached

### Audits
- [ ] Use the Chrome DevTools (in incognito mode) and perform a mobile audit (with throttling) to fix common problems.
- [ ] Repeat with a desktop audit.

## 3. Check content (with an open console)
- [ ] Are all strings / images present (and translated)?
- [ ] Does menu/sub-menu have a correct active state on every page?
- [ ] Are 404, 500 and 503 pages provided? Do they provide useful content like 'back to home', search or a navigation tree?
- [ ] Check all pages for n+1 problems

### Meta
- [ ] Check page titles / descriptions
- [ ] Test Facebook sharing. Provide og-tags if needed
- [ ] Does Favicon load? Pin the tab in Safari to check pinned icon

### Components
- [ ] Google Maps
    - [ ] API key needed/configured?
    - [ ] Check info windows
    - [ ] Prevent zoom out beyond 1x world
    - [ ] Try clicking on markers
- [ ] Forms: fill out with wrong/right values
- [ ] Video: check with sound on
- [ ] Try subscribing to a newsletter with incorrect & correct email (use correct mail twice to get 'already subscribed' message)
- [ ] Check layout of emails
- [ ] Check structured data for news, events, products,... https://search.google.com/structured-data/testing-tool/