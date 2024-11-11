import React from 'react'

const Work = () => {
  return (
    <div data-aos="zoom-in"  id='Work' className='work w-full h-screen flex items-center gap-[1rem] justify-center mt-32'>
     <div className=' flex items-center flex-col gap-5'>
      <div className="cercle w-[9rem] h-[9rem] border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
          <div className="midcercle h-[7rem] w-[7rem] rounded-full bg-zinc-100 text-black-500 font-semibold flex items-center justify-center">
             <h1 className='text-[40px] text-blue-400'>0</h1>
          </div>
      </div>
     <h3>Years</h3>
     <h2 className='text-yellow-400  font-bold text-xl'>Experience</h2>
          </div> 
          <div className=' flex items-center flex-col gap-5'>
          <div className="cercle w-[9rem] h-[9rem] border-4 border-yellow-500 bg-cyan-500 shadow-lg shadow-cyan-500/40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full  flex items-center justify-center">
          <div className="midcercle h-[7rem] w-[7rem] rounded-full bg-zinc-100 text-orange-500 font-semibold flex items-center justify-center">
             <h1 className='text-[40px]'>5+</h1>
          </div>
      </div>
     <h3>completed</h3>
     <h2 className='text-yellow-400  font-bold text-xl'>Projects </h2>
          </div> 
          <div className=' flex items-center flex-col gap-5'>
          <div className="cercle w-[9rem] h-[9rem] border-4 border-yellow-400  bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full flex items-center justify-center">
          <div className="midcercle h-[7rem] w-[7rem] rounded-full bg-zinc-100 text-black-500 font-semibold flex items-center justify-center">
             <h1 className='text-[40px] text-green-500'>0+</h1>
          </div>
      </div>
     <h3>companies</h3>
     <h2 className='text-yellow-400 font-bold text-xl'>Freshers </h2>
          </div>
    </div>
  )
}

export default Work;
