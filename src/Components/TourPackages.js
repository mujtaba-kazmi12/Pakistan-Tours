import React, { useState } from 'react';
import { ImageSection } from './ImageSection';
import CardsSection from './CardsSection';

const TourPackages = () => {
  
  return (
    <div className="flex flex-col sm:flex-row w-[100%] md:flex-row">
    
    <div className=' h-[75vh] lg:w-[30%] lg:h-[90vh]'>
  <ImageSection />
</div>

<div className='hidden lg:block w-[70%] h-[90vh]'>
  <CardsSection/>
</div>


      </div>
  );
};

export default TourPackages;
