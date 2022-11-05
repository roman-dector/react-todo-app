import {
  createStore,
  createEvent,
  createEffect,
  forward,
} from 'effector-logger'

import { getProjectsFx } from './projects'

export const initializeAppFx = createEffect<void, boolean, Error>(
  async () => {
    return Promise.all([getProjectsFx()]).then(() => {
      return true
    })
  }
)

export const $appStatus = createStore(false).on(
  initializeAppFx.done,
  (_, { result }) => {
    return result
  }
)
