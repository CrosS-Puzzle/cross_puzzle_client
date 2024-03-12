import { Outlet } from 'react-router-dom'
import Sidebar from '../features/sidebar'

function MainLayout() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-80 h-full">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-320px)] h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
