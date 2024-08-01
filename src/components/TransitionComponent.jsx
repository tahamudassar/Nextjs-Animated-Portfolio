"use client"
import React from 'react'
import Navbar from './Navbar'
import {  motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionComponent = ({children}) => {

    const pathname=usePathname()
  return (
    <AnimatePresence mode="wait">
    <div  key={pathname}className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-200">

    <motion.div className=' h-screen w-screen fixed bg-black rounded-b-[100px] z-40' animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{ease:"easeOut" ,duration:0.5}}/>

    <motion.div className=' fixed m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit text-white text-8xl z-50' initial={{opacity:1}} animate={{opacity:0}} transition={{duration:0.8,ease:"easeOut"} }>
        {pathname.substring(1)}
    </motion.div>

    <motion.div className=' h-screen w-screen fixed bg-black rounded-t-[100px] z-40 bottom-0' inital={{height:"140vh"}} animate={{height:"0vh"}} transition={{ease:"easeOut", delay:0.5}}/>
   
    <Navbar/>
    {children}
    </div>
    </AnimatePresence>
  )
}

export default TransitionComponent
