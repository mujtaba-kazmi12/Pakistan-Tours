import React from 'react'
import Navbar from "./Navbar";
import TourPackages from "../Components/TourPackages";
import SignIn from "./SignIn";
import { useState } from "react";
import SignUp from "./SinUp";
import Carousel from "../Components/CoruselSlider";
import Carousel2 from "../Components/CourselSlider2";
import WhyChooseUs from "../Components/WhyChooseUs";
import Carousel3 from "../Components/CourselSlider3";
import Footer from "../Components/Footer";
import ChatBot from '../Components/Chatbot';
const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleModal2 = () => setIsOpen2(!isOpen2);
    const closeModal = () => setIsOpen(false);
  
    const images = [
      { src: '/images/Sliderimg1.webp', alt: 'Description of image 1' },
      { src: '/images/Sliderimg2.webp', alt: 'Description of image 2' },
      { src: '/images/Sliderimg3.webp', alt: 'Description of image 1' },
      { src: '/images/Sliderimg4.webp', alt: 'Description of image 1' },
      { src: '/images/hill.webp', alt: 'Description of image 1' },
      { src: '/images/Sliderimg1.webp', alt: 'Description of image 1' },
      { src: '/images/hill.webp', alt: 'Description of image 1' },
      { src: '/images/Sliderimg4.webp', alt: 'Description of image 1' },
      
      // Add more image objects here
    ];
  return (
    <div>
    <Navbar toggleModal={toggleModal} toggleModal2={toggleModal2}/>
    <TourPackages/>
    {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
    <SignIn toggleModal={closeModal} onClose={() => setIsOpen(false)} />
  </div>
)}
{isOpen2 && (<div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
<SignUp toggleModal2={toggleModal2}/>
</div>)}


<div className="flex flex-col w-full items-center mt-[8%]">
  <div className="w-full lg:w-[70%] sm:w-[100%]">
    <h1 className="text-2xl font-bold ml-[2%]">
      Top Trending <span className="text-orange-500"> Pakistan</span> Tour Types
    </h1>
    <Carousel images={images} />
  </div>
</div>





<div className="flex flex-col w-full md:w-[100%] items-center mt-[8%]">
  <div className="w-full md:w-[70%] sm:w-[100%] ">
    <h1 className="text-2xl font-bold ml-[2%] ">
      Top Trending <span className="text-orange-500"> Pakistan</span> Tour Destinations
    </h1>
    <Carousel2 />
  </div>
</div>
<WhyChooseUs/>
<Footer/>
<ChatBot/>

</div>
  )
}

export default HomePage
