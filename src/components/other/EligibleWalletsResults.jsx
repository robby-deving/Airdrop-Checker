import React, { useState, useEffect } from 'react';
import '/src/customCSS/style.css'; 
import {AllAirdrop } from '../functions/AirdropAPIcalls';
import AirdropChecker from '../pages/AirdropChecker';


export default function EligibleWalletsResults() {

  const [result, setResult] = useState({});
  const [userAddresses, setUserAddresses] = useState(userWalletAddress); // Replace with your addresses

  useEffect(() => {
    AllAirdrop(userAddresses)
      .then(() => {
        setResult({ ...results });
      })
      .catch(error => {
        toast.error(`Error fetching airdrop data: ${error.message}`, {
          position: 'bottom-left'
        });
      });
  }, [userAddresses]);

  const addresses = Object.keys(result.cloud)
  return (
    <div className="overflow-x-auto w-full">
    <table className="min-w-full divide-y divide-gray-500">
      <thead>
        <tr>
          <th className="sticky-column px-6 py-3 text-left ">Addresses</th>

          {Object.keys(result).map((header, index) => (
            <th className="px-6 py-3 text-left  border-x border-gray-500" key={index}>{header}</th>
          ))}
          
        </tr>
      </thead>
      <tbody className="  divide-y divide-gray-500">

          {addresses.map((address, index)=>(
            <tr key={index}>
              <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500">{address}</td>

              {Object.keys(result).map((header, idx) => (
                <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500" key={idx}>{results[header][address]}</td>
              ))}
      
            </tr>
          ))}

        
        <tr>
          <td className="sticky-column px-6 py-4 whitespace-nowrap border-r border-gray-500">Total</td>
        </tr>
      </tbody>
    </table>
  </div>
);
}
