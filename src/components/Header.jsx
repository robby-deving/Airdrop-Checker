import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from './other/UseInfoProvider';

export default function Header() {
  const {isLoggedIn,username,logout} = useUser();


  return (
    <nav className='flex h-12 bg-black border-solid border-gray-500 w-full border-b-2 border-opacity-70 p-2 justify-between items-center sticky top-0'>
      <NavLink to="/AirdropChecker" className="text-2xl font-bold text-white ml-10">
        Luca.dev
      </NavLink>
      <div className=' flex gap-8 text-sm mr-10 items-center' >
          <NavLink to="/AirdropChecker" className={({ isActive }) => 
          isActive ? "text-white" : "text-gray-400"
          } >
            Airdrop Checker
          </NavLink>
          <NavLink to="/SavedWallets" className={({ isActive }) => 
          isActive ? "text-white" : "text-gray-400"
           }>
            My Saved Wallets
          </NavLink>
          <NavLink to="/Donate" className={({ isActive }) => 
        isActive ? "text-white" : "text-gray-400"
         }>
            Donate
          </NavLink>
          <div className="">
          {
              isLoggedIn ? (
                <div className=' text-primary font-medium border-2 border-primary rounded-lg  p-1 px-2 flex gap-2 items-center'>
                <img src="src\assets\user.png" alt="" className=' h-[15px] w-[15px]' />
                <h3>{username}</h3>
                <button onClick={logout}>
                  <img src="src\assets\logout.png" alt="" />
                </button>
              </div>
              ) :(
                <NavLink to="/Signup" className=" bg-primary text-gray-900 font-bold p-1 rounded-full px-3">
                SignUp
                   </NavLink>
              )
            }

          
           
            
          </div>
         
          
      </div>
    </nav>
  );
}

