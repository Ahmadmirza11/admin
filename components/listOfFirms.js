"use client";
import React from 'react';
import Image from 'next/image';
import { IconButton, Button } from '@mui/material';
import { Visibility, Search, FilterList } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import billImage from "../app/public/bill.jpg";
import logoImage from "../app/public/assets/logo.png";

const firms = [
  {
    reg: '01',
    logo: billImage,
    name: 'Abstergo Ltd.',
    phone: '070 5472 6467',
    email: 'tanya.hill@example.com',
    address: '3890 Poplar Dr.',
    admin: 'Shane',
    plan: 'Premium',
    status: 'Active',
  },
  {
    reg: '02',
    logo: billImage,
    name: 'Big Kahuna Ltd.',
    phone: '070 4097 3393',
    email: 'sara.cruz@example.com',
    address: '7529 E. Pecan St.',
    admin: 'Cody',
    plan: 'Premium',
    status: 'Active',
  },
  {
    reg: '03',
    logo: billImage,
    name: 'Biffco Enter Ltd.',
    phone: '078 2181 5063',
    email: 'debbie.baker@example.com',
    address: '775 Rolling Green Rd.',
    admin: 'Colleen',
    plan: 'Premium',
    status: 'Inactive',
  },
  {
    reg: '04',
    logo: logoImage,
    name: 'Barone LLC.',
    phone: '077 4952 5383',
    email: 'dolores.chambers@example.com',
    address: '8080 Railroad St.',
    admin: 'Ronald',
    plan: 'Premium',
    status: 'Active',
  },
  {
    reg: '05',
    logo: billImage,
    name: 'Acme Co.',
    phone: '077 7170 3529',
    email: 'nathan.roberts@example.com',
    address: '3605 Parker Rd.',
    admin: 'Darrell',
    plan: 'Premium',
    status: 'Inactive',
  },
];

const FirmList = () => {
  const router = useRouter();
  const nextpg = () => {
    router.push("/companyFirm2");
  };

  return (
    <div className="pt-3">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl m-auto overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-2 md:mb-0">List Of Firms</h2>
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
                <th className="py-2 px-3 border-b ">Reg #</th>
                <th className="py-2 px-3 border-b">Logo</th>
                <th className="py-2 px-3 border-b">Firm Name</th>
                <th className="py-2 px-3 border-b ">Phone</th>
                <th className="py-2 px-3 border-b">Email</th>
                <th className="py-2 px-3 border-b">Address</th>
                <th className="py-2 px-3 border-b">Admin</th>
                <th className="py-2 px-3 border-b">Plan</th>
                <th className="py-2 px-3 border-b">Status</th>
                <th className="py-2 px-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {firms.map((firm, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 text-center border-b">{firm.reg}</td>
                  <td className="py-2 px-3 text-center border-b">
                    <Image src={firm.logo} alt={`${firm.name} logo`} width={30} height={30} className="mx-auto" />
                  </td>
                  <td className="py-2 px-3 border-b text-center">{firm.name}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.phone}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.email}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.address}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.admin}</td>
                  <td className="py-2 px-3 border-b text-center">{firm.plan}</td>
                  <td className={`py-2 px-3 border-b text-center ${firm.status === 'Active' ? 'text-blue-500' : 'text-red-500'}`}>{firm.status}</td>
                  <td className="py-2 px-3 text-center border-b">
                    <IconButton>
                      <Visibility />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Previous
          </button>
          <button onClick={nextpg} className="text-black border px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirmList;
