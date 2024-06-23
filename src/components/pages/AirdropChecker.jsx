import React from 'react'

export default function AirdropChecker() {
  return (
    <div className=' text-white'>
      <h1 className=' text-7xl font-bold mt-20'>Airdrop Checker</h1>
      
      <div>
        <h2>Enter your address</h2>

        <textarea className='w-full bg-black  border-2 border-solid border-gray-400 rounded-xl p-6' name="Address" id="WalletAddresses" placeholder='Enter addresses one line at a time'></textarea>

        <div>
          <button>Check</button>
          <button>Clear</button>
          <button>Save Wallets</button>
        </div>


      </div>

    </div>
  )
}
