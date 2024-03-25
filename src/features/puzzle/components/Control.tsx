import { useEffect } from 'react'
import { useHistoryStore } from '../redux/useHistoryStore'
import { usePuzzleStore } from '../redux/usePuzzleStore'
import Description from './Description'
import Input from './Input'
import { useModal } from '../../modal/redux/useModal'

function Control() {
  const { selectedWord, puzzle, totalWords, solvedWords } = usePuzzleStore()

  const { solved, checked, addSolved } = useHistoryStore()
  const { openModal } = useModal()

  useEffect(() => {
    const check = () => {
      if (puzzle && solvedWords !== totalWords) {
        const isSolved = solved.includes(puzzle.puzzleId)
        const isCheked = checked.includes(puzzle.puzzleId)

        if (isSolved) {
          openModal({
            component: () => {
              return (
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">완료한 퍼즐!</h1>
                  <p className="mt-2">이미 해당 퍼즐을 모두 풀었습니다.</p>
                  <p className="">다른 문제를 더 풀어보세요!</p>
                </div>
              )
            },
          })
        }

        if (isCheked) {
          openModal({
            component: () => {
              return (
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">
                    정답을 확인한 퍼즐!
                  </h1>
                  <p className="mt-2">
                    정답을 확인하신 퍼즐입니다. 다시 시도하실 수 없습니다.
                  </p>
                  <p className="">다른 문제를 더 풀어보세요!</p>
                </div>
              )
            },
          })
        }
      }
    }

    check()
  }, [solved, checked, puzzle])

  let text = '선택된 단어가 없습니다.'

  const { length, direction } = puzzle?.answerInfos[selectedWord!] || {}

  if (puzzle?.answerInfos[selectedWord!]) {
    text = puzzle.answerInfos[selectedWord!].word.description
  }

  useEffect(() => {
    const completePuzzle = async () => {
      await fetch(`/api/complete?id=${puzzle?.puzzleId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    if (puzzle) {
      if (solvedWords == totalWords) {
        addSolved(puzzle.puzzleId)
        openModal({
          component: () => {
            return (
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">축하합니다!</h1>
                <p className="mt-2">모든 단어를 맞추셨습니다.</p>
              </div>
            )
          },
        })
        completePuzzle()
      }
    }
  }, [solvedWords])

  return (
    <>
      <Description
        wordId={selectedWord!}
        description={text}
        length={length!}
        direction={direction!}
      />
      <Input length={length!} wordId={selectedWord!} />

      <div className="mt-2 text-neutral-700">
        성공한 단어: {solvedWords} / {totalWords}
      </div>
    </>
  )
}

export default Control
