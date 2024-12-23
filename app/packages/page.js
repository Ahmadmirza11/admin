"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pic from "../public/cup.png";
import { TiTick } from "react-icons/ti";
import axios from "axios";
import CreatePackage from "@/components/createPackage";
import EditPackageModal from "@/components/EditPackageModal";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("https://accountingsaas.onrender.com/api/package/all");
      setPackages(response.data.packages.slice(0, 3));
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handlePackageCreated = () => {
    fetchPackages();
  };

  const handleEditClick = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedPackage) => {
    if (!token) {
      toast.error("No authentication token found. Please log in.");
      return;
    }
    try {
      const response = await axios.put(
        `https://accountingsaas.onrender.com/api/package/edit/${updatedPackage._id}`,
        updatedPackage,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        fetchPackages();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating package:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-7">
      <div className="bg-white w-full rounded-xl p-6 ">
        <div>
          <h1 className="font-bold text-2xl mb-2">Present Packages</h1>
          <p className="text-gray-500">
            Using basic skills you can improve your business stuff with Around
          </p>
        </div>
        <div className="flex justify-between items-center space-x-4 mt-4">
          {packages.length > 0 ? (
            packages.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-7 w-1/3 h-96 overflow-y-auto hide-scrollbar pb-4"
              >
                <div className="flex space-x-1 justify-center items-center mb-4">
                  <Image
                    src={pic}
                    alt="logo"
                    className="text-blue-400 w-12 h-12 bg-blue-500 rounded-lg p-1"
                  />
                  <p className="text-xl font-bold text-center">{item.name}</p>
                </div>
                <p className="text-2xl text-gray-500 mt-4 text-center">
                  ${item.amount}
                </p>
                <p className="text-center p-1 text-gray-500 overflow-hidden text-ellipsis">
                  {item.tags}
                </p>
                <div className="mt-3">
                  {item.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 border-b mb-4"
                    >
                      <TiTick size={20} className="text-blue-400" />
                      <p className="text-gray-500">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => handleEditClick(item)}
                    className="bg-blue-500 text-white rounded-lg px-4 py-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No packages available.</p>
          )}
        </div>
      </div>
      <CreatePackage onPackageCreated={handlePackageCreated} />
      <EditPackageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        packageData={selectedPackage}
      />
    </div>
  );
};

export default Packages;
