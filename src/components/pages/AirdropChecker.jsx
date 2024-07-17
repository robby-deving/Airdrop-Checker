import React from 'react'
import CustomRadioButton from '../other/radioButtonComponent'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { AllAirdrop, results } from '../functions/AirdropAPIcalls';



export default function AirdropChecker() {

  const [walletAddreses, setWalletAddress] = useState('');
  const [result, setResult] = useState(results);

  const addresses = walletAddreses.split('\n').filter((address) => address.trim() !== '');

  const handleUserInput = (event) =>{
    const inputText = event.target.value;
    setWalletAddress(inputText);
    console.log(inputText);
  }

  const handleSubmit = () => {
    toast.promise(
        AllAirdrop(addresses),
      {
          loading: 'Checking Wallets...',
          success: 'Done checking wallets',
      }
  )
  };


  return (
    <div className=' text-white flex items-center flex-col'>
      <h1 className=' text-7xl font-black mt-20'>Airdrop Checker</h1>
      
      <div>
        <h2 className='font-bold mt-10 text-3xl mb-3'>Enter your address</h2>

        <textarea className='w-[900px] h-80 bg-black  border-2 border-solid border-gray-400 rounded-xl p-6' name="Address" id="WalletAddresses" placeholder='Enter addresses one line at a time' value={walletAddreses} onChange={handleUserInput}></textarea>

        <div className='w-full flex gap-5 mt-5'>
          <button className='w-full bg-primary text-black font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center' onClick={handleSubmit}>
            <img className='w-[20px] h-[20px]' src="src\assets\reload.png" alt="" />
           <p>Check</p>
            </button>

            <button className='w-full bg-white text-white font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center bg-opacity-20 border border-gray-500' onClick={() => setWalletAddress([])}>
            <img className='w-[20px] h-[20px]' src="src\assets\clear.png" alt="" />
           <p>Clear</p>
            </button>

            <button className='w-full bg-white text-white font-bold rounded-lg p-2 flex justify-center gap-2 text-xl items-center bg-opacity-20 border border-gray-500'>
            <img className='w-[25px] h-[25px]' src="src\assets\save.png" alt="" />
           <p>Check Saved Wallets</p>
            </button>
          
        </div>


      </div>

      <div className='w-full mt-5'>
      <CustomRadioButton name="airdrop" label="All" defaultChecked={true} />
      <CustomRadioButton name="airdrop" label="Cloud" defaultChecked={false}/>
      <CustomRadioButton name="airdrop" label="WEN" />

      </div>

      <div className='w-full'>
      <h2 className='font-bold mt-5 text-3xl mb-3'>Eligible Wallets</h2>
      </div>

      <div className=" border border-gray-500 rounded-lg overflow-hidden w-full m-0 p-[0rem] flex">

            <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-500">
            <thead>
              <tr>
                <th className="sticky-column px-6 py-3 text-left ">Addresses</th>

                {Object.keys(result).map((header, index) => (
                  <th className="px-6 py-3 text-left  border-x border-gray-500 uppercase" key={index}>{header}</th>
                ))}
                
              </tr>
            </thead>
            <tbody className="  divide-y divide-gray-500">

                {addresses.map((address, index)=>(
                  <tr key={index} className=''>
                    <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500">{address}</td>

                    {Object.keys(result).map((header, idx) => (
                      <td className="sticky-column px-6 py-4 whitespace-nowrap border-x border-gray-500 text-primary font-bold text-center" key={idx}>{results[header][address]}</td>
                    ))}
            
                  </tr>
                ))}

              
              <tr>
                <td className="sticky-column px-6 py-4 whitespace-nowrap border-r border-gray-500">Total</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>


    </div>
  )
}
