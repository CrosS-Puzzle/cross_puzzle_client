import { Outlet } from 'react-router-dom'

import { SideNav } from '../components/SideNav'

function MainLayout() {
  return (
    <div className="flex flex-row h-screen">
      <SideNav />
      <Outlet />
    </div>
  )
}

export default MainLayout
