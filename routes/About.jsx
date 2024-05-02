import React from 'react'
import ImageBack from '../src/Components/ImageBack'
import { Circle } from 'lucide-react'
import Cardlist from '../src/Components/Cardlist'
import Content from '../src/Components/Content'
import Imageblock from '../src/Components/Imageblock'
import {motion} from 'framer-motion';
import {fadeIn} from '../src/variants'
import bg1 from '../src/Images/bg1.jpg'

function About() {
  const images={
    image1:bg1,
    image2:bg1,
    image3:bg1,
  }
  return (
    
    <>
    <ImageBack image1={images.image1} image2={images.image2} image3={images.image3}/>
    <Imageblock/>
    </>
  )
}

export default About