import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase'; // Adjust this import to the correct path
import { collection, getDocs,deleteDoc,doc } from 'firebase/firestore';

const CustomerReportCard = ({ report,onDelete }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2">
      <label className='font-bold text-orange-600'>User Id:</label>
      <div className="font-bold text-xl mb-2">{report.name}</div>
      <label className='font-bold text-blue-600'>Email:</label>
      <p className="text-gray-700 text-base">
        {report.email}
      </p>
      <label className='font-bold text-green-600'>Issue:</label>
      <p className="text-gray-700 text-base">
        {report.message}
      </p>
      {/* You can add more details here */}
      <button 
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-[4vh]"
        onClick={() => onDelete(report.id)}
      >
        Delete
      </button>

    </div>
  );
};

const AboutUs = () => {
  const [customerReports, setCustomerReports] = useState([]);

  useEffect(() => {
    const fetchCustomerReports = async () => {
      const querySnapshot = await getDocs(collection(db, 'customerSupport'));
      setCustomerReports(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCustomerReports();
  }, [customerReports]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'customerSupport', id)); // Delete from Firestore
      setCustomerReports(customerReports.filter(report => report.id !== id)); // Remove from DOM
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="flex flex-wrap  p-4">
      {customerReports.map(report => (
        <CustomerReportCard key={report.id} report={report} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default AboutUs;
