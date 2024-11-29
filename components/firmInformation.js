import Image from 'next/image'
import React from 'react'
import pic from "../app/public/images (3).png"
import { Divider } from '@mui/material'
import pic1 from "../app/public/dp.jpg"
const FirmInformation = () => {
  return (
    <div className=' mt-2  flex items-center justify-center'>
        <div  className='bg-white w-full max-w-6xl p-4 md:p-8 rounded-lg shadow-lg '>
            <div className='flex flex-col md:flex-row justify-between'>
            <div className="md:w-1/2">
            <h2 className='font-bold text-2xl'>Firm Information</h2>
            <p className='pt-2 text-gray-500'>this is the information of the <br/>client</p>
            </div>
            {/* div2 */}
            <div className="md:w-1/2 md:pl-8">
            {/* imagecard */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 '>
                <p>Image</p>
                <Image src={pic} alt='pic' className='rounded-full w-12 h-12'/>
            </div>
            {/* name */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>First Name </p>
                <p>innovators ltd</p>
            </div>
            {/* phone */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Phone </p>
                <p>12345678</p>
            </div>
            {/* email */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Email </p>
                <p>Ali@gmail.com</p>
            </div>
            {/* address */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Address </p>
                <p >street no 2 safdar,california</p>
            </div>
            {/* reg no */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Reg no</p>
                <p >1234456</p>
            </div>
            {/* package */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-bold'>Package</p>
                <p >Premium</p>
            </div>
            </div>
            </div>
            {/* divider */}
            <div className='my-8'>
            <Divider/>
            </div>
            {/* ADMIN INFO */}
            <div className='flex flex-col md:flex-row justify-between'>
            <div className="md:w-1/2">
            <h2 className='font-bold text-2xl'>Admin Info</h2>
            <p className='pt-2 text-gray-500'>this is the information of the <br/>client</p>
            </div>
            {/* div2 */}
            <div className="md:w-1/2 md:pl-8">
            {/* imagecard */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 '>
                <p>Image</p>
                <Image src={pic1} alt='pic' className='rounded-full w-12 h-12'/>
            </div>
            {/* name */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>First Name </p>
                <p>hjon</p>
            </div>
            {/* phone */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Last Name </p>
                <p>Alis</p>
            </div>
            {/* email */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Email </p>
                <p>Ali@gmail.com</p>
            </div>
            {/* address */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Address </p>
                <p >street no 2 safdar,california</p>
            </div>
            {/* reg no */}
            <div className='flex gap-20 items-center p-3 bg-gray-200 mt-2 '>
                <p className='font-semibold'>Contact</p>
                <p >121212122</p>
            </div>
            {/* package */}
           <button className='p-2 text-white text-xl font-bold bg-[#52BDCD] rounded-lg w-full mt-10'>
            Save
           </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FirmInformation