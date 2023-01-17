import React from "react";

function Corporate({ image, text }) {
  return (
    <div className="p-4 border bg-white flex flex-col items-center justify-center">
      <img src={`images/${image}.png`} className="h-48 w-48" alt={image} />
      <h4 className="text-2xl capitalize bg-green-200 w-full  py-2 mt-4 rounded-sm text-center">
        {text}
      </h4>
    </div>
  );
}

export default Corporate;
