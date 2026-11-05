import { describe, expect, it } from 'vitest'

import { createGoogleTagManager } from '../src/index'
import { createFakeGoogleTagManager } from '../src/testing/index'

describe('createGoogleTagManager', () => {
  it('holds no data layer events while the seam is a skeleton', () => {
    expect(createGoogleTagManager().events()).toEqual([])
  })
})

describe('createFakeGoogleTagManager', () => {
  it('holds no events by default', () => {
    expect(createFakeGoogleTagManager().events()).toEqual([])
  })

  it('holds the events it was given', () => {
    const events = [{ event: 'page_view' }]
    expect(createFakeGoogleTagManager(events).events()).toBe(events)
  })
})
