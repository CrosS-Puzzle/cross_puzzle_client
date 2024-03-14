import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import MainLayout from './layouts/main'
import NotFound from './pages/notfound'
import Puzzle from "./features/puzzle/index"

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element="Login" /> */}
        <Route path="/puzzle/:id" element={<Puzzle/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
