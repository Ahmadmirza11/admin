import FirmInformation from '@/components/firmInformation'
import React from 'react'

const FirmDetail = () => {
  return (
    <div className=' p-4'>
        {/* card */}
         <div className='w-full bg-white p-2 rounded-lg shadow-lg mt-'>
        <div className='flex justify-between items-center p-1'>
          <div>
            <h4 className='text-2xl font-bold'>Good morning,Jack</h4>
            <p className='text-gray-600'>Here is the firm information</p>
          </div>
          <button className='bg-black border text-white px-3 py-1 rounded-lg'>
            <p>Edit</p>
          </button>
        </div>
      </div>
      {/* Firm Information */}
      <FirmInformation/>
    </div>
  )
}

export default FirmDetail