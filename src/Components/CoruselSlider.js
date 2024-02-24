import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/Firebase"; // Ensure this is the correct import path
import { collection, getDocs, query, where } from "firebase/firestore";



const NavBar = ({ regions, currentRegion, onRegionClick }) => (
  <div className="flex space-x-4 border-b-2 p-3">
    {regions.map((region) => (
      <h2
        key={region}
        className={`cursor-pointer pb-2 ${
          currentRegion === region ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
        }`}
        onClick={() => onRegionClick(region)}
      >
        {region}
      </h2>
    ))}
  </div>
);









  const DestinationCard = ({ id, name, packages, src, mainHeading, subHeading, placeName ,src2 }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
      
      const queryParams = new URLSearchParams({
        id,
        name,
        packages,
        src,
        mainHeading, 
        subHeading,
        placeName,
        src2,
        
      }).toString();
  
      navigate(`/destinationtype?${queryParams}`);
    };
    
   return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-[3%]" onClick={handleCardClick}>
      <div className="relative group">
        <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" src={src} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-sm">{packages} PACKAGES</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm text-gray-500">{packages} PACKAGES</span>
      </div>
    </div>
  );
};



const Destinations = ({ destinations }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {destinations.map((dest, index) => (
      <DestinationCard key={index} {...dest} />
    ))}
  </div>
);


const Carousel = () => {
  const [destinationsData, setDestinationsData] = useState({});
  const [currentRegion, setCurrentRegion] = useState("");

 

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationsByRegion = {};
    
      const snapshot = await getDocs(collection(db, "TourTypes"));
      snapshot.forEach((doc) => {
        const data = doc.data();
       
        
        const region = data.province; // Replace 'province' with your specific field name for regions
        if (!destinationsByRegion[region]) {
          destinationsByRegion[region] = [];
        }
        destinationsByRegion[region].push({
          id: doc.id,
          name: data.name,
          packages: data.packages,
          src: data.pictureUrl,
          mainHeading: data.mainHeading,
          subHeading: data.subHeading,
          placeName: data.placeName,
          src2: data.picture2Url,
           // Assuming 'packagesDetails' is an array
        });
      });
    
      // Log the entire destinations by region object
      setDestinationsData(destinationsByRegion);
      const firstRegion = Object.keys(destinationsByRegion)[0];
      setCurrentRegion(firstRegion);
    };
    
    fetchDestinations();
  }, []);
  
  


  const regions = Object.keys(destinationsData);

  return (
    <div className="max-w-screen-xl mx-auto">
      <NavBar regions={regions} currentRegion={currentRegion} onRegionClick={setCurrentRegion} />
      {currentRegion && <Destinations destinations={destinationsData[currentRegion]} />}
    </div>
  );
};

export default Carousel;


