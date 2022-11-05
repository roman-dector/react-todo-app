import { FC } from 'react'
import styles from './Button.module.css'

type onClickHandlerType = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>
) => void

export const CancelSubmitBar: FC<{
  onCanselHandler?: onClickHandlerType
  onSubmitHandler?: onClickHandlerType
}> = props => (
  <div
    className={styles['bottom-buttons'] + ' ' + styles['flex-end']}
  >
    <Button
      type={'button'}
      value={'Cancel'}
      onClickHandler={props.onCanselHandler}
    />
    <Button
      type={'submit'}
      value={'Save'}
      onClickHandler={props.onSubmitHandler}
    />
  </div>
)

export const Button: FC<{
  type?: string
  value?: string
  className?: string
  onClickHandler?: onClickHandlerType
}> = props => {
  return (
    <input
      className={
        styles['custom-button'] +
        ' ' +
        (props.type === 'submit' && styles['submit-button'])
      }
      type={props.type || 'button'}
      value={props.value}
      onClick={props.onClickHandler}
    />
  )
}
