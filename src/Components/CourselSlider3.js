import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const getCurrentImage = () => {
    return images[currentImageIndex];
  };

  return (
    <div className='relative w-full mt-[1%]'>
      
      

      {/* Carousel Container */}
      <div className="carousel-container mt-5 mb-5 mx-5 relative overflow-hidden">
        <div className="flex justify-center items-center">
          <img src={getCurrentImage().src} alt={getCurrentImage().alt} className="h-[40vh] w-full mx-2 rounded-md" />
        </div>
      </div>
<div className='flex flex-row w-full justify-center '>
<img src='/images/left.png' className='w-[10%] mr-[1%]' onClick={prevSlide} />
      <img src='/images/right.png' className='w-[10%]  ml-[1%]' onClick={nextSlide}/>
</div>
      
    </div>
  );
};

export default Carousel;
