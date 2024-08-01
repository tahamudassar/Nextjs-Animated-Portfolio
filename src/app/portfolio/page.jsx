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
      color: "from-red-300 to-blue-300",
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? ",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
  ];
  const ref = useRef();
  const {scrollYProgress}=useScroll({target:ref});
  console.log(scrollYProgress);
  const x=useTransform(scrollYProgress,[0,1],["0%","-80%"]);
  return (
    <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
    <div className='h-[600vh] relative ' ref={ref}>
      <div className='w-screen h-heightt flex justify-center items-center text-8xl text-center '>
      My Projects
      </div>
      
      <div className='flex items-center gap-4 h-screen sticky top-0 overflow-hidden'>
        <motion.div className='flex' style={{x}}>
          <div className='w-screen h-screen  flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'/>
        {items.map((item)=>{
          return <div  key={item.id}className={`flex h-screen w-screen justify-center items-center bg-gradient-to-r ${item.color}`}>
              <div className='flex flex-col w-2/3 gap-3 text-white justify-center'> 
                 <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>{item.title}</h1>
                
                 {/* IMAGE CONTAINER */}
                 <div className='relative w-2/3   h-[150px] md:h-[200px] md:w-1/2  lg:h-[300px] lg:w-1/2  '>
                   <Image src={item.img} alt="" fill />
                  </div>
                  <p className='text-justify text-md  w-2/3 lg:w-1/2'>{item.desc}</p>
                  <Link href={item.link} className=' flex justify-end  mr-[80px] md:mr-[200px]  lg:mr-[400px] xl:mr-[550px]'>
                   <button className='bg-white text-black h-[50px] w-[80px] md:h-[70px] md:w-[120px] rounded-md'>
                    see demo
                   </button>
                  </Link>
              </div>
             </div>
        })}

        </motion.div>
       

      </div>
    </div>
     <div className='h-screen w-screen flex justify-center align-center bg-gradient-to-b from-purple-400 to bg-red-400'>
     <div className='flex flex-col justify-center items-center text-center '>
      <h1 className='text-6xl'>DO YOU HAVE A PROJECT?</h1>

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
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link className='h-[100px] w-[100px] rounded-full  bg-black text-white absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center' href="/contact">Hire me</Link>
      </div>
     </div>
   </div>
   </motion.div>
  )
}

export default Portfoliopage
