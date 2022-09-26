import styles from './TaskLabel.module.css'

import { SellOutlined } from '@mui/icons-material'

import { FC } from 'react'

export const TaskLabel: FC<{ color: string; name: string }> =
  props => {
    return (
      <div data-testid={'TaskLabel-testID'} className={styles.label}>
        <SellOutlined
          sx={{
            color: props.color,
            fontSize: '12px',
            fontWeight: 600,
            transform: 'scale(-1, 1) rotate(-5deg)',
          }}
        />
        <span style={{ color: props.color }}>{props.name}</span>
      </div>
    )
  }
