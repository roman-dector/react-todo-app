import styles from './PriorityFlag.module.css'

import { FC, useState, Dispatch, SetStateAction } from 'react'
import { FlagIcon } from '../Icons'

import { getPriorityColor } from '../utils'

export const PriorityFlag: FC<{
  priority: number
  setPriority: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}> = props => {
  const [active, setActive] = useState(false)

  const onClickFlagPriority = (priority: 1 | 2 | 3 | 4) => {
    props.setPriority(priority)
    setActive(false)
  }

  return (
    <div className={styles['container']}>
      <div onClick={() => setActive(!active)}>
        <FlagIcon
          color={getPriorityColor(props.priority)}
          size={'big'}
        />
      </div>
      <div style={active ? {} : { display: 'none' }}>
        <div className={styles['popup']}>
          <span onClick={() => onClickFlagPriority(1)}>
            <FlagIcon color={getPriorityColor(1)} size={'big'} />
          </span>
          <span onClick={() => onClickFlagPriority(2)}>
            <FlagIcon color={getPriorityColor(2)} size={'big'} />
          </span>
          <span onClick={() => onClickFlagPriority(3)}>
            <FlagIcon color={getPriorityColor(3)} size={'big'} />
          </span>
          <span onClick={() => onClickFlagPriority(4)}>
            <FlagIcon color={getPriorityColor(4)} size={'big'} />
          </span>
        </div>
      </div>
    </div>
  )
}
