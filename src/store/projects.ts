import {
  createStore,
  createEvent,
  createEffect,
} from 'effector-logger'

import {
  ProjectType,
  NewProjectInitialDataType,
} from '../dal/apiDataTypes'
import { projectAPI } from '../dal/todoAPI'

export const newProjectCreated = createEvent()

export const getProjectsFx = createEffect<void, ProjectType[], Error>(
  async () => {
    return await projectAPI.getProjects()
    // return [
    //   {
    //     id: 12,
    //     title: 'Project',
    //     color: { value: 'red', name: 'Red' },
    //     description: null,
    //     isArchived: false,
    //     amountOfTasks: 4,
    //   },
    // ]
  }
)

export const postNewProjectFx = createEffect<
  NewProjectInitialDataType,
  ProjectType[],
  Error
>(async initialProjectData => {
  return await projectAPI.addProject(initialProjectData)
})

export const $projects = createStore<ProjectType[]>([])
  .on(getProjectsFx.done, (_, { result }) => result)
  .on(postNewProjectFx.done, (_, { result }) => result)
