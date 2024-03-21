import { useSelector, useDispatch } from 'react-redux'

import store from '../../../store'
import { setState, ModalProps } from './modalSlice'


export const useModal = () => {
  const dispatch = useDispatch()

  const modals = useSelector(
    (state: ReturnType<typeof store.getState>) => state.modal,
  )

  const openModal = (props: ModalProps) => {
    const key = Math.random().toString(36).substring(2) // random key
    const nextProps = {
      key,
      close: () => {
        console.log('close')
        dispatch(setState([...modals]))
      },
      ...props,
    }

    dispatch(setState([...modals].concat(nextProps)))
  }

  return { openModal }
}
