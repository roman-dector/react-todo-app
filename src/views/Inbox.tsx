import { useState } from 'react'
import { TaskCard } from './common/TaskCard'

export const Inbox = () => {
  const [taskInputValue, setTaskInputValue] = useState('')
  const [tasksList, setTasksList] = useState<{ title: string }[]>([
    { title: 'Buy milk' },
    { title: 'Buy her' },
    { title: 'Buy eggs' },
  ])

  return (
    <div className=''>
      <form
        onSubmit={e => {
          setTasksList([
            ...tasksList,
            {
              title:
                e.currentTarget.firstElementChild.getAttribute(
                  'value'
                ),
            },
          ])
          setTaskInputValue('')
        }}
        style={{ borderBottom: 'solid 2px grey' }}
      >
        <input
          className='bg-blue-400'
          value={taskInputValue}
          onChange={e => setTaskInputValue(e.currentTarget.value)}
        />
        <input className='bg-red-400' type={'submit'} />
      </form>

      <div className='flex flex-col gap-10'>
        {tasksList.map((t, i) => (
          <TaskCard
            key={i}
            title={t.title}
            description={'some text here'}
            labels={[]}
            isCompleted={false}
            priority={1}
          />
        ))}
      </div>
    </div>
  )
}
