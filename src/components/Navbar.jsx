import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import {MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Products from './../pages/Products';
import About from './../pages/About';
import Contact from './../pages/Contact';






const Navbar = () => {

    const location = false;

    return (
        <div className='bg-white flex justify-around  shadow-2xl py-3 h-auto'>

            <div className='max-w-4xl  flex  items-center'>
                {/* LOGO IS HERE */}
                <div className='flex gap-7'>
                    <Link to={'/'}><h className='font-bold'><span className='text-green-400'>Shop</span>Store</h></Link>


                    {/* LOCATION IS HERE       */}

                    <div className='text-red-400 gap-1 items-center cursor-pointer  flex'>
                       <MapPin />
                       <span className='font-semibold'>{ location? <div></div>: "Add Address" }</span>
                       <FaCaretDown />
                       
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
  
   </nav>



        </div>
    )
}

export default Navbar
