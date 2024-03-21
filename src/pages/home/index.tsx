function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] space-y-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          CS 용어 가로세로 낱말 퍼즐
        </h1>
        <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <span>ChatGPT 로 생성된 CS 용어와 설명으로 낱말퍼즐이 만들어져 있습니다.</span>
          <br />
          <span>
            왼쪽 카테고리와 문제를 선택하여 문제를 풀어보세요.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home
