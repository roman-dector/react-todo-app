import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

export const tasksListState = atom({
  key: 'TasksList', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
})
