import styles from './Errors.module.css'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'

type FieldErrorMessagePropsType = {
  error?: FieldError
  touched?: boolean
  style?: Object
}

export const FieldErrorMessage: FC<FieldErrorMessagePropsType> =
  props => {
    if (props.error) {
      let errorMessage = props.error.message
        ?.split(' ')
        .splice(1)
        .join(' ')
      return (
        <div
          className={styles['field-error']}
          // style={props.style ?? null}
        >
          {errorMessage}
        </div>
      )
    }

    return null
  }
