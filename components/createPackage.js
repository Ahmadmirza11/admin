import React from 'react';
import { TiPlus } from "react-icons/ti";

const CreatePackage = () => {
  return (
    <div className='mt-7'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <p className='text-xl font-extrabold'>Create Package</p>
        
        <form className='mt-8 flex justify-between'>
            <div className='w-1/2 pr-4'>
                <div className='mb-4'>
                    <label className='block text-lg font-bold mb-2'>Name</label>
                    <input className='border border-black rounded-lg w-full p-2' placeholder='Payroll Tax Management' type='text' />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-bold mb-2'>Price</label>
                    <select className='w-full border border-black p-2 rounded-lg'>
                        <option>$49.99 per filing</option>
                    </select>
                </div>
            </div>
            <div className='w-1/2 pl-4'>
                <div className='mb-4'>
                    <label className='block text-lg font-bold mb-2'>Tag Line</label>
                    <input className='border border-black rounded-lg w-full p-2' placeholder='Perfect for freelancers and self-employed professionals to file their annual tax returns efficiently' type='text' />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-bold mb-2'>Features</label>
                    <div className='flex items-center relative'>
                        <input className='border border-black rounded-lg w-full p-2 pr-12' placeholder='Feature' type='text' />
                        <button type='button' className='absolute right-2 text-blue-500 w-12 h-12 flex items-center justify-center'>
                            <TiPlus size={24} />
                        </button>
                    </div>
                </div>
                <button type='submit' className='bg-blue-500 text-white rounded-lg px-10 py-3 mt-4 w-full'>
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default CreatePackage;
