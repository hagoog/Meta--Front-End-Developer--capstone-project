import React from 'react'
import "./Hero2Styles.css"
import MarioandAdrianA from "../Assets/Images/Mario and Adrian A.jpg"
import MarioandAdrianB from "../Assets/Images/Mario and Adrian b.jpg"


const Hero2 = () => {
  return (
    <div className='hero2-container'>
    <main className='hero2'>
        <section className='left2'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</h3>
        </section>
        <section className='right2'>
        <img src={MarioandAdrianA} className='hero-img1' />
        <img src={MarioandAdrianB} className='hero-img2' />
        </section>
    </main>
    </div>
  )
}

export default Hero2