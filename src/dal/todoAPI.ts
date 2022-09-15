import localforage from 'localforage'
import { TaskType, ProjectType } from './apiDataTypes'

export const taskAPI = {
  getTasks: async () => {
    return await localforage.getItem<TaskType[]>('tasks')
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

  moveTaskToProject: async (taskId: number, projectId: number) => {
    let projects = await localforage.getItem<ProjectType[]>(
      'projects'
    )
    projects.map(p =>
      p.id === projectId ? p.childrenTasksIds.push(taskId) : p
    )
  },
}

export const projectAPI = {
  getProjects: async () => {
    return await localforage.getItem<ProjectType[]>('projects')
  },

  createProject: async (project: ProjectType) => {
    let projects = await localforage.getItem<ProjectType[]>(
      'projects'
    )
    return await localforage.setItem('projects', [
      ...projects,
      project,
    ])
  },

  // deleteProject: async (projectId: number) => {
  //   let projects = await localforage.getItem<ProjectType[]>(
  //     'projects'
  //   )
  //   await localforage.setItem('projects', [...projects, project])
  // },
}
