import styles from './Icons.module.css'

import {
  Edit,
  MoreHoriz,
  Tune,
  DragIndicator,
} from '@mui/icons-material'

export const EditIcon = () => (
  <div className={styles['icon-background']}>
    <Edit />
  </div>
)

export const MoreHorizIcon = () => (
  <div className={styles['icon-background']}>
    <MoreHoriz />
  </div>
)

export const TuneIcon = () => (
  <div className={styles['icon-background']}>
    <Tune />
  </div>
)

export const DragPoinIcon = () => (
  <div className={styles['icon-background']}>
    <DragIndicator />
  </div>
)
