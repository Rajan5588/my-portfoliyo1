import ServiceLeft from "../Componant/ServiceLeft"
import ServiceRight from "../Componant/ServiceRight"


const Services = () => {
  return (
    
    <div  data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"  id="Services" className=" w-full  flex items-center justify-between mt-[6rem] ">
      <   ServiceLeft/>
      <ServiceRight/>
    </div>
  )
}

export default Services;
