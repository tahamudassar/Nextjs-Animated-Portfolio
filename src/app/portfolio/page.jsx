"use client"
import Link from 'next/link';
import React, { useRef } from 'react'
import Image from 'next/image';
import { useScroll,useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
//STICKY TOP-0 HELPS THE CONTAINER WITH PROJECTS TO BE FIXED ONCE IT IS SCROLLED MEANS IF WE MOVE DOWN IT WILL REMAIN FIXED TILL THE END
const Portfoliopage = () => {

  const items = [
    {
      id: 1,
      color: "from-black to-purple-900",
      title: "Next Commerce",
      desc: "A full stack commercial ecommerce website built using Next js with zustand for state management ",
      type: "image",
      img: "/websiteimage.png",
      
    },
    {
      id: 2,
      color: "from-black to-purple-900",
      title: "Draw Dash",
      desc: "A physics-driven path-drawing system in Unity to enable real-time obstacle avoidance gameplay.",
      type: "video",
      video: "/videos/project1.mp4", // Video stored in public/videos folder
      
    },
    {
      id: 3,
      color: "from-black to-purple-900",
      title: "VibeHit",
      desc: "A blockchain-integrated rhythm game built in Unity where each interactive tile is represented as a unique NFT asset on-chain. ",
      type: "video",
      video: "/videos/video.mp4",
      
    },
    {
      id: 4,
      color: "from-purple-900 to-black",
      title: "Next blog App",
      desc: "Full stack blog application using Next js",
      type: "image",
      img: "/blogimage.png", // Video stored in public/videos folder
     
    },
  ];
  const ref = useRef();
  const {scrollYProgress}=useScroll({target:ref});
  console.log(scrollYProgress);
  const x=useTransform(scrollYProgress,[0,1],["0%","-80%"]);
  return (
    <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
    <div className='h-[600vh] relative ' ref={ref}>
      <div className='w-screen h-heightt flex justify-center items-center text-8xl text-center  bg-gradient-to-r from-black to-purple-900 '>
      Our Projects
      </div>
      
      <div className='flex items-center gap-4 h-screen sticky top-0 overflow-hidden'>
        <motion.div className='flex' style={{x}}>
          <div className='w-screen h-screen  flex items-center justify-center bg-gradient-to-r from-black to-purple-900'/>
        {items.map((item)=>{
          return <div  key={item.id}className={`flex h-screen w-screen justify-center items-center bg-gradient-to-r ${item.color}`}>
              <div className='flex flex-col w-2/3 gap-3 text-white justify-center'> 
                 <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>{item.title}</h1>
                
                 {/* MEDIA CONTAINER */}
                 <div className='relative w-2/3 h-[150px] md:h-[200px] md:w-1/2 lg:h-[300px] lg:w-1/2'>
                   {item.type === "image" ? (
                     <Image src={item.img} alt={item.title} fill className='object-cover' />
                   ) : (
                     <video 
                       autoPlay
                       loop
                       muted
                       playsInline
                       className="w-full h-full object-cover rounded-md"
                     >
                       <source src={item.video} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   )}
                 </div>
                  <p className='text-justify text-md  w-2/3 lg:w-1/2'>{item.desc}</p>
                  
              </div>
             </div>
        })}

        </motion.div>
       

      </div>
    </div>
     <div className='h-screen w-screen flex justify-center align-center bg-gradient-to-b from-black to-purple-900'>
     <div className='flex flex-col justify-center items-center text-center '>
      <h1 className='text-6xl text-white'>DO YOU HAVE A PROJECT?</h1>

      <div className='relative'>
      <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Solutions
              </textPath>
            </text>
          </motion.svg>
          <Link className='h-[100px] w-[100px] rounded-full  bg-purple-900 text-white absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center' href="/contact">Hire us</Link>
      </div>
     </div>
   </div>
   </motion.div>
  )
}

export default Portfoliopage
