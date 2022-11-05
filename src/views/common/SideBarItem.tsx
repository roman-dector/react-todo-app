import styles from './SideBarItem.module.css'

import { MoreHorizWithoutBg } from './Icons'

import { FC, ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemIcon } from './ItemIcon'

type SideBarItemPropsType = {
  path: string
  title: string
  color?: string
  Icon?: () => ReactElement
  amountOfTasks: number
  editable: boolean
}

export const SideBarItem: FC<SideBarItemPropsType> = props => {
  let color = props.color
  if (!color) {
    color = 'grey'
  }
  const [hover, setHover] = useState(false)

  return (
    <Link to={props.path} style={{ textDecoration: 'none' }}>
      <div
        className={styles['side-bar-item']}
        onMouseOver={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ItemIcon color={color} Icon={props.Icon} />
          <div className={styles['title']}>{props.title}</div>
        </div>
        <TasksCounter
          hover={hover}
          editable={props.editable}
          amountOfTasks={props.amountOfTasks}
        />
      </div>
    </Link>
  )
}

const TasksCounter: FC<{
  hover: boolean
  editable: boolean
  amountOfTasks: number
}> = props => {
  const Count = (
    <div className={styles['tasks-count']}>
      {props.amountOfTasks != 0 && props.amountOfTasks}
    </div>
  )
  return (
    <>
      {props.editable ? (
        props.hover ? (
          <div>
            <MoreHorizWithoutBg />
          </div>
        ) : (
          Count
        )
      ) : (
        Count
      )}
    </>
  )
}
