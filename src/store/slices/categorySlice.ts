import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Category = {
  id: string
  name: string
  koreanName: string
  puzzleCount: number
}

export type CategoryID = {
  id: string
}

type INITIAL_CATEGORY_STATE = {
  categories: Category[] | []
  selectedCategory: CategoryID | null
}

const initialState: INITIAL_CATEGORY_STATE = {
  categories: [],
  selectedCategory: null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
    selectCategory: (state, action: PayloadAction<CategoryID>) => {
      state.selectedCategory = action.payload
    },
    deselectCategory: (state) => {
      state.selectedCategory = null
    },
  },
})

export const { setCategory, selectCategory, deselectCategory } =
  categorySlice.actions
