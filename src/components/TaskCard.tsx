import styles from './TaskCard.module.css'

import { FC, useState } from 'react'

import { Checkbox } from '@mui/material'
import {
  Circle,
  CheckCircle,
  CircleOutlined,
} from '@mui/icons-material'

import { getPriorityColor } from './utils'

import { EditIcon, MoreHorizIcon, DragPoinIcon } from './Icons'

import { TaskPrioritiesType } from '../dal/apiDataTypes'
import { TaskLabel } from './TaskLabel'
import { TaskType } from '../dal/apiDataTypes'

export const TaskCard: FC<TaskType> = props => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={styles['task-card']}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <div>{hover ? <DragPoinIcon /> : null}</div>

      <div className={styles['task-body']}>
        <div className={styles['checkbox-container']}>
          <TaskCheckbox priority={props.priority} />
        </div>

        <div className={styles['title']}>{props.title}</div>

        <div className={styles['description']}>
          {props.description}
        </div>

        <div className={styles['labels-row']}>
          {props.labels.map(label => (
            <TaskLabel
              key={label.id}
              color={label.color}
              name={label.name}
            />
          ))}
        </div>
        <div>{hover ? <TaskEditMenu /> : null}</div>
      </div>
    </div>
  )
}

const TaskEditMenu: FC<{}> = props => {
  return (
    <div className={styles['task-edit-menu']}>
      <EditIcon />
      <MoreHorizIcon />
    </div>
  )
}

const TaskCheckbox: FC<{
  className?: string
  priority: TaskPrioritiesType
}> = props => {
  const [checked, setChecked] = useState<boolean>(false)

  let checkboxColor = getPriorityColor(props.priority)

  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setChecked(!checked)
      }}
      sx={{
        width: '24px',
        height: '24px',
        padding: 0,
        color: checkboxColor,
        '&.Mui-checked': {
          color: checkboxColor,
        },
      }}
      icon={<CheckboxUncheckedIcon sxColor={checkboxColor} />}
      checkedIcon={<CheckCircle sx={{ color: checkboxColor }} />}
    />
  )
}

const CheckboxUncheckedIcon: FC<{ sxColor: string }> = props => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <Circle
        sx={{
          color: props.sxColor,
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
  )
}
