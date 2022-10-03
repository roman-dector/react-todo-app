import styles from './TaskLabel.module.css'

import { FC } from 'react'

import { TagIcon } from './Icons'

export const TaskLabel: FC<{ color: string; name: string }> =
  props => {
    return (
      <div data-testid={'TaskLabel-testID'} className={styles.label}>
        <TagIcon color={props.color} size={'small'} />
        <span style={{ color: props.color }}>{props.name}</span>
      </div>
    )
  }
