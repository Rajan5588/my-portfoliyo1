import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
const NavLeft = () => {
  let [dark, setDark] = useState("light");
  const handleDarkMode = () => {
    const root = document.querySelector("body");
    if (dark == "light") {
      setDark("dark");
      root.classList.add("darkMode");
    } else if (dark == "dark") {
      setDark("light");
      root.classList.remove("darkMode");
      console.log("light");
    }
  };
  return (
    <div className="w-[20%] flex items-center justify-between text-[2rem] ">
      <h2 className="text-[2rem] text-orange-500 ml-10 font-semibold">RAJAN</h2>
      <div onClick={handleDarkMode}>
        {dark == "light" ? (
          <h3 className="text-xl text-yellow-400 ">
            <CiDark className="text-[2rem] font-bold"/>
          </h3>
        ) : (
          <span className="text-xl text-yellow-400">
            <MdLightMode className="text-[2rem]"/>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavLeft;
