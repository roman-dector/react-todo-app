import styles from './Icons.module.scss'

import {
  Edit,
  MoreHoriz,
  Tune,
  DragIndicator,
  SellOutlined,
  FlagRounded,
  Add,
  ExpandMore,
  ChevronLeft,
} from '@mui/icons-material'
import { FC } from 'react'

type optionsType = {
  bg: boolean
}

export const withIconStyle = (
  Component: FC,
  options: optionsType = { bg: true }
) => {
  const Icon = (props: any) => (
    <div
      className={
        (options.bg && styles['icon-background']) +
        ' ' +
        styles['icon']
      }
    >
      <Component {...props} />
    </div>
  )

  return Icon
}

export const EditIcon = withIconStyle(Edit)

export const MoreHorizIcon = withIconStyle(MoreHoriz)
export const MoreHorizWithoutBg = withIconStyle(MoreHoriz, {
  bg: false,
})

export const TuneIcon = withIconStyle(Tune)

export const DragPoinIcon = withIconStyle(DragIndicator)

export const AddButtonIcon = withIconStyle(Add)

export const ArrowBackIcon = withIconStyle(ChevronLeft)

export const ArrowDownIcon = withIconStyle(ExpandMore)

type IconPropsType = {
  color?: string
  size: 'small' | 'big'
  background?: boolean
}

export const TagIcon: FC<IconPropsType> = ({
  size = 'small',
  background = false,
  ...args
}) => (
  <div
    className={
      background
        ? styles['icon-background']
        : '' + ' ' + styles['icon']
    }
  >
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
  background = false,
  ...args
}) => (
  <div
    className={
      background
        ? styles['icon-background']
        : '' + ' ' + styles['icon']
    }
  >
    <FlagRounded
      sx={{ ...args, fontSize: size === 'big' ? '20px' : '12px' }}
    />
  </div>
)
