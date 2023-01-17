import React from "react";

function Service({ children, image, title, text }) {
  return (
    <div className="mx-4 my-4 p-4">
      <h1 className="text-center  tracking-wider text-xl bg-green-200 py-2 uppercase font-medium">
        {title}
      </h1>
      <div className="flex-col md:flex-row  items-center my-10 justify-between">
        <img
          src={`/images/${image}.png`}
          alt={image}
          className="h-72 w-72  mx-auto"
        />
        <h5 className="px-0 text-lg text-center md:text-left">{text}</h5>
      </div>

      {children}
    </div>
  );
}

export default Service;
