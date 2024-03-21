import { createSlice } from '@reduxjs/toolkit'

export type ModalProps = {
  key?: string
  component?: () => JSX.Element
}

const initialState: ModalProps[] = []

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setState(_, action) {
      return action.payload
    },
  },
})

export const { setState } = modalSlice.actions
