import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home-page'
import ContactPage from '../pages/contact-page'
import AboutPage from '../pages/about-page'
import KonteynerPage from '../pages/konteyner-page'

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<HomePage/>} />
            <Route path='contact' element={<ContactPage/>} />
            <Route path='about' element={<AboutPage/>} />
            <Route path='konteyner' element={<KonteynerPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes