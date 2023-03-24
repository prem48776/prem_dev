import React from 'react'
import Menubars from './components/Menubars'
import {Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Empoleyee from './pages/Empoleyee'
import Services from './pages/Services'
import About from './pages/About'
import Admin from './pages/Admin'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Menubars />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/empoleyee' element={<Empoleyee />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App