import React from "react";
import {motion} from 'framer-motion'

function Cards(props) {
  return (
    <motion.div 
    initial={{x:100,opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{
      delay:1,
      duration:.5,
      type:'spring',
      stiffness:200
    }} className="w-full mr-8 mb-8 hover:bg-sky-900 rounded-xl">
      <div className="card bg-base-100 shadow-md rounded-xl">
        <figure>
          <img
            src={props.imgsrc}
            alt="Shoes"
            className="w-full h-36 object-fit rounded-xl p-2"
          />
        </figure>
        <div className="card-body  text-white p-2">
          <h2 className="card-title text-xl font-bold">{props.head}</h2>
          <p className="text-md font-thin">{props.desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary p-2 my-2 bg-white font-bold text-cyan-950 hover:bg-cyan-700 hover:text-white rounded-lg">Purchase</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
