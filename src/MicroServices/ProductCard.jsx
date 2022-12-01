import React from "react";

function ProductCard({ image, product }) {
  return (
    <div className="flex p-4 hover:shadow-lg bg-white flex-col items-center jusitify-center ">
      <img
        className="h-72 w-72"
        src={`/images/products/${image}.jpg`}
        alt={image}
      />
      <h4 className="w-full bg-green-200 rounded-sm py-2 text-xl uppercase text-center">
        {product}
      </h4>
    </div>
  );
}

export default ProductCard;
