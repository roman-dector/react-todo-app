import styles from './TaskForm.module.css'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import { TaskType } from '../../dal/apiDataTypes'
import { TagIcon, FlagIcon } from './Icons'
import { getPriorityColor } from './utils'

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
    <form>
      <div className={styles['task-form-body']}>
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
        <div className={styles['labels-list']}>
          {props.labels &&
            props.labels.map(l => (
              <LabelItem key={l.id} name={l.name} />
            ))}
        </div>
        <div className={styles['flex-end']}>
          <TagIcon size={'big'} />
          <FlagIcon
            color={getPriorityColor(props.priority)}
            size={'big'}
          />
        </div>
      </div>
      <div
        className={
          styles['bottom-buttons'] + ' ' + styles['flex-end']
        }
      >
        <Button type={'button'} value={'Cancel'} />
        <Button
          className={styles['save-button']}
          type={'submit'}
          value={'Save'}
        />
      </div>
    </form>
  )
}

const LabelItem: FC<{ name: string }> = props => {
  return <div className={styles['label-item']}>{props.name}</div>
}

const Button: FC<{
  type?: string
  value?: string
  className?: string
}> = props => {
  return (
    <input
      className={styles['custom-button'] + ' ' + props.className}
      type={props.type || 'button'}
      value={props.value}
    />
  )
}
