import React from 'react'
import {specialized} from '../utils/serviceData'
import Service from '../MicroServices/Service'
import {Navigator} from '../Components'

function SpecialService() {
  return (
    <div className="space-y-10">
      <Navigator/>
        {specialized.map((item,idx )=> (<Service {...item} key={idx}/>))}
    </div>
  )
}

export default SpecialService