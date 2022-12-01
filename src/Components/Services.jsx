import React from "react";
import Service from "./Service";
import {serviceData} from '../utils/serviceData'

function Services() {
  return (
    <div className="h-screen bg-green-200 space-y-5 relative flex flex-col mx-auto z-0 items-center ">
      <h1 className="absolute top-20 text-3xl">Our Services</h1>
      <div className="absolute top-28 grid grid-cols-2 md:grid-cols-3 gap-4  content-center">
        {serviceData.map((service,idx) => <Service key={idx} {...service}/>)}
      </div>
    </div>
  );
}

export default Services;
