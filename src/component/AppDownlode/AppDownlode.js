import React from 'react'
import './AppDownlode.css'
import { assets } from '../../asset/assets'
const AppDownlode = () => {
  return (
    <div className="app-Downlode" id="app-Downlode">
        <p>For Better Experince Downlode <br/> Food App</p>

        <div className='app-downlode-icons'>
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>

    </div>
  )
}

export default AppDownlode
