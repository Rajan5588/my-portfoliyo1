

const NavRight = () => {
  return (
    <div className=" right w-1/2 flex items-center gap-5 ">
      <a href="#Home" className="list-none hover:text-violet-600 duration-100">Home</a>
      <a href="#Services"className="list-none hover:text-violet-600 duration-400">Services</a>
      <a href="#Work"className="list-none hover:text-violet-600">Interested</a>
      <a href="#Project"className="list-none hover:text-violet-600">Portfolio</a>
      <a href="#Educations"className="list-none hover:text-violet-600">Education</a>
      <div>
         <a href="#contact"> <button className="">Contact</button></a>
      </div>
    
</div>
  )
}

export default NavRight
