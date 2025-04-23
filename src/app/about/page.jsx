//MAJOR LEARNING:
//USE REF HOOK USE SCROLL HOOK USE iNvIEW HOOK

"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Skill from "@/components/Skill";
const AboutPage = () => {

   
  const skills=[
   {name:"Unity"},{name:"nodejs"},{name:"nextjs"},{name:"ThreeJS"},{name:"react"},
  {name:"AWS"},{name:"python"},{name:"flutter"},{name:"Blender"} 
  ]

  const containerRef = useRef();
  const skillref=useRef();
  const isSkillRefInView=useInView(skillref)

  const expref=useRef();
  const isExpRefInView=useInView(expref)


  const { scrollYProgress } = useScroll({ container: containerRef });
  return (

    <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
    <div className='h-heightt bg-gradient-to-b from-black to-purple-900'>
      <div className='h-full flex flex-col  overflow-scroll lg:flex-row 'ref={containerRef}>

        {/* ALL TEXT CONTAINER */}
        <div className=' lg:ml-[100px] lg:w-2/3 xl:w-1/2  flex flex-col gap-[500px]'>
       {/* BIOGRAPHY SECTION */}
        <section>
          <div className='flex flex-col gap-[50px] ml-[20px] pt-[200px]'>
            <h1 className='font-bold text-4xl text-white'>BIOGRAPHY</h1>
            <p className='text-lg text-white'>AstroApe Studioass is a creative tech company offering game development, web and app solutions, and deployment services. Blending innovation with solid engineering, we craft engaging digital experiences that bring ideas to life. At AstroApe, we don&apos;t just build software — we launch it into orbit.</p>
            <p className='text-md italic text-white'>We offer perfection.</p>

            {/* SIGN SVG */}
            
             {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        </section>


        {/* SKILLS */}

        <section>
          {/* <div className='hidden lg:flex gap-[50px]'> */}
            {/* IMAGE CONTAINER */}
            
          <div className='flex flex-col gap-[50px] ml-[20px] lg:flex-1' ref={skillref}>
           <motion.h1  initial={{x:"-300px"}} animate={isSkillRefInView? {x:0}:{}} transition={{delay:0.2}}className='font-bold text-4xl text-white'>SKILLS</motion.h1>
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView? {x:0}:{}} transition={{delay:0.2}}className='flex flex-wrap gap-[10px]'>
              {skills.map((skill, index)=>{
                 return <Skill key={index} skill={skill}/>
              })}
            </motion.div>

            {/* SKILL SCROLL SVG */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
         
        </section>


        {/* EXPERIENCE */}

        <section>

          <div className='flex flex-col gap-[20px] 'ref={expref}>

          <motion.h1  className='font-bold text-4xl ml-[20px] text-white' initial={{x:"-300px"}} animate={isExpRefInView? {x:0}:{}} transition={{delay:0.2}}>TEAM</motion.h1>

          {/* MAIN HORIZONTAL DIV */}
        
          <motion.div initial={{x:"-300px"}} animate={isExpRefInView? {x:0}:{}} transition={{delay:0.2}} className='flex gap-[10px] md:gap-0'>

            {/* LEFT SIDE MAIN DIV */}
        <div className='flex flex-col ml-[20px] w-1/3 gap-[200px]'>

          {/* FIRST LEFT SIDE  */}
         <div className='flex flex-col gap-[10px]'>
            {/* JOB POST DIV */}
             <div className='bg-white w-[150px] h-fit p-2 text-black rounded-b-md rounded-s-md font-bold'>
                Abdullah Murtaza
             </div>
             {/* JOB DESC */}
            <p className='text-md italic text-white'>Full stack Web Developer</p>
           
         </div>


         

         {/* SECOND LEFT SIDE DIV */}

         <div className='flex flex-col gap-[10px]'>
            {/* JOB POST DIV */}
             <div className='bg-white w-[150px] h-fit p-2 text-black rounded-b-md rounded-s-md font-bold'>
             Munim Khaliq
             </div>
             {/* JOB DESC */}
            <p className='text-md italic text-white'>Game Developer</p>
          
            {/* COMPANY DIV */}
           
         </div>

         <div className='flex flex-col gap-[20px]'>
        {/* JOB POST DIV */}
         <div className='bg-white w-[150px] h-fit p-2 text-black rounded-b-md rounded-s-md font-bold'>
         Hamdaan Farrukh
         </div>
         {/* JOB DESC */}
        <p className='text-md italic text-white'>Game Designer and Developer</p>
      
      </div>


        </div>
         {/* MIDDLE DIV */}
         <div className='flex w-1/6 justify-center '>
          <div className='flex flex-col'>
          <div className='h-full w-[3px] bg-black relative'>
           <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 '></div>
           </div>

           <div className='h-full w-[3px] bg-black relative'>
           <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 '></div>
           </div>

           <div className='h-full w-[3px] bg-black relative'>
           <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 '></div>
           </div>
           </div>
          </div>


          {/* RIGHT SIDE MAIN  */}
      
      <div className='flex flex-col w-1/3 justify-center'>
      
      {/* FIRST RIGHT SIDE  */}
      <div className='flex flex-col gap-[20px]'>
        {/* JOB POST DIV */}
         <div className='bg-white w-[150px] h-fit p-2 text-black rounded-b-md rounded-s-md font-bold'>
          Taha mudasser
         </div>
         {/* JOB DESC */}
        <p className='text-md italic text-white'>App Dev and DevOps</p>
        
      </div>



      
      
      </div>


      </motion.div>
      </div>
        </section>

        </div>

        {/* IMAGE CONTAINER */}
        <div className=' hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default AboutPage
