import { useEffect } from "react";
import Navbar from "./Componant/Navbar"
import Home from "./Pages/Home"
import Services from "./Pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Pages/Project";
import Work from "./Pages/Work";
import Education from "./Pages/Education";
import Contect from "./Pages/Contect";
import Goal from "./Pages/Goal";
import Footer from "./Pages/Footer";
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  },[])
  return (
    <div className="w-full h-screen gap-[2rem]">
      <Navbar/>
      <Home></Home>
      <Services></Services>
   <Work/>
   < Project/>
   <div className="goall ">
   <Goal/>
   </div>
<div className="edu">
<Education/>
</div>
  <div className="conttt">
  <Contect/>
  </div>
   <div className="f mb-0 ">
   <Footer/>
   </div>

    </div>
  )
}

export default App;
