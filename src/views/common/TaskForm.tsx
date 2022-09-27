import styles from './TaskForm.module.css'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import { TaskType } from '../../dal/apiDataTypes'

export const TaskForm: FC<TaskType> = props => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: props.title,
      description: props.description,
      priority: props.priority,
      labels: props.labels,
    },
  })
  return (
    <form>
      <input {...register('title')} />
      <textarea {...register('description')} />
      <select {...register('priority')}></select>
      <div className={styles['labels-list']}></div>
    </form>
  )
}
