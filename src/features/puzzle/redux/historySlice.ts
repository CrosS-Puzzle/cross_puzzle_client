import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HistoryState = {
  checked: string[] // 정답을 확인한 퍼즐
  solved: string[] // 정답을 모두 맞춘 퍼즐
}

const initialState: HistoryState = {
  checked: [],
  solved: [],
}
export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    _addChecked(state, action: PayloadAction<string>) {
      state.checked.push(action.payload)
    },
    _addSolved(state, action: PayloadAction<string>) {
      state.solved.push(action.payload)
    },
  },
})

export const { _addChecked, _addSolved } = historySlice.actions
