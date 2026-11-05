export interface WebLocation {
  readonly href: string
}

export interface WebPage {
  readonly location: () => WebLocation
}

export const createWebPage = (): WebPage => ({
  location: () => ({ href: 'about:blank' }),
})
