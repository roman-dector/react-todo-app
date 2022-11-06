import styles from './MenuList.module.css'

import { FC } from 'react'
import { Delete } from '@mui/icons-material'

import { SideBarItem } from './SideBarItem'

export const EditMenuPopUp: FC = () => {
  return <div></div>
}

export const MenuList: FC = () => {
  return (
    <div className={styles['menu-list']}>
      {/* <SideBarItem
        title={'Delete project'}
        editable={false}
        Icon={() => <Delete />}
      /> */}
    </div>
  )
}
