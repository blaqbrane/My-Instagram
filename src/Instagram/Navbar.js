import img1 from "../Static/instagram.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen((prevopen) => !prevopen);
  };
  return (
    <nav className="flex justify-between bg-red-500 p-4 fixed top-0 w-full">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="rounded-md outline-0 placeholder:text-center "
        />
      </div>
      <div
        className={
          isopen
            ? "flex flex-col right-0 absolute bg-slate-50 w-4/12 p-4 md:hidden"
            : "hidden md:block"
        }
      >
        {isopen && (
          <AiOutlineClose
            onClick={handleClick}
            className="ml-20 text-red-800"
            size={20}
          />
        )}
        <span>
          <i className="fas fa-home mr-7 p-2 " />
        </span>
        <span>
          <i className="fas fa-comment-alt mr-7 p-2" />
        </span>
        <span>
          <i className="fas fa-compass mr-7 p-2" />
        </span>
        <span>
          <i className="fas fa-heart mr-7 p-2" />
        </span>
      </div>
      <div onClick={handleClick} className="block md:hidden">
        <AiOutlineMenu />
      </div>
    </nav>
  );
};
export default Navbar;
