"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../components/Logo.jsx'; // Example path if `Logo.jsx` is in a `components` folder

const links=[
  {
    url:'/',
    title:'Home'
  },
  {
    url:'/about',
    title:'About'
  },
  {
    url:'/portfolio',
    title:'Portfolio'
  },
  
  {
    url:'/contact',
    title:'Contact'
  }
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
      {links.map(link=>(
          <Link href={link.url} key={link.title}>{link.title}</Link>
          ))}
      </div>
      {/* LOGO */}
      <Logo/>
      {/* SOCIALS */}
      
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/N0Algorithm">
        <Image src="/github.png" width={25} height={25} alt="GitHub logo" />
         </Link>
         <Link href="/">
        <Image src="/facebook.png" width={25} height={25} alt="Facebook logo" />
         </Link>
         <Link href="https://www.instagram.com/heyitsakshayy/">
        <Image src="/instagram.png" width={25} height={25} alt="Instagram logo" />
         </Link>
         <Link href="https://www.linkedin.com/in/akshay-rawat-034738229/">
        <Image src="/linkedin.png" width={25} height={25} alt="Linkedin logo" />
         </Link>
         <Link href="https://x.com/chaiworks247">
        <Image src="/twitter.png" width={25} height={25} alt="Twitter logo" />
         </Link>
      </div>
      {/*Responsive Menu*/}
     <div className="md:hidden">
      {/*Menu Button*/}
      <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen((prev) => !prev)}>
        <div className="w-full h-1 bg-black rounded"></div>
        <div className="w-full h-1 bg-black rounded"></div>
        <div className="w-full h-1 bg-black rounded"></div> 
      </button>
      {/*Menu List*/}
      {open && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl'>
        {links.map((link)=>(
          <Link href={link.url} key={link.title}>{link.title}</Link>
          ))}
      </div>
    )}
     </div>
    </div>

  )
}

export default Navbar