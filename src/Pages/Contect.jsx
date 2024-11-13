
import './Contect.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contect = () => {
  const form=useRef();
   let [input, setInput]=useState({
     name:'',
     email:"",
     massage:'',
   })
   function handleClick(e){
     let { name , value}=e.target;

     setInput({...input,[name]:value})
   }
 
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_6tec2aw', 'template_pta8d32', form.current, {
         publicKey: 'PiG7sCpbD4wyD3783',
       })
       .then(
         () => {
           console.log('SUCCESS!');
         },
         (error) => {
           console.log('FAILED...', error.text);
         },

       );
       e.target.reset();
       setInput({
        name:'',
        email:"",
        massage:'',
       })
   };
 




  return (
     <div  data-aos="zoom-in"  className="contact-form mt-20" id="contact">
     <div className="w-left">
       <div className="awesome">
         <span style={{ color: "purple" }} className='text-[3rem] font-semibold'>Get in Touch</span>
         <span className='text-[3rem] text-yellow-400 font-semibold'>Contact me</span>
         <div
           className="blur s-blur1"
           style={{ background: "rgba(171, 241, 255, 0.58)" }}
         ></div>
       </div>
     </div>
     <div className="c-right">
       <form onSubmit={ sendEmail}>
         
         <input
           type="text"
           name="name"
           className="user"
           required=""
           placeholder="Name"
           value={input.name}
           onChange={handleClick}
         />
         <input
           type="email"
           name="email"
           className="user"
           required=""
           placeholder="Email"
           value={input.email}
           onChange={handleClick}
         />
         <textarea
           type="query"
           name="massage"
           className="user"
           placeholder="Message"
           value={input.massage}
           onChange={handleClick}
           rows="5"
           cols="4"
         ></textarea>
         <input type="submit" className="button"  value="Send" />
         <span></span>
         <div className="blur c-blur1" style={{ background: "purple" }}></div>
       </form>
     </div>
   </div>
  )
}

export default Contect;
