import React from 'react'
import { CiImageOn } from 'react-icons/ci'

const CreateFaqs = () => {
  return (
    <div>
      <div className='bg-white p-10 rounded-lg mt-6 shadow-2xl'>
        <p className='text-xl font-bold'>Create Faqs</p>
        <div className='flex justify-between mt-7'>
          {/* div1 */}
        <div className='flex-1'>
        {/* picker */}
      <div className='mb-4 flex space-x-10 items-center'>
              <label className='font-bold  mb-2'> Image</label>
              <div className='bg-gray-100 border-2 border-dashed border-gray-300 rounded-md p-3 flex flex-col items-center justify-center'>
                <CiImageOn size={20} className='text-gray-900' />
                <p className='text-center text-gray-500 mt-2'>Click to replace or drag and drop<br />SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </div>
            </div>
            {/*  title*/}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Title</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Here'/>
            </div>
            </div>
            {/* div2 */}
            <div className='flex-1 ml-10'>
              {/* title */}
              <div className='mb-16'>
              <label className='font-semibold mb-2 block'>description</label>
              <textarea className='border rounded-lg p-2 w-full border-gray-500 h-32' placeholder='Enter Here'/>
            </div>
            {/* button */}
            <button className='bg-blue-400 text-white py-2 w-full rounded-lg mt-3'>Save</button>
            </div>
            </div>
      </div>
    </div>
  )
}

export default CreateFaqs