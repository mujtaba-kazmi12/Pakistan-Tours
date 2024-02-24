import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from '../Firebase/Firebase'

 
const AddReviewForm = ({ onSubmit,toggleModal,docId }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const review = {
      author,
      text,
      rating,
      date,
    };
  
    // Get a reference to the Firestore document
    const docRef = doc(db, "TourDestination", docId);
  
    // Update the document
    try {
      await updateDoc(docRef, {
        feedback: arrayUnion(review)
      });
  
      console.log("Review added successfully");
  
      // Clear the form fields
      setAuthor('');
      setText('');
      setRating(0);
      setDate('');
      
      // If there's a callback function provided, call it
      if (onSubmit) {
        onSubmit(review);
      }
  
      // Close modal or reset any states if necessary
      if (toggleModal) {
        toggleModal();
      }
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };
  

  return (
    <div className="w-4/5 sm:w-[30%] mx-auto p-6 bg-white shadow rounded-lg">
           
           <div className='w-[100%] flex justify-end align-center'> 
           <button onClick={toggleModal} className="">
       <img src='/images/deletebutton.png' className='w-5 h-5'/>
      </button>
           </div>

        
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">
            Your Review
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Write your review"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Rating
          </label>
          <ReactStars
            count={5}
            onChange={(newRating) => setRating(newRating)}
            size={24}
            activeColor="#ffd700"
            value={rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date of Visit
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
