import React from "react";

function Circle(props) {
  return (
<div>
<h1 className="text-center font-bold text-3xl pt-20 sm:pt-4">{props.title}</h1>
      <div className="card bg-base-100 flex flex-col justify-center sm:flex-row sm:justify-evenly items-center sm:h-60 mt-6 ">
        
        <figure>
          <img
            src={props.imgsrc1}
            alt="Movie"
            className="rounded-full w-48 h-48"

          />
        </figure>
        <div className="card-body bg-cyan-950 text-white rounded-3xl rounded-ss-sm  w-1/2 flex flex-col p-4 my-4">
          <h2 className="card-title font-semibold text-2xl pt-6">{props.head1}</h2>
          <p className="pt-4 font-light">You might be here to get your blood pumping, your muscles flexing or just to try something completely different - but whatever you want from your workout, we’ve got the US imported latest generation Hoist equipment kit to get you there and an unbeatable gym membership price to match.</p>
        </div>
    </div>
    <div className="card bg-base-100 shadow-xl flex flex-col justify-center sm:flex-row sm:justify-evenly items-center sm:h-60 mt-6">
    <div className="card-body bg-cyan-950 text-white rounded-3xl rounded-se-sm  w-1/2 flex flex-col p-4 my-4">
          <h2 className="card-title font-semibold text-2xl pt-6">{props.head2}</h2>
          <p className="pt-4 font-light">Whether you want to lose weight, tone up, gain muscle or improve your strength and endurance levels, we have the widest variety of fitness and group exercises classes to help achieve your goals in a friendly environment and with the best instructors in the business to give you the motivation you need to succeed!</p>
        </div>
        <figure>
          <img
            src={props.imgsrc2}
            alt="Movie"
            className="rounded-full w-48 h-48 object-fit mb-4"

          />
        </figure>
        
    </div>
    </div>
  );
}

export default Circle;
