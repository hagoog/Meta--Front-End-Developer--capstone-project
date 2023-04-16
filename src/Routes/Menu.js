import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import MainMenu from '../Components/MainMenu'
import FoodMenu from '../Components/FoodMenu'

const Menu = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MainMenu />
      <FoodMenu />
      <Footer />
    </div>
  )
}

export default Menu