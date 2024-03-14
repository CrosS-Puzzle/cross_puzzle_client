import { usePuzzleStore } from '../hooks/usePuzzleStore'

function Description() {
  const { selectedWord } = usePuzzleStore()

  return <>{selectedWord}</>
}

export default Description
