import styles from './ProjectsList.module.css'

import { Dispatch, FC, SetStateAction, useState } from 'react'
import { createPortal } from 'react-dom'

import {
  AddButtonIcon,
  ArrowBackIcon,
  ArrowDownIcon,
} from '../../components/Icons'
import { ProjectType } from '../../dal/apiDataTypes'
import { SideBarItem } from '../../components/SideBarItem'
import { AddProjectPopUp } from './AddProjectPopUp'

type ProjectsListPropsType = {
  projects: ProjectType[]
}

export const ProjectsList: FC<ProjectsListPropsType> = props => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles['projects-list']}>
      <div className={styles['head']}>
        <span>Projects</span>
        <Controls
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
      {isExpanded && <List projects={props.projects} />}
    </div>
  )
}

const List: FC<{ projects: Array<ProjectType> }> = props => {
  return (
    <div>
      {props.projects.map(p => (
        <SideBarItem
          path={`/project/${p.id}`}
          key={p.id}
          title={p.title}
          color={p.color.value}
          amountOfTasks={p.amountOfTasks}
          editable={true}
        />
      ))}
    </div>
  )
}

type ControlsPropsType = {
  isExpanded: boolean
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}

const Controls: FC<ControlsPropsType> = props => {
  const [popupActive, setPopupActive] = useState(false)

  return (
    <div className={styles['controls']}>
      <div
        onClick={() => {
          setPopupActive(true)
        }}
      >
        <AddButtonIcon />
        {popupActive &&
          createPortal(
            <AddProjectPopUp
              closePopUp={() => {
                setPopupActive(false)
              }}
            />,
            document.getElementById('root')
          )}
      </div>
      <div
        onClick={() => {
          props.setIsExpanded(!props.isExpanded)
        }}
      >
        {props.isExpanded ? <ArrowDownIcon /> : <ArrowBackIcon />}
      </div>
    </div>
  )
}
