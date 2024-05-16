import React from 'react'
import sandl from '../assets/sandl.png';

export default function Card() {
  return (
    
        <div id='card' className=' w-80 h-96  border-4   bg-[#ecfb77]  border-[#56d0ae] rounded-xl shadow'>
            <div className='w-80 h-80  border-4  bg-[#24262f]  border-[#56d0ae] rounded-xl '>
                <img src={sandl} className='w-full rounded-xl '/>
            </div>
            
            <div className='flex  justify-center items-center w-80 h-16  rounded-b-xl '>
              <a id='playbtn' className='text-4xl text-[#56d0ae]'><button>PLAY</button></a>
            </div>
        </div>
   
  )
}
