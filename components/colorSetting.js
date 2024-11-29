import React from 'react';

const ColorSetting = () => {
  return (
    <div>
      <div className='bg-white rounded-md shadow-xl p-5'>
        <p className='font-bold text-xl'>Color Setting</p>
        {/* inputs */}
        <form className='flex justify-between mt-7'>
          <div className="flex-1">
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Primary Color</label>
              <input placeholder='Enter Here' className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Secondary Color 2</label>
              <input placeholder='Enter Here' className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Text Secondary Color</label>
              <input placeholder='Enter Here' className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* +++ */}
            <div className='border border-gray-600 rounded-lg flex justify-center items-center space-x-4 p-1 mt-6'>
              <span className='text-lg bg-blue-400 p-1 rounded-full text-white'>+</span>
              <p className='text-lg'>Add Custom Fields</p>
            </div>
          </div>
          {/* div2 */}
          <div className='flex-1 ml-10'>
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Secondary Color</label>
              <input placeholder='Enter Here' className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Primary Background</label>
              <input placeholder='Enter Here' className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* color */}
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Text Primary Color</label>
              <input className='border border-gray-600 p-2 w-full rounded-lg' />
            </div>
            {/* button */}
            <button className=' w-full py-2 bg-blue-400 text-white rounded-lg mt-2'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ColorSetting;
