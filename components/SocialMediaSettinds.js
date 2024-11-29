import React from 'react';

const SocialMediaSettinds = () => {
  return (
    <div>
      <div className='bg-white p-10 rounded-lg mt-10 shadow-2xl'>
        <p className='text-xl font-bold'>Social Medias Links Settings </p>
        <div className='flex justify-between mt-7'>
          {/* div1 */}
          <div className='flex-1'>
            {/* heading */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Facebook</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Status' />
            </div>
            {/* heading */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Linkdin</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Description' />
            </div>
            {/* ++++ */}
            <div className='border border-gray-500 rounded-lg flex justify-center items-center space-x-4 p-1 mt-6'>
              <span className='text-lg bg-blue-400 p-1 rounded-full text-white'>+</span>
              <p className='text-lg'>Add Custom Fields</p>
            </div>
          </div>
          {/* div2 */}
          <div className='flex-1 ml-10'>
            {/* title */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Instagram</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Title' />
            </div>
            {/* description */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Twitter</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Features' />
            </div>
            {/* button */}
            <button className='bg-blue-400 text-white py-2 w-full rounded-lg mt-3'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaSettinds;
