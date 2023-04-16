import React from 'react'
import "./TestimonialsStyles.css"

const TestimonialsCard = (props) => {
  return (
    <article className='testimonials-card'>
        <img src={props.userPhoto} alt='User'/>
        <h2 className='testimonials-user'>{props.testimonialsUser}</h2>
        <i className='testimonials-rating'>{props.testimonialsRating}</i>
        <p className='testimonials-description'>{props.testimonalsDescription}</p>
    </article>
  )
}

export default TestimonialsCard