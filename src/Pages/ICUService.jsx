import React from "react";
import { IsolationCard } from "../MicroServices";
import { Icu } from "../utils/serviceData";
import {Navigator} from '../Components'

function ICUService() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navigator/>
        <h1 className="text-3xl text-blue-600 text-center py-1 px-4 mb-10 pt-10 font-medium tracking-wider">ICU at Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
        {Icu.map((service,idx) => (
          <IsolationCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ICUService;
