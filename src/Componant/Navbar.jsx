
import NavLeft from "./NavLeft"
import NavRight from "./NavRight"

const Navbar = () => {
 
  return (
    <div  data-aos="fade-down" className=" w-full flex justify-between h-[4rem] bg-zinc-900 text-zinc-100 flex-nowrap ">
      <NavLeft/>
      <NavRight />
      <div className="btnm">
         <a href="#contact"> <button className="">Contact</button></a>
      </div>
    </div>
  )
}

export default Navbar
