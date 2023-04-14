import React from 'react'
import "./TestimonialsStyles.css"
import P1 from "../Assets/Images/p1.png"
import {BsStarFill} from 'react-icons/bs'
import TestimonialsCard from './TestimonialsCard'
import TestimonialsCardData from './TestimonialsCardData'

const Testimonials = () => {
  return (
    <main className='testimonials'>
        <div className='testimonials-head'>
            <h1>Testimonials</h1>
        </div>
        <section className='testimonials-container'>
        {TestimonialsCardData.map((val, ind) =>{
            return (
                <TestimonialsCard 
                key={ind}
                userPhoto={val.userPhoto}
                testionmialsUser={val.testionmialsUser}
                testimonialsRating={val.testimonialsRating}
                testimonalsDescription={val.testimonalsDescription}
                />
            )
        }
        )}
        </section>
    </main>
  )
}

export default Testimonials