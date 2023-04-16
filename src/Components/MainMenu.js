import React from 'react'
import './MainMenuStyles.css'


const MainMenu = () => {
  return (
    <main className='Menu-Container'>
        <h2>Order for Delivery!</h2>
        <section className='Main-Menu'>
            <button className='Menu-btn'>Starters</button>
            <button className='Menu-btn'>Mains</button>
            <button className='Menu-btn'>Deserts</button>
            <button className='Menu-btn'>Drinks</button>
            <button className='Menu-btn'>Specials</button>
        </section>
    </main>
  )
}

export default MainMenu