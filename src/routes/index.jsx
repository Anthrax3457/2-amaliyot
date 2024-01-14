import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pages from '../pages'
import Dark from '../pages/dark'
import Light from '../pages/light'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/light' element={<Light />} />
        <Route path='/dark' element={<Dark />} />
      </Routes>
    </div>
  )
}

export default Router