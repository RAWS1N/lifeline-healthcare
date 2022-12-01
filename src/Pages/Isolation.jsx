import React from "react";
import { IsolationCard } from "../MicroServices";
import { isolation } from "../utils/serviceData";
import {Navigator} from '../Components'

function Isolation() {
  return (
    <div className="flex flex-col items-center   bg-gray-50">
      <Navigator/>
      <h1 className="text-3xl text-blue-600 text-center py-1 px-4 m-10 font-medium tracking-wider">
        Home Isolation and Quarantine
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
        {isolation.map((service,idx) => (
          <IsolationCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Isolation;
