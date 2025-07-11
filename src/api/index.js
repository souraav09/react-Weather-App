const baseurl = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;

export const getWeathercity=async (city)=>{
    const res=await fetch(`${baseurl}&q=${city}&aqi=yes`)
    return  await res.json()
};
export const getWeatherlocation=async ({lat,lon})=>{
    const res=await fetch(`${baseurl}&q=${lat},${lon}&aqi=yes`)
    return  await res.json()
};