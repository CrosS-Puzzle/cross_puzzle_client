import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Fetcher from './components/Fetcher'
import MemoizedPuzzleContainer from './components/PuzzleContainer'
import Description from './components/Description'

const Puzzle = () => {
  const location = useLocation()
  const puzzleId = location.pathname.split('/').pop()

  return (
    <div className="bg-neutral-400 h-screen flex flex-col items-center">
      {puzzleId ? (
        <div>
          <ErrorBoundary fallback={<div>error</div>}>
            <Suspense fallback={<div>Loading...</div>}>
              <Fetcher puzzleId={puzzleId}>
                <MemoizedPuzzleContainer />
              </Fetcher>
            </Suspense>
          </ErrorBoundary>
        </div>
      ) : (
        <div>No puzzle id</div>
      )}

      <Description />
    </div>
  )
}

export default Puzzle
