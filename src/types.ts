export interface FocusSession {
  Id: string
  startedAt: number
  endedAt?: number
  duration: number
  sitesBlocked: number
  completed: boolean
}

export interface BlockedSite {
  Id: string
  url: string
  label: string
  enabled: boolean
}
