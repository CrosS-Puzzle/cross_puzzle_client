import { usePuzzleStore } from '../redux/usePuzzleStore'
import Description from './Description'
import Input from './Input'

function Control() {
  const { selectedWord, puzzle, totalWords, solvedWords } = usePuzzleStore()

  let text = '선택된 단어가 없습니다.'

  const { length, direction } = puzzle?.answerInfos[selectedWord!] || {}

  if (puzzle?.answerInfos[selectedWord!]) {
    text = puzzle.answerInfos[selectedWord!].word.description
  }

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
