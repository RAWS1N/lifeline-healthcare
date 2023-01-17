import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Contact() {
  const styles = {
    background: "url('/images/waves_2.png')",
    "backgroundPosition": "bottom",
    "backgroundRepeat": "no-repeat",
  };
  return (
    <div
      style={styles}
      className="h-screen  space-y-5 relative flex flex-col mx-auto z-0 items-center max-w-7xl"
    >
      <h1 className="absolute top-20 text-2xl">Contact Us</h1>
      <form className="flex absolute top-28 md:top-32 w-10/12 md:w-6/12 flex-col items-center justify-center">
        <div className=" my-2 flex flex-col md:flex-row items-center gap-2 text-xl md:text-2xl  justify-center w-full">
          <div className="flex items-center justify-center gap-2">
            <BsFillTelephoneFill />
            <h4>(+91) 7290060030</h4>
          </div>
          <h4 className="hidden md:block">|</h4>
          <div className="flex items-center justify-center my-0 gap-2 ">
            <FiMail />
            <h4>support@paeoniahealthcare.com</h4>
          </div>
        </div>
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="text" placeholder="Phone Number" />
        <input className="input" type="text" placeholder="Address" />
        <textarea className="input h-24" placeholder="Message" />
        <button className="bg-blue-600 px-12 my-4 py-[4px] rounded-sm font-medium tracking-[1px] text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
