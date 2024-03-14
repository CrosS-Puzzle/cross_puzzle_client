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
      state.totalWords = action.payload.category.length
      state.solvedWords = 0
    },
    setWord(state, action: PayloadAction<string>) {
      state.selectedWord = action.payload
    },
  },
})

export const { setPuzzle, setWord } = puzzleSlice.actions
