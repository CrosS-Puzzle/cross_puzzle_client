interface TooltipProps {
  message: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

function Tooltip({ message, position = 'bottom', children }: TooltipProps) {
  const positionStyles = {
    top: 'bottom-10 left-1/2 transform -translate-x-1/2',
    bottom: 'top-10 left-1/2 transform -translate-x-1/2',
    left: 'right-10 top-1/2 transform -translate-y-1/2',
    right: 'left-10 top-1/2 transform -translate-y-1/2',
  }

  return (
    <div className="group relative flex flex-row w-full">
      {children}
      <span
        className={`absolute text-nowrap scale-0 transition-all rounded bg-neutral-600 p-2 text-xs text-neutral-50 group-hover:scale-100 ${positionStyles[position]}`}
      >
        {message}
      </span>
    </div>
  )
}

export default Tooltip
