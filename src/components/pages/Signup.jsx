import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import toast from 'react-hot-toast';
import { getCustomErrorMessage } from '../firebase/firebaseCustomErrorDictionary';




export default function Signup() {
            
    const [userCredentials, setUserCredentials] = useState({});


    function handleCredentials(e){
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }

    function handleSignup(e){
        e.preventDefault();
        
        const signupPromise = createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {

            const userId = userCredential.user.uid;
            const db = getDatabase();
            set(ref(db, 'users/' + userId), {
            username: userCredentials.username,
            });

        })

        toast.promise(
            signupPromise,
            {
                loading: 'Signing up...',
                success: <b>Signup successful!</b>,
                error: (error) => {
                    const errorCode = error.code;
                    const customMessage = getCustomErrorMessage(errorCode);
                    return <b>{customMessage}</b>;
                },
            }
        );
    }


  return (
    <div className='flex justify-center mt-[50%]'>
        <div className=" h-[30rem] w-[25rem] bg-white bg-opacity-15 border-gray-500 border-2 rounded-xl p-5 flex items-center flex-col justify-center" >

            <h1 className='text-3xl font-bold text-white'>Sign Up</h1>

            <div className='flex flex-col gap-4 mt-8'>
                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="text" placeholder='Username' name='username' onChange={(e)=> {handleCredentials(e)}}/>

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="email" placeholder='Email' name='email' onChange={(e)=> {handleCredentials(e)}}/>

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="password" placeholder='Password' name='password'onChange={(e)=> {handleCredentials(e)}}/>

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="password" placeholder='Confirm Password' name='confirmpassword' onChange={(e)=> {handleCredentials(e)}}/>
            </div>
            <h4 className='text-white text-[10px] ml-5 mt-2'>By registering, you agree to our Terms and Conditions and Privacy Policy.</h4>

            <button onClick={(e)=>{handleSignup(e)}} className='bg-primary p-2 rounded-full px-4 font-bold mt-8'>Sign Up</button>
            <div className='flex text-[12px] mt-1 text-white'>
                <h4>
                    Have an account?
                </h4>
                <NavLink to="/SignIn" className="text-primary ml-1">
                    Sign In
                </NavLink>
            </div>
           
        </div>
    </div>
  )
}
