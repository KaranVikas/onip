import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Sample from '../pages/Sample/Sample'
import App from '../App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/onip' element={<App />} />
      <Route path='/sample' element={<Sample />} />
      <Route path='*' element={<h2>404 - Page not found</h2>} />
    </Routes>
  )
}

export default AppRoutes