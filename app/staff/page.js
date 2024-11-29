"use client"
import StaffList from '@/components/staffList'
import React from 'react'
import { useRouter } from 'next/navigation'
const Staff = () => {
    const router=useRouter()
    const StaffManagement=()=>{
        router.push("/staffManagement")
    }
  return (
        <div>
      <div className='w-full bg-white p-3 rounded-lg shadow-lg mt-3'>
        <div className='flex justify-between items-center p-1'>
          <div>
            <h4 className='text-2xl font-bold'>Staff</h4>
            <p className='text-gray-600'>Here are the firms that have subscribed</p>
          </div>
          <button className='bg-white border text-black px-7 py-1 rounded-lg' onClick={StaffManagement}>
            <p>+ <span>Add Staff</span></p>
          </button>
        </div>
        {/* Content for the firms will go here */}
      </div>
      {/* list */}
      <StaffList/>

    </div>
  )
}

export default Staff