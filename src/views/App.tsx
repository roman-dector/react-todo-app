import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

import { Inbox } from './Inbox'
import { Header } from './Header'
import { NotFound } from './NotFound'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

        <Router>
          <Routes>
            <Route
              path='/'
              element={<Navigate replace to='/inbox' />}
            />

            <Route path='/inbox' element={<Inbox />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}
