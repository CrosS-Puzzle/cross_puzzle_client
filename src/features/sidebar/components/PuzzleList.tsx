import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function PuzzleList() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  // query string
  const selectedCat = searchParams.get('cat')
  const sort = searchParams.get('sort') || 'asc'
  const page = searchParams.get('page') || 0

  const { data } = useSuspenseQuery({
    queryKey: ['puzzles', { selectedCat, sort, page }],
    queryFn: async () => {
      return fetch(
        `/api/list?category=${selectedCat}&sort=${sort}&page=${page}`,
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },
    staleTime: 1000 * 60 * 5, // 5min
  })

  const totalElement = data.totalElement || 0
  const isFirst = data.currentPageNumber === 0
  const isLast = data.last || false

  const startNum = data.currentPageNumber * 10 + 1
  const endNum = startNum + data.puzzles.length - 1

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value

    navigate(`?cat=${selectedCat}&sort=${value}&page=${page}`)
  }

  function handlePrev() {
    navigate(`?cat=${selectedCat}&sort=${sort}&page=${+page - 1}`)
  }

  function handleNext() {
    navigate(`?cat=${selectedCat}&sort=${sort}&page=${+page + 1}`)
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="w-full flex flex-row items-center justify-end">
        <div>
          <span className="text-sm text-neutral-300 pr-2">정렬기준</span>
          <select
            onChange={handleOnChange}
            className="border px-2 rounded-full border-neutral-300 bg-transparent text-sm text-neutral-300 hover:bg-neutral-300 hover:text-neutral-950"
          >
            <option value="desc">정답률 높은 순</option>
            <option value="asc">정답률 낮은 순</option>
          </select>
        </div>
      </div>

      <ul className="py-2">
        {data.puzzles.length > 0 &&
          data.puzzles.map(
            (puzzle: { id: string; wins: number; views: number }) => {
              const { id, wins, views } = puzzle

              const winRate = ((wins / views) * 100 || 0).toFixed(1) || 0

              return (
                <li key={id} className="pb-1">
                  <Link
                    to={`/puzzle/${id}?cat=${selectedCat}&sort=${sort}&page=${page}`}
                    className="px-2 rounded-md flex flex-row items-center justify-between text-neutral-300 hover:bg-neutral-300 hover:text-neutral-950"
                  >
                    <p className="text-sm ">{id.slice(-8).toUpperCase()}</p>
                    <p className="text-sm">{winRate + '%'}</p>
                  </Link>
                </li>
              )
            },
          )}
      </ul>

      {/* pagination here */}
      <div className="w-full">
        <div className="flex flex-col justify-between items-center">
          <div className="w-full grid grid-cols-2">
            <button
              onClick={handlePrev}
              disabled={isFirst}
              className="text-sm text-neutral-300 border rounded-l-full hover:bg-neutral-300 hover:text-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-neutral-300"
            >
              이전
            </button>
            <button
              onClick={handleNext}
              disabled={isLast}
              className="text-sm text-neutral-300 border border-l-0 rounded-r-full hover:bg-neutral-300 hover:text-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-neutral-300"
            >
              다음
            </button>
          </div>
          <span className="pt-1 text-xs text-neutral-500">
            총 {totalElement}개의 문제 중 {startNum}-{endNum}번째 문제
          </span>
        </div>
      </div>
    </div>
  )
}

export default PuzzleList
