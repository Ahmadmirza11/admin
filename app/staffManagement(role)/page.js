import RoleAndPermissionList from '@/components/roleAndPermissionList'
import React from 'react'

const staffManagement = () => {
  return (
    <div>
           <div>
      <div className='w-full bg-white p-3 rounded-lg shadow-lg mt-3'>
        <div className='flex justify-between items-center p-1'>
          <div className='space-y-2'>
            <h4 className='text-2xl font-bold'>Role and Permission</h4>
            <p className='text-gray-600'>you can assign new role and manage them</p>
          </div>
          <button className='bg-white border text-black px-7 py-1 rounded-lg' >
            <p>+ <span>Create New Role</span></p>
          </button>
        </div>
      </div>
      
      <RoleAndPermissionList/>
    </div>
    </div>
  )
}

export default staffManagement