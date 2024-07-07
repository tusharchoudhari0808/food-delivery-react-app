
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodList from '../FoodList/FoodList';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  

  return (
    <div className="foodDisplay" id="foodDisplay">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {console.log(category,item.category);}
          if(category === 'All' || category === item.category) {

          return  <FoodList 
            key={index} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            description={item.description} 
            image={item.image} 
          />
          }

            
         
})}
      </div>
    </div>
  );
};

export default FoodDisplay;
