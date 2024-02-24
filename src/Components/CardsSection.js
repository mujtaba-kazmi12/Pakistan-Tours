import React, { useState,useEffect  } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { db } from "../Firebase/Firebase"; // Ensure this is the correct import path
import { collection, getDocs } from "firebase/firestore";
import './CardSection.css'
// Sample data for the carousel


const CardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const [cardData, setCardData] = useState([]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow < cardData.length) ? prevIndex + cardsToShow : prevIndex);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsToShow >= 0) ? prevIndex - cardsToShow : prevIndex);
  };

  useEffect(() => {
    const fetchCardData = async () => {
      const querySnapshot = await getDocs(collection(db, "CourseSlider")); // Use the correct collection name
      const fetchedCardData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCardData(fetchedCardData);
    };

    fetchCardData();
  }, []);

  const visibleCards = cardData.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="max-w-screen-xl  mt-20 ">
      <div className="bg-white p-8 pl-[11%]">
      <h1 className="text-3xl font-bold">
        Let us plan you a{' '}
        </h1>
        <h1 className="text-3xl font-bold">Perfect<span className="text-orange-500"> Pakistan Holiday</span></h1>
      <p className="text-base text-gray-700 mt-4">
        Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in Pakistan.
      </p>
    </div>
      <div className="flex justify-center gap-4">
        {visibleCards.map((card) => (
          <div key={card.id} className="flex-none w-[calc(33.333% - 1rem)] p-4 transition-transform duration-300 hover:scale-105">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-[full] h-64 overflow-hidden"> {/* Fixed size container for the image */}
                <img src={card.imageUrl} alt={card.title} className="w-[300px] h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p>{card.description}</p>
                {/* Placeholder for icon since we don't have the actual image URLs */}
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button onClick={handlePrevClick} disabled={currentIndex === 0} className="p-2 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white transition duration-300 mr-4">
          <ArrowBackIcon  />
        </button>
        <button onClick={handleNextClick} disabled={currentIndex + cardsToShow >= cardData.length} className="p-2 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white transition duration-300 ml-4">
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default CardsSection;
