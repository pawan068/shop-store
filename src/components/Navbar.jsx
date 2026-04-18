import React from 'react'
import { Link } from "react-router-dom";
import {MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";





const Navbar = () => {

    const location = false;

    return (
        <div className='bg-white shadow-2xl py-3 h-auto'>

            <div className='max-w-4xl mx-auto flex justify-center items-center'>
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
   NAVBAR          */}

   <nav></nav>



        </div>
    )
}

export default Navbar
