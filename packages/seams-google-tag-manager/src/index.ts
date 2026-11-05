export interface DataLayerEvent {
  readonly event: string
}

export interface GoogleTagManager {
  readonly events: () => readonly DataLayerEvent[]
}

export const createGoogleTagManager = (): GoogleTagManager => ({
  events: () => [],
})
