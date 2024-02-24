import React,{useState} from "react";
import { auth } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authAdmin } from "../Firebase/FirebaseAdmin";
import { useNavigate } from "react-router-dom"; 
const SignIn = ({onClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); 
    const navigate = useNavigate(); // Hook for navigation

    const handleSignIn = async () => {
        try {
            const authContext = role === 'admin' ?  authAdmin : auth; // Choose auth context based on role
            const userCredential = await signInWithEmailAndPassword(authContext, email, password);
            console.log("Signed in successfully!", userCredential);

           
            if (onClose) {
                onClose(); // Close the modal after signing in
            }

            // Navigate to '/AdminPortal' if the role is 'admin'
            if (role === 'admin') {
                navigate('/AdminPortal');
            }

            // Add additional logic for 'user' role if necessary
        } catch (error) {
            console.error("Failed to sign in", error);
            // Handle errors (e.g., show error message)
        }
    };


    return (
<div className="flex items-center justify-center  w-[90%] h-[80%]  ">
            
             
              
            
            <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md">
<div className="w-full  text-right">
<button onClick={onClose} className="text-gray-600 hover:text-orange-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
</div>

            

<div className="flex justify-center mb-4">
                    <button
                        className={`py-2 px-4 mx-1 rounded ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} hover:bg-blue-700 hover:text-white`}
                        onClick={() => setRole('user')}
                    >
                        User
                    </button>
                    <button
                        className={`py-2 px-4 mx-1 rounded ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} hover:bg-blue-700 hover:text-white`}
                        onClick={() => setRole('admin')}
                    >
                        Admin
                    </button>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-300 focus:shadow-outline " 
                        id="email" type="email" 
                        placeholder="Your Email"
                        value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
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
                        onClick={handleSignIn}
                        >

                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
