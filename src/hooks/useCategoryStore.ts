import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  selectCategory,
  deselectCategory,
  setCategory,
  CategoryID,
  Category,
} from '../store/slices/categorySlice'

export const useCategoryStore = () => {
  const dispatch = useDispatch()
  const categories = useSelector(
    (state: RootState) => state.category.categories,
  )
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory,
  )

  const select = (id: string) => {
    if (!id) return
    dispatch(selectCategory({ id } as CategoryID))
  }

  const deselect = () => {
    dispatch(deselectCategory())
  }

  const set = (categories: Category[]) => {
    dispatch(setCategory(categories))
  }

  return { categories, selectedCategory, select, deselect, set }
}