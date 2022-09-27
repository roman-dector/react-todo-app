import styles from './ProjectPage.module.css'

import { FC } from 'react'
import { TaskType } from '../../dal/apiDataTypes'

import { TuneIcon, MoreHorizIcon } from './Icons'

import { TaskCard } from './TaskCard'
import { AddTask } from './AddTask'

type ProjectPagePropsType = {
  title: string
  tasks: TaskType[]
}

export const ProjectPage: FC<ProjectPagePropsType> = props => {
  return (
    <div>
      <PageHeader title={props.title} />
      <TasksList tasks={props.tasks} />
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
