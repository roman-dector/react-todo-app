export type TaskPrioritiesType = 1 | 2 | 3 | 4

export type TaskType = {
  id: number
  projectId: number | null

  title: string
  description: string | null
  isCompleted: boolean
  isArchived: boolean
  priority: TaskPrioritiesType

  labels: LabelType[]
}

export type LabelType = {
  id: number
  name: string
  color: string
}

export type ProjectType = {
  id: number
  title: string
  color: string
  isArchived: boolean
  amountOfTasks: number
}
