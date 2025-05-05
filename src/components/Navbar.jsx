"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
  
];
const Navbar = () => {


  const [open,setOpen]=useState(false)

  const topVariant={
    closed:{
     rotate:0,
     
    },
    opened:{
        rotate:45,
        backgroundColor:"rgb(255,255,255)"
        
    }
  }
  const middleVariant={
    closed:{
      opacity:1
    },
    opened:{
      opacity:0
    }
  }
  const bottomVariant={
    closed:{
     rotate:0,
     
    },
    opened:{
        rotate:-45,
        backgroundColor:"rgb(255,255,255)"
        
    }
  }
  const listScreen={
    closed:{
      x:"100vw"
    },
    opened:{
       x:0,
        transition:{
          when:"beforeChildren",
          staggerChildren:0.2
       }
    }
  }
  const listItemVariants={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1
    }
  }
  return (
    <div className='flex justify-between h-12 px-4 items-center md:justify-evenly pt-[20px] bg-black'>
        
       {/* LINKS */}

        <div className='hidden md:flex gap-[20px]' >
            {links.map((link)=>{
                return  <Link key={link.title} href={link.url} className="text-white hover:text-purple-400 transition-colors">{link.title}</Link>
            })}
        </div>


         {/* LOGO */}
         <div className='relative h-[60px] w-[60px] rounded-full overflow-hidden border-2 border-purple-900'>
            <Image 
              src="/astrologo.png" 
              alt="AstroApe Logo" 
              fill
              style={{objectFit: "cover"}}
            />
         </div>

        {/* SOCIAL MEDIA LINKS */}

        <div className='hidden md:flex gap-[20px]'>
        
             <Link href="/" className="hover:opacity-80 transition-opacity">
             <Image src="/github.png" width={24} height={24} alt=""/>
             </Link>
             <Link href="/" className="hover:opacity-80 transition-opacity">
             <Image src="/instagram.png" width={24} height={24} alt="" />
             </Link>
             <Link href="/" className="hover:opacity-80 transition-opacity">
             <Image src="/facebook.png" width={24} height={24} alt="" />
             </Link>
             <Link href="https://www.linkedin.com/company/astroape-studios" className="hover:opacity-80 transition-opacity">
             <Image src="/linkedin.png" width={24} height={24} alt="" />
             </Link>
             <Link href="/" className="hover:opacity-80 transition-opacity">
             <Image src="/pinterest.png" width={24} height={24} alt=""/>
             </Link>
        </div>
        
          {/* MENU BUTTON */}
       
            <button className='flex flex-col gap-[10px] md:hidden z-[60]' onClick={()=>{setOpen(!open)}}>
              
              <motion.div div className='bg-white w-9 h-[3px] origin-left' variants={topVariant} animate={open?"opened":"closed"} ></motion.div>
              <motion.div div className='bg-white w-9 h-[3px] 'variants={middleVariant} animate={open?"opened":"closed"}></motion.div>
              <motion.div div className='bg-white w-9 h-[3px] origin-left'variants={bottomVariant} animate={open?"opened":"closed"}></motion.div>
            </button>


            {/* MOBILE LINKS */}
          {open && <motion.div  variants={listScreen} initial="closed" animate="opened"className=' absolute top-0 right-0 h-screen w-screen bg-black md:hidden flex flex-col justify-center items-center gap-[20px] z-50'>
         
          {links.map((link)=>{
                return  <motion.div  key={link.title}  variants={listItemVariants}>
                  <Link  className='text-white text-4xl hover:text-purple-400 transition-colors'key={link.title} href={link.url}>{link.title}</Link></motion.div>
            })}
            
          </motion.div>}
        
    </div>
    
  )
}

export default Navbar
