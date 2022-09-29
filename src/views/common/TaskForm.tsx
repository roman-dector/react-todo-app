import styles from './TaskForm.module.css'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import { TaskType } from '../../dal/apiDataTypes'

export const TaskForm: FC<TaskType | undefined> = props => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: props?.title,
      description: props?.description,
      priority: props?.priority,
      labels: props?.labels,
    },
  })

  const onTextAreaInput = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    const calcHeight = (value: string) => {
      let numberOfLineBreaks = (value.match(/\n/g) || []).length
      // min-height + lines x line-height + padding + border
      let newHeight = 15 + numberOfLineBreaks * 15
      return newHeight
    }

    if (parseInt(e.currentTarget.style.height) >= 150) {
      e.currentTarget.style.overflow = 'auto'
    } else {
      e.currentTarget.style.overflow = 'hidden'
    }
    e.currentTarget.style.height =
      calcHeight(e.currentTarget.value) + 'px'
  }
  return (
    <form className={styles['task-form']}>
      <input
        className={styles['transparent'] + ' ' + styles['title']}
        {...register('title')}
        placeholder={'Task name'}
      />
      <textarea
        className={
          styles['transparent'] + ' ' + styles['description']
        }
        {...register('description')}
        rows={1}
        placeholder={'Description'}
        onInput={onTextAreaInput}
      />
      <select {...register('priority')}></select>
      <div className={styles['labels-list']}></div>
      <input type={'button'} value={'Cancel'} />
      <input type={'submit'} />
    </form>
  )
}
