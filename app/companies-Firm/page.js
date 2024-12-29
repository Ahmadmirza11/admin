"use client"
import FirmList from '@/components/listOfFirms';
import { useRouter } from 'next/navigation';
import React from 'react';

const CompanyFirm = () => {
  const router = useRouter();


  const nextpg = () => {
    router.push("/companyFirm2");
  }
  return (
    <div className='  p-4'>
      <div className='w-full bg-white p-2 rounded-lg shadow-lg mt-3'>
        <div className='flex justify-between items-center p-1'>
          <div>
            <h4 className='text-2xl font-bold'>Firms</h4>
            <p className='text-gray-600'>Here are the firms that have subscribed</p>
          </div>
          <button  onClick={nextpg}  className='bg-white border text-black px-7 py-1 rounded-lg hover:bg-black hover:text-white'>
            <p>+ <span>Add Firm</span></p>
          </button>
        </div>
        {/* Content for the firms will go here */}
      </div>
      {/* list */}
      <FirmList/>

    </div>
  );
};

export default CompanyFirm;
