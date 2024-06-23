import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='flex h-12 bg-black border-solid border-gray-500 w-full border-b-2 border-opacity-70 p-2 justify-between items-center'>
      <NavLink to="/" className="text-2xl font-bold text-white ml-10">
        Luca.dev
      </NavLink>
      <div className=' flex gap-8 text-sm mr-10' >
          <NavLink to="/AirdropChecker" className=" text-white">
            Airdrop Checker
          </NavLink>
          <NavLink to="/SavedWallets" className="text-gray-400">
            My Saved Wallets
          </NavLink>
          <NavLink to="/Donate" className="text-gray-400">
            Donate
          </NavLink>
          <div className="text-gray-400">
            <NavLink to="/Signup" className=" bg-primary text-gray-900 font-bold p-1 rounded-full px-3">
              SignUp
            </NavLink>
          </div>
          
      </div>
    </nav>
  );
}

