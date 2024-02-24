import { db } from '../Firebase/Firebase'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const questionsAndAnswers = {
    "What are your opening hours?": "We are open from 9 AM to 5 PM, Monday through Friday.",
    "How can I make a purchase?": "You can make a purchase through our website or by visiting our store.",
    "What is your return policy?": "You can return products within 30 days for a full refund.",
    // Add more questions and answers as needed
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(questionsAndAnswers[question]);
    setShowContactForm(false); // Hide contact form when a question is selected
  };

  const handleContactFormChange = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleContactFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Reference to the 'customerSupport' collection in Firestore
      const collectionRef = collection(db, 'customerSupport');
      
      // Add a new document to the 'customerSupport' collection
      await addDoc(collectionRef, {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        timestamp: new Date() // Optional: add a timestamp
      });
  
      alert('Your message has been sent. We will contact you soon.');
      setContactForm({ name: '', email: '', message: '' }); // Reset form after successful submission
      setShowContactForm(false); // Optionally hide the form
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="w-80 p-6 bg-white rounded-lg shadow-lg mt-2">
          <div className="text-lg font-semibold mb-4">How can we help you?</div>
          <ul className="mb-4">
            {Object.keys(questionsAndAnswers).map((question, index) => (
              <li key={index} className="mb-2 text-blue-600 hover:text-blue-800 cursor-pointer" onClick={() => handleQuestionClick(question)}>
                {question}
              </li>
            ))}
          </ul>
          {selectedQuestion && (
            <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded">
              {selectedQuestion}
            </div>
          )}
          <button
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setShowContactForm(!showContactForm)}
          >
            Contact Support
          </button>
          {showContactForm && (
            <form onSubmit={handleContactFormSubmit} className="mt-4">
              <input type="text" name="name" value={contactForm.name} onChange={handleContactFormChange} placeholder="Your name" required className="w-full p-2 mb-2 border rounded" />
              <input type="email" name="email" value={contactForm.email} onChange={handleContactFormChange} placeholder="Your email" required className="w-full p-2 mb-2 border rounded" />
              <textarea name="message" value={contactForm.message} onChange={handleContactFormChange} placeholder="Your message" required className="w-full p-2 mb-4 border rounded" rows="3"></textarea>
              <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                Send Message
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
