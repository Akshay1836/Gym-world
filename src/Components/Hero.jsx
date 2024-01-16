import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center flex items-center justify-center h-screen bg-[url('./src/images/gym2.jpg')] bg-cover bg-center">
        <div className="max-w-md">
          <h1 className="anim heading mb-5 text-5xl font-bold text-white">
            WORK WITH PROFESSIONALS
          </h1>
          <p className="anim content-text mb-5 font-para1 text-md text-white">
            Join a thriving fitness community where support and motivation are
            in abundance. Attend exclusive events, challenges, and meet
            like-minded individuals on your fitness journey.
          </p>
          <button className="anim btn bg-cyan-900 text-white px-2 py-2 rounded-md text-md font-bold hover:bg-white hover:text-cyan-900">
            Get Started
          </button>
          <button className="anim btn bg-gray-200 text-black px-2 py-2 mx-6 rounded-md text-md font-bold hover:bg-white hover:text-cyan-900">
            Learn More
          </button>
          
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
