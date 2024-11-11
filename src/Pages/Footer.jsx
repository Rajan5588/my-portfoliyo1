import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div   data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="footer">
          <img  src="https://www.xerodegrees.com/wp-content/themes/firstlaunch-wp-xero-degrees/public/img/home/home-vector.png?format=1500w"  alt="" style={{width:"100%"}}/>
      <div className="f-content">
          <span className="text-[2rem]  no text-zinc-900">rajankumarg301@gmail.com</span>
      <div   className="f-icons">
      <a href="#"><FaInstagram className="text-[3rem] hover:text-red-400" /></a>
     <a href="https://www.linkedin.com/in/rajan-kumar-gupta-3478102b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin  className="text-[3rem] hover:text-blue-400" /></a>
      <a href="https://www.facebook.com/profile.php?id=100053855701349&mibextid=ZbWKwL"><FaFacebook className="text-[3rem] hover:text-blue-400" /></a>
      </div>
      </div>
      </div>   
    </div>
  )
}

export default Footer;