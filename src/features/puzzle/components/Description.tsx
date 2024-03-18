import { usePuzzleStore } from '../hooks/usePuzzleStore'

function Description() {
  const { selectedWord, puzzle } = usePuzzleStore()

  let text = '선택된 단어가 없습니다.'

  const { length, direction } = puzzle?.answerInfos[selectedWord!] || {}

  if (puzzle?.answerInfos[selectedWord!]) {
    text = puzzle.answerInfos[selectedWord!].word.description
  }

  return (
    <div className="mt-4 px-8">
      <p className="text-lg break-keep">
        설명 : {text} ({direction === 0 ? '가로' : '세로'}, {length}글자)
      </p>
    </div>
  )
}

export default Description
