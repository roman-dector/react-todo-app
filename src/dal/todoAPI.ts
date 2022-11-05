import localforage from 'localforage'
import {
  TaskType,
  ProjectType,
  NewProjectInitialDataType,
} from './apiDataTypes'

export const taskAPI = {
  getTasks: async (projectId: number) => {
    const tasks = await localforage.getItem<TaskType[]>('tasks')

    if (!!tasks) return tasks.filter(p => p.projectId === projectId)

    return []
  },

  createTask: async (task: TaskType) => {
    let tasks = await localforage.getItem<TaskType[]>('tasks')
    return await localforage.setItem('tasks', [...tasks, task])
  },

  deleteTask: async (taskId: number) => {
    let tasks = await localforage.getItem<TaskType[]>('tasks')
    await localforage.setItem(
      'tasks',
      tasks.filter(t => t.id !== taskId)
    )
  },

  // moveTaskToProject: async (taskId: number, projectId: number) => {
  //   let projects = await localforage.getItem<ProjectType[]>(
  //     'projects'
  //   )
  //   projects.map(p =>
  //     p.id === projectId ? p.childrenTasksIds.push(taskId) : p
  //   )
  // },
}

export const projectAPI = {
  getProjects: async () => {
    return (
      (await localforage.getItem<ProjectType[]>('projects')) || []
    )
  },

  addProject: async (
    initialProjectData: NewProjectInitialDataType
  ) => {
    let projects =
      (await localforage.getItem<ProjectType[]>('projects')) || []

    let newProject = {
      id: Date.now(),
      title: initialProjectData.title,
      color: initialProjectData.color,
      isArchived: false,
      amountOfTasks: 0,
    }

    return await localforage.setItem('projects', [
      ...projects,
      newProject,
    ])
  },

  getProjectById: async (projectId: number) => {
    const projects = await localforage.getItem<ProjectType[]>(
      'projects'
    )

    if (!!projects) return projects.filter(p => p.id === projectId)[0]

    return {} as ProjectType
  },

  // deleteProject: async (projectId: number) => {
  //   let projects = await localforage.getItem<ProjectType[]>(
  //     'projects'
  //   )
  //   await localforage.setItem('projects', [...projects, project])
  // },
}
