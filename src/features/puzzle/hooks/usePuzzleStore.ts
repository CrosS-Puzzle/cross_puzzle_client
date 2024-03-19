import { useDispatch, useSelector } from 'react-redux'
import {
  _resetWord,
  setPuzzle,
  setWord,
  _addAnswer,
} from '../redux/puzzleSlice'
import store from '../../../store'
import { FETCH_PUZZLE_DTO } from '../constants/dtos'
import { AnswerInfo, Puzzle } from '../constants/types'

export const usePuzzleStore = () => {
  const dispatch = useDispatch()

  const puzzle = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.puzzle,
  )

  const solvedWords = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.solvedWords,
  )

  const totalWords = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.totalWords,
  )

  const selectedWord = useSelector(
    (state: ReturnType<typeof store.getState>) => state.puzzle.selectedWord,
  )

  const initiate = (puzzleDto: FETCH_PUZZLE_DTO) => {
    if (puzzle?.puzzleId === puzzleDto.data.id) {
      return
    }

    resetWord()

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
  }

  const addAnswer = (id: string, value: string) => {
    dispatch(_addAnswer({ id, value }))
    if (solvedWords + 1 === totalWords) {
      console.log('퍼즐을 모두 풀었습니다.')
    }
  }

  return {
    initiate,
    resetWord,
    selectWord,
    addAnswer,
    puzzle,
    selectedWord,
    solvedWords,
    totalWords,
  }
}
