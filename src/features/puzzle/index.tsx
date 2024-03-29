import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Fetcher from './components/Fetcher'
import PuzzleContainer from './components/PuzzleContainer'
import Control from './components/Control'
import Spinner from '../../Spinner'

const Puzzle = () => {
  const location = useLocation()
  const puzzleId = location.pathname.split('/').pop()

  return (
    <>
      <div className="bg-neutral-300 h-full w-full flex flex-col items-center">
        <div className="w-full h-fit max-h-[600px] overflow-auto flex flex-row items-start justify-center p-4">
          {puzzleId ? (
            <ErrorBoundary fallback={<div>error</div>}>
              <Suspense fallback={<Spinner />}>
                <Fetcher puzzleId={puzzleId}>
                  <PuzzleContainer />
                </Fetcher>
              </Suspense>
            </ErrorBoundary>
          ) : (
            <div>No puzzle id</div>
          )}
        </div>

        <Control />
      </div>
    </>
  )
}

export default Puzzle
