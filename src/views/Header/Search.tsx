import { useState } from 'react'
import styles from './Search.module.scss'

import { Search as SearchIcon } from '@mui/icons-material'
import { withIconStyle } from '../common/Icons'

export const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  return (
    <div className={styles['search']}>
      <Icon />
      <input
        type='text'
        value={searchPhrase}
        placeholder={'Search'}
        onChange={e => {
          setSearchPhrase(e.target.value)
        }}
      />
    </div>
  )
}

const Icon = withIconStyle(SearchIcon, {
  bg: false,
  blink: false,
  fontSize: '24px',
})
