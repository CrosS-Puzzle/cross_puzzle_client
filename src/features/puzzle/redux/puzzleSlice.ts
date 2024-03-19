import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Puzzle } from '../constants/types'

type PuzzleState = {
  puzzle: Puzzle | null
  totalWords: number
  solvedWords: number
  selectedWord: string | null
}

const initialState: PuzzleState = {
  puzzle: null,
  totalWords: 0,
  solvedWords: 0,
  selectedWord: null,
}

export const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    setPuzzle(state, action: PayloadAction<Puzzle>) {
      state.puzzle = action.payload
      state.totalWords = Object.keys(action.payload.answerInfos).length
      state.solvedWords = 0
    },
    setWord(state, action: PayloadAction<string>) {
      state.selectedWord = action.payload
    },
    _resetWord(state) {
      state.selectedWord = null
    },
    _addAnswer(
      state,
      action: PayloadAction<{
        id: string
        value: string
      }>,
    ) {
      state.solvedWords += 1
      state.selectedWord = null
      if (state.puzzle) {
        state.puzzle.answerInfos[action.payload.id].word.value =
          action.payload.value
      }
    },
  },
})

export const { setPuzzle, setWord, _resetWord, _addAnswer } =
  puzzleSlice.actions
