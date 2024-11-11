import pdf from '../pdf/r.pdf'

const ServiceLeft = () => {
  return (
    <div   data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="serviceLeft">
       <div  data-aos="fade-down-right" className="Servisection w-1/2 flex flex-col gap-5 rounded ml-10  ">
        <h1 className="text-[4rem]">My Awesome</h1>
        <h1  className="text-[4rem] text-yellow-400 font-bold" >services</h1>
        <p>
        Lorem ispum is simpley dummy text of printing of printing Lorem
        ispum is simpley dummy text of printing
        </p>
        <div className="butt">
        <a href={pdf} download="CV">
          <button >Download CV</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceLeft;
