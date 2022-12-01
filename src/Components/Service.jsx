import React from "react";
import { Link } from "react-router-dom";

function Service({ service, icon, link }) {
  return (
    <div className="flex bg-white rounded-lg flex-col items-center justify-center  px-4 py-2 h-48 w-44 md:w-72 md:h-56 ">
      <p className="py-2 font-medium uppercase text-center text-sm">
        {service}
      </p>
      <img src={`/images/${icon}.png`} alt={service} className="h-20 w-20" />
      <Link to={link}  className="w-full md:w-8/12">
        <div className="flex items-center justify-center gap-2 text-white bg-black py-1 w-full px-0 rounded-[4px] my-4 cursor-pointer">
          <button className="">Explore Now</button>
          <img
            src="/images/arrow.png"
            alt="arrow"
            className="h-4 w-4 text-white invert"
          />
        </div>
      </Link>
    </div>
  );
}

export default Service;
