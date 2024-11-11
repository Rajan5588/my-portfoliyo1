import React from 'react'
import Educationswiper from '../Componant/Educationswiper'

const Education = () => {
  return (
    <div>
      <div data-aos="zoom-in" id='Educations' className="mt-10  flex items-center justify-center flex-col ">
      <h1 className="text-[3rem]"><span>Clients always get </span>
          <span className="text-[3rem] text-yellow-400 font-bold">Exceptional Work </span>
          <span >from me...</span></h1>
      <div className="w-full h-screen flex items-center justify-between mt-5">
      
    <Educationswiper/>
    </div>
    </div>
    </div>
  )
}

export default Education;
