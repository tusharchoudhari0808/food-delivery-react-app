import React from 'react'
import './Footer.css'
import { assets } from '../../asset/assets'
const Footer = () => {
  return (
    <div className="footer" id="footer" >
        <div className='footer-content'>
            <div className='footer-content-left'>
           
                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="Facebook"/>
                <img src={assets.twitter_icon} alt="Twitter"/>
                <img src={assets.linkedin_icon} alt="linkedin"/>
                </div>
            </div>
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Provecy Policy</li>
              </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <li>+91  6260641811</li>
                <li>tusharchoudhari0808@gmail.com</li>
            </div>

        </div>
    </div>
  )
}

export default Footer
