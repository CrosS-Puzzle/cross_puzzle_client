import { useSuspenseQuery } from '@tanstack/react-query'
import { usePuzzleStore } from '../redux/usePuzzleStore'

interface FetcherProps {
  puzzleId: string
  children: React.ReactNode
}

function Fetcher({ puzzleId, children }: FetcherProps) {
  const { initiate } = usePuzzleStore()

  const { data } = useSuspenseQuery({
    queryKey: ['puzzle', { puzzleId }],
    queryFn: async () => {
      return fetch(`/api?id=${puzzleId}`).then((res) => res.json())
    },
  })

  if (data) {
    initiate(data)
  }

  return <>{children}</>
}

export default Fetcher
