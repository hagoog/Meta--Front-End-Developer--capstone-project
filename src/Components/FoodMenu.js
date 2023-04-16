import React from 'react'
import './FoodMenuStyles.css'
import { MdDeliveryDining } from 'react-icons/md'
import FoodMenuCard from './FoodMenuCard'
import FoodMenuData from './FoodMenuData'

const FoodMenu = (props) => {
  return (
    <div className='food-menu'>
    {FoodMenuData.map((val, ind) =>{
        return (
            <FoodMenuCard
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
  )
}

export default FoodMenu