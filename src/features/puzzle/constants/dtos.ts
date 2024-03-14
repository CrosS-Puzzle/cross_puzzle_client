export type FETCH_PUZZLE_DTO = {
  code: number
  data: {
    id: string
    views: number
    wins: number
    rowSize: number
    colSize: number
    category: string[]
    answerInfos: [
      {
        coords: [number, number]
        direction: number
        length: number
        word: {
          id: string
          value: string | null
          description: string
        }
      },
    ]
  }
}
