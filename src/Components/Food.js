import "./FoodCardStyles.css"
import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from "../Components/FoodCard"
import FoodCardData from "../Components/FoodCardData"

const Food = () => {
  return (
    <main className="food-specials">
        <section className="top">
            <h1>This Weeks Specials!</h1>
            <Link to="/OrderOnline" >
            <button className='btn'>Order Online</button>
            </Link>
        </section>
        <div className="food-container">
        {FoodCardData.map((val, ind) =>{
            return (
                <FoodCard 
                key={ind}
                imgsrc={val.imgsrc}
                price={val.price}
                title={val.title}
                description={val.description}
                />
            )
        }
        )}
        </div>
    </main>
  )
}

export default Food