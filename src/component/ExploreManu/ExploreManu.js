import React from 'react'
import './ExploreManu.css'
import { menu_list } from '../../asset/assets'
const ExploreManu = ({category,setCategory}) => {
  return (
    <div className="explore-manu" id ="explore-manur">
        <h1> Explore our manu</h1>
        <p className="Explore-manu-text">A customer can choose to have the food delivered or for pick-up/take-away. The process consists of a customer choosing the restaurant of their choice, scanning the menu items, choosing an item, and finally choosing for pick-up or delivery.</p>
      <div className="Explore-manu-list">

        {menu_list.map((item,index) => {
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-manu-list-item">
                    <img  className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreManu
