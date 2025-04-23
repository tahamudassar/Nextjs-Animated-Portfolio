"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return <>

 <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
  <div className="flex flex-col items-center gap-[20px] lg:hidden bg-gradient-to-b from-black to-purple-900 min-h-screen">

    {/* IMAGE CONTAINER */}
    <div className="">
    <Image src={"/pussy.png"} width={300} height={300} alt="Hero portrait" />
    </div>

    {/* TEXT CONTAINER */}
    {/* <div className="h-1/2"> */}
    {/* CONTENT DIV */}
     <div  className=" flex flex-col gap-[20px] justify-center items-center">
      <div className="flex ml-[10px]">
      <h1 className="text-3xl font-bold md:text-4xl text-white">At AstroApe, we don’t just build software — we launch it into orbit</h1>
      </div>
      <div className="flex ml-[10px]">
      <p className="text-md md:text-lg text-white"> am trying to learn Web Dev with full convivtion and Allah is helping me definitely thereb is no doubt about this</p>
      </div>
       {/* BUTTONS */}
       <div className="flex gap-[10px] ">
       <Link href="/portfolio">
       <button className="w-[120px] h-[50px] flex justify-center items-center bg-purple-900 text-white rounded-md">
        View my work
       </button>
       </Link>

       <button className="w-[120px] h-[50px] flex justify-center items-center bg-black text-white rounded-md border-purple-900 border-[1px]">
        Contact me
       </button>
      </div>
      
      
     </div>

     
    {/* </div> */}
  </div>
  </motion.div>


 {/* LARGE SCREEN */}
 <motion.div className="" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>

 <div className="hidden lg:flex lg:justify-center lg:items-center bg-gradient-to-b from-black to-purple-900 min-h-screen">

{/* IMAGE CONTAINER */}
<div className="flex-1 relative">
<Image src={"/pussy.png"} width={500} height={400} alt="Hero portrait" className="lg:ml-[40px] xl:ml-[150px]"  />
</div>

{/* TEXT CONTAINER */}
 <div  className=" flex flex-col gap-[20px] flex-1 lg:mb-[80px] xl:mb-[150px]">
  {/* <div className="flex ml-[10px]"> */}
  <h1 className="lg:text-5xl xl:text-6xl font-bold text-white">At AstroApe, we don’t just build software — we launch it into orbit.</h1>
  {/* </div> */}
  {/* <div className="flex ml-[10px]"> */}
  <p className="text-lg text-white">From Concept to Cosmos</p>
  {/* </div> */}
   {/* BUTTONS */}
   <div className="flex gap-[10px] ">
   <Link href="/portfolio">
   <button className="w-[120px] h-[50px] flex justify-center items-center bg-purple-900 text-white rounded-md">
    View my work
   </button>
   </Link>

   <button className="w-[120px] h-[50px] flex justify-center items-center bg-black text-white rounded-md border-purple-900 border-[1px]">
    Contact me
   </button>
  </div>
  
  
 </div>

 
{/* </div> */}
</div>
</motion.div>

 
</>
};

export default Homepage;
