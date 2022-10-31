import styles from './SideBarItem.module.css'

import { MoreHorizWithoutBg } from './Icons'

import { FC, ReactElement, useState } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

type MUIIconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string
}

type SideBarItemPropsType = {
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

const ItemIcon: FC<{ color: string; Icon: () => ReactElement }> =
  props => {
    return (
      <>
        {props.Icon ? (
          props.Icon()
        ) : (
          <div
            className={styles['color-circle']}
            style={{ backgroundColor: props.color }}
          />
        )}
      </>
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
