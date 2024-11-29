import React from 'react'
import { CiImageOn } from "react-icons/ci";

const StaffManagement = () => {
  return (
    <div>
      <div className='min-h-screen bg-white shadow-xl rounded-xl shadow-slate-600 p-8'>
        <p className='text-2xl font-bold mb-6'>Add Staff</p>

        {/* form */}
        <form className='flex space-x-8'>
          <div className='flex-1'>
            {/* name */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>First Name</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            {/* last name */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Last Name</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            {/* email */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Email</label>
              <input type='email' placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            {/* assign firm */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Assign Firm</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
          </div>
          {/* div2 */}
          <div className='flex-1'>
            {/* card image */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Profile Image</label>
              <div className='bg-gray-100 border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center'>
                <CiImageOn size={40} className='text-gray-400' />
                <p className='text-center text-gray-500 mt-2'>Click to replace or drag and drop<br />SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </div>
            </div>
            {/* contact */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Contact</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            {/* address */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Address</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            {/* role */}
            <div className='mb-4'>
              <label className='font-bold block mb-2'>Role</label>
              <input placeholder='Enter Here' className='border border-gray-300 rounded-md w-full p-2' />
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mt-4 w-full'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StaffManagement;
