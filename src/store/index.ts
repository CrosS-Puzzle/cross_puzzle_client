import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { puzzleSlice } from '../features/puzzle/redux/puzzleSlice'
import { historySlice } from '../features/puzzle/redux/historySlice'
import { modalSlice } from '../features/modal/redux/modalSlice'

import storage from 'redux-persist/lib/storage'

import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
  puzzle: puzzleSlice.reducer,
  history: historySlice.reducer,
  modal: modalSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
