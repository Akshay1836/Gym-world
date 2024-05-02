import React from 'react'
import image1 from '../Images/image1.jpg'
function ImageBar() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <img src={image1} alt="" className='max-w-full sm:my-20 h-96 shadow-cyan-400 rounded-lg'/>
      <p className='w-1/3 mt-2 m-4 font-mono bg-cyan-950 text-white p-4 shadow-cyan-800 shadow-2xl'><q>The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.</q> <p className='font-bold pt-4'>~ Arnold Schwarzenegger</p></p>
    </div>
  )
}

export default ImageBar