import FirmList from '@/components/listOfFirms';
import React from 'react';

const CompanyFirm = () => {
  return (
    <div className='  p-4'>
      <div className='w-full bg-white p-2 rounded-lg shadow-lg mt-3'>
        <div className='flex justify-between items-center p-1'>
          <div>
            <h4 className='text-2xl font-bold'>Firms</h4>
            <p className='text-gray-600'>Here are the firms that have subscribed</p>
          </div>
          <button className='bg-white border text-black px-7 py-1 rounded-lg'>
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
