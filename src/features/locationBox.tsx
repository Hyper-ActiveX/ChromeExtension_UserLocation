// import { createApp, h} from "plasmo";
import "tailwindcss/tailwind.css";
import "~style.css"
import { useState, useEffect } from "react";
import axios from "axios";

interface Temp {
  location: string,
  loading: boolean
}
/*
"ip": "157.34.21.191",
"city": "Indore",
"region": "Madhya Pradesh",
"country": "IN",
"loc": "22.7179,75.8333",
"org": "AS55836 Reliance Jio Infocomm Limited",
"postal": "452002",
"timezone": "Asia/Kolkata"
*/
interface locationData {
  ip : string,
  city : string,
  region:string,
  country : string,
  loc:string,
  org:string,
  postal:string,
  timezone:string
}
export const LocationBox = () => {

  const [ipAddress, setIpAddress] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [data,setData] = useState<locationData>({
    ip : "",
    city : "",
    region:"",
    country:"",
    loc:"",
    org:"",
    postal:"",
    timezone:""
  })

  const fetchLocation = async () => {

    try {
      setLoading(true)
      const result : any=await axios.get('https://api.ipify.org?format=json');
      // console.log(result.data)
      const ip : string = result.data.ip;
      setIpAddress(ip)
      const result1:any = await axios.get(`https://ipinfo.io/${ip}?token=fd31e8f141ef27`)
      setData(result1.data)
      setLoading(false);

    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }
  return (
    <>
    <div className=" plasmo-h-500 plasmo-w-500 plasmo-px-2 plasmo-py-2 ">
    {
        loading ? <div>
    
          <button onClick = {()=>{fetchLocation()}}className="plasmo-bg-amber-700 plasmo-text-white plasmo-font-bold plasmo-py-2 plasmo-px-4 plasmo-rounded-md plasmo-px-2 ...">
            Loading...
          </button>
        </div> : <div className="plasmo-py-2 plasmo-px-2 plasmo-flex plasmo-justify-center plasmo-item-center plasmo-flex-col">
         {
          data.city && data.country && <div className="plasmo-py-2 plasmo-px-4 plasmo-text-sm plasmo-font-bold plasmo-flax-row">Your country in {data.country} and city is {data.city}</div>
          
         }
         
          <button onClick = {()=>{fetchLocation()}}className="plasmo-bg-amber-700 plasmo-hover:plasmo-bg-amber-500 plasmo-text-white plasmo-font-bold plasmo-py-2 plasmo-px-4 plasmo-rounded-md plasmo-px-2 ...">
            Show my Location
          </button>
        </div>
      }
    </div>
      {/* {
        loading ? <div role="status" className="plasmo-flex plasmo-items-center plasmo-justify-center">
    
          <button onClick = {()=>{fetchLocation()}}className="hover:plasmo-bg-amber-700 plasmo-text-white plasmo-font-bold plasmo-py-2 plasmo-px-4 plasmo-rounded-full ... plasmo-px-2 ...">
            Loading...
          </button>
        </div> : <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-500 plasmo-w-500 ... plasmo-px-2 ... plasmo-flex-col plasmo-border-8 plasmo-border-solid plasmo-border-2 plasmo-border-indigo-600 plasmo-py-2">
         
         {
          data.city && data.country && <h3>Your country is {data.country} and city is {data.city}</h3>
         }
          <button onClick = {()=>{fetchLocation()}}className="plasmo-bg-amber-700 plasmo-hover:plasmo-bg-amber-500 plasmo-text-white plasmo-font-bold plasmo-py-2 plasmo-px-4 plasmo-rounded-full ... plasmo-px-2 ...">
            Get my Location
          </button>
        </div>
      } */}
      

    </>
  );
};


