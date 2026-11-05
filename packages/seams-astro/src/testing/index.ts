import type { Astro, AstroPage } from '../index'

export const createFakeAstro = (page: AstroPage = { route: '/' }): Astro => ({
  page: () => page,
})
