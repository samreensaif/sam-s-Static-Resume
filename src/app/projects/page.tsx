"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function Projects() {
  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (

    <div className='h-full w-screen bg-gradient-to-r from-teal-500 to-yellow-400 overflow-hidden '>


      <div className='p-20'>

       <h1 className='text-5xl text-red-800 text-center mb-14 font-semibold '>Projects</h1>
        <Slider {...settings} >
          {data.map((d,index) => (
            <div key={index} className=' h-[350px] text-black rounded-xl mb-20'>

              <div className='h-56  rounded-xl bg-red-800 flex justify-center items-center'>
                <Image src={d.img} width={150} height={150} alt="{d.name}" className='object-center w-3/4 h-3/4' />
              </div>

              <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p  >{d.description}</p>
               
              </div>
            </div>


          ))}
        </Slider>
      </div>

    </div>


  );
}

const data = [
  {
    name: "Student Registration Form",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/srf.jpg",
    
  },
  {
    name: "Rock Paper Scissor Game",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/rps.jpg",
    
  },
  {
    name: "Periodic Table",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/pp.jpg",
    
  },
  {
    name: "Color Toggle",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/colorToggle.jpg",
    
  },
  {
    name: "Calculator",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/imageCal.jpg",
    
  },
  {
    name: "Dynamic Resume Builder",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/imageRB.png",
    
  },
  {
    name: "Number Guessing Game",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/NGG.png",
    
  },
  {
    name: "Static Resume Builder",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/static.jpg",
    
  },
  {
    name: "Countdown Timer",
    description: "Built on Nextjs, TailwindCss, Shadcn",
    img: "/assets/countdown.jpg",
    
  },
  {
    name: "Time-Table",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/tt.jpg",
    
  },
  {
    name: "Todo-List",
    description: "Built on HTML, CSS and TypeScript",
    img: "/assets/td.jpg",
    
  }
]
