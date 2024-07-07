import React, { useContext} from "react";
import "./FoodList.css";
import { assets } from "../../asset/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodList = ({ id, name, price, description, image }) => {
 
  const {Carditem,addToCard,removeFromCard } = useContext(StoreContext) ;
  const itemCount = Carditem[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-contaner">
        <img className="food-image" src={image} alt="" />

        {itemCount ===0 ? (
          <img
            className="add"
            onClick={()=>addToCard(id)}
            src={assets.add_icon_white}
          />
        ):( 
          <div className="food-item-count">
            <img
              onClick={()=>removeFromCard(id)}
              src={assets.remove_icon_red}
              alt="1"
            />
            <p>{itemCount}</p>
            <img
              onClick={()=>addToCard(id)}
              src={assets.add_icon_green}
              alt="2"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-p">{name}</p>
          <img className="food-image" src={assets.rating_starts} alt="" />
        </div>

        <p className="food-des">{description}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodList;
