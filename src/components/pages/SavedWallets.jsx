import React, { useState } from 'react';
import { useUser } from '../other/UseInfoProvider';
import Addwalletmodal from '../other/Addwalletmodal';
import { NavLink } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';



export default function SavedWallets() {
  const { isLoggedIn, wallets, setWallets,userId } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteWallet = (index) => {
    const updatedWallets = wallets.filter((_, i) => i !== index);
    setWallets(updatedWallets);
    updateWallet(updatedWallets)
  };

  async function updateWallet(updatedWallets) {
    const db = getDatabase();
    const databaseRef = ref(db, 'users/' + userId + '/wallets:'); // Add a '/' between userId and 'wallets'
    try {
      await set(databaseRef, updatedWallets);

    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className='w-dvw p-10'>
      
      <div className="flex justify-between pr-4">
        <h2 className="font-bold mt-5 text-3xl mb-3 text-white">My Saved Wallets</h2>
        <button onClick={isLoggedIn ? openModal : closeModal} className={`w-[25px] h-[25px] ${!isLoggedIn ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <img src="public/assets/add.png" alt="Add" className="w-[25px] h-[25px]" />
        </button>
      </div>

      <div className="border border-gray-500 rounded-lg   m-0 p-0 flex">
        <table className="w-full divide-y divide-gray-500 text-white text-center">
          <thead className="uppercase font-bold">
            <tr className='flex justify-center'> 
                <td  className="p-2 text-center">Address</td>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {isLoggedIn ? (
               wallets && wallets.length > 0 ? (
                wallets.map((wallet, index) => (
                  <tr key={index}>
                    <td className='text-white w-full'>{wallet}</td>
                    <td className='p-2 pr-10'>
                      <button onClick={() => deleteWallet(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.99999 15.8333C4.99999 16.75 5.74999 17.5 6.66666 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V7.5C15 6.58333 14.25 5.83333 13.3333 5.83333H6.66666C5.74999 5.83333 4.99999 6.58333 4.99999 7.5V15.8333ZM15 3.33333H12.9167L12.325 2.74167C12.175 2.59167 11.9583 2.5 11.7417 2.5H8.25832C8.04166 2.5 7.82499 2.59167 7.67499 2.74167L7.08332 3.33333H4.99999C4.54166 3.33333 4.16666 3.70833 4.16666 4.16667C4.16666 4.625 4.54166 5 4.99999 5H15C15.4583 5 15.8333 4.625 15.8333 4.16667C15.8333 3.70833 15.4583 3.33333 15 3.33333Z" fill="#FF4B02"/>
                        </svg>
                      </button>
                     
                     </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className='p-3'>You dont have Saved wallets</td>
                </tr>
              )
              
            ) : (
              <tr >
                <td className='p-5'>
                  <NavLink to="/SignIn" className="bg-primary text-gray-800 font-bold px-3 py-2 rounded">Sign In</NavLink>
                </td>
              </tr>
              
            )}
          </tbody>
        </table>
      </div>

      <Addwalletmodal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
