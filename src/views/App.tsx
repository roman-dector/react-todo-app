import styles from './App.module.css'

import { useEffect } from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { useStore } from 'effector-react'
import { $appStatus, initializeAppFx } from '../store/app'

import { Header } from './Header/Header'
import { SideBar } from './SideBar'
import { ProjectPage } from './common/ProjectPage'

export const App = () => {
  const appStatus = useStore($appStatus)

  useEffect(() => {
    initializeAppFx()
  }, [])

  if (!appStatus) return <div />

  return (
    <Router>
      <div className={styles['app']}>
        <Header />
        <div className={styles['app-body']}>
          <SideBar width={400} />

          <Routes>
            <Route
              path={'/'}
              element={<Navigate replace to={'/inbox'} />}
            />

            <Route path={'/:mainFilter'} element={<ProjectPage />} />
            <Route path={'/project'}>
              <Route path={':projectId'} element={<ProjectPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}
