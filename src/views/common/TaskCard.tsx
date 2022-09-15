import styles from './TaskCard.module.css'

import { FC, useState } from 'react'

import { Checkbox } from '@mui/material'
import {
  Circle,
  CheckCircle,
  CircleOutlined,
} from '@mui/icons-material'

import { TaskPrioritiesType } from '../../dal/apiDataTypes'

type TaskCardPropsType = {
  title: string
  description: string | null
  isCompleted: boolean
  priority: TaskPrioritiesType
  labels: string[] | []
}

export const TaskCard: FC<TaskCardPropsType> = props => {
  return (
    <div className={styles['task-card']}>
      <TaskCheckbox priority={props.priority} />
      <div>
        <div className={styles['task-card-title']}>{props.title}</div>

        {props.description === null ? null : (
          <div>{props.description}</div>
        )}

        {props.labels.length === 0
          ? null
          : props.labels.map(label => <TaskLabel label={label} />)}
      </div>
    </div>
  )
}

const TaskLabel: FC<{ label: string }> = props => {
  return <span>{props.label}</span>
}

const TaskCheckbox: FC<{
  className?: string
  priority: TaskPrioritiesType
}> = props => {
  const [checked, setChecked] = useState<boolean>(false)

  let checkboxColor
  switch (props.priority) {
    case 2:
      checkboxColor = 'blue'
      break
    case 3:
      checkboxColor = 'yellow'
      break
    case 4:
      checkboxColor = 'red'
      break
    default:
      checkboxColor = 'grey'
      break
  }

  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setChecked(!checked)
      }}
      sx={{
        padding: 0,
        color: checkboxColor,
        '&.Mui-checked': {
          color: checkboxColor,
        },
      }}
      icon={
        <div
          style={{
            width: '24px',
            height: '24px',
            position: 'relative',
          }}
        >
          <Circle
            sx={{
              color: checkboxColor,
              opacity: 0.15,
              position: 'absolute',
              margin: 'auto',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          <CircleOutlined
            sx={{
              position: 'absolute',
              margin: 'auto',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </div>
      }
      checkedIcon={<CheckCircle />}
    />
  )
}
