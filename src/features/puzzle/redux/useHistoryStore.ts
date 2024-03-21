import { useDispatch, useSelector } from 'react-redux'
import { _addChecked, _addSolved } from './historySlice'

import store from '../../../store'

export const useHistoryStore = () => {
  const dispatch = useDispatch()

  const checked = useSelector(
    (state: ReturnType<typeof store.getState>) => state.history.checked,
  )

  const solved = useSelector(
    (state: ReturnType<typeof store.getState>) => state.history.solved,
  )

  const addChecked = (id: string) => {
    dispatch(_addChecked(id))
  }

  const addSolved = (id: string) => {
    dispatch(_addSolved(id))
  }

  return { checked, solved, addChecked, addSolved }
}
