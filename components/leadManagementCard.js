import React from 'react';

const TodaySummaryCards = () => {
  return (
    <div className='mt-10 bg-white p-5 shadow-xl rounded-xl'>
      <p className='text-xl font-bold'>Today Summary</p>
      <p className='text-gray-600 py-2'>Job Summary</p>
      <div className='flex flex-wrap gap-4  items-center'>
        <div className='bg-pink-50 p-4 rounded-lg shadow w-1/5 h-60 justify-center items-center flex flex-col'>
          <p className='text-gray-700 text-center'>Total Clients</p>
          <h3 className='text-5xl font-bold text-center'>45</h3>
        </div>
        <div className='bg-pink-50 p-4 rounded-lg shadow w-1/6 h-60 justify-center items-center flex flex-col'>
          <p className='text-gray-700 text-center'>New Clients</p>
          <h3 className='text-5xl font-bold text-center'>18</h3>
        </div>
        <div className='bg-pink-50 p-4 rounded-lg shadow w-1/6 h-60 justify-center items-center flex flex-col'>
          <p className='text-gray-700 text-center'>Active Clients</p>
          <h3 className='text-5xl font-bold text-center'>22</h3>
        </div>
        <div className='bg-pink-50 p-4 rounded-lg shadow w-1/5 h-60 justify-center items-center flex flex-col'>
          <p className='text-gray-700 text-center'>Inactive Clients</p>
          <h3 className='text-5xl font-bold text-center'>34</h3>
        </div>
        <div className='bg-pink-50 p-4 rounded-lg shadow w-1/5 h-60 justify-center items-center flex flex-col'>
          <p className='text-gray-700 text-center'>High Priority</p>
          <h3 className='text-5xl font-bold text-center'>40%</h3>
        </div>
      </div>
    </div>
  );
}

export default TodaySummaryCards;
