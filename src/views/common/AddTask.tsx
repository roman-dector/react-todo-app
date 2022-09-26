import styles from './AddTask.module.css'

import { FC, useState } from 'react'

import { Add, AddCircleOutlined } from '@mui/icons-material'

export const AddTask: FC<{}> = props => {
  const [hover, setHover] = useState(false)

  return (
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
        <AddCircleOutlined sx={{ color: '#a71717' }} />
      ) : (
        <Add sx={{ color: '#a71717' }} />
      )}

      <span>Add task</span>
    </div>
  )
}
