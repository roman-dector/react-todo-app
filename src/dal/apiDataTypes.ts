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

export type ColorType = { value: string; name: string }

export type NewProjectInitialDataType = {
  title: string
  color: ColorType
}

export type ProjectType = {
  id: number
  title: string
  color: ColorType
  isArchived: boolean
  amountOfTasks: number
}
