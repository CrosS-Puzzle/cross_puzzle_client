import { twMerge } from 'tailwind-merge'
import { AnswerInfo } from '../constants/types'
import { usePuzzleStore } from '../hooks/usePuzzleStore'

function PuzzleContainer() {
  const { selectWord, selectedWord, puzzle } = usePuzzleStore()

  if (!puzzle) {
    throw new Error(
      '퍼즐 정보를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
    )
  }

  const { rowSize, colSize, answerInfos } = puzzle

  const width = colSize * 68 + 4
  const height = rowSize * 68 + 4

  return (
    <div
      className={twMerge('bg-transparent relative p-1 m-1')}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {Object.keys(answerInfos).map((wordId: string) => {
        const { coords, length, word, direction } = answerInfos[
          wordId
        ] as AnswerInfo

        const handleOnClick = () => {
          selectWord(wordId)
        }

        return (
          <button
            onClick={handleOnClick}
            key={word.id}
            className={twMerge('absolute flex gap-1', '')}
            style={{
              top: `${coords[0] * 68 + 4}px`,
              left: `${coords[1] * 68 + 4}px`,
              width: direction === 0 ? `${(length - 1) * 70 + 64}px` : '64px',
              height: direction === 1 ? `${(length - 1) * 70 + 64}px` : '64px',
              flexDirection: direction === 0 ? 'row' : 'column',
            }}
          >
            {Array.from({ length }).map((_, index) => {
              const char = word.value?.[index]

              const colors =
                char === undefined
                  ? 'bg-neutral-400 text-black'
                  : 'bg-neutral-700 text-neutral-50'

              const selectedStyle =
                wordId === selectedWord
                  ? ' border-2 border-neutral-500 z-10 animate-pulse'
                  : ''

              return (
                <div
                  key={index}
                  className={twMerge(
                    'w-16 h-16 rounded-lg flex items-center justify-center',
                    colors,
                    selectedStyle,
                  )}
                >
                  {char}
                </div>
              )
            })}
          </button>
        )
      })}
    </div>
  )
}

export default PuzzleContainer
