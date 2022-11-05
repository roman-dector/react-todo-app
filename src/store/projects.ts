import {
  createStore,
  createEvent,
  createEffect,
} from 'effector-logger'

import { ProjectType } from '../dal/apiDataTypes'
import { projectAPI } from '../dal/todoAPI'

export const newProjectCreated = createEvent()

export const getProjectsFx = createEffect<void, ProjectType[], Error>(
  async () => {
    await projectAPI.getProjects()
    console.log($projects.getState())
    return [
      {
        id: 12,
        title: 'Project',
        color: 'red',
        description: null,
        isArchived: false,
        amountOfTasks: 4,
      },
    ]
  }
)

export const postNewProjectFx = createEffect<
  ProjectType,
  ProjectType[],
  Error
>(async project => {
  return await projectAPI.addProject(project)
})

export const $projects = createStore<ProjectType[]>([])
  .on(getProjectsFx.done, (_, { result }) => result)
  .on(postNewProjectFx.done, (_, { result }) => result)
