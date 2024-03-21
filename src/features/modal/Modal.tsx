type Props = {
  close?: () => void
  component?: () => JSX.Element
}

const Modal = ({ component, close }: Props) => {
  return (
    <div>
      <div
        className="h-screen w-screen fixed top-o bottom-0 left-0 right-0 z-40 bg-neutral-400/40"
        onClick={close}
      />
      <div className="fixed top-1/2 left-1/2 min-w-[368px] max-w-[576px] rounded-xl overflow-hidden bg-neutral-50 z-40 -translate-x-1/2 -translate-y-1/2 p-4">
        {component && component()}
      </div>
    </div>
  )
}

export default Modal
