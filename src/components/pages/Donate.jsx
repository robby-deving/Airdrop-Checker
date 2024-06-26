import React from 'react';
import toast from 'react-hot-toast';

export default function Donate() {
  const donationAddress = 'LucabvyvK3LuZX1MD2R5NPhJhXzYuUDkkAvSPXr5Ree';

  function copyToClipboard() {
    navigator.clipboard.writeText(donationAddress)
      .then(() => {
        toast('Copied to Clipboard',{
          icon: '📋',
        })
      })
      .catch(err => {
        toast.error('An error occured')
      });
  }

  return (
    <div className='flex justify-center mt-[15vh]'>
      <div className="h-[35rem] w-[30rem] bg-white bg-opacity-15 border-gray-500 border-2 rounded-xl p-8 flex items-center flex-col justify-center">
        <img className='h-[250px] w-[250px]' src="src/assets/qrcode.png" alt="" />
        <div className='w-full bg-slate-300 flex justify-around p-2 rounded-md font-bold text-sm mt-5'>
          <h4>{donationAddress}</h4>
          <button onClick={copyToClipboard}>
            <img src="src/assets/solar_copy-outline.png" alt="Copy to Clipboard" />
          </button>
        </div>
        <p className='text-white mt-5 text-center'>
          Your generosity fuels my mission to enhance our website and expand its features, ensuring it remains accessible to all, free of charge. Every donation contributes directly to creating a better experience for you and our community. Together, we can build something incredible. Thank you for your support!
        </p>
      </div>
    </div>
  );
}
