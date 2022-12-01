import React from "react";
import { Equipment } from "../utils/serviceData";
import { ProductCard } from "../MicroServices";
import {Navigator} from '../Components'

function Product() {
  return (
    <div className="bg-gray-50">
      <Navigator/>
      <h1 className=" font-medium capitalize text-blue-600 text-center text-2xl bg-green-200 py-4">
        Equipment on rent
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 px-10 gap-4 py-10 ">
        {Equipment.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
