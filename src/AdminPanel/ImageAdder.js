

import React, { useState,useEffect } from 'react';
import { auth } from "../Firebase/Firebase";
import { storage } from "../Firebase/Firebase"; // Assuming this is where you import Firebase Storage
import { db } from "../Firebase/Firebase"; // Assuming this is where you import Firestore
import { ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import { collection, addDoc ,getDocs, deleteDoc, doc } from "firebase/firestore";

const ImageGallery = () => {








  const [images, setImages] = useState([]);
  const [selectedForDeletion, setSelectedForDeletion] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "ImageSlider"));
      const fetchedImages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        url: doc.data().url,
      }));
      setImages(fetchedImages);
    };
  
    fetchImages();
  }, [images]);

  const handleSelectForDeletion = (imageId) => {
    if (selectedForDeletion.includes(imageId)) {
      setSelectedForDeletion(selectedForDeletion.filter(id => id !== imageId));
    } else {
      setSelectedForDeletion([...selectedForDeletion, imageId]);
    }
  };

  // Delete images from Firestore and Storage
  const deleteSelectedImages = async () => {
    const newImages = images.filter(image => !selectedForDeletion.includes(image.id));
    for (const imageId of selectedForDeletion) {
      const image = images.find(img => img.id === imageId);
      if (image) {
        // Delete the document from Firestore
        await deleteDoc(doc(db, "ImageSlider", image.id));
        // Delete the file from Firebase Storage
        const fileRef = ref(storage, image.url);
        await deleteObject(fileRef);
      }
    }
    setImages(newImages);
    setSelectedForDeletion([]);
    setDeleteMode(false);
  };

  const addImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    // Create a reference to 'images/your-filename'
    const imageRef = ref(storage, `images/${file.name}`);
  
    try {
      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(imageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      // Save the URL to Firestore
      const docRef = await addDoc(collection(db, "ImageSlider"), {
        url: downloadURL,
        createdAt: new Date()
      });
  
      console.log("Document written with ID: ", docRef.id);
  
      // Add the URL to your images state
      setImages([...images, downloadURL]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  

  return (
    <div className='w-full sm:w-full md:w-[50%]'>
      <div className="grid grid-cols-3 gap-1">
      
         {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt=""
              className="w-full h-full object-cover rounded-md shadow-lg"
              onClick={() => deleteMode && handleSelectForDeletion(image.id)}
              style={{ opacity: selectedForDeletion.includes(image.id) ? 0.5 : 1 }}
            />
            {deleteMode && selectedForDeletion.includes(image.id) && (
              <div className="absolute top-0 right-0 bg-red-500 text-white p-1">Selected</div>
            )}
          </div>
        ))}
      </div>

      <button className="bg-blue-500 text-white p-2 m-2" onClick={() => setDeleteMode(!deleteMode)}>
        {deleteMode ? 'Cancel' : 'Delete Images'}
      </button>

      {deleteMode && (
        <button
          className="bg-red-500 text-white p-2 m-2"
          onClick={deleteSelectedImages}
          disabled={selectedForDeletion.length === 0}
        >
          Confirm Delete
        </button>
      )}

      <input type="file" onChange={addImage} />
    </div>
  );
};

export default ImageGallery;
