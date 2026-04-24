import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import {MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
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

  const { isSignedIn } = useUser()



    return (
        <div className='bg-white flex justify-around  shadow-2xl py-3 h-auto'>

            <div className='max-w-4xl  flex  items-center'>


{/* LOGO IS HERE */}

                <div className='flex items-center gap-7'> 
                    <Link to={'/'}><h1 className='font-bold'><span className='text-green-400'>Shop</span>Store</h1></Link>


   {/* LOCATION IS HERE       */}

                    <div className='text-red-400 gap-1 items-center cursor-pointer  flex relative'>
                       <MapPin />
                       <span className='font-semibold'>{ location? <div className='-space-y-2'>
                        <p>{location.city_district}</p>
                        <p>{location.city}</p>
                      
                       </div>: "Add Address" }</span>
                       <FaCaretDown onClick={toggleDrop} />
                       
                    
                     {
                      openDrop ? <div className='absolute top-full mt-2 left-0 w-[200px] sm:w-[240px] md:w-[260px] z-50 border p-1 rounded-md bg-white shadow flex items-center justify-center'>
                        <button className='font-semibold text-sm cursor-pointer bg-red-100 w-[80%] py-1 h-[100%]'>Change Location</button>
                        <IoClose className='cursor-pointer text-lg  w-[20%] ' onClick={toggleDrop} />
                     </div> : null
                     }

                    </div>
                     


                </div>
            </div>
{/* 
 NAVBAR       
    */}

   <nav className='flex gap-7 items-center '>



    <ul className='flex gap-7 items-center text-sm  font-semibold'>
     <NavLink to={"/"} className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400 transition-all":"text-black"} cursor-pointer`}> <li>Home</li> </NavLink>
     <NavLink to={'/Products'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400 transition-all":"text-black"} cursor-pointer`}> <li>Products</li> </NavLink>
     <NavLink to={'/About'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400 transition-all":"text-black"} cursor-pointer`}> <li>About</li > </NavLink>
     <NavLink to={'/Contact'}  className={({isActive})=>`${isActive ? "text-green-500 border-b-2 border-green-400 transition-all":"text-black"} cursor-pointer`}> <li>Contact</li> </NavLink>
   </ul>

   {/* Cart is HERE */}

<Link to={'/Cart'} className='flex relative'> 
 <IoCart className=' h-7 w-7' />
 <span className='bg-green-500 text-white rounded-[50%] px-1.5 text-sm absolute -top-2 -right-3'>0</span>
</Link>



{/* SIGN IN BUTTON */}

 <div>
  {!isSignedIn ? (
    < >
      <SignInButton className='bg-green-400 cursor-pointer text-white font-bold px-2 py-1 rounded-[7px] hover:bg-green-500' />
      
    </>
  ) : (
    <UserButton />
  )}
</div>



  
   </nav>



        </div>
    )
}

export default Navbar