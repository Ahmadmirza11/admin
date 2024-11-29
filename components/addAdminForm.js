"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const AddAdmin = () => {
  const router=useRouter()
  const FirmDetails=()=>{
    router.push("/firmDetail")
  }
  return (
    <div className=" p-2 flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Add Admin</h2>
          {/* uploader */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Profile image</label>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-md text-center text-gray-400 cursor-pointer">
              <MdOutlineCloudUpload className="h-5 w-5 mx-auto mb-2" />
              <p>Click to replace or drag and drop SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
            </div>
          </div>
          {/* contact */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Contact</label>
            <input
              type="number"
              placeholder="Enter here"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <input
              type="text"
              placeholder="Enter here"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        {/* div 2 */}
        <div className="md:w-1/2 md:pl-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">First Name</label>
            <input
              type="text"
              placeholder="Enter here"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* last name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Enter here"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter here"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
          onClick={FirmDetails}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
