import React, { useState } from 'react';
import CustomRadioButton from '../other/radioButtonComponent';
import toast from 'react-hot-toast';
import { AllAirdrop, results as initialResults } from '../functions/AirdropAPIcalls';
import { useUser } from '../other/UseInfoProvider';
import { NavLink } from 'react-router-dom';

export default function AirdropChecker() {
  const [walletAddresses, setWalletAddresses] = useState('');
  const [result, setResult] = useState(initialResults);

  const { isLoggedin } = useUser()

  const handleUserInput = (event) => {
    const inputText = event.target.value;
    setWalletAddresses(inputText);
  };

  const addresses = walletAddresses.split('\n').filter((address) => address.trim() !== '');

  const handleSubmit = () => {
    toast.promise(
      AllAirdrop(addresses).then(() => {
        setResult({ ...initialResults }); 
      }),
      {
        loading: 'Checking Wallets...',
        success: 'Done checking wallets',
      }
    );
  };

  return (
    <div className='text-white flex items-center flex-col'>
      <h1 className='text-7xl font-black mt-20'>Airdrop Checker</h1>

      <div>
        <h2 className='font-bold mt-10 text-3xl mb-3'>Enter your address</h2>

        <textarea
          className='w-[900px] h-80 bg-black border-2 border-solid border-gray-400 rounded-xl p-6'
          name="Address"
          id="WalletAddresses"
          placeholder='Enter addresses one line at a time'
          value={walletAddresses}
          onChange={handleUserInput}
        ></textarea>

        <div className='w-full flex gap-5 mt-5'>
          <button
            className='w-full bg-primary text-black font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center'
            onClick={handleSubmit}
          >
            <img className='w-[20px] h-[20px]' src="public/assets/reload.png" alt="" />
            <p>Check</p>
          </button>

          <button
            className='w-full bg-white text-white font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center bg-opacity-20 border border-gray-500'
            onClick={() => setWalletAddresses('')}
          >
            <img className='w-[20px] h-[20px]' src="public/assets/clear.png" alt="" />
            <p>Clear</p>
          </button>


          {
              isLoggedin ? (
                <button className='w-full bg-white text-white font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center bg-opacity-20 border border-gray-500'>
                <img className='w-[25px] h-[25px]' src="public/assets/save.png" alt="" />
                <p>Check Saved Wallets</p>
                </button>
              ): (
                <NavLink to='/SignIn' className='w-full bg-white text-white font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center bg-opacity-20 border border-gray-500'>
                <img className='w-[25px] h-[25px]' src="public/assets/save.png" alt="" />
                <p>Save Wallets</p>
                </NavLink>
              )
            }
         </div>
      </div>

      <div className='w-full mt-5'>
        <CustomRadioButton name="airdrop" label="All" defaultChecked={true} />
        <CustomRadioButton name="airdrop" label="Cloud" defaultChecked={false} />
        <CustomRadioButton name="airdrop" label="WEN" />
      </div>

      <div className='w-full'>
        <h2 className='font-bold mt-5 text-3xl mb-3'>Eligible Wallets</h2>
      </div>

      <div className="border border-gray-500 rounded-lg overflow-hidden w-full m-0 p-[0rem] flex">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-500">
            <thead>
              <tr>
                <th className="sticky-column px-6 py-3 text-left">Addresses</th>
                {Object.keys(result).map((header, index) => (
                  <th className="px-6 py-3 border-x border-gray-500 uppercase text-center" key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-500">
              {addresses.map((address, index) => (
                <tr key={index}>
                  <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500">{address}</td>
                  {Object.keys(result).map((header, idx) => (
                    <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500 text-primary font-bold text-center" key={idx}>
                      {result[header] && result[header][address] !== undefined ? result[header][address] : ''}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="sticky-column px-6 py-4 whitespace-nowrap border-r border-gray-500">Total</td>
                {Object.keys(result).map((header, totalIndex) => (
                  <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500 text-primary font-bold text-center" key={totalIndex}>
                    {result[header] && result[header].total !== undefined ? result[header].total : ''}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
