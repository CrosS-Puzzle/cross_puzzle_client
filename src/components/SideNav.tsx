import { Link } from 'react-router-dom'
import Search from './Search'
import SettingIcon from '../assets/icons/Setting'
import LoginIcon from '../assets/icons/Login'
import Tooltip from './Tooltip'

export function SideNav() {
  return (
    <div className="relative w-full max-w-80 bg-neutral-800 ">
      <div className="p-4 flex flex-col">
        <h1>
          <span className="text-2xl text-neutral-300">크로스 퍼즐</span>
        </h1>
        <h2 className="mt-4 mb-6">
          <span className="text-sm text-neutral-400 break-keep">
            ChatGPT로 생성된 CS 용어들로 이루어진 가로세로 낱말퍼즐!
          </span>
        </h2>

        <Search />

        <div className="mt-4">
          <span className="text-xs text-neutral-500">카테고리 목록</span>

          <ul className="mt-2">
            <li className="pb-1 border-b border-neutral-500">
              <Link
                to="/category/1"
                className="text-sm text-neutral-300 hover:text-neutral-100"
              >
                데이터베이스
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* footer */}
      <div className="absolute bottom-0 w-full h-16 flex flex-row items-center justify-around shadow-[0_-15px_20px_-5px_rgba(0,0,0,0.2)]">
        <div>
          <Tooltip message="개인 설정" position="top">
            <SettingIcon width={24} height={24} fill="#F5F5F5" />
          </Tooltip>
        </div>
        <div>
          <Tooltip message="로그인" position="top">
            <LoginIcon width={24} height={24} fill="#F5F5F5" />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
