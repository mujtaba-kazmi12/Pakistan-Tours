// Navbar.js

import React, { useState,useEffect } from 'react';
import { auth } from '../Firebase/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
const Navbar = ({toggleModal,toggleModal2}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };



  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-50 p-3 border  z-50 relative">
      <div className=" flex justify-between items-center h-10">
        {/* Logo */}
        <div className=' bg-gray-50 '>
          <img src='/images/logo2.png ' className="w-20  h-10 object-contain"/>
        </div>

     


<div className="hidden lg:flex space-x-6 ml-60 ">
  <div className="relative group ">
    <a href="#" className="text-black hover:text-orange-300 font-semibold ">Destination</a>
    
    <div className="absolute hidden bg-gray-50 p-2 space-y-2 border rounded-md group-hover:block w-[300%]  ">
      <div className="text-black flex ">
        <div className=' semibold font-semibold mb-5 mt-3'>Menu 1</div>
        <div className=' ml-7 font-semibold mt-3'>Menu 2</div>
        <div className='ml-7 font-semibold mt-3'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row   ">
      <div className='hover:text-orange-300 semibold cursor-pointer'>Menu 3</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer' >Menu 4</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 semibold cursor-pointer'>Menu 5</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 6</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
</div>
    
    
  </div>
  <div className="relative group ">
    <a href="#" className="text-black hover:text-orange-300 font-semibold ">Holiday Ideas</a>
    
    <div className="absolute hidden bg-gray-50 p-2 space-y-2 border rounded-md group-hover:block w-[250%]  ">
      <div className="text-black flex ">
      <div className=' semibold font-semibold mb-5 mt-3'>Menu 1</div>
        <div className=' ml-7 font-semibold mt-3'>Menu 2</div>
        <div className='ml-7 font-semibold mt-3'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 3</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer '>Menu 4</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 5</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 6</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
</div>
</div>


<div className="relative group ">
    <a href="#" className="text-black hover:text-orange-300 font-semibold ">Packages</a>
    
    <div className="absolute hidden bg-gray-50 p-2 space-y-2 border rounded-md group-hover:block w-[400%]  ">
      <div className="text-black flex ">
      <div className=' semibold font-semibold mb-5 mt-3'>Menu 1</div>
        <div className=' ml-7 font-semibold mt-3'>Menu 2</div>
        <div className='ml-7 font-semibold mt-3'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 3</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 4</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer '>Menu 5</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 6</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
</div>
</div>

<div className="relative group ">
    <a href="#" className="text-black hover:text-orange-300 font-semibold ">Places to Stay</a>
    
    <div className="absolute hidden bg-gray-50 p-2 space-y-2 border rounded-md group-hover:block w-[270%]  ">
      <div className="text-black flex ">
      <div className=' semibold font-semibold mb-5 mt-3'>Menu 1</div>
        <div className=' ml-7 font-semibold mt-3'>Menu 2</div>
        <div className='ml-7 font-semibold mt-3'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 3</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 4</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 5</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 6</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
</div>
</div>
  

<div className="relative group ">
    <a href="#" className="text-black hover:text-orange-300 font-semibold ">Weekend Getways</a>
    
    <div className="absolute hidden bg-gray-50 p-2 space-y-2 border rounded-md group-hover:block w-[200%]  ">
      <div className="text-black flex ">
      <div className=' semibold font-semibold mb-5 mt-3'>Menu 1</div>
        <div className=' ml-7 font-semibold mt-3'>Menu 2</div>
        <div className='ml-7 font-semibold mt-3'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 3</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 4</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
      <div className="text-black flex flex-row  ">
      <div className='hover:text-orange-300 cursor-pointer'>Menu 5</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 6</div>
        <div className='hover:text-orange-300 ml-7 cursor-pointer'>Menu 3</div>
      </div>
</div>
</div>
  
</div>


        {/* Spacer */}
        <div className="lg:flex-grow"></div>

        {/* Sign-in and Sign-up buttons */}
        <div className="hidden sm:hidden md:hidden lg:flex lg:items-center md-hidden">
        {!isUserLoggedIn && (
          <>
            <a href="#" className="text-black mr-4 font-semibold hover:text-orange-300" onClick={toggleModal}>Sign In</a>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={toggleModal2}>Sign Up</a>
          </>
        )}
        {isUserLoggedIn && (
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={handleLogout}>
            Logout
          </button>
        )}
        </div>

        {/* Hamburger for small screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Responsive Navigation links for small screens */}
        <div
          className={`lg:hidden absolute top-16 right-0 bg-gray-50 p-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="/" className="text-black block py-2 hover:text-orange-300 font-semibold">Home</a>
          <a href="#" className="text-black block py-2 hover:text-orange-300 font-semibold" >About</a>
          <a href="#" className="text-black block py-2 hover:text-orange-300 font-semibold">Services</a>
          <a href="#" className="text-black block py-2 hover:text-orange-300 font-semibold">Contact</a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

