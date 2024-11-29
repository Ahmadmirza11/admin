import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faArrowLeft, faArrowRight, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

const ListFaqs = () => {
  return (
    <div className='mt-10'>
      <div className='bg-white p-5 shadow-xl rounded-xl'>
        <div className='flex justify-between mb-4'>
          <p className='text-xl font-bold'>List Faqs</p>
          <div className='flex space-x-2'>
            <button className='border px-4 py-2 rounded flex items-center'>
              <FontAwesomeIcon icon={faSearch} className='mr-2' />
              Search
            </button>
            <button className='border px-4 py-2 rounded flex items-center'>
              <FontAwesomeIcon icon={faFilter} className='mr-2' />
              Filter
            </button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr className='border-b'>
                <th className='py-3 px-4 text-left text-gray-600'>#</th>
                <th className='py-3 px-4 text-left text-gray-600'>Description</th>
                <th className='py-3 px-4 text-left text-gray-600'>Title</th>
                <th className='py-3 px-4 text-right text-gray-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-3 px-3 text-left text-gray-600'>01</td>
                <td className='py-3 px-3 text-left text-gray-600'>Manage Your Reports And Analytics</td>
                <td className='py-3 px-3 text-left text-gray-600'>All In One Accounting Solutions</td>
                <td className='py-3 px-3 text-right'>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-3 text-left text-gray-600'>02</td>
                <td className='py-3 px-3 text-left text-gray-600'>Easily Customizable & Manage Your Team</td>
                <td className='py-3 px-3 text-left text-gray-600'>All In One Accounting Solutions</td>
                <td className='py-3 px-3 text-right'>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-3 text-left text-gray-600'>03</td>
                <td className='py-3 px-3 text-left text-gray-600'>Our Sponsors</td>
                <td className='py-3 px-3 text-left text-gray-600'>All In One Accounting Solutions</td>
                <td className='py-3 px-3 text-right'>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className='py-3 px-3 text-left text-gray-600'>04</td>
                <td className='py-3 px-3 text-left text-gray-600'>We are Making Accounting Easy For Everyone</td>
                <td className='py-3 px-3 text-left text-gray-600'>All In One Accounting Solutions</td>
                <td className='py-3 px-3 text-right'>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='mx-1  bg-blue-300 rounded-full p-1 text-white'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className='flex justify-between items-center mt-4'>
          <button className='mx-1 px-5 py-2 border rounded flex items-center'>
            <FontAwesomeIcon icon={faArrowLeft} className='mr-1' />
            Previous
          </button>
          <button className='mx-1 px-5 py-2 border rounded flex items-center'>
            Next
            <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListFaqs
