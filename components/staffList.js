"use client";
import React from 'react';
import Image from 'next/image';
import { IconButton, Button } from '@mui/material';
import { Search, FilterList, Delete, Edit, ArrowBack, ArrowForward } from '@mui/icons-material';
import billImage from "../app/public/bill.jpg";
import logoImage from "../app/public/assets/logo.png";

const firms = [
  {
    reg: '01',
    logo: billImage,
    name: 'Acme Co.',
    role: 'Staff',
    phone: '070 5472 6467',
    email: 'john@gmail.com',
    assignName: 'Gorgeous Pvt. Ltd.',
  },
  {
    reg: '02',
    logo: billImage,
    name: 'Acme Co.',
    role: 'Staff',
    phone: '070 4097 3393',
    email: 'john@gmail.com',
    assignName: 'Gorgeous Pvt. Ltd.',
  },
  {
    reg: '03',
    logo: billImage,
    name: 'Acme Co.',
    role: 'Staff',
    phone: '078 2181 5063',
    email: 'john@gmail.com',
    assignName: 'Gorgeous Pvt. Ltd.',
  },
  {
    reg: '04',
    logo: logoImage,
    name:'Acme Co.',
    role: 'Staff',
    phone: '077 4952 5383',
    email:  'john@gmail.com',
    assignName: 'Gorgeous Pvt. Ltd.',
  },
  {
    reg: '05',
    logo: billImage,
    name: 'Acme Co.',
    role: 'Staff',
    phone: '077 7170 3529',
    email: 'john@gmail.com',
    assignName: 'Gorgeous Pvt. Ltd.',
  },
];

const StaffList = () => {
  

  return (
    <div className="pt-3">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl m-auto overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-2 md:mb-0">List</h2>
          <div className="flex space-x-2">
            <Button variant="outlined" startIcon={<Search />} className="border-gray-500 text-gray-500">
              Search
            </Button>
            <Button variant="outlined" startIcon={<FilterList />} className="border-gray-500 text-gray-500">
              Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-3 border-b">Reg #</th>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Role</th>
                <th className="py-2 px-3 border-b">Phone</th>
                <th className="py-2 px-3 border-b">Email</th>
                <th className="py-2 px-3 border-b">Assigned Firm</th>
                <th className="py-2 px-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {firms.map((firm, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 text-center border-b">{firm.reg}</td>
                  <td className="py-2 px-3 border-b text-center flex items-center justify-center">
                    <Image src={firm.logo} alt={`${firm.name} logo`} width={30} height={30} className="mr-2" />
                    {firm.name}
                  </td>
                  <td className="py-2 px-3 border-b text-center">{firm.role}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.phone}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.email}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.assignName}</td>
                  <td className="py-2 px-3 text-center border-b">
                    <div className="flex justify-center space-x-2">
                      <IconButton className="bg-blue-300 text-white rounded-full p-1">
                        <Edit  className='bg-blue-300 rounded-full p-1'/>
                      </IconButton>
                      <IconButton className=" text-white rounded-full p-2">
                        <Delete  className='bg-blue-300 rounded-full p-1'/>
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200 flex items-center">
            <ArrowBack className="mr-2" /> Previous
          </button>
          <button  className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200 flex items-center">
            Next <ArrowForward className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffList;
