# seams-web

Seams for code running in the browser page: location, history, storage, cookies, Google Tag Manager and Astro. Each seam is a small SDK with a fake under `./testing`, so code that touches the page can be tested without one.

This repository holds only the guarded skeleton so far: `createWebPage()` returns a page whose `location()` is `about:blank`, `createGoogleTagManager()` one whose `events()` holds no events, and `createAstro()` one whose `page()` is the route `/`; each package's `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-web`: location, history, storage and cookies.
- `@ai-swfactory-oss/seams-google-tag-manager`: the Google Tag Manager data layer.
- `@ai-swfactory-oss/seams-astro`: Astro.

## Licence

MIT
