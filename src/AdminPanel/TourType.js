

import React , { useState,useEffect }from 'react'
import { storage, db } from "../Firebase/Firebase"; // Ensure these are correct
import { ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import { collection, addDoc, getDocs,doc,writeBatch } from "firebase/firestore";


const DestinationCard = ({ data, isSelected, onSelect }) => {
  const { id, name, pictureUrl, packages } = data;

  return (
    <div 
      className={`max-w-sm rounded overflow-hidden shadow-lg ${isSelected ? 'bg-red-200' : 'bg-white'}`}
      onClick={() => onSelect(id)}
    >
      <img className="w-full h-48 object-cover" src={pictureUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {packages} Packages
        </p>
      </div>
    </div>
  );
};

 



const TourType = () => {
  const [formState, setFormState] = useState({
    province: '',
    newProvince: '',
    name: '',
    mainHeading: '',
    subHeading: '',
    placeName: '',
    packages: '',
    packagesDetails: [{
      packageName: '',
      duration: '',
      destinationCover: '',
    }],
    picture: null,
    picture2: null,
  });
  const [destinations, setDestinations] = useState([]);
  const [selectedForDeletion, setSelectedForDeletion] = useState([]);


  const handleInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handlePictureChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.files[0] });
  };

  const handlePackagesChange = (index, field, value) => {
    const updatedPackages = formState.packagesDetails.map((packageDetail, i) => {
      if (i === index) {
        return { ...packageDetail, [field]: value };
      }
      return packageDetail;
    });
    setFormState({ ...formState, packagesDetails: updatedPackages });
  };

  const addPackageDetail = () => {
    setFormState({
      ...formState,
      packagesDetails: [...formState.packagesDetails, { packageName: '', duration: '', destinationCover: '' }]
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { picture, picture2, ...formData } = formState;

    let pictureUrl = '';
    if (picture) {
      const pictureRef = ref(storage, `tourTypes/${picture.name}`);
      const pictureSnapshot = await uploadBytes(pictureRef, picture);
      pictureUrl = await getDownloadURL(pictureSnapshot.ref);
    }

    let picture2Url = '';
    if (picture2) {
      const picture2Ref = ref(storage, `tourTypes/${picture2.name}`);
      const picture2Snapshot = await uploadBytes(picture2Ref, picture2);
      picture2Url = await getDownloadURL(picture2Snapshot.ref);
    }

    try {
      const docRef = await addDoc(collection(db, "TourTypes"), {
        ...formData,
        pictureUrl,
        picture2Url,
        feedback: [],
      });
      console.log("Document written with ID: ", docRef.id);
      setFormState({
        province: '',
        newProvince: '',
        name: '',
        mainHeading: '',
        subHeading: '',
        placeName: '',
        packages: '',
        packagesDetails: [{ packageName: '', duration: '', destinationCover: '' }],
        picture: null,
        picture2: null,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      const querySnapshot = await getDocs(collection(db, "TourTypes"));
      const fetchedDestinations = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDestinations(fetchedDestinations);
    };
  
    fetchDestinations();
  }, [destinations]);
  
  const handleSelectCard = (id) => {
    if (selectedForDeletion.includes(id)) {
      setSelectedForDeletion(selectedForDeletion.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedForDeletion([...selectedForDeletion, id]);
    }
  };


  const handleConfirmDelete = async () => {
    // First, delete images from Firebase Storage
    for (let id of selectedForDeletion) {
      const destination = destinations.find((dest) => dest.id === id);
      if (destination) {
        if (destination.pictureUrl) {
          const pictureRef = ref(storage, destination.pictureUrl);
          await deleteObject(pictureRef).catch((error) => console.error('Error deleting picture:', error));
        }
        if (destination.picture2Url) {
          const picture2Ref = ref(storage, destination.picture2Url);
          await deleteObject(picture2Ref).catch((error) => console.error('Error deleting picture2:', error));
        }
      }
    }
  
    // Then, delete the documents from Firestore
    const batch = writeBatch(db);
    selectedForDeletion.forEach((id) => {
      const docRef = doc(db, "TourTypes", id);
      batch.delete(docRef);
    });
  
    await batch.commit();
  
    // Update UI after deletion
    setDestinations(destinations.filter((destination) => !selectedForDeletion.includes(destination.id)));
    setSelectedForDeletion([]); // Clear selection
  };
  

  return (
    <div className="flex flex-col  p-4">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          data={destination}
          isSelected={selectedForDeletion.includes(destination.id)}
          onSelect={handleSelectCard}
        />
      ))}
    </div>

    {/* Delete Button */}
    <button
      className="bg-red-500 text-white p-2 m-2 w-[10%]"
      onClick={handleConfirmDelete}
      disabled={selectedForDeletion.length === 0}
    >
      Confirm Delete
    </button>
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="province" className="text-sm font-semibold text-gray-600">Province</label>
          <select
            id="province"
            name="province"
            value={formState.province}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select your Type</option>
            <option value="Agritourism">Agritourism</option>
            <option value="Cultural tourism">Cultural tourism</option>
            <option value="Shore Tours">Shore Tours</option>
            <option value="Atomic tourism">Atomic tourism</option>
            <option value="other">Other - Add New</option>
          </select>
          {formState.province === 'other' && (
            <input
              type="text"
              name="newProvince"
              value={formState.newProvince}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter new province"
            />
          )}
        </div>

        <div>
          <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter Destination Name"
          />
        </div>

        <div>
          <label htmlFor="packages" className="text-sm font-semibold text-gray-600">Packages</label>
          <input
            type="text"
            id="packages"
            name="packages"
            value={formState.packages}
            onChange={handleInputChange}
            className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter package details"
          />
        </div>

        <div>
          <label htmlFor="picture" className="text-sm font-semibold text-gray-600">Picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handlePictureChange}
            className="mt-1 w-full p-2 text-gray-700 rounded border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-700">Create Destination Page</h2>

                <div>
                    <label htmlFor="mainHeading" className="text-sm font-semibold text-gray-600">Main Heading</label>
                    <input
                        type="text"
                        id="mainHeading"
                        name="mainHeading"
                        value={formState.mainHeading}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Enter Main Heading"
                    />
                </div>

                <div>
                    <label htmlFor="subHeading" className="text-sm font-semibold text-gray-600">Sub Heading</label>
                    <input
                        type="text"
                        id="subHeading"
                        name="subHeading"
                        value={formState.subHeading}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Enter Sub Heading"
                    />
                </div>

                <div>
                    <label htmlFor="placeName" className="text-sm font-semibold text-gray-600">Place Name</label>
                    <input
                        type="text"
                        id="placeName"
                        name="placeName"
                        value={formState.placeName}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Enter Place Name"
                    />
                </div>

                {/* Tour Package Details Section */}
                <h2 className="text-lg font-bold text-gray-700 mt-4">Tour Package Details</h2>

                {formState.packagesDetails.map((packageDetail, index) => (
          <div key={index}>
            <input
              type="text"
              name="packageName"
              value={packageDetail.packageName}
              onChange={(e) => handlePackagesChange(index, 'packageName', e.target.value)}
              placeholder="Enter Package Name"
              className="w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300"
            />
            <input
              type="text"
              name="duration"
              value={packageDetail.duration}
              onChange={(e) => handlePackagesChange(index, 'duration', e.target.value)}
              placeholder="Enter Duration"
              className="w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300"
            />
            <input
              type="text"
              name="destinationCover"
              value={packageDetail.destinationCover}
              onChange={(e) => handlePackagesChange(index, 'destinationCover', e.target.value)}
              placeholder="Enter Destination Cover"
              className="w-full p-2 text-gray-700 bg-gray-200 rounded border border-gray-300"
            />
          </div>
        ))}

        <button type="button" onClick={addPackageDetail} className="mt-2 p-2 bg-blue-500 text-white rounded">Add More Package Details</button>



                <div>
          <label htmlFor="picture2" className="text-sm font-semibold text-gray-600">Background Picture</label>
          <input
            type="file"
            id="picture2"
            name="picture2"
            onChange={handlePictureChange}
            className="mt-1 w-full p-2 text-gray-700 rounded border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TourType
