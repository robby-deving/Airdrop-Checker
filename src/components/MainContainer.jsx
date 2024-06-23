import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AirdropChecker from './pages/AirdropChecker'
import SavedWallets from './pages/SavedWallets'
import Donate from './pages/Donate'
import Signup from './pages/Signup'


export default function () {
  return (
    <div className='flex justify-center '>
        <div className=' max-w-7xl'>
        <Routes >
            <Route path="/" element={ <AirdropChecker />}/>
            <Route path="/AirdropChecker" element={ <AirdropChecker />}/>
            <Route path="/SavedWallets" element={ <SavedWallets/>}/>
            <Route path="/Donate" element={ <Donate/>}/>
            <Route path="/Signup" element={ <Signup/>}/>

        </Routes>
        </div>
        
    </div>
  )
}
