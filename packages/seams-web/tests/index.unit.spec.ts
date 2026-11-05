import { describe, expect, it } from 'vitest'

import { createWebPage } from '../src/index'
import { createFakeWebPage } from '../src/testing/index'

describe('createWebPage', () => {
  it('reads a blank location while the seam is a skeleton', () => {
    expect(createWebPage().location()).toEqual({ href: 'about:blank' })
  })
})

describe('createFakeWebPage', () => {
  it('reads a blank location by default', () => {
    expect(createFakeWebPage().location()).toEqual({ href: 'about:blank' })
  })

  it('reads the location it was given', () => {
    const location = { href: 'https://example.com/path' }
    expect(createFakeWebPage(location).location()).toBe(location)
  })
})
