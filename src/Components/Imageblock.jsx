import React from 'react';
import "./Hero.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import bg3 from '../Images/bg3.webp'
function Imageblock() {
  return (

<motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
 class="pt-2 mt-2">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center mt-10">
    <div class="w-2/3 md:w-4/12 px-4 mr-auto ml-auto">
        <div class="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg rounded-lg bg-cyan-800">
          <img alt="..." src={bg3} class="object-fit w-full align-middle rounded-t-lg"/>
          <blockquote class=" relative p-8 mb-4">
            <h4 class="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p class=" text-md font-thin mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote>
        </div>
      </div>
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 class=" text-3xl mb-2 font-bold leading-normal text-cyan-900">
          Working with us is a pleasure
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" class="font-bold text-blueGray-700 mt-8 text-cyan-900">Check Notus JS!</a>
      </div>
     
    </div>
  </div>
</motion.section>

  )
}

export default Imageblock