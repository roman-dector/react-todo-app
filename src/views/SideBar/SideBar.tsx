import styles from './SideBar.module.css'

import { FC } from 'react'
import { ProjectsList } from './ProjectsList'
import { SideBarItem } from '../../components/SideBarItem'

import {
  InboxOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  GridViewOutlined,
  TaskAlt,
} from '@mui/icons-material'

import { $projects } from '../../store/projects'
import { useStore } from 'effector-react'

type SideBarPropsType = {
  width: number
}

export const SideBar: FC<SideBarPropsType> = props => {
  const projects = useStore($projects)

  return (
    <div
      className={styles['side-bar']}
      style={{ width: props.width }}
    >
      <div>
        <SideBarItem
          path={'/inbox'}
          title={'Inbox'}
          Icon={() => <InboxOutlined sx={{ color: 'blue' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          path={'/today'}
          title={'Today'}
          Icon={() => <TodayOutlined sx={{ color: 'green' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          path={'/upcoming'}
          title={'Upcoming'}
          Icon={() => (
            <CalendarMonthOutlined sx={{ color: 'purple' }} />
          )}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          path={'/filters-labels'}
          title={'Filters & labels'}
          Icon={() => <GridViewOutlined sx={{ color: 'orange' }} />}
          amountOfTasks={0}
          editable={false}
        />
        <SideBarItem
          path={'/completed'}
          title={'Completed'}
          Icon={() => <TaskAlt sx={{ color: 'green' }} />}
          amountOfTasks={0}
          editable={false}
        />
      </div>
      <ProjectsList projects={projects} />
    </div>
  )
}
