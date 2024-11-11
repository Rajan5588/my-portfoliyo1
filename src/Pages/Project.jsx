import Card from "../Componant/Card"


const Project = () => {
  return (
    <div  data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" id='Project' className="mt-10  w-full h-screen  flex items-center justify-center flex-col ">
      <h1 className="text-[4rem]">Recent Projects</h1>
      <h1 className="text-[4rem] text-yellow-400 font-bold">Portfolio</h1>
      <div className="w-full h-screen flex items-center justify-between mt-5">
      
      <Card/> 
    </div>
    </div>
  )
}

export default Project;
