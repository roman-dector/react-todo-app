export type TaskPrioritiesType = 1 | 2 | 3 | 4

export type TaskType = {
  id: number
  project_id: number | null

  title: string
  description: string | null
  is_completed: boolean
  is_archived: boolean
  priority: TaskPrioritiesType

  labels: string[]
  // order: number
}

export type ProjectType = {
  id: number
  title: string
  description: string | null
  is_archived: boolean
  childrenTasksIds: number[]
}
