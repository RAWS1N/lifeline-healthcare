import React from "react";

function IsolationCard({ image, title, text }) {
  return (
    <div className="flex shadow-lg p-10  items-center flex-col justify-center bg-white">
      <h2 className="bg-green-200  font-semibold w-full text-center p-2 text-xl uppercase">
        {title}
      </h2>
      <img className="h-36 w-36 p-4" src={`/images/${image}.png`} alt={image} />
      <h4 className="text-center leading-relaxed">{text}</h4>
    </div>
  );
}

export default IsolationCard;
