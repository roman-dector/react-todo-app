import styles from './Icons.module.css'

import {
  Edit,
  MoreHoriz,
  Tune,
  DragIndicator,
  SellOutlined,
  FlagRounded,
} from '@mui/icons-material'
import { FC } from 'react'

export const EditIcon = () => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <Edit />
  </div>
)

export const MoreHorizIcon = () => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <MoreHoriz />
  </div>
)

export const TuneIcon = () => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <Tune />
  </div>
)

export const DragPoinIcon = () => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <DragIndicator />
  </div>
)

type IconPropsType = {
  color?: string
  size: 'small' | 'big'
}

export const TagIcon: FC<IconPropsType> = ({
  size = 'small',
  ...args
}) => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <SellOutlined
      sx={{
        ...args,
        fontSize: size === 'big' ? '20px' : '12px',
        fontWeight: 600,
        transform: 'scale(-1, 1) rotate(-5deg)',
      }}
    />
  </div>
)

export const FlagIcon: FC<IconPropsType> = ({
  size = 'small',
  ...args
}) => (
  <div className={styles['icon-background'] + ' ' + styles['icon']}>
    <FlagRounded
      sx={{ ...args, fontSize: size === 'big' ? '20px' : '12px' }}
    />
  </div>
)
