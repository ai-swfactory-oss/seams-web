# seams-web

Seams for code running in the browser page: location, history, storage, cookies, Google Tag Manager and Astro. Each seam is a small SDK with a fake under `./testing`, so code that touches the page can be tested without one.

The code arrives by migration from the private monorepo `ai-swfactory/seams`; for now each package is a skeleton.

## Packages

- `@ai-swfactory-oss/seams-web`: location, history, storage and cookies.
- `@ai-swfactory-oss/seams-google-tag-manager`: the Google Tag Manager data layer.
- `@ai-swfactory-oss/seams-astro`: Astro.

## Licence

MIT
