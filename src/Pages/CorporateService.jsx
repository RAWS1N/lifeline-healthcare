import React from 'react'
import {Corporate} from '../MicroServices'
import {CorporateData} from '../utils/serviceData'
import {Navigator} from '../Components'

function CorporateService() {
  return (
    <div className="bg-gray-50 h-screen space-y-10">
      <Navigator/>
        <h1 className=" pt-12 text-center text-2xl text-blue-600 uppercase">Corporate Services</h1>
    <div className="grid grid-cols-1 mx-10 md:grid-cols-2 content-center gap-8">
        {CorporateData.map(item => <Corporate {...item}/>)}
    </div>
    </div>
  )
}

export default CorporateService