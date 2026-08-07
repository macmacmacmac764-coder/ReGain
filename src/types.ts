export interface FocusSession {
  id: string
  startedAt: number
  endedAt?: number
  duration: number
  sitesBlocked: number
  completed: boolean
}

export interface BlockedSite {
  id: string
  url: string
  label: string
  enabled: boolean
}
