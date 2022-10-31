import styles from './SideBar.module.css'

import { FC } from 'react'
import { ProjectType } from '../dal/apiDataTypes'
import { ProjectsList } from './ProjectsList'
import { SideBarItem } from './common/SideBarItem'

import {
  InboxOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  GridViewOutlined,
  TaskAlt,
} from '@mui/icons-material'

type SideBarPropsType = {
  width: number
  projects: ProjectType[]
}

export const SideBar: FC<SideBarPropsType> = props => {
  return (
    <div
      className={styles['side-bar']}
      style={{ width: props.width }}
    >
      <div>
        <SideBarItem
          title={'Inbox'}
          Icon={() => <InboxOutlined sx={{ color: 'blue' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          title={'Today'}
          Icon={() => <TodayOutlined sx={{ color: 'green' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          title={'Upcoming'}
          Icon={() => (
            <CalendarMonthOutlined sx={{ color: 'purple' }} />
          )}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          title={'Filters & labels'}
          Icon={() => <GridViewOutlined sx={{ color: 'orange' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          title={'Completed'}
          Icon={() => <TaskAlt sx={{ color: 'green' }} />}
          amountOfTasks={0}
          editable={false}
        />
      </div>
      <ProjectsList projects={props.projects} />
    </div>
  )
}
