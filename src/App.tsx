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
        <Route path="/puzzle/:id" element="puzzle page" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
