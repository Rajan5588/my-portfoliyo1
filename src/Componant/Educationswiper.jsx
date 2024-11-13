import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Educationswiper = () => {
  return (
    <div className='container'>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='slide'>
      <div className="img relative h-[20%] w-[10%] rounded-full flex items-center justify-center overflow-hidden">
        <img  className="absolute h-[100%] w-[100%] rounded-full " src="./image/t.jpg" alt="" />
        </div>
        <h3>B-Tech from Radharaman Engineering college Bhopal</h3>
        <h4 className='text-yellow-500 text-10'>Present</h4>
        <a href='https://www.rgpv.ac.in' className='w-[5rem] h-10 bg-zinc-400 hover:bg-zinc-700 rounded-lg flex items-center justify-center border-2 border-yellow-500 '>Visite</a>
</SwiperSlide>
      <SwiperSlide className='slide'>
      <div className="img relative h-[20%] w-[10%] rounded-full flex items-center justify-center overflow-hidden">
        <img  className="absolute h-[100%] w-[100%] rounded-full " src="./image/i.jpg" alt="" />
        </div>
        <h3>Intermediate H/S from PHSM Bihar</h3>
        <h4 className='text-yellow-500 text-10'>2021</h4>
        <a href='https://schools.org.in/gopalganj/10150600107/panchayat-high-school-mishrabatarahan.in' target='blank' className='w-[5rem] h-10 bg-zinc-400 hover:bg-zinc-700 rounded-lg flex items-center justify-center border-2 border-yellow-500 '>Visite</a>
      </SwiperSlide>
      <SwiperSlide className='slide'>
         <div className="img relative h-[20%] w-[10%] rounded-full flex items-center justify-center overflow-hidden">
        <img  className="absolute h-[100%] w-[100%] rounded-full " src="./image/p.jpg"alt="" />
        </div>
        <h3>Matric H/S from PHSM Bihar</h3>
        <h4 className='text-yellow-500 text-10'>2019</h4>
        <a href='https://schools.org.in/gopalganj/10150600107/panchayat-high-school-mishrabatarahan.html' target='blank' className='w-[5rem] h-10 bg-zinc-400 hover:bg-zinc-700 rounded-lg flex items-center justify-center border-2 border-yellow-500 '>Visite</a></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default Educationswiper;
