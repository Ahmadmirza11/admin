import React from 'react';

const PackageSectionSetting = () => {
  return (
    <div>
      <div className='bg-white p-10 rounded-lg mt-10 shadow-2xl'>
        <p className='text-xl font-bold'>Package Section Settings</p>
        <div className='flex justify-between mt-7'>
          {/* div1 */}
          <div className='flex-1'>
            {/* checkboxes */}
            <div className='mb-4  '>
              <label className=' mb-3 block'>Status</label>
              <div className='flex items-center space-x-4'>
                <label className='flex items-center space-x-2 ml-10'>
                  <input type='checkbox' className='form-checkbox' />
                  <span>Enable</span>
                </label>
                <label className='flex items-center space-x-2'>
                  <input type='checkbox' className='form-checkbox' />
                  <span>Disable</span>
                </label>
              </div>
            </div>
            {/* heading */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Description</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Here' />
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
            <div className='mb-16'>
              <label className='font-semibold mb-2 block'>Title</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Here' />
            </div>
            {/* description */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Features</label>
              <input className='border rounded-lg p-2 w-full border-gray-500' placeholder='Enter Here' />
            </div>
            {/* button */}
            <button className='bg-blue-400 text-white py-2 w-full rounded-lg mt-3'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageSectionSetting;
