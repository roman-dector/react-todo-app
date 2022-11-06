import { FC, ReactElement } from 'react'

export const ItemIcon: FC<{
  color: string
  Icon?: () => ReactElement
}> = props => {
  return (
    <>
      {props.Icon ? (
        props.Icon()
      ) : (
        <div
          style={{
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            margin: '7px',
            backgroundColor: props.color,
          }}
        />
      )}
    </>
  )
}
