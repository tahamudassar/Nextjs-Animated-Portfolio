"use client"
import Image from "next/image";
import { animate, motion } from "framer-motion";
const Homepage = () => {
  return <>

 <motion.div className="z-50" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>
  <div className="flex flex-col items-center gap-[20px] lg:hidden">

    {/* IMAGE CONTAINER */}
    <div className="">
    <Image src={"/hero.png"} width={300} height={300} />
    </div>

    {/* TEXT CONTAINER */}
    {/* <div className="h-1/2"> */}
    {/* CONTENT DIV */}
     <div  className=" flex flex-col gap-[20px] justify-center items-center">
      <div className="flex ml-[10px]">
      <h1 className="text-3xl font-bold md:text-4xl">Crafting Digital Experiences,Designing Tommorow</h1>
      </div>
      <div className="flex ml-[10px]">
      <p className="text-md md:text-lg">I am trying to learn Web Dev with full convivtion and Allah is helping me definitely thereb is no doubt about this</p>
      </div>
       {/* BUTTONS */}
       <div className="flex gap-[10px] ">
       <button className="w-[120px] h-[50px] flex justify-center items-center bg-black text-white rounded-md">
        View my work
       </button>

       <button className="w-[120px] h-[50px] flex justify-center items-center bg-slate-100 text-black rounded-md border-black border-[1px]">
        Contact me
       </button>
      </div>
      
      
     </div>

     
    {/* </div> */}
  </div>
  </motion.div>


 {/* LARGE SCREEN */}
 <motion.div className="" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration:1}}>

 <div className="hidden lg:flex lg:justify-center lg:items-center">

{/* IMAGE CONTAINER */}
<div className="flex-1 relative">
<Image src={"/hero.png"} width={500} height={400} className="lg:ml-[40px] xl:ml-[150px]"  />
</div>

{/* TEXT CONTAINER */}
 <div  className=" flex flex-col gap-[20px] flex-1 lg:mb-[80px] xl:mb-[150px]">
  {/* <div className="flex ml-[10px]"> */}
  <h1 className="lg:text-5xl xl:text-6xl font-bold">Crafting Digital Experiences,Designing Tommorow</h1>
  {/* </div> */}
  {/* <div className="flex ml-[10px]"> */}
  <p className="text-lg">I am trying to learn Web Dev with full convivtion and Allah is helping me definitely thereb is no doubt about this</p>
  {/* </div> */}
   {/* BUTTONS */}
   <div className="flex gap-[10px] ">
   <button className="w-[120px] h-[50px] flex justify-center items-center bg-black text-white rounded-md">
    View my work
   </button>

   <button className="w-[120px] h-[50px] flex justify-center items-center bg-slate-100 text-black rounded-md border-black border-[1px]">
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
