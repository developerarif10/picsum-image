"use client"
import axios from "axios";
import { useState } from "react";

const page = () => {
  const [user, setUser] = useState([])
  const getData = async () =>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const apiResponse = (response.data)
      setUser(apiResponse)
    } catch (error) {
      console.error('Fetching error!')
    }
  }
  return (
    
    <>
    <div className='text-center mt-5'>
    <button onClick={getData} className='bg-red-500 rounded text-white px-4 py-2 font-bold'>Get Images</button>
    <h1 className='text-center text-white text-2xl p-2'>Images gallery</h1>
    </div>
    <div className="p-10">
      {user.map( (elem,i ) => {
       return <img 
        key={i}
        src={elem.download_url}
        width={350}
        height={350}
        className="inline-block m-5"
        />
      })}
    </div>
    </>
  )
}

export default page;