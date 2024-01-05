// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

import './App.css'

export default function App() {
  return (
      <div className="container">
          <Navbar/>
          <Hero/>
      </div>
  )
}
