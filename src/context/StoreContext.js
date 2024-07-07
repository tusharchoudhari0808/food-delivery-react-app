import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../asset/assets"; // Ensure this path is correct

export const StoreContext = createContext(null);

// const removeFromCard =()=>{};

const StoreContextProvider = (props) => {
  const [Carditem, setCarditem] = useState({});

  const addToCard = (itemId) => {
    if (!Carditem[itemId]) {
      setCarditem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // const removeFromCard = (itemId) => {
  //   setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  const removeFromCard = (itemId) => {
    setCarditem((prev) => {
      const newItems = { ...prev };
      if (newItems[itemId] > 0) {
        newItems[itemId]--;
      }
      return newItems;
    });
  };

  const getTotleCardAmount = () => {
    let totleAmount = 0;
    for (const item in Carditem) {
      if (Carditem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totleAmount += iteminfo.price * Carditem[item];
      }
    }
    return totleAmount;
  };

  // useEffect(() => {
  //   console.log(Carditem,);
  // },[Carditem,]);

  const contextValue = {
    food_list,
    Carditem,
    removeFromCard,
    setCarditem,
    addToCard,
    getTotleCardAmount,
   
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
