import { describe, expect, it } from 'vitest'

import { createAstro } from '../src/index'
import { createFakeAstro } from '../src/testing/index'

describe('createAstro', () => {
  it('reads the root page while the seam is a skeleton', () => {
    expect(createAstro().page()).toEqual({ route: '/' })
  })
})

describe('createFakeAstro', () => {
  it('reads the root page by default', () => {
    expect(createFakeAstro().page()).toEqual({ route: '/' })
  })

  it('reads the page it was given', () => {
    const page = { route: '/about' }
    expect(createFakeAstro(page).page()).toBe(page)
  })
})
