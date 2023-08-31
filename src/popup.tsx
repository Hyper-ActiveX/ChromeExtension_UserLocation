// import { ShowMyLocationButton } from "~features/button"
// import { CountButton } from "~features/count-button"

import "~style.css"
import "tailwindcss/tailwind.css";
import { LocationBox } from "./features/locationBox";
import { useEffect, useState } from "react";


function IndexPopup() {

    return (
    <>
    <div className="plasmo-bg-white-100 plasmo-h-16 plasmo-w-40 plasmo-flex plasmo-item-center plasmo-justify-center">
    
      <LocationBox/>
     
      
    </div>
    </>
  )
}

export default IndexPopup


