import React from 'react'
import main from '../Images/main.jpg'
import circle1 from '../Images/circle1.jpg'
import circle2 from '../Images/circle2.jpg'
import circle4 from '../Images/circle4.jpg'
import core from '../Images/core.jpg'
import strong from '../Images/strong.jpg'
import cross from '../Images/cross.jpg'
import gym2 from '../Images/gym2.jpg'
import zumba from '../Images/zumba.jpg'






function Content() {
  return (
        <div>
                
        <div class="w-full  pr-2 mt-4">
            <h1 role="heading" tabindex="0" className="font-bold text-3xl text-center text-cyan-800 dark:text-white">Know Us</h1>
            <h2 role="contentinfo" tabindex="0" class="text-base leading-normal text-center text-gray-600 dark:text-gray-200 mt-5"></h2>
        </div>
        <div class="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4 pr-2 bg-cyan-800">
            <div class="mt-24 p-4">
                <div class="flex gap-1 items-center justify-between px-4">
                    <img tabindex="0" src={main}  class="w-20 h-20 rounded-lg mr-8" />
                    <img tabindex="0" src={circle1} class="w-48 h-36 rounded-lg" />
                </div>
                <div class="flex items-center justify-end my-2 p-2">
                    <img tabindex="0" src={circle2} class="w-48 h-36 rounded-lg"/>
                </div>
                <div class="flex gap-1 items-start p-2">
                    <img tabindex="0" src={circle4}  class="w-48 h-48 rounded-lg" />
                    <img tabindex="0" src={core} class="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
                </div>
            </div>
            <div class="ml-6 mt-32 p-2">
                <img tabindex="0" src={strong} class="w-40 h-40 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
                <div class="flex gap-1 items-center mt-8">
                    <img tabindex="0" src={cross} class="w-48 h-48 rounded-lg" />
                    <img tabindex="0" src={gym2} class="w-20 h-20 rounded-lg ml-6 object-cover object-fit" />
                </div>
            </div>
            <div class="mt-14 ml-2 p-2">
                <div class="lg:flex p-4">
                    {/* <div>
                        <img tabindex="0" src="./src/images/core.jpg" class="w-24 h-24 rounded-lg object-center object-fit" />
                    </div>
                    <div className=''>
                        <div class="flex gap-1 p-2">
                            <img tabindex="0" src="./src/images/zumba.jpg" class="w-20 h-20 rounded-lg mt-14 mr-4"  />
                            <img tabindex="0" src="./src/images/wrk1.webp" class="w-20 h-24 rounded-lg"/>
                        </div> */}
                        <img tabindex="0" src={zumba} class="ml-6 mt-6 w-40 h-32 rounded-lg" />
                    </div>
                </div>
                
            </div>
        </div>
    
        // </div>


  )
}

export default Content