import React, { useState,useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from '../Components/Footer'
import WeatherWidget from '../Components/WeatherWidget'
import SignleReview from '../Components/SignleReview'
import AddReviewForm from '../Components/AddReviewForm'
import { useSearchParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore';
import { db } from "../Firebase/Firebase"; 
import { GoogleMap, useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";

const DestinationPage = () => {
  let [searchParams] = useSearchParams();
  const mainHeading = searchParams.get('mainHeading');
  const subHeading = searchParams.get('subHeading');
  const placeName = searchParams.get('placeName');
  
  const docId = searchParams.get('id'); // Get the ID from the search parameters
 
  const [packageDetails,setPackageDetails]=useState([])
  const [image2,setimage2]=useState('')

 

  useEffect(() => {
    const fetchDestinationDetails = async () => {
      const docRef = doc(db, 'TourDestination', docId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPackageDetails(data.packagesDetails || []);
        setimage2(data.picture2Url)
      } else {
        console.log('No such document!');
      }
    };
  
    if (docId) {
      fetchDestinationDetails();
    }
  }, [docId]);


  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



      const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 30.3753, lng: 69.3451 });
  const searchBoxRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAD7Iy0_6uaC22bEqDLpdcpSB8PyIqC1Sk", // Replace with your API key
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  const onMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onSearchBoxLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    const place = places[0];

    if (place && place.geometry) {
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      map.panTo({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
    }
  };
    
  return (
    <div>
<Navbar/>
 <div className="bg-cover bg-center text-white py-24 px-4 h-[50vh]" style={{ backgroundImage: `url(${image2})` }}>
 <div className="max-w-7xl px-[5%] pt-[3%]">
    <div className="text-4xl md:text-6xl font-bold text-shadow-default">{mainHeading}</div>
      <p className="text-xl md:text-2xl mt-4 text-shadow-default">
          {subHeading}
        </p>
      </div>
</div>

<div className='w-[90%] mt-[5%]'>
<div className="flex max-w-7xl mx-auto mt-10">
      {/* Content Section */}
      <div className="flex-1 px-5">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">Welcome to</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">{placeName} Tour Packages</h1>
        <p className="mb-4">
          Explore Leh-Ladakh, the land of high passes, mountains, and scenic lakes, with affordable
          Ladakh tour packages offered by Tour My India. Ladakh is the world's most scenic destination,
          where you have the opportunity to experience adventure, nature, culture, and pilgrimage all
          together in one trip. Who would not want to visit such an amazing destination once in their
          lifetime?
        </p>
        {/* ... additional content ... */}
        <button
          className="mt-4 text-orange-600 hover:text-blue-600"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          Read More {isDropdownOpen ? '▲' : '▼'}
        </button>

        {/* Dropdown content */}
      </div>

      {/* Sidebar Section */}
      <div className="w-64">
        <div className="sticky top-20 md:p-5 border-l">
          <WeatherWidget placeName={placeName}/>
        </div>
      </div>
    </div>
</div>
<div className='flex  mt-[4%] w-full pl-[12%] hidden md:block mb-[10%]'>
{isDropdownOpen && (
          <div className="mt-4 w-[60%] ">
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white border-collapse border border-gray-300">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Package Name</th>
        <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Duration</th>
        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Destinations Covered</th>
      </tr>
    </thead>
  
    <tbody className="text-gray-700">
  {packageDetails.length > 0 ? (
    packageDetails.map((tour, index) => (
      <tr key={index} className="border-b border-gray-300">
        <td className="w-1/3 py-1 px-4 border border-gray-300 text-orange-600">{tour.packageName}</td>
        <td className="w-1/4 py-1 px-4 border border-gray-300">{tour.duration}</td>
        <td className="py-1 px-4 border border-gray-300">{tour.destinationCover}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3" className="text-center py-1 px-4 border border-gray-300">No package details available</td>
    </tr>
  )}
</tbody>

  </table>
</div>
</div>
)}
</div>


<div className='flex  mt-[10%] w-full  sm:block md:hidden lg:hidden xl:hidden '>
{isDropdownOpen && (
          <div className="mt-4 w-[100%] ">
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white border-collapse border border-gray-300">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Package Name</th>
        <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Duration</th>
        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border border-gray-300">Destinations Covered</th>
      </tr>
    </thead>
    
  <tbody className="text-gray-700">
  {packageDetails.length > 0 ? (
    packageDetails.map((tour, index) => (
      <tr key={index} className="border-b border-gray-300">
        <td className="w-1/3 py-1 px-4 border border-gray-300 text-orange-600">{tour.packageName}</td>
        <td className="w-1/4 py-1 px-4 border border-gray-300">{tour.duration}</td>
        <td className="py-1 px-4 border border-gray-300">{tour.destinationCover}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3" className="text-center py-1 px-4 border border-gray-300">No package details available</td>
    </tr>
  )}
</tbody>

  </table>
</div>
</div>
)}
</div>


<div className=" mt-[10vh] mb-[15vh] md:mt-0 md:mb-0 container mx-auto ">
      <div className="w-full h-[50vh] ">
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={8}
          onLoad={onMapLoad}
        >
          {/* Search Box */}
          <div className="absolute top-0 left-0 z-10 pt-2">
            <StandaloneSearchBox
              onLoad={onSearchBoxLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Search location"
                className="w-full p-2 border-2 border-gray-300"
              />
            </StandaloneSearchBox>
          </div>
        </GoogleMap>
      </div>
    </div>


<div className='w-full flex justify-center items-center mb-[4%] mt-[10%]'>
            <h1 className='text-4xl text-orange-600'>What They Say About Destination</h1>
</div>
        
<div className="flex justify-center items-center mb-[10%] ">

<SignleReview toggleModal={toggleModal} docId={docId}/>

</div>

{isOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
<AddReviewForm toggleModal={toggleModal} docId={docId}/>
</div>)}




<Footer/>
    </div>
   
  )
}

export default DestinationPage
