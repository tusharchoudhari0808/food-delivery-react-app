import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreManu from '../../component/ExploreManu/ExploreManu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownlode from '../../component/AppDownlode/AppDownlode'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreManu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownlode/>
    </div>
  )
}

export default Home
