import { useSuspenseQuery } from '@tanstack/react-query'
import { usePuzzleStore } from '../redux/usePuzzleStore'
import { useHistoryStore } from '../redux/useHistoryStore'

interface FetcherProps {
  puzzleId: string
  children: React.ReactNode
}

function Fetcher({ puzzleId, children }: FetcherProps) {
  const { initiate } = usePuzzleStore()
  const { solved, checked } = useHistoryStore()

  const isDone = solved.includes(puzzleId) || checked.includes(puzzleId)

  const { data } = useSuspenseQuery({
    queryKey: ['puzzle', { puzzleId, solved }],
    queryFn: async () => {
      return fetch(
        `/api?id=${puzzleId}&answer=${(isDone).toString()}`,
      ).then((res) => res.json())
    },
  })

  if (data) {
    initiate(data)
  }

  return <>{children}</>
}

export default Fetcher
