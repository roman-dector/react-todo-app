import styles from './ListItem.module.css'

import { MoreHorizWithoutBg } from './Icons'

import { FC, ReactElement, useState } from 'react'
import { ItemIcon } from './ItemIcon'

export type ListItemPropsType = {
  title: string
  color?: string
  Icon?: () => ReactElement
  amountOfTasks?: number
  editable: boolean
}

export const ListItem: FC<ListItemPropsType> = props => {
  let color = props.color
  if (!color) {
    color = 'grey'
  }
  const [hover, setHover] = useState(false)

  return (
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
