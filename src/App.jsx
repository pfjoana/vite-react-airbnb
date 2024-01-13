// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'
import './App.css'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-section">
        {cards}
      </section>

    </>
  )
}
