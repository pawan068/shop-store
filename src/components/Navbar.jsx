import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import {MapPin } from "lucide-react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { IoCart ,IoClose } from "react-icons/io5";
import Products from './../pages/Products';
import About from './../pages/About';
import Contact from './../pages/Contact';

import { useUser, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useState } from 'react';





const Navbar = ({location}) => {

const [openDrop,setOpenDrop]=useState(false)
const toggleDrop=()=>{
  setOpenDrop(!openDrop)
}

const [openMenu,setOpenMenu]=useState(false)
const toggleMenu=()=>{
  setOpenMenu(!openMenu)
}

  const { isSignedIn } = useUser()



    return (
        <div className='bg-white flex justify-between items-center w-[100%]  shadow-2xl py-3 h-auto px-4 md:px-8'>

            <div className='  flex  items-center'>


{/* LOGO IS HERE */}

                <div className='flex items-center gap-3 md:gap-7'>
                    <Link to={'/'}><h1 className='font-bold text-sm md:text-base'><span className='text-green-400'>Shop</span>Store</h1></Link>


   {/* LOCATION IS HERE       */}

                    <div className='text-red-400 gap-1 items-center cursor-pointer flex relative max-w-[140px] md:max-w-none'>
                       <MapPin className='w-4 h-4 md:w-5 md:h-5'/>
                       <span className='font-semibold text-[10px] md:text-sm truncate'>{ location? <div className='-space-y-2'>
                        <p className='truncate'>{location.country}</p>
                        <p className='truncate'>{location.city}</p>
                      
                       </div>: "Add Address" }</span>
                       <FaCaretDown onClick={toggleDrop} />
                       
                    
                     {
                      openDrop ? <div className='absolute top-full mt-2 left-0 w-[200px] sm:w-[240px] md:w-[260px] z-50 border p-2 rounded-md bg-white shadow flex items-center justify-center'>
                        <button className='font-semibold text-sm cursor-pointer bg-red-100 w-[80%] py-2 h-[100%]'>Change Location</button>
                        <IoClose className='cursor-pointer text-lg  w-[20%] ' onClick={toggleDrop} />
                     </div> : null
                     }

                    </div>
                     


                </div>
            </div>
{/* 
 NAVBAR       
    */}

   <nav className='flex gap-5 items-center '>



    <ul className='hidden md:flex gap-7 items-center text-sm  font-semibold list-none'>
     <NavLink to={"/"} className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400" : "text-black"} hover:text-green-500 transition-all cursor-pointer`}> <li>Home</li> </NavLink>
     <NavLink to={'/Products'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400" : "text-black"} hover:text-green-500 transition-all cursor-pointer`}> <li>Products</li> </NavLink>
     <NavLink to={'/About'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400" : "text-black"} hover:text-green-500 transition-all cursor-pointer`}> <li>About</li > </NavLink>
     <NavLink to={'/Contact'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400" : "text-black"} hover:text-green-500 transition-all cursor-pointer`}> <li>Contact</li> </NavLink>
   </ul>



{/* ---------------- MOBILE MENU ---------------- */}

{openMenu && <div className='fixed inset-0 bg-black/40 z-40 md:hidden' onClick={toggleMenu}></div>}

<div className={`fixed top-0 left-0 h-full w-[75%] bg-white z-50 p-6 transition-all duration-300 md:hidden
${openMenu ? "translate-x-0" : "-translate-x-full"}
`}>

<div className='flex justify-between items-center mb-6'>
<h1 className='font-bold text-lg'><span className='text-green-400'>Shop</span>Store</h1>
<IoClose className='text-2xl cursor-pointer' onClick={toggleMenu} />
</div>

<ul className='flex flex-col gap-6 text-sm font-semibold list-none'>

<NavLink to={"/"} onClick={toggleMenu} className={({isActive})=>`${isActive ? "text-green-500" : "text-black"} hover:text-green-500 transition-all`}> <li>Home</li> </NavLink>
<NavLink to={'/Products'} onClick={toggleMenu} className={({isActive})=>`${isActive ? "text-green-500" : "text-black"} hover:text-green-500 transition-all`}> <li>Products</li> </NavLink>
<NavLink to={'/About'} onClick={toggleMenu} className={({isActive})=>`${isActive ? "text-green-500" : "text-black"} hover:text-green-500 transition-all`}> <li>About</li></NavLink>
<NavLink to={'/Contact'} onClick={toggleMenu} className={({isActive})=>`${isActive ? "text-green-500" : "text-black"} hover:text-green-500 transition-all`}> <li>Contact</li></NavLink>

</ul>

</div>

{/* --------------------------------------------- */}



   {/* Cart is HERE */}

<Link to={'/Cart'} className='flex relative z-10'> 
 <IoCart className=' h-5 w-5 md:h-7 md:w-7' />
 <span className='bg-green-500 text-white rounded-[50%] px-1 text-[10px] md:text-sm absolute -top-2 -right-3'>0</span>
</Link>



{/* SIGN IN BUTTON */}

 <div className='z-10'>
  {!isSignedIn ? (
    < >
      <SignInButton className='bg-green-400 cursor-pointer text-white text-xs md:text-sm font-bold px-2 py-1 rounded-[7px] hover:bg-green-500' />
      
    </>
  ) : (
    <UserButton />
  )}
</div>



{/* ---------------- HAMBURGER ---------------- */}

<div className='md:hidden z-10'>
<FaBars className='text-lg cursor-pointer' onClick={toggleMenu} />
</div>



   </nav>



        </div>
    )
}

export default Navbar