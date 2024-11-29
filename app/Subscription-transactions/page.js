"use client"
import React from 'react';
import { Search, FilterList } from '@mui/icons-material';
import { Button } from '@mui/material';
import pic from "../public/images.png";
import Image from 'next/image';

const data = [
    {
        reg:'01',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'02',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'03',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'04',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'05',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'06',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'07',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'08',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
    {
        reg:'09',
        logo:pic,
        firstName:"abhgshg",
        date:"12/07/2024",
        Amount:"500$",
        paymentType:"stripe",
        status:"success"
    },
];

const SubscriptionTransactions = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
        {/* buttons and logo */}
        <div className='flex justify-between items-center mb-6'>
            <p className='text-3xl font-bold'>Transaction Logs</p>
            <div className="flex space-x-2">
                <Button variant="outlined" startIcon={<Search />} className="border-gray-500 text-gray-500">
                    Search
                </Button>
                <Button variant="outlined" startIcon={<FilterList />} className="border-gray-500 text-gray-500">
                    Filter
                </Button>
            </div>
        </div>
        {/* table */}
        <table className="min-w-full border-collapse">
            <thead>
                <tr>
                    <th className='py-3 px-5 border-b-2 '>#</th>
                    <th className='py-3 px-5 border-b-2 '>Logo</th>
                    <th className='py-3 px-5 border-b-2'>Firm Name</th>
                    <th className='py-3 px-5 border-b-2 '>Date</th>
                    <th className='py-3 px-5 border-b-2 '>Amount</th>
                    <th className='py-3 px-5 border-b-2 '>Payment Type</th>
                    <th className='py-3 px-5 border-b-2 '>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-100'>
                        <td className='py-2 px-5 border-b text-center'>{item.reg}</td>
                        <td className='py-2 px-5 border-b text-center'><Image src={item.logo} alt='logo' width={40} height={40} className="mx-auto rounded-full" /></td>
                        <td className='py-2 px-5 border-b text-center'>{item.firstName}</td>
                        <td className='py-2 px-5 border-b text-center'>{item.date}</td>
                        <td className='py-2 px-5 border-b text-center'>{item.Amount}</td>
                        <td className='py-2 px-5 border-b text-center'>{item.paymentType}</td>
                        <td className='py-2 px-5 border-b text-center'>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="mt-6 flex justify-between items-center">
          <button className="text-black border px-7 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition duration-200">
            Previous
          </button>
          <button className="text-black border px-7 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition duration-200">
            Next
          </button>
        </div>
    </div>
  );
}

export default SubscriptionTransactions;
