"use client"
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaSearch, FaFilter, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import darrellImage from '../app/public/dp.jpg'
import arleneImage from '../app/public/bill.jpg'
import ralphImage from '../app/public/dp.jpg'
import cameronImage from '../app/public/bill.jpg'
import kathrynImage from '../app/public/bill.jpg'
import { useRouter } from 'next/navigation'

const clients = [
  {
    id: 1,
    name: 'Darrell Steward',
    contact: 'john@example.com',
    address: '3890 Poplar Dr.',
    plan: 'VAT Returns',
    status: 'active',
    image: darrellImage,
  },
  {
    id: 2,
    name: 'Arlene McCoy',
    contact: 'arlene@example.com',
    address: '2470 Apple St.',
    plan: 'Payroll Management',
    status: 'active',
    image: arleneImage,
  },
  {
    id: 3,
    name: 'Ralph Edwards',
    contact: 'ralph@example.com',
    address: '3785 Pine St.',
    plan: 'Tax Returns',
    status: 'active',
    image: ralphImage,
  },
  {
    id: 4,
    name: 'Cameron Williamson',
    contact: 'cameron@example.com',
    address: '452 Maple Ave.',
    plan: 'Financial Consulting',
    status: 'active',
    image: cameronImage,
  },
  {
    id: 5,
    name: 'Kathryn Murphy',
    contact: 'kathryn@example.com',
    address: '823 Birch St.',
    plan: 'Budget Planning',
    status: 'active',
    image: kathrynImage,
  },
]

const ClientTable = () => {
  const router=useRouter()
  const nextpg=()=>{
    router.push("/clientDetail")
  }
  return (
    <div className='mt-10'>
      <div className='bg-white p-5 shadow-xl rounded-xl'>
        <div className='flex justify-between mb-4'>
          <p className='text-xl font-bold'>My Clients</p>
          <div className='flex space-x-2'>
            <button className='border px-4 py-2 rounded flex items-center'>
              <FaSearch className='mr-2' />
              Search
            </button>
            <button className='border px-4 py-2 rounded flex items-center'>
              <FaFilter className='mr-2' />
              Filter
            </button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr className='border-b'>
                <th className='py-3 px-4 text-left text-gray-600'>#</th>
                <th className='py-3 px-4 text-left text-gray-600'>Client Name</th>
                <th className='py-3 px-4 text-left text-gray-600'>Contact info</th>
                <th className='py-3 px-4 text-left text-gray-600'>Address</th>
                <th className='py-3 px-4 text-left text-gray-600'>Plan</th>
                <th className='py-3 px-4 text-left text-gray-600'>Plan Status</th>
                <th className='py-3 px-4 text-right text-gray-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className='border-b'>
                  <td className='py-3 px-3 text-left text-gray-600'>{client.id}</td>
                  <td className='py-3 px-3 text-left text-gray-600 flex items-center'>
                    <Image src={client.image} alt={client.name} width={32} height={32} className='rounded-full mr-2' />
                    {client.name}
                  </td>
                  <td className='py-3 px-3 text-left text-gray-600'>{client.contact}</td>
                  <td className='py-3 px-3 text-left text-gray-600'>{client.address}</td>
                  <td className='py-3 px-3 text-left text-gray-600'>{client.plan}</td>
                  <td className='py-3 px-3 text-left text-gray-600'>
                    <span className='bg-blue-200 px-2 py-1 rounded-full'>active</span>
                  </td>
                  <td className='py-3 px-3 text-right'>
                    <button className='mx-1 bg-blue-200 rounded-full p-1 text-white'>
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button className='mx-1 px-5 py-2 border rounded flex items-center'>
            <FaArrowLeft className='mr-1' />
            Previous
          </button>
          <button className='mx-1 px-5 py-2 border rounded flex items-center' onClick={nextpg}>
            Next
            <FaArrowRight className='ml-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientTable
