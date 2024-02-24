
import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import { db } from "../Firebase/Firebase"; // Ensure the path is correct
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../Firebase/Firebase"; // Ensure this path is correct
import { onAuthStateChanged } from 'firebase/auth';
import Signin from '../pages/SignIn';
const SignleReviewforType = ({ toggleModal, docId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const docRef = doc(db, "TourTypes", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const feedbackData = docSnap.data().feedback || [];
        setReviews(feedbackData);
      } else {
        console.log("No such document!");
      }
    };

    if (docId) {
      fetchReviews();
    }
  }, [docId]);

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user); // Set true if user is signed in, otherwise false
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  const handleAddClick = () => {
    if (isUserSignedIn) {
      toggleModal(); // Open AddReviewForm for signed-in users
    } else {
      setShowSignInModal(true); // Show SignIn modal for non-signed-in users
    }
  };
  

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="bg-white shadow rounded-lg p-6  lg:w-4/5">
   {showSignInModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
    <Signin onClose={() => setShowSignInModal(false)} />
  </div>
)}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <button onClick={handleAddClick}>
  <img src='/images/plus.png' className='w-7 h-7' alt="Add"/>
</button>
      </div>
     
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center space-x-1">
          <ReactStars key={averageRating} value={averageRating} edit={false} size={34} />
          
          <span className="text-2xl font-semibold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600 text-xl">({reviews.length} Reviews)</span>
        </div>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="border-b last:border-b-0 pb-4 mb-4 flex justify-between items-start">
          <div className="flex space-x-4">
            <img src={'/images/user.png'} alt={review.author} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold">{review.author}</span>
              </div>
              <ReactStars value={review.rating} edit={false} size={24} />
              <p className="text-gray-600 mt-2">{review.text}</p>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex flex-col items-end">
            <FaRegCalendarAlt className="mb-1" />
            <span>{review.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignleReviewforType;

