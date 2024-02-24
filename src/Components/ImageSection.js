
import React, { useState, useEffect } from 'react';
import { db } from "../Firebase/Firebase"; // Ensure this is the correct import path
import { collection, getDocs } from "firebase/firestore";

export const ImageSection = () => {
  const [images, setImages] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "ImageSlider"));
      const fetchedImages = querySnapshot.docs.map(doc => doc.data().url);
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]); 

  return (
    
    <div className="w-[100%] overflow-hidden ">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Slideshow Image"
          className={`w-[100%] h-auto transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: `${index === currentImageIndex ? '500ms' : '0ms'}`,
            position: 'relative',
            display: index === currentImageIndex ? 'block' : 'none'
          }}
        />
      ))}
    </div>
  );
};
