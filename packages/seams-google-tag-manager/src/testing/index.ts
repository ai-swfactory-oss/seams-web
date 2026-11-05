import type { DataLayerEvent, GoogleTagManager } from '../index'

export const createFakeGoogleTagManager = (events: readonly DataLayerEvent[] = []): GoogleTagManager => ({
  events: () => events,
})
