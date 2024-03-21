import { configureStore } from '@reduxjs/toolkit'
import { puzzleSlice } from '../features/puzzle/redux/puzzleSlice'
import { modalSlice } from '../features/modal/redux/modalSlice'

const store = configureStore({
  reducer: {
    puzzle: puzzleSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
