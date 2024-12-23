import TodaySummaryCards from '@/components/leadManagementCard'
import LeadTable from '@/components/leadManagementTable'
import React from 'react'

const Page = () => {
  return (
    <div>
    <div className='bg-white p-5 shadow-2xl rounded-lg'>
      <p className='text-xl font-bold '>Good Morning, Jack</p>
      <p className='text-gray-500 text-[16px]  mt-3'>Here ios the largest peoples are live very peacefully</p>
    </div>
    <div className='bg-blue-100 border-blue-500 mt-6 p-5 shadow-2xl rounded-lg border-2 flex justify-between items-center'>
      <div>
      <p className='text-xl font-bold '>info</p>
      <p className=' text-[16px]  mt-3'>New Lead Notification You have 5 new leads waiting for follow-up</p></div>
      <div className='space-x-3'>
        <button className='bg-black rounded-md p-1 text-white px-4'>Action</button>
        <button className='border border-black bg-white text-black rounded-md p-1 px-4'>Dismiss</button>
      </div>
    </div>
    <TodaySummaryCards/>
    <LeadTable/>
    </div>
  )
}

export default Page
