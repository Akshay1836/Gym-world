import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Reviewcard from './Reviewcard';

function Review() {
        const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              };
        const data=[
                {
                        name:"Virat Kohli ",
                        description:"XYZ has been awesome to me. Their trainers are exceptional, the overall vibe is great and I have had nothing but good experiences. I definitely recommend them to my friends and family.",
                        imgsrc:'./src/images/kohli.jpg'
                },
                {
                        name:"Cristiano Ronaldo",
                        description:"I am extremely happy & satisfied with my decision to undergo treatment at Fit & Fine.I was skeptical and had all the doubts like anybody would have regarding weight lossusing non surgical treatment.",
                        imgsrc:'./src/images/cr7.jpg'
                },
                {
                        name:"Novak Djokovic",
                        description:"I am very happy and satisfied with fit and fine clinic at andheri east branch.I have got good inch loss and weight loss,I had joined consulting Dr Fenny who made me explain the procedure perfectly",
                        imgsrc:'./src/images/djokovic.png'
                }
        ]
  return (
<div className="w-full  sm::h-screen p-4 bg-cyan-950">
        <h1 className='text-center text-white text-xl pb-2 font-bold font-para1'>REVIEWS FROM CLIENTS</h1>
<div className='w-96 m-auto p-8 bg-cyan-800 rounded-lg '>
        <div className='m-4'>
<Slider {...settings}>
{
                data.map((d)=>
                        <Reviewcard name={d.name} description={d.description} imgsrc={d.imgsrc}/>
                )
        }
</Slider>
</div>
</div>
</div>
  )
}

export default Review