import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p> At Tomato, we're passionate about bringing delicious food right to your doorstep. Our mission is to make food ordering simple, quick, and delightful, offering a wide variety of cuisines to satisfy every palate. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 9552903486</li>
                    <li>abhangparth@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright @2024 © Tomato.com - All Rights Reserved.</p>
    </div> 
  )
}

export default Footer
