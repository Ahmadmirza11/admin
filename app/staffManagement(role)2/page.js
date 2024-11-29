"use client"
import React, { useState } from 'react';

const StaffManagement2 = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [id]: checked,
    });
  };

  // Array of specific names for the checkboxes
  const checkboxNames = [
    'Role List', 'Role Create', 'Role Edit', 'Role Delete', 'Language List', 
    'Language Create', 'Language Edit', 'Language Delete', 'Firm List', 'Firm Create',
    'Firm Edit', 'Firm Delete', 'Package List', 'Package Create', 'Package Edit',
    'Package Delete', 'Addons List', 'Addons Create', 'Addons Edit', 'Addons Delete',
    'System-Setting-Manage', 'Form-Setting-Create', 'Email-Setting-Create', 'Privacy Policy', 'Contact Us',
    'About Us', 'Terms and Conditions', 'Update Admin Profile', 'App-Setting', 'Subscription View',
    'Staff Create', 'Staff List'
  ];

  return (
    <div className="bg-white p-5 min-h-screen relative rounded-xl shadow-2xl">
      <p className="text-2xl font-bold">Create New Role</p>
      {/* input */}
      <form className="mt-10">
        <label className="font-bold mb-2 block text-sm">Name</label>
        <input placeholder="Enter Here" type="text" className="border border-gray-500 p-2 rounded-md w-96 text-sm" />
      </form>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {checkboxNames.map((name, index) => (
          <div className="flex items-center space-x-2 text-sm" key={index}>
            <input
              type="checkbox"
              id={name}
              className="hidden"
              checked={!!checkedItems[name]}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor={name}
              className={`w-4 h-4 rounded border-2 ${checkedItems[name] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
            >
              {checkedItems[name] && <span>✔</span>}
            </label>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <button
        className="absolute right-5 bottom-20 bg-blue-500 text-white py-2 px-28 rounded"
        onClick={() => alert('Button Clicked!')}
      >
        Done
      </button>
    </div>
  );
};

export default StaffManagement2;
