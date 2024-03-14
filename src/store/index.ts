import { configureStore } from '@reduxjs/toolkit'
import { puzzleSlice } from '../features/puzzle/redux/puzzleSlice'

const store = configureStore({
  reducer: {
    puzzle: puzzleSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
