import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home'
import MainLayout from './layouts/main'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/puzzle" element="Puzzle" />
        <Route path="/puzzle/:id" element="Category" />
      </Route>
      <Route path='/login'  element="Login" />
      <Route path="*" element="Not Found" />
    </Routes>
  )
}

export default App
