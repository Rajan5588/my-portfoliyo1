import { useEffect, useRef, useState } from "react";
import "./Goal.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { GrAmazon } from "react-icons/gr";
gsap.registerPlugin(ScrollTrigger);
const Goal = () => {
  const body1=document.querySelector("body");
  let [bodymove,setBodymove]=useState()
  useEffect(()=>{
    body1.addEventListener("mousemove",(e)=>{
      setBodymove(e.clientY);
      
  })
 
 },[bodymove])
let Wright=useRef();
const {contextSafe}=useGSAP();
  useEffect(
    contextSafe(()=>{
    gsap.from(Wright.current,{
      rotate:360,
      duration:10,
      scrollTrigger:{
        trigger:".w-mainCircle",
        scroller:body1,
        start:"top 90%"
      }

    })
  }),[])
     
  return (
    <div data-aos="zoom-in" className="w-full flex-wrap h-screen mt-[4rem]">
      <div className="works w-full h-screen  flex-wrap mt-[4rem]" id="works">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: "orange" }}>I want to work for</span>
            <span>These brands</span>
            <span>
              I'm on my way to successNclassName and successNclassName is never
              final.
              <br />
              As a software developer my successNclassName will be to work in
              these FAANG companies. text
              <br />
              It will require smart work with
              <br />
            
              struggle and I'm confident that one day I'll achieve this
              successNclassName.
            </span>
            <br /><br />
            <a>
              <button className="button s-button" style={{borderRadius:"12px"}}>Hire Me</button>
            </a>
            <div
              className="blur s-blur1"
              style={{ background: "rgba(171, 241, 255, 0.48)" }}
            ></div>
          </div>
        </div>
        <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="w-right" >
          <div className="w-mainCircle" style={{ transform: " none" }}
          ref={Wright}>
            <div className="w-secCircle">
            <FaFacebook  className="hero text-[2.5rem] text-blue-400"/>
            </div>
            <div className="w-secCircle">
            <FaSquareXTwitter className="hero text-[2.5rem] text-zinc-700" />
            </div>
            <div className="w-secCircle">
            <FcGoogle className="hero text-[3rem]"/>
            </div>
            <div className="w-secCircle">
            <TfiMicrosoftAlt  className="hero text-[2.5rem] text-yellow-400"/>
            </div>
            <div className="w-secCircle">
            <GrAmazon className="hero text-[2.5rem] text-gray-600"/>
            </div>
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Goal;