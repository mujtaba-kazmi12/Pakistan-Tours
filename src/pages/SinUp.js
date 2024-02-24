import React,{useState} from "react";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = ({toggleModal2}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const handleSignUp = async () => {
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account created successfully!", userCredential);
            toggleModal2()
            // Handle successful account creation (e.g., close modal, redirect)
        } catch (error) {
         
            setError(error.message);
            // Handle errors (e.g., show error message)
        }
    };
    return (


       




        <div className="flex items-center justify-center  w-[90%] h-[80%]  ">
            
             
              
            
            <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md">
<div className="w-full  text-right">
<button onClick={toggleModal2} className="text-gray-600 hover:text-orange-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
</div>

            

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-300 focus:shadow-outline " 
                        id="email" 
                        type="email" 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-300 focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="Your Password"
                        value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={handleSignUp}>
                            Sign Up
                        </button>
                        
                    </div>
                </form>
                {error && (
                        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error! </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default SignUp;
