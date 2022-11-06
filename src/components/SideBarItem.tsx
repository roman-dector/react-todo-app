import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemPropsType } from './ListItem'

type SideBarItemPropsType = { path: string } & ListItemPropsType

export const SideBarItem: FC<SideBarItemPropsType> = ({
  path,
  ...props
}) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <ListItem {...props} />
    </Link>
  )
}
