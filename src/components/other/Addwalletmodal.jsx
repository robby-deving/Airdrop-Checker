import React from 'react';
import { useUser } from './UseInfoProvider';
import { getDatabase, ref, child,get, set } from 'firebase/database';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Addwalletmodal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const {userId , setWallets,wallets} = useUser();
  const [walletAddresses, setWalletAddresses] = useState([]);

  const handleUserInput = (event) => {
    const inputText = event.target.value;
    setWalletAddresses(inputText);
  };

  function save() {     
      toast.promise(
        saveWallets(),
        {
          loading: 'Saving Wallets...',
          success: 'Wallets Saved Successfully',
        }
      );

  }

  async function saveWallets() {
    console.log(userId);

    const db = getDatabase();
    const databaseRef = ref(db, 'users/' + userId + '/wallets'); // Add a '/' between userId and 'wallets'

    try {
        const snapshot = await get(child(databaseRef, '/')); // Correct usage 
          const existingWallet = snapshot.val() || []; // Default to an empty array if snapshot.val() is null or undefined
          let wallet = walletAddresses.split('\n').filter((address) => address.trim() !== '');

          // Ensure existingWallet is an array before spreading
          let updatedWallet = [
              ...Array.isArray(existingWallet) ? existingWallet : [], // Check if it's an array
              ...wallet
          ];

          await set(databaseRef, updatedWallet);
          setWallets(updatedWallet);
          console.log(updatedWallet);

     
           
    } catch (error) {
        console.error(error);
    }


    onClose();
}

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-black rounded-lg p-6 w-1/4 relative">
        <h2 className="text-white mb-4">Separate wallets by making a new line</h2>
        <textarea
          className="w-full h-32 bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
          placeholder="Enter wallet addresses here..."
          value={walletAddresses}
          onChange={handleUserInput}
        ></textarea>
        <div className="flex gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Cancel
          </button>
          <button onClick={save} className="bg-primary text-gray-800 font-bold px-4 py-2 rounded-lg w-full">
            Add Wallets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addwalletmodal;
