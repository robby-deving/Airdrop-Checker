import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='flex justify-center mt-[50%]'>
        <div className=" h-[30rem] w-[25rem] bg-white bg-opacity-15 border-gray-500 border-2 rounded-xl p-5 flex items-center flex-col" >

            <h1 className='text-3xl font-bold text-white'>Sign Up</h1>

            <div className='flex flex-col gap-4 mt-8'>
                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="text" placeholder='Username' />

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="email" placeholder='Email' />

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="password" placeholder='Password' />

                <input className='h-10 w-80 rounded-xl bg-gray-500 bg-opacity-40 border border-gray-400 p-3 text-white outline-none' type="password" placeholder='Confirm Password' />
            </div>
            <h4 className='text-white text-[10px] ml-5 mt-2'>By registering, you agree to our Terms and Conditions and Privacy Policy.</h4>

            <button className='bg-primary p-2 rounded-full px-4 font-bold mt-8'>Sign Up</button>
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
