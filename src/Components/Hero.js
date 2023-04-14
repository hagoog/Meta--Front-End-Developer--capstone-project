import React from 'react'
import "./HeroStyles.css"
import heroimg from "../Assets/Images/restauranfood.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container'>
    <main className='hero'>
        <section className='left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</h3>
            <Link to="/Reservations" >
            <button className='btn'>Reserve a Table</button>
            </Link>
        </section>
        <section className='right'>
        <img src={heroimg} className='hero-img' />
        </section>
    </main>
    </div>
  )
}

export default Hero