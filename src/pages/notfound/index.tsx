import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] space-y-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Page Not Found
        </h1>
        <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <span>찾으시는 페이지가 존재하지 않습니다.</span>
          <br />
          <span>
            삭제되었거나 이름이 변경되었거나 일시적으로 사용할 수 없을 수
            있습니다.
          </span>
        </p>
      </div>
      <Link
        to="/home"
        className="inline-flex h-10 items-center rounded-md border border-neutral-200 bg-neutral-50 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 "
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFound
