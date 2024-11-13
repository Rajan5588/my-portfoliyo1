import { SlLike } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedref=useRef(null);
  useEffect(() => {
    const options={
       strings:["Rajan Kumar"],
       typeSpeed: 30,
       backSpeed: 50,
       loop: true
    }
  const typed=new Typed(typedref.current,options);
    return () => {
      typed.destroy() 
    }
  }, [])
  
  return (
    <div id="Home" className="w-full h-screen flex   mt-[4rem]  justify-between">
      <div data-aos="fade-down-right"className="Namesection w-1/2 flex flex-col  gap-5 rounded ml-10 items-center ">
        <h1 className="text-[3rem]">Hy! I Am</h1>
        <h1 ref={typedref} className=" text-[3rem] text-yellow-400 font-bold" ></h1>
        <p>
          I'm a B. Tech (IT) student from RGPV-Bhopal (2k21 batch). Currently
          Learning at  Coding Thinker (Full Stack Developer).
        </p>
        <div className="butt">
          <button>Hire Me!</button>
        </div>
        <div  data-aos="zoom-in" className="fontIcon mt-8 flex  gap-10 ">
        <a href=""><FaInstagram className="text-[2rem] hover:text-yellow-400" /></a>
        <a href="https://www.facebook.com/profile.php?id=100053855701349&mibextid=ZbWKwL"><CiFacebook className="text-[2rem] text-blue-400 hover:text-blue-600"/></a>  
        <a href="https://www.linkedin.com/in/rajan-kumar-gupta-3478102b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin className="text-[2rem] text-blue-400 hover:text-yellow-600" /></a> 
        <a href="https://github.com/Rajan5588/"><FaGithub className="text-[2rem] text-blue-400 hover:text-red-600"/></a> 
        </div>
      </div>
      <div data-aos="fade-down-left" className="imgsection w-1/2 overflow-hidden rounded-xl flex flex-col gap-5   items-center ">
      <div className="img  h-[300px] w-[300px] rounded-full  ">
          <img  className=" rounded-full h-[100%] w-[100%] " src="./image/t.jpg" alt="" />
      </div>
      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="Award w-[20%] rounded flex items-center" >
          <div><span><SlLike className="text-yellow-500"/></span>Best Design Awarded!</div>
      </div>
      </div>
    </div>
  );
};

export default Home;
