import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import useToggleShow from "../utils/useToggleShow";

function Header() {
  const [show, toggle] = useToggleShow();

  return (
    <div className="flex sticky top-0 h-14 items-center justify-between  bg-white px-2  z-20">
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" className="h-12 w-12" />
        <h4 className="text-2xl text-blue-600 font-medium tracking-wider">
          LifeLine HealthCare
        </h4>
      </div>
      <ul className="hidden md:flex  items-center justify-evenly space-x-4">
        <a href="#main">
          <li className="link">Home</li>
        </a>
        <a href="#services">
          <li className="link">Services</li>
        </a>
        <a href="#contact">
          <li className="link">Contact</li>
        </a>
      </ul>
      <FiMenu
        className="text-black md:hidden h-8 w-8 xl:hidden"
        onClick={toggle}
      />

      <div
        className={`absolute ${
          show ? "translate-x-0" : "translate-x-full"
        } ease-in-out
         duration-300 md:hidden z-0 top-0 right-0 w-3/5 flex flex-col  h-screen bg-white`}
      >
        <div className="relative z-0">
          <ul className="flex flex-col ">
            <AiOutlineClose
              className="h-8 w-8 mb-6 cursor-pointer self-end px-0 mx-2 my-2 text-2xl"
              onClick={toggle}
            />
            <a href="#main">
            <li className="link">Home</li>
            </a>
            <a href="#services">
              <li className="link">Services</li>
            </a>
            <a href="#contact">
            <li className="link">Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
