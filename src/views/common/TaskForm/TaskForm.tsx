import styles from './TaskForm.module.css'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import { TaskType } from '../../../dal/apiDataTypes'
import { TagIcon } from '../Icons'
import { PriorityFlag } from './PriorityFlag'
import { Button, CancelSubmitBar } from '../Button'

export const TaskForm: FC<TaskType | undefined> = props => {
  const [priority, setPriority] = useState<1 | 2 | 3 | 4>(
    props.priority
  )

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
          placeholder={'Task name'}
        />
        <textarea
          className={
            styles['transparent'] + ' ' + styles['description']
          }
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
          <TagIcon size={'big'} background={true} />
          <PriorityFlag
            priority={priority}
            setPriority={setPriority}
          />
        </div>
        <div className={styles['footer']}>
          <CancelSubmitBar />
        </div>
      </div>
    </form>
  )
}

const LabelItem: FC<{ name: string }> = props => {
  return <div className={styles['label-item']}>{props.name}</div>
}
