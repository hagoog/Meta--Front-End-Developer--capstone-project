import React from 'react'
import "./TestimonialsStyles.css"
import P1 from "../Assets/Images/p1.png"
import {BsStarFill} from 'react-icons/bs'

const TestimonialsCard = (props) => {
  return (
    <article className='testimonials-card'>
        <img src={props.userPhoto} alt='User-Photo'/>
        <h2 className='testimonials-user'>{props.testimonialsUser}</h2>
        <i className='testimonials-rating'>{props.testimonialsRating}</i>
        <p className='testimonials-description'>{props.testimonalsDescription}</p>
    </article>
  )
}

export default TestimonialsCard