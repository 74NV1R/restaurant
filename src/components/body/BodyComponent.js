import React from 'react'
import { Route, Redirect, Routes, Navigate } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Menu from './Menu'

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}

export default BodyComponent