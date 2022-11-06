import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { TaskLabel } from './TaskLabel'

describe('TaskLabel', () => {
  const TEST_ID = 'TaskLabel-testID'
  const LABEL_NAME = 'ToDo'
  const LABEL_COLOR = 'red'
  let elem

  beforeAll(() => {
    const { getByTestId } = render(
      <TaskLabel name={LABEL_NAME} color={LABEL_COLOR} />
    )
    elem = getByTestId(TEST_ID)
    expect(elem).toBeInTheDocument()
  })

  test('Displays proper name', () => {
    expect(elem).toHaveTextContent(LABEL_NAME)
  })

  test('Text have specified color', () => {
    expect(elem.childNodes[1]).toHaveStyle('color: red')
  })

  test('Tag item have specified color', () => {
    expect(elem.childNodes[0]).toHaveStyle('color: red')
  })
})
