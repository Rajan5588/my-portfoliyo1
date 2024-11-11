const Card = () => {
  return (
    <div  data-aos="zoom-in" className="cards w-full h-screen flex flex-wrap gap-[6rem] ml-10 mr-5">
      <div className="card shrink-0 w-[15rem]   h-[20rem] flex flex-col gap-5 rounded-xl items-center justify-center overflow-hidden">
        <div className="card1 overflow-hidden  hover:-translate-y-[4rem] ease-out duration-100  w-[14rem] rounded-xl  flex flex-col gap-10 py-10 items-center justify-center">
          <h1 className="text-[2rem]">CHAT APP</h1>
          <p>
          Chat App using Reactjs with Redux,Html,Css
          </p>
          <a href="">
            <div className="bg-zinc-500 rounded px-3 py-2 hover:bg-zinc-900 text-zinc-100 border-2 border-blue-400 ">
              View
            </div>
          </a>
        </div>
      </div>
      <div className="card  w-[15rem] shrink-0 h-[20rem]  rounded-xl flex  items-center justify-center overflow-hidden">
        <div className="card1 hover:-translate-y-[4rem] ease-out duration-300  w-[14rem] rounded-xl  flex flex-col gap-5 py-10 items-center justify-center">
          <h1 className="text-[1.5rem]">Employee-Management-app</h1>
          <p className="leading-none">Employe-management-System using Reactjs with Redux,Html,Css,context-api,frammer motion,gsap
          </p>
          <a href="">
            <div className="bg-zinc-500  shrink-0 rounded px-3 py-2 hover:bg-zinc-900 text-zinc-100 border-2 border-blue-400 ">
              View
            </div>
          </a>
        </div>
      </div>

      <div className="card shrink-0 w-[15rem] h-[20rem]  rounded-xl flex  items-center justify-center overflow-hidden">
        <div className="card1 hover:-translate-y-[4rem] ease-out duration-300  w-[14rem] rounded-xl  flex flex-col gap-5 py-10 items-center justify-center">
          <h1 className="text-[1.5rem] font-semibold">OUCHI</h1>
          <p className="leading-none">Ouchi-Clone using Reactjs with Redux,Html,Css,context-api,frammer motion,gsap,bootstap,tailwin-Css
          </p>
          <a href="">
            <div className="bg-zinc-500 rounded px-3 py-2 hover:bg-zinc-900 text-zinc-100 border-2 border-blue-400 ">
              View
            </div>
          </a>
        </div>
      </div>
      <div className="card  w-[15rem] h-[20rem]  rounded-xl flex  items-center justify-center overflow-hidden">
        <div className="card1 hover:-translate-y-[4rem] ease-out duration-100  w-[14rem] rounded-xl flex flex-col gap-5 py-10 items-center justify-center">
          <h1 className="text-[1.5rem] font-semibold">Book my show-App</h1>
          <p className="leading-none">Book My Show-app using Reactjs ,Html,Css,context,frammer motion,gsap,bootstap,tailwin-Css
          </p>
          <a href="">
            <div className="bg-zinc-500 rounded px-3 py-2 hover:bg-zinc-900 text-zinc-100 border-2 border-blue-400 ">
              View
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
