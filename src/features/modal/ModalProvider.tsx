import { useSelector } from 'react-redux'

import store from '../../store'
import Modal from './Modal'

const ModalProvider = () => {
  const modals = useSelector(
    (state: ReturnType<typeof store.getState>) => state.modal,
  )

  return (
    <div id="modals">
      {modals.map((modal) => (
        <Modal key={modal.key} {...modal} />
      ))}
    </div>
  )
}

export default ModalProvider
