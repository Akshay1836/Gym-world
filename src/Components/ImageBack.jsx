import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function ImageBack(props) {
  return (
    <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-2">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
      >
        <svg
          class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z"></path>
        </svg>
        <img
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={props.image1}
          alt=""
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}  
      class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div class="mb-8 lg:my-40 lg:max-w-lg lg:pr-5">
          <p class="inline-block px-0 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Gym World
          </p>
          <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-cyan-900 sm:text-4xl sm:leading-none">
            GO THE EXTRA MILE...
            <br class="block" />
            IT'S
            <span class="inline-block text-deep-purple-accent-400">
              &nbsp;NEVER CROWDED
            </span>
          </h2>
          <p class="pr-5 mb-5 text-gray-700 md:text-lg">
            Less sugar, more fruit. Less soda, more water. Less driving, more
            walking. Less worry, more sleep. Less words, more action
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ImageBack;
