import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {
  const {getTotleCardAmount} = useContext(StoreContext);
  return (
    <form  className="place-oder">
      <div className="place-order-left">
        <p className="place-order-title">
          Delivery Informetion
        </p>
      
      <div className="multi-filds">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Second Name"/>
      </div>
      <input type="email" placeholder="Email"/>
      <input type="text" placeholder="Street"/>
      <div className="multi-filds">
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="State"/>
      </div>
      <div className="multi-filds">
        <input type="text" placeholder="Zip Code"/>
        <input type="text" placeholder="Country"/>
      </div>
      <input type="phone" placeholder="Phone"/>
      
      </div>
      <div className="place-order-right">
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
                <p>${2}</p>
              </div>
              <hr/>
              <div className="card-total-details">
              <p>Totle</p>
                <p>${getTotleCardAmount()+2}</p>
              </div>
            
            </div>
            <button >PROCEED TO PEYMENT</button>
          </div>
      </div>
     
    </form>
  
  )
}

export default PlaceOrder
