import styles from './Header.module.css'

import {
  Menu,
  HomeOutlined,
  HelpOutline,
  NotificationsOutlined,
  Add,
} from '@mui/icons-material'

import { withIconStyle } from '../../components/Icons'
import { Search } from './Search'
import { FC, ReactComponentElement, ReactElement } from 'react'

export const Header = () => {
  return (
    <div className={styles['header']}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '25px',
          gap: '10px',
        }}
      >
        <Burger />
        <HomeButton />
        <Search />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '25px',
          gap: '15px',
        }}
      >
        <AddTaskButton />
        <HelpButton />
        <NotificationsButton />

        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '14px',
            backgroundColor: 'black',
          }}
        />
      </div>
    </div>
  )
}

const makeHeaderButton = (Component: FC) =>
  withIconStyle(Component, {
    bg: true,
    bgColor: '#ffffff43',
    fontSize: 'inherit',
    blink: false,
    padding: '4px',
  })

const Burger = makeHeaderButton(Menu)
const HomeButton = makeHeaderButton(HomeOutlined)

const AddTaskButton = makeHeaderButton(Add)
const HelpButton = makeHeaderButton(HelpOutline)
const NotificationsButton = makeHeaderButton(NotificationsOutlined)
