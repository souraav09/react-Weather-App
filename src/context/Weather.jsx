import { createContext,useContext,useState } from "react";
import { getWeathercity ,getWeatherlocation} from "../api";
const Weathercontext=createContext();
export const useWeather=()=>{
    return useContext(Weathercontext)
}
export const Weatherprovider=(props)=>{
    const [data,setData]=useState(null)
    const [searchCity,setsearchCity]=useState(null)

  const fetchdata = async()=>{
   const Response=await getWeathercity(searchCity)
   setData(Response)
}
const fetchuser=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
     getWeatherlocation({ lat: position.coords.latitude, lon: position.coords.longitude })
.then((data)=>setData(data))
    })
}
    return <Weathercontext.Provider value={{data,searchCity,setsearchCity,fetchdata,fetchuser}}>{props.children}</Weathercontext.Provider>
}