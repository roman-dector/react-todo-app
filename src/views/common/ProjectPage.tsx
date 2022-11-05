import styles from './ProjectPage.module.css'

import { FC, useEffect } from 'react'
import { TaskType } from '../../dal/apiDataTypes'

import { TuneIcon, MoreHorizIcon } from './Icons'

import { TaskCard } from './TaskCard'
import { AddTask } from './AddTask'
import { useParams } from 'react-router-dom'

import { projectAPI, taskAPI } from '../../dal/todoAPI'

export const ProjectPage: FC = props => {
  let title: string
  let tasks: TaskType[] = []

  const { mainFilter, projectId } = useParams()

  useEffect(() => {
    if (!!projectId) {
      projectAPI.getProjectById(Number(projectId)).then(p => {
        title = p.title
      })
    }

    taskAPI.getTasks(Number(projectId)).then(tasks => {
      tasks = tasks
    })
  }, [projectId])

  if (!!mainFilter) {
    switch (mainFilter) {
      case 'inbox':
        title = 'Inbox'
        break
      case 'today':
        title = 'Today'
        break
      case 'upcoming':
        title = 'Upcoming'
        break
      case 'filters-labels':
        title = 'Filters&Labels'
        break
      case 'completed':
        title = 'Completed'
        break
    }
  }

  return (
    <div className={styles['project-page']} style={{ width: '100%' }}>
      <PageHeader title={title} />
      <TasksList tasks={tasks} />
      <AddTask />
    </div>
  )
}

const TasksList: FC<{ tasks: TaskType[] }> = props => {
  return (
    <div>
      {props.tasks.map(t => (
        <TaskCard key={t.id} {...t} />
      ))}
    </div>
  )
}

const PageHeader: FC<{ title: string }> = props => {
  return (
    <div className={styles['page-header-container']}>
      <div className={styles['page-header']}>
        <PageTitle value={props.title} />
        <DisplayMenu />
      </div>
    </div>
  )
}

const PageTitle: FC<{ value: string }> = props => {
  return <div className={styles['page-title']}>{props.value}</div>
}

const DisplayMenu: FC<{}> = props => {
  return (
    <div className={styles['display-menu']}>
      <TuneIcon />
      <MoreHorizIcon />
    </div>
  )
}
