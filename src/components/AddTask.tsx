import styles from './AddTask.module.css'

import { FC, useState } from 'react'

import { Add, AddCircleOutlined } from '@mui/icons-material'

export const AddTask: FC<{}> = props => {
  const [hover, setHover] = useState(false)

  return (
    <div className={styles['add-task-container']}>
      <div
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        className={styles['add-task']}
      >
        {hover ? (
          <AddCircleOutlined
            sx={{ color: 'var(--accent-red-color)' }}
          />
        ) : (
          <Add sx={{ color: 'var(--accent-red-color)' }} />
        )}

        <span>Add task</span>
      </div>
    </div>
  )
}
