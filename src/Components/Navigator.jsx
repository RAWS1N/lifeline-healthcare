import React from "react";
import {Link,useNavigate} from "react-router-dom";

function Navigator() {
  const Navigator = useNavigate()

  function goBack(){
    Navigator(-1)
   
  }

  return (
    <Link to="/" className="w-full sticky top-0">
      <div className="w-full  bg-white cursor-pointer py-2 px-4 flex items-center gap-2">
        <img src="/images/arrow.png" alt="" className="h-6 w-6 rotate-180" />
        <h4>Back</h4>
      </div>
    </Link>
  );
}

export default Navigator;
