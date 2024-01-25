import React, { useState } from "react";
import muscle from "../../routes/muscle";
import Gymcard from "./Gymcard";
import { fadeIn } from "../variants";

function Gymdata() {
  
  const [wrkout, setWrkout] = useState("abdominals");
  const [data, setData] = useState([]);
  const workout = async () => {
    const url =
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${wrkout}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5fdf771fa3msh15d15ce9ec6b61ep1e0259jsn88e6075c5ba9",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      console.log(result);
      console.log(data);
      console.log(wrkout);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   workout();
  // }, []);

  
  return (
   
    <div className="w-full h-screen bg-cyan-800 flex flex-col items-center">
      <div 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-row justify-center items-center space-x-2 md:w-1/3 my-8">
        <select
          className="flex h-10 w-full text-white bg-black rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
          onChange={(e)=>setWrkout(e.target.value)}
        >
                {
                        muscle.map((data)=><option className="bg-cyan-900">{data.val}</option>)
                }
        </select>
        <button
          type="button"
          onClick={workout}
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-900 shadow-sm hover:bg-gray-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Subscribe
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-8 pt-4 text-black bg-cyan-800">
       {
                data.map((value)=><Gymcard name={value.name} type={value.type} instructions={value.instructions} diff={value.difficulty} muscle={value.muscle}/>)}
        
    </div>
    </div>
  );
}

export default Gymdata;
