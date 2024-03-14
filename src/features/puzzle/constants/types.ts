export type Puzzle = {
  puzzleId: string
  views: number
  wins: number
  rowSize: number
  colSize: number
  category: string[]
  answerInfos: {
    [id: string]: AnswerInfo
  }
}

export type AnswerInfo = {
  coords: [number, number]
  direction: number
  length: number
  word: Word
}

export type Word = {
  id: string
  value: string | null
  description: string
}
