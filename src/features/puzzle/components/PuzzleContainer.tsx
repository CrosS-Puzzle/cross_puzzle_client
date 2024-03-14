import { usePuzzleStore } from '../hooks/usePuzzleStore'
import { AnswerInfo } from '../constants/types'

import Block from './Block'

function PuzzleContainer() {
  const { puzzle } = usePuzzleStore()

  const puzzleMap = new Array(puzzle?.rowSize).fill('').map(() => {
    return new Array(puzzle?.colSize).fill([])
  })

  if (!puzzle) {
    return <div>Loading...</div>
  }

  console.log('rerendered')

  const answerInfos = puzzle.answerInfos

  for (const wordId in answerInfos) {
    const { coords, direction, length }: AnswerInfo = answerInfos[wordId]

    if (direction === 0) {
      for (let i = 0; i < length; i++) {
        puzzleMap[coords[0]][coords[1] + i] = [
          ...puzzleMap[coords[0]][coords[1] + i],
          wordId,
        ]
      }
    }

    if (direction === 1) {
      for (let i = 0; i < length; i++) {
        puzzleMap[coords[0] + i][coords[1]] = [
          ...puzzleMap[coords[0] + i][coords[1]],
          wordId,
        ]
      }
    }
  }

  return (
    <div className="p-4 w-fit h-fit flex flex-col gap-0.5 bg-transparent rounded-xl">
      {puzzleMap.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex flex-row gap-0.5">
            {row.map((blockIds, colIndex) => {
              return (
                <Block
                  key={rowIndex.toString() + colIndex.toString()}
                  id={blockIds}
                  disabled={blockIds.length === 0}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default PuzzleContainer
