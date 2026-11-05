import type { WebLocation, WebPage } from '../index'

export const createFakeWebPage = (location: WebLocation = { href: 'about:blank' }): WebPage => ({
  location: () => location,
})
