import { useSuspenseQuery } from '@tanstack/react-query'

import { Link, useSearchParams } from 'react-router-dom'

function Category() {
  const [searchParams] = useSearchParams()
  const selectedCat = searchParams.get('cat')

  const { data: categories } = useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return fetch('https://api.cross-word.online/v1/puzzle/categories')
        .then((res) => res.json())
        .then((data) => data.data)
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60 * 1, // 1 hours
  })

  return (
    <>
      <ul className="mt-2 space-y-3">
        {categories.length > 0 &&
          categories.map(
            (category: {
              id: string
              koreanName: string
              puzzleCount: number
            }) => {
              const selected =
                category.id === selectedCat
                  ? 'bg-neutral-300 text-neutral-950'
                  : 'bg-transparent'

              return (
                <li
                  key={category.id}
                  className={`group text-neutral-300 hover:bg-neutral-300 hover:text-neutral-950 rounded-sm px-1 pt-1 ${selected}`}
                >
                  <Link
                    to={`/home?cat=${category.id}`}
                    className="w-full flex flex-row justify-between items-center pb-1 mb-1 border-b border-neutral-300"
                  >
                    <span className="text-sm ">{category.koreanName}</span>
                    <span className="text-xs ">{category.puzzleCount}</span>
                  </Link>
                </li>
              )
            },
          )}
      </ul>
    </>
  )
}

export default Category
