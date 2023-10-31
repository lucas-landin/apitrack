'use client'
import Image from "next/image";
import ImageSwitcher from "./components/ImageSwitcher"
import dynamic from "next/dynamic";
import axios from "axios";
import { useState } from "react";



export default function Home() {

  const [ip, setIp] = useState("192.212.174.101");
  const [city, setCity] = useState("Brooklyn");
  const [code, setCode] = useState("NY");
  const [zip, setZip] = useState("10001");
  const [timezone, setTimezone] = useState("UTC-05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");
  const [lat, setLat] = useState(43.731601313862576);
  const [lon, setLon] = useState(7.415127604923738);

  const Map = dynamic(() => import('./components/Map'), { ssr: false });

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      console.log(response.data);
      setIp(response.data.query);
      setCity(response.data.city);
      setCode(response.data.region);
      setZip(response.data.zip);
      setTimezone(response.data.timezone);
      setIsp(response.data.isp);
      setLat(response.data.lat);
      setLon(response.data.lon);
      
      
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  return (
    <div className=" h-full">
      <div className="z-40 bg-transparent  absolute  top-1  left-1 right-1  text-white ">

        <div className="  md:mt-4 flex flex-col items-center justify-center">
        <p className="px-4 pt-6 md:text-3xl  text-2xl font-bold ">IP Address Tracker</p>
        <div className=" mt-6 md:mt-10 md:mb-8 flex flex-row items-center md:w-1/4">
       <input className=" text-black w-full md:p-4 p-2 rounded-bl-lg rounded-tl-lg shadow-xl"
       value={ip}
       onChange={(e)=>{
       setIp(e.target.value)
       }} 
       type="text" placeholder=" Search for any IP address or domain" />

       <button onClick={fetchData} className=" bg-black shadow-xl md:p-[22px] p-[14px] rounded-br-lg rounded-tr-lg">
        <Image
        src={'/icon-arrow.svg'}
        alt="search"
        width={10}
        height={10}
        />
       </button>
      </div>

      <div className=" md:flex-row md:mt-10 md:h-40 md:items-center  md:py-6 shadow-xl  md:w-auto md:px-10  md:text-left z-30  mt-6 flex flex-col text-center bg-white rounded-xl w-[75%] py-4">
       <div className=" md:p-6 md:pr-20 md:border-r md:border-neutral-300 md:h-20 md:flex md:flex-col md:justify-center">
       <p className=" text-[#CCCCCC] md:text-base text-xs font-bold mb-2">IP Address</p>
       <p className=" text-black text-lg md:text-2xl font-bold">{ip}</p>
       </div>

       <div className=" md:p-6 md:pr-20 md:border-r md:border-neutral-300 md:h-20 md:flex md:flex-col md:justify-center md:items-start">
       <p className=" text-[#CCCCCC] md:text-base  text-xs font-bold mb-2">Location</p>
       <p className=" text-black md:text-2xl text-lg font-bold">{city},{code} {zip}</p>
       </div>

       <div className=" md:p-6 md:pr-20 md:border-r md:border-neutral-300 md:h-20 md:flex md:flex-col md:justify-center">
       <p className=" text-[#CCCCCC] md:text-base text-xs font-bold mb-2">Timezone</p>
       <p className=" text-black md:text-2xl text-lg font-bold">{timezone}</p>
       </div>

       <div className=" md:p-6 md:pr-20  md:h-20 md:flex md:flex-col md:justify-center">
       <p className=" text-[#CCCCCC] md:text-base text-xs font-bold mb-2">ISP</p>
       <p className=" text-black md:text-2xl text-lg font-bold">{isp}</p>
       </div>

      </div>
      </div>
     
     
      </div>
      <ImageSwitcher />
      
      <div className="z-0 w-full h-full">
      <Map lat={lat} lon={lon} />
      </div>
    </div>
  )
}
