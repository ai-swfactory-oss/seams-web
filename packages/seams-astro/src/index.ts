export interface AstroPage {
  readonly route: string
}

export interface Astro {
  readonly page: () => AstroPage
}

export const createAstro = (): Astro => ({
  page: () => ({ route: '/' }),
})
