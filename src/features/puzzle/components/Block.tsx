import { usePuzzleStore } from '../hooks/usePuzzleStore'

interface BlockProps {
  char?: string
  disabled?: boolean
  id?: string[]
}

function Block({ id, char, disabled }: BlockProps) {
  const { selectWord, selectedWord } = usePuzzleStore()

  function handleOnClick() {
    if (!id) return

    if (id.length === 2) {
      if (selectedWord) {
        //choose one of the ids which is not the selected word
        const newId = id.filter((wordId) => wordId !== selectedWord)[0]
        selectWord(newId)
      }
      return
    }

    if (id.length === 1 && id[0] === selectedWord) {
      return
    }

    selectWord(id[0])
  }

  return (
    <button
      onClick={handleOnClick}
      disabled={disabled}
      className="group block w-14 h-14 border rounded-md overflow-hidden disabled:bg-transparent disabled:border-none"
    >
      <div className="w-full h-full flex flex-row items-center justify-center bg-neutral-50 group-disabled:bg-transparent">
        {char}
      </div>
    </button>
  )
}

export default Block
