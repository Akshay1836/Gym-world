import React from "react";
import Cards from "./Cards";
import {easeIn, motion} from 'framer-motion';

function Cardlist() {
  const cards = [
    {
      head: 'WORKOUT 6D',
      desc: "6D is a fun,super resultive functional 30minute Class on our freestyle area. It challenges you through different 6 Dimensions of Fitness including Lift, Move, Function, Core, Burn fat Recover to achieve amazing results in your body!",
      imgsrc: "./src/images/6D.jpg",
    },
    {
      head: 'CORE 30',
      desc: "A 30-minute athletic and functional core strength workout. ( Strength and conditioning class 30 minutes, equipment based ). Core30 trains you like an athlete in 30 action-packed minutes. A strong core, from your shoulders to your hips",
      imgsrc: "./src/images/core.jpg",
    },
    {
      head: 'CROSSFIT',
      desc: "Experience the exhilarating world of CrossFit Group Classes, where strength, stamina, and community converge to create a fitness journey like no other! Our CrossFit classes are designed to unleash your potential and elevate your fitness to new heights.",
      imgsrc: "./src/images/cross.jpg",
    },
  ];
  return (
    <div className="bg-sky-950 text-gray-200 pb-10">
      <h1 className="text-center font-bold font-para1 text-2xl py-4">WHY CHOOSE US</h1>
      <div className="flex justify-center items-center">
      <div 
      
      className="flex flex-col sm:flex-row justify-center items-center w-2/3 md:h-1/2">
      {cards.map((card) => 
        <Cards head={card.head} desc={card.desc} imgsrc={card.imgsrc}/>
      )}
    </div>
    </div>
    </div>
  );
}

export default Cardlist;
