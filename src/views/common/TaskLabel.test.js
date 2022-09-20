import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { TaskLabel } from './TaskLabel'

test('TaskLabel displays proper name', () => {
  const LABEL_NAME = 'ToDo'
  const LABEL_COLOR = 'red'

  const { getByText } = render(
    <TaskLabel name={LABEL_NAME} color={LABEL_COLOR} />
  )

  expect(getByText(LABEL_NAME)).toBeInTheDocument()
})
