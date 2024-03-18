import { useDispatch, useSelector } from 'react-redux'
import { _resetWord, setPuzzle, setWord } from '../redux/puzzleSlice'
import store from '../../../store'
import { FETCH_PUZZLE_DTO } from '../constants/dtos'
import { AnswerInfo, Puzzle } from '../constants/types'

export const usePuzzleStore = () => {
  const dispatch = useDispatch()

  const puzzle = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.puzzle,
  )

  const selectedWord = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.selectedWord,
  )

  const initiate = (puzzleDto: FETCH_PUZZLE_DTO) => {
    if (puzzle?.puzzleId === puzzleDto.data.id) {
      return
    }

    const parsedPuzzle: Puzzle = {
      puzzleId: puzzleDto.data.id,
      views: puzzleDto.data.views,
      wins: puzzleDto.data.wins,
      rowSize: puzzleDto.data.rowSize,
      colSize: puzzleDto.data.colSize,
      category: puzzleDto.data.category,
      answerInfos: puzzleDto.data.answerInfos.reduce(
        (acc, answer) => {
          acc[answer.word.id] = {
            coords: answer.coords,
            direction: answer.direction,
            length: answer.length,
            word: {
              id: answer.word.id,
              value: answer.word.value,
              description: answer.word.description,
            },
          }
          return acc
        },
        {} as { [id: string]: AnswerInfo },
      ),
    }

    dispatch(setPuzzle(parsedPuzzle))
  }

  const selectWord = (wordId: string) => {
    dispatch(setWord(wordId))
  }

  const resetWord = () => {
    dispatch(_resetWord())
    console.log("reset")
  }

  return { puzzle, initiate, resetWord, selectWord, selectedWord }
}
