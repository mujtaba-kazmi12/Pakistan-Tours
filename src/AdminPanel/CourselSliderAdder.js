import React, { useState,useEffect } from 'react'
import { storage, db } from "../Firebase/Firebase"; // Ensure this is the correct import path
import { ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import { collection, addDoc,getDocs,deleteDoc, doc } from "firebase/firestore";

const CourselSliderAdder = () => {
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        image: null,
      });
      const [selectedForDeletion, setSelectedForDeletion] = useState([]);
      const [deleteMode, setDeleteMode] = useState(false);

      const handleInputChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
      };
    
      const handleImageChange = (event) => {
        setFormState({ ...formState, image: event.target.files[0] });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const { title, description, image } = formState;

        // First, upload the image to Firebase Storage
        if (image) {
            const imageRef = ref(storage, `courseSliderImages/${image.name}`);
            const snapshot = await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(snapshot.ref);

            // Then, save the title, description, and image URL to Firestore
            try {
                const docRef = await addDoc(collection(db, "CourseSlider"), {
                    title,
                    description,
                    imageUrl,
                });
                console.log("Document written with ID: ", docRef.id);
                // Reset form state and potentially give user feedback about success
                setFormState({
                    title: '',
                    description: '',
                    image: null,
                });
            } catch (error) {
                console.error("Error adding document to CourseSlider: ", error);
                // Handle errors, such as by displaying an error message to the user
            }
        } else {
            console.error("No image file selected");
            // Handle the case where the image was not provided
        }
    };
    const [courseSliders, setCourseSliders] = useState([]);

    useEffect(() => {
        const fetchCourseSliders = async () => {
            const querySnapshot = await getDocs(collection(db, "CourseSlider"));
            setCourseSliders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchCourseSliders();
    }, [formState]);




    const handleSelectForDeletion = (id) => {
      if (selectedForDeletion.includes(id)) {
          setSelectedForDeletion(selectedForDeletion.filter(item => item !== id));
      } else {
          setSelectedForDeletion([...selectedForDeletion, id]);
      }
  };

  // Function to delete selected cards
  const handleDeleteSelected = async () => {
      for (const id of selectedForDeletion) {
          const sliderToDelete = courseSliders.find(slider => slider.id === id);
          if (sliderToDelete) {
              // Delete the document from Firestore
              await deleteDoc(doc(db, "CourseSlider", id));
              // Create a reference to the Storage file and delete
              const imageRef = ref(storage, sliderToDelete.imageUrl);
              await deleteObject(imageRef);
          }
      }
      // Fetch the updated list of course sliders
      const querySnapshot = await getDocs(collection(db, "CourseSlider"));
      setCourseSliders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      // Reset the deletion selections
      setSelectedForDeletion([]);
      setDeleteMode(false);
  };




  return (
    <div> 



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[50%]">
                {courseSliders.map(slider => (
                    <div key={slider.id} className={`relative bg-white rounded-lg shadow-md overflow-hidden ${deleteMode ? "border-2" : ""} ${selectedForDeletion.includes(slider.id) ? "border-red-500" : ""}`}>
                        {deleteMode && (
                            <button
                                onClick={() => handleSelectForDeletion(slider.id)}
                                className={`absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-700 transition ${selectedForDeletion.includes(slider.id) ? "bg-red-700" : ""}`}
                            >
                                {selectedForDeletion.includes(slider.id) ? "Deselect" : "Select"}
                            </button>
                        )}
                        <img src={slider.imageUrl} alt={slider.title} className="w-full h-64 object-cover"/>
                        <div className="p-4">
                            <h5 className="text-lg font-bold">{slider.title}</h5>
                            <p className="text-sm text-gray-600">{slider.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex mt-4'>
            {!deleteMode && (
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    onClick={() => setDeleteMode(true)}
                >
                    Delete Images
                </button>
            )}
            <div className="flex justify-end space-x-4 p-4">
                {deleteMode && (
                    <>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            onClick={handleDeleteSelected}
                            disabled={selectedForDeletion.length === 0}
                        >
                            Confirm Delete
                        </button>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={() => setDeleteMode(!deleteMode)}
                        >
                            Cancel Delete
                        </button>
                    </>
                )}
                </div>
            </div>
           


<div className="flex flex-col p-4">
      <form
        className="w-full max-w-lg bg-white-A700 rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title" className="text-sm font-semibold text-gray-600">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter title"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="text-sm font-semibold text-gray-600">Description</label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Enter description"
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="image" className="text-sm font-semibold text-gray-600">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 w-full p-2 text-gray-700 rounded border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
         Add
        </button>
      </form>
    </div>
    </div>
   
  )
}

export default CourselSliderAdder
