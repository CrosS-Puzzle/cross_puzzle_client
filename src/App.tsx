import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home'
import MainLayout from './layouts/main'
import NotFound from './pages/notfound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element="Login" /> */}
        <Route path="/puzzle" element="Puzzle" />
        <Route path="/puzzle/:id" element="Category" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
