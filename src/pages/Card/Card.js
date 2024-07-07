import React, { useContext } from "react";
import "./Card.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const { Carditem, food_list, removeFromCard,getTotleCardAmount, } = useContext(StoreContext);
 const nevigate = useNavigate();
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (Carditem[item._id] > 0) {
            return (
              <div>
                <div className="card-item-title card-item-1">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{Carditem[item._id]}</p>
                  <p>${item.price * Carditem[item._id]}</p>
                  <p onClick={() => removeFromCard(item._id)} className="cross">X</p>


                </div>
                <hr/> 
              </div>
            );
          }
        })}
        </div>

        <div className="card-bottom">
          <div className="card-totle">
            <h2>Card Totles</h2>
            <div className="card-2">
              <div className="card-total-details">
                <p>Subtotle</p>
                <p>${getTotleCardAmount()}</p>
              </div>
              <hr/>
              <div className="card-total-details">
              <p>Delivery Fee</p>
                <p>${getTotleCardAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className="card-total-details">
              <p >Totle</p>
              <p>${getTotleCardAmount() === 0 ? 0 : getTotleCardAmount() + 2}</p>

              </div>
            
            </div>
            <button onClick={()=>nevigate('/Order')} >PROCEED TO CACKOUT</button>
          </div>
          <div className="card-promocode">
            <div>
              <p> if you have a promo code,  Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder=" promo code"/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
















    </div>
  );
};

export default Card;
