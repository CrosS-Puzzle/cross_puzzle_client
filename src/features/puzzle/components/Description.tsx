interface DescriptionProps {
  wordId?: string
  description: string
  length: number
  direction: number
}

function Description({
  wordId,
  description,
  length,
  direction,
}: DescriptionProps) {
  if (!wordId) return <p className="mt-2">위 보드판에서 단어를 선택해주세요.</p>

  return (
    <>
      <div
        id={`desciption_${wordId}`}
        className=" max-w-[480px] break-keep mt-2"
      >
        <span className="font-bold">설명</span> : {description}
        <br />
        <p className="font-semibold">
          ({direction === 0 ? '가로' : '세로'}, {length} 글자)
        </p>
      </div>
    </>
  )
}

export default Description
